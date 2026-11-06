export interface SheetRowData {
  bookingId: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  mode: string;
  date: string;
  time: string;
  notes: string;
  createdAt: string;
}

/**
 * Appends a booking row to Google Sheets via a Google Apps Script web app.
 * The Apps Script URL is stored in GOOGLE_SHEETS_WEBHOOK_URL env var.
 *
 * Fails silently (logs warning) so email + booking confirmation are never blocked.
 */
export async function appendToGoogleSheet(data: SheetRowData): Promise<void> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl || webhookUrl.includes('your-google-apps-script')) {
    console.warn('[Google Sheets] GOOGLE_SHEETS_WEBHOOK_URL not configured — skipping sheet sync.');
    return;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        bookingId: data.bookingId,
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        mode: data.mode,
        date: data.date,
        time: data.time,
        notes: data.notes,
        createdAt: data.createdAt,
      }),
    });

    if (!response.ok) {
      console.warn(`[Google Sheets] Webhook returned ${response.status}: ${await response.text()}`);
    }
  } catch (error) {
    console.warn('[Google Sheets] Failed to sync booking:', error);
  }
}
