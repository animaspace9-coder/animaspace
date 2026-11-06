import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { sendBookingNotification } from '../app/lib/send-booking-email';

async function main() {
  const targetEmail = process.argv[2] || process.env.GMAIL_USER || 'animaspace9@gmail.com';
  console.log(`\nTesting email dispatch with:`);
  console.log(`GMAIL_USER: ${process.env.GMAIL_USER || '(not set)'}`);
  console.log(`GMAIL_APP_PASSWORD: ${process.env.GMAIL_APP_PASSWORD ? (process.env.GMAIL_APP_PASSWORD.includes('your-16') ? '❌ Still placeholder!' : '✅ Configured') : '❌ (not set)'}`);
  console.log(`Target recipient for test: ${targetEmail}\n`);

  if (!process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_APP_PASSWORD.includes('your-16-char-app-password')) {
    console.error('❌ Cannot send: GMAIL_APP_PASSWORD in .env.local is currently the placeholder value.');
    console.error('To enable real emails, follow the 2-minute setup steps below.');
    process.exit(1);
  }

  console.log(`Sending test booking confirmation to ${targetEmail}...`);
  await sendBookingNotification({
    bookingId: `test_${Date.now()}`,
    name: "Test Client",
    email: targetEmail,
    phone: "+91 98664 10936",
    service: "Child & Adolescent Counselling",
    mode: "Online",
    date: "08/11/2026",
    time: "11:00 AM – 12:00 PM",
    notes: "This is a test email to verify Nodemailer and Google Calendar invite delivery.",
  });

  console.log(`✅ Test email successfully dispatched to ${targetEmail} and ${process.env.GMAIL_USER}! Check your inbox.`);
}

main().catch((err) => {
  console.error("❌ Email dispatch failed:", err);
  process.exit(1);
});
