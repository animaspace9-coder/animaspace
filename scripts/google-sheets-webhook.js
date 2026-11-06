/**
 * Google Apps Script — Anima Space Booking Sheet Webhook
 * =====================================================
 * Deploy this as a Google Apps Script Web App attached to
 * your Google Sheet. Every POST request appends a new row.
 *
 * SETUP INSTRUCTIONS:
 * 1. Open https://sheets.google.com and create a new spreadsheet.
 *    Name it "Anima Space — Bookings"
 *
 * 2. In Row 1 (header row), add these column headers exactly:
 *    A1: Booking ID
 *    B1: Name
 *    C1: Email
 *    D1: Phone
 *    E1: Service
 *    F1: Mode
 *    G1: Date
 *    H1: Time
 *    I1: Notes
 *    J1: Submitted At
 *
 * 3. Go to Extensions → Apps Script
 *
 * 4. Delete the default code and paste this entire file's contents.
 *
 * 5. Click Deploy → New Deployment:
 *    - Type: Web app
 *    - Description: "Anima Space Booking Webhook"
 *    - Execute as: Me (your Google account)
 *    - Who has access: Anyone
 *    - Click Deploy
 *
 * 6. Copy the Web App URL (looks like:
 *    https://script.google.com/macros/s/AKfyc.../exec )
 *
 * 7. Add it to your .env.local:
 *    GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfyc.../exec
 *
 * That's it! Every booking will now auto-append to this sheet.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.bookingId   || '',
      data.name        || '',
      data.email       || '',
      data.phone       || '',
      data.service     || '',
      data.mode        || '',
      data.date        || '',
      data.time        || '',
      data.notes       || '',
      data.createdAt   || new Date().toISOString(),
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Required for GET requests (Apps Script health check)
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', service: 'Anima Space Booking Webhook' }))
    .setMimeType(ContentService.MimeType.JSON);
}
