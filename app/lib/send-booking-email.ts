import nodemailer from 'nodemailer';

export interface BookingEmailData {
  name: string;
  email: string;
  phone: string;
  service: string;
  mode: string;       // "Online" | "Offline"
  date: string;       // DD/MM/YYYY or YYYY-MM-DD
  time: string;       // e.g. "10:00 AM – 11:00 AM" or "10:00"
  notes: string;
  bookingId: string;
}

// Helper to convert date and time strings into exact UTC Date for Indian Standard Time (IST / UTC+05:30)
export function parseIstToUtc(dateStr: string, timeStr: string): Date {
  let isoDate = dateStr;
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
    const [d, m, y] = dateStr.split('/');
    isoDate = `${y}-${m}-${d}`;
  }

  let hours = 10;
  let minutes = 0;
  const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)?/i);
  if (match) {
    hours = parseInt(match[1], 10);
    minutes = parseInt(match[2], 10);
    const meridiem = match[3]?.toUpperCase();
    if (meridiem === 'PM' && hours < 12) hours += 12;
    if (meridiem === 'AM' && hours === 12) hours = 0;
  }

  const pad = (n: number) => String(n).padStart(2, '0');
  const isoStr = `${isoDate}T${pad(hours)}:${pad(minutes)}:00+05:30`;
  const parsed = new Date(isoStr);
  return isNaN(parsed.getTime()) ? new Date() : parsed;
}

// Generate RFC 5545 compliant iCalendar (.ics) invite
export function generateIcsContent(data: BookingEmailData, startDate: Date, durationMinutes = 60): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  const formatUtc = (d: Date) =>
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;

  const dtStamp = formatUtc(new Date());
  const dtStart = formatUtc(startDate);
  const dtEnd = formatUtc(new Date(startDate.getTime() + durationMinutes * 60000));
  
  const isOnline = data.mode?.toLowerCase().includes('online');
  const location = isOnline
    ? 'Google Meet Video Call (Link: https://meet.google.com/new)'
    : 'Anima Space Clinic, Hyderabad (By Appointment)';

  const summary = `Anima Space: ${data.service} — Prashanthi Simon`;
  const description = `Consultation Appointment with Prashanthi Simon at Anima Space.\\n\\n` +
    `Service: ${data.service}\\n` +
    `Mode: ${isOnline ? 'Online (Google Meet)' : 'In-Person (Hyderabad Clinic)'}\\n` +
    `Date: ${data.date}\\n` +
    `Time: ${data.time} (Indian Standard Time / IST)\\n` +
    `Client: ${data.name}\\n` +
    `Phone: ${data.phone}\\n` +
    `Booking ID: ${data.bookingId}\\n\\n` +
    `Helpline / WhatsApp: +91 98664 10936\\n` +
    `Email: animaspace9@gmail.com`;

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Anima Space//Consultation Booking//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `UID:${data.bookingId}@animaspace.vercel.app`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    `ORGANIZER;CN=Anima Space:mailto:${process.env.GMAIL_USER || 'animaspace9@gmail.com'}`,
    `ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=ACCEPTED;CN=${data.name}:mailto:${data.email}`,
    'BEGIN:VALARM',
    'TRIGGER:-PT30M',
    'ACTION:DISPLAY',
    'DESCRIPTION:Reminder: Anima Space Consultation in 30 minutes',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

// Generate web Google Calendar 1-click URL
export function generateGCalWebUrl(data: BookingEmailData, startDate: Date, durationMinutes = 60): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  const formatUtc = (d: Date) =>
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;

  const startIso = formatUtc(startDate);
  const endIso = formatUtc(new Date(startDate.getTime() + durationMinutes * 60000));
  const isOnline = data.mode?.toLowerCase().includes('online');
  const location = isOnline ? 'Google Meet Video Call' : 'Anima Space Clinic, Hyderabad';

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${data.service} Consultation — Anima Space`,
    dates: `${startIso}/${endIso}`,
    details: `Consultation with Prashanthi Simon for ${data.name}.\nService: ${data.service}\nMode: ${data.mode}\nBooking ID: ${data.bookingId}\nContact: +91 98664 10936`,
    location,
    add: data.email,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export async function sendBookingNotification(data: BookingEmailData): Promise<void> {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass || pass.includes('your-16-char-app-password')) {
    console.warn('[Email] GMAIL_APP_PASSWORD not configured — skipping email dispatch.');
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });

  const isOnline = data.mode?.toLowerCase().includes('online');
  const modeDisplay = isOnline
    ? '🌐 Online Consultation (Google Meet)'
    : '📍 In-Person Consultation (Hyderabad Clinic)';

  const startDateUtc = parseIstToUtc(data.date, data.time);
  const icsContent = generateIcsContent(data, startDateUtc, 60);
  const gcalUrl = generateGCalWebUrl(data, startDateUtc, 60);

  // ── 1. Notification to Clinic / Prashanthi ─────────────────────────────────
  const clinicHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #F6F4EB; margin: 0; padding: 24px; color: #0A1C33; }
    .card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 20px; border: 2px solid #0A1C33; overflow: hidden; box-shadow: 0 4px 16px rgba(10,28,51,0.08); }
    .header { background: #0A1C33; color: #ffffff; padding: 28px 32px; text-align: center; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 700; }
    .header p { margin: 8px 0 0; font-size: 13px; opacity: 0.8; }
    .body { padding: 28px 32px; }
    .badge { display: inline-block; background: #C5E0F2; color: #0A1C33; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; padding: 4px 12px; border-radius: 20px; margin-bottom: 16px; }
    .row { display: flex; padding: 10px 0; border-bottom: 1px solid #f0ede6; }
    .row:last-child { border-bottom: none; }
    .label { width: 140px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: #A67D76; }
    .value { flex: 1; font-size: 14px; color: #0A1C33; font-weight: 500; }
    .notes-block { margin-top: 16px; padding: 14px 18px; background: #F6F4EB; border-radius: 12px; font-size: 13px; color: #3B2A1E; line-height: 1.5; border-left: 4px solid #A67D76; }
    .footer { padding: 20px 32px; text-align: center; font-size: 11px; color: #A67D76; border-top: 1px solid #f0ede6; }
    .cta { display: inline-block; margin-top: 16px; padding: 12px 28px; background: #25D366; color: #ffffff; text-decoration: none; border-radius: 24px; font-size: 13px; font-weight: 700; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>📋 New Consultation Booking</h1>
      <p>Booking ID: ${data.bookingId}</p>
    </div>
    <div class="body">
      <span class="badge">Session Details (IST)</span>
      <div class="row"><span class="label">Client Name</span><span class="value"><strong>${data.name}</strong></span></div>
      <div class="row"><span class="label">Email</span><span class="value"><a href="mailto:${data.email}" style="color:#0A1C33;">${data.email}</a></span></div>
      <div class="row"><span class="label">Phone / WhatsApp</span><span class="value"><a href="tel:${data.phone}" style="color:#0A1C33;">${data.phone}</a></span></div>
      <div class="row"><span class="label">Service</span><span class="value"><strong>${data.service}</strong></span></div>
      <div class="row"><span class="label">Mode</span><span class="value">${modeDisplay}</span></div>
      <div class="row"><span class="label">Date (IST)</span><span class="value"><strong>${data.date}</strong></span></div>
      <div class="row"><span class="label">Time (IST)</span><span class="value"><strong>${data.time}</strong></span></div>
      ${data.notes ? `<div class="notes-block"><strong>Client Notes:</strong><br/>${data.notes}</div>` : ''}
      <div style="text-align:center; margin-top: 24px;">
        <a class="cta" href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${data.name}, this is Prashanthi Simon from Anima Space confirming your consultation scheduled for ${data.date} at ${data.time}.`)}">
          💬 Reply to Client on WhatsApp →
        </a>
      </div>
    </div>
    <div class="footer">
      Anima Space · animaspace9@gmail.com · +91 98664 10936
    </div>
  </div>
</body>
</html>
  `.trim();

  // ── 2. Confirmation to Client ──────────────────────────────────────────────
  const clientHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #F6F4EB; margin: 0; padding: 24px; color: #0A1C33; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 20px; border: 2px solid #0A1C33; overflow: hidden; box-shadow: 0 4px 20px rgba(10,28,51,0.08); }
    .header { background: #0A1C33; color: #ffffff; padding: 32px 36px; text-align: center; }
    .header .logo { font-size: 24px; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 6px; }
    .header .tagline { font-size: 13px; opacity: 0.85; margin: 0; }
    .status-banner { background: #E9F6ED; border-bottom: 1px solid #cbe9d2; padding: 14px 36px; text-align: center; font-size: 13px; font-weight: 700; color: #1E6B37; }
    .body { padding: 32px 36px; }
    .greeting { font-size: 18px; font-weight: 700; color: #0A1C33; margin-bottom: 12px; }
    .intro { font-size: 14px; line-height: 1.6; color: #3B2A1E; margin-bottom: 24px; }
    .details-box { background: #FAF9F5; border: 2px solid #0A1C33; border-radius: 16px; padding: 20px 24px; margin-bottom: 24px; }
    .details-title { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #A67D76; margin-bottom: 14px; }
    .detail-row { display: flex; padding: 8px 0; border-bottom: 1px solid #ede9df; font-size: 14px; }
    .detail-row:last-child { border-bottom: none; }
    .detail-label { width: 140px; font-weight: 700; color: #0A1C33; }
    .detail-val { flex: 1; color: #0A1C33; }
    .action-box { text-align: center; margin: 28px 0; padding: 20px; background: #C5E0F2; border-radius: 16px; }
    .action-box p { margin: 0 0 14px 0; font-size: 13px; font-weight: 600; color: #0A1C33; }
    .btn-cal { display: inline-block; padding: 12px 24px; background: #0A1C33; color: #ffffff !important; text-decoration: none; border-radius: 24px; font-size: 13px; font-weight: 700; margin: 4px; }
    .btn-meet { display: inline-block; padding: 12px 24px; background: #1a73e8; color: #ffffff !important; text-decoration: none; border-radius: 24px; font-size: 13px; font-weight: 700; margin: 4px; }
    .support-block { padding: 18px 22px; background: #F6F4EB; border-radius: 12px; font-size: 13px; color: #3B2A1E; line-height: 1.6; margin-bottom: 24px; }
    .footer { padding: 24px 36px; text-align: center; font-size: 11px; color: #A67D76; border-top: 1px solid #f0ede6; line-height: 1.5; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="logo">Anima Space</div>
      <p class="tagline">Psychological Consulting &amp; Counselling Centre</p>
    </div>
    <div class="status-banner">
      ✓ Consultation Appointment Confirmed
    </div>
    <div class="body">
      <div class="greeting">Dear ${data.name},</div>
      <div class="intro">
        Thank you for reaching out to Anima Space. Your consultation request with <strong>Prashanthi Simon</strong> has been confirmed. Below are your scheduled session details:
      </div>

      <div class="details-box">
        <div class="details-title">Session Details (Indian Standard Time)</div>
        <div class="detail-row">
          <span class="detail-label">🗓️ Date</span>
          <span class="detail-val"><strong>${data.date}</strong></span>
        </div>
        <div class="detail-row">
          <span class="detail-label">🕒 Time</span>
          <span class="detail-val"><strong>${data.time} (IST)</strong></span>
        </div>
        <div class="detail-row">
          <span class="detail-label">📋 Service</span>
          <span class="detail-val"><strong>${data.service}</strong></span>
        </div>
        <div class="detail-row">
          <span class="detail-label">🌐 Mode</span>
          <span class="detail-val"><strong>${modeDisplay}</strong></span>
        </div>
        <div class="detail-row">
          <span class="detail-label">🆔 Reference ID</span>
          <span class="detail-val">${data.bookingId}</span>
        </div>
      </div>

      <div class="action-box">
        <p>Save this appointment to your calendar so you receive automatic reminders:</p>
        <a class="btn-cal" href="${gcalUrl}" target="_blank">
          📅 Add to Google Calendar →
        </a>
        ${isOnline ? `
        <div style="margin-top: 12px;">
          <a class="btn-meet" href="https://meet.google.com/new" target="_blank">
            📹 Open Google Meet Video Room →
          </a>
        </div>
        ` : ''}
      </div>

      <div class="support-block">
        <strong>Need to reschedule or have questions?</strong><br/>
        We understand schedules change. If you need to make changes or have questions prior to your session, you can connect with us directly:<br/>
        • <strong>WhatsApp:</strong> <a href="https://wa.me/919866410936" style="color: #0A1C33; font-weight: 700;">+91 98664 10936</a><br/>
        • <strong>Email:</strong> <a href="mailto:animaspace9@gmail.com" style="color: #0A1C33; font-weight: 700;">animaspace9@gmail.com</a>
      </div>

      <p style="font-size: 12px; color: #7B6B63; margin: 0; line-height: 1.5;">
        <em>Confidentiality Notice: All sessions at Anima Space are completely private, confidential, and conducted in a compassionate, non-judgemental environment.</em>
      </p>
    </div>
    <div class="footer">
      Anima Space · Well-being, Psychological Consulting &amp; Counselling Centre<br/>
      Hyderabad, India · <a href="https://animaspace.vercel.app" style="color:#A67D76;">animaspace.vercel.app</a>
    </div>
  </div>
</body>
</html>
  `.trim();

  // Send Clinic Email
  const clinicPromise = transporter.sendMail({
    from: `"Anima Space Bookings" <${user}>`,
    to: user,
    replyTo: data.email,
    subject: `📋 New Booking: ${data.name} — ${data.service} (${data.date} at ${data.time})`,
    html: clinicHtml,
  });

  // Send Client Confirmation Email with interactive calendar invite (.ics)
  const clientPromise = transporter.sendMail({
    from: `"Anima Space" <${user}>`,
    to: data.email,
    replyTo: user,
    subject: `✓ Confirmed: Your Consultation with Prashanthi Simon on ${data.date} (${data.time} IST)`,
    html: clientHtml,
    icalEvent: {
      filename: `anima-space-${data.bookingId}.ics`,
      method: 'REQUEST',
      content: icsContent,
    },
  });

  await Promise.allSettled([clinicPromise, clientPromise]);
}
