import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date') || ''; // 'YYYY-MM-DD'

  if (!date) {
    return NextResponse.json({ error: 'date is required' }, { status: 400 });
  }

  // Working hours: 10:00 AM to 6:00 PM (1-hour windows)
  const START_MINS = 10 * 60; // 10:00 AM
  const END_MINS   = 17 * 60; // 5:00 PM (1-hour window ends at 6:00 PM)
  const INTERVAL   = 60;      // 1 hour window

  // Calculate current IST date and time
  const now = new Date();
  const todayIST = now.toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(now);
  const nowHour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10);
  const nowMin  = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
  const nowTotalMins = nowHour * 60 + nowMin;

  // Check if selected date is Sunday (Sundays are non-working days)
  const [y, m, d] = date.split('-').map(Number);
  const dayOfWeek = new Date(y, (m || 1) - 1, d || 1).getDay();
  const isSunday = dayOfWeek === 0;

  if (isSunday) {
    return NextResponse.json({
      slots: [],
      isSunday: true,
      message: 'Sundays are non-working days. Please select a Monday – Saturday date.',
    });
  }

  // Appointments can be booked up to 2 weeks in advance
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 14);
  const maxDateIST = maxDate.toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });

  if (date > maxDateIST) {
    return NextResponse.json({
      slots: [],
      isBeyondWindow: true,
      message: 'Appointments can only be booked up to 2 weeks in advance.',
    });
  }

  const slots: { time: string; label: string; available: boolean }[] = [];

  for (let currentMins = START_MINS; currentMins <= END_MINS; currentMins += INTERVAL) {
    const startH = Math.floor(currentMins / 60);
    const endH = startH + 1;
    const pad = (n: number) => String(n).padStart(2, '0');
    const time24 = `${pad(startH)}:00`;

    const startPeriod = startH < 12 ? 'AM' : 'PM';
    const displayStartH = startH === 0 ? 12 : startH > 12 ? startH - 12 : startH;

    const endPeriod = endH < 12 ? 'AM' : 'PM';
    const displayEndH = endH === 0 ? 12 : endH > 12 ? endH - 12 : endH;

    const label = `${displayStartH}:00 ${startPeriod} – ${displayEndH}:00 ${endPeriod}`;

    // Skip past slots (past date or slot time on today has passed)
    const isPast = (date < todayIST) || (date === todayIST && currentMins <= nowTotalMins);
    if (isPast) {
      continue;
    }

    slots.push({ time: time24, label, available: true });
  }

  return NextResponse.json({ slots, isSunday: false });
}
