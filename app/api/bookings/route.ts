import { NextResponse } from 'next/server';
import { sendBookingNotification } from '@/app/lib/send-booking-email';
import { appendToGoogleSheet } from '@/app/lib/sync-google-sheet';

// Format ISO date (YYYY-MM-DD) to DD/MM/YYYY for Indian display
function formatDateDDMMYYYY(isoDateStr: string): string {
  if (!isoDateStr) return '';
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(isoDateStr)) return isoDateStr;
  const parts = isoDateStr.split('-');
  if (parts.length === 3) {
    const [y, m, d] = parts;
    return `${d}/${m}/${y}`;
  }
  return isoDateStr;
}

// Normalize date input to YYYY-MM-DD
function normalizeToIsoDate(dateStr: string): string {
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return dateStr;
  }
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
    const [d, m, y] = dateStr.split('/');
    return `${y}-${m}-${d}`;
  }
  return dateStr;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, mode, date, time, notes, startAt } = body;

    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { success: false, error: 'Please provide all required fields (name, email, date, time).' },
        { status: 400 }
      );
    }

    const isoDate = normalizeToIsoDate(String(date).trim());
    if (!/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) {
      return NextResponse.json(
        { success: false, error: 'Invalid date format. Please select a valid date from the calendar.' },
        { status: 400 }
      );
    }

    // ── Current Indian Standard Time (IST) ───────────────────────────────────
    const now = new Date();
    const todayIST = now.toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });

    // 1. Disallow past dates
    if (isoDate < todayIST) {
      return NextResponse.json(
        { success: false, error: 'Cannot book appointments for past dates. Please select an upcoming date.' },
        { status: 400 }
      );
    }

    // 2. Disallow Sundays (clinic closed)
    const [y, m, d] = isoDate.split('-').map(Number);
    const dayOfWeek = new Date(y, (m || 1) - 1, d || 1).getDay();
    if (dayOfWeek === 0) {
      return NextResponse.json(
        { success: false, error: 'Anima Space is closed on Sundays. Please select a Monday – Saturday date.' },
        { status: 400 }
      );
    }

    // 3. Disallow dates beyond 14 days
    const maxDate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);
    const maxDateIST = maxDate.toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
    if (isoDate > maxDateIST) {
      return NextResponse.json(
        { success: false, error: 'Appointments can only be booked up to 14 days in advance. Please select a date within the next 2 weeks.' },
        { status: 400 }
      );
    }

    // 4. Parse time slot hours & minutes
    let slotHours = 10;
    let slotMinutes = 0;
    const timeMatch = String(time).match(/(\d+):(\d+)\s*(AM|PM)?/i);
    if (timeMatch) {
      slotHours = parseInt(timeMatch[1], 10);
      slotMinutes = parseInt(timeMatch[2], 10);
      const meridiem = timeMatch[3]?.toUpperCase();
      if (meridiem === 'PM' && slotHours < 12) slotHours += 12;
      if (meridiem === 'AM' && slotHours === 12) slotHours = 0;
    }

    // 5. If booking for today, disallow slots that have already passed in IST
    if (isoDate === todayIST) {
      const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      }).formatToParts(now);
      const curHour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10);
      const curMin = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
      const currentMinsIST = curHour * 60 + curMin;
      const slotMinsIST = slotHours * 60 + slotMinutes;

      if (slotMinsIST <= currentMinsIST) {
        return NextResponse.json(
          { success: false, error: 'This time slot has already passed today in Indian Standard Time (IST). Please select an upcoming slot.' },
          { status: 400 }
        );
      }
    }

    // 6. Calculate exact start timestamp in IST (+05:30) and perform final timestamp sanity check
    const appointmentStartAt = startAt ||
      `${isoDate}T${String(slotHours).padStart(2, '0')}:${String(slotMinutes).padStart(2, '0')}:00+05:30`;
    const startTimeMs = new Date(appointmentStartAt).getTime();

    if (isNaN(startTimeMs) || startTimeMs <= Date.now()) {
      return NextResponse.json(
        { success: false, error: 'Cannot book appointments in the past. Please select an upcoming slot.' },
        { status: 400 }
      );
    }

    // ── Build booking record ─────────────────────────────────────────────────
    const bookingId = `book_${Date.now()}`;
    const createdAt = new Date().toISOString();
    const formattedDate = formatDateDDMMYYYY(isoDate);

    const bookingRecord = {
      id: bookingId,
      name,
      email,
      phone: phone || '',
      service: service || 'General Consultation',
      mode: mode || 'Online',
      date: formattedDate,
      time,
      startAt: appointmentStartAt,
      notes: notes || '',
      createdAt,
    };

    // ── Dispatch notifications in parallel ───────────────────────────────────
    const emailPromise = sendBookingNotification({
      bookingId,
      name,
      email,
      phone: phone || '',
      service: service || 'General Consultation',
      mode: mode || 'Online',
      date: formattedDate,
      time,
      notes: notes || '',
    }).catch((err) => {
      console.error('[Email] Failed to send booking notification:', err);
    });

    const sheetPromise = appendToGoogleSheet({
      bookingId,
      name,
      email,
      phone: phone || '',
      service: service || 'General Consultation',
      mode: mode || 'Online',
      date: formattedDate,
      time,
      notes: notes || '',
      createdAt,
    }).catch((err) => {
      console.error('[Sheets] Failed to sync to Google Sheets:', err);
    });

    // Wait for dispatches to conclude
    await Promise.allSettled([emailPromise, sheetPromise]);

    return NextResponse.json({
      success: true,
      message: 'Consultation appointment scheduled successfully. A confirmation email with calendar invite has been sent to your inbox.',
      booking: bookingRecord,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Invalid request payload.' },
      { status: 500 }
    );
  }
}
