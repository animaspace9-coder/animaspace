/**
 * Anima Space — Google Apps Script Webhook
 * =====================================================
 * Deploy this as a Google Apps Script Web App attached to
 * your Google Sheet ("Anima Space — Bookings").
 *
 * It automatically:
 * 1. Appends full customer booking details to your Google Sheet
 * 2. Triggers an instant GMAIL PUSH NOTIFICATION to animaspace9@gmail.com
 * 3. Triggers a GOOGLE CALENDAR PUSH NOTIFICATION on the team's calendar
 * 4. Dispatches an instant confirmation email to the customer
 *
 * ZERO PASSWORDS NEEDED: Runs natively under animaspace9@gmail.com
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // 1. Record customer row in Google Sheet
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

    var isOnline = (data.mode || '').toLowerCase().indexOf('online') !== -1;
    var locationText = isOnline 
      ? 'Google Meet Video Call (https://meet.google.com/new)' 
      : 'Anima Space Clinic, Hyderabad';

    // 2. Google Calendar Event (Triggers Calendar Notification on Phone)
    try {
      var cal = CalendarApp.getDefaultCalendar();
      var eventTitle = 'Consultation: ' + data.name + ' (' + data.service + ')';
      var eventDescription = 'Client Name: ' + data.name + '\n' +
        'Phone: ' + data.phone + '\n' +
        'Email: ' + data.email + '\n' +
        'Service: ' + data.service + '\n' +
        'Mode: ' + data.mode + '\n' +
        'Booking ID: ' + data.bookingId + '\n' +
        'Notes: ' + (data.notes || 'None');

      var dateParts = (data.date || '').split('/');
      if (dateParts.length === 3) {
        var day = parseInt(dateParts[0], 10);
        var month = parseInt(dateParts[1], 10) - 1;
        var year = parseInt(dateParts[2], 10);
        
        var match = (data.time || '').match(/(\d+):(\d+)\s*(AM|PM)?/i);
        var hour = 10;
        var min = 0;
        if (match) {
          hour = parseInt(match[1], 10);
          min = parseInt(match[2], 10);
          var meridiem = (match[3] || '').toUpperCase();
          if (meridiem === 'PM' && hour < 12) hour += 12;
          if (meridiem === 'AM' && hour === 12) hour = 0;
        }

        var startTime = new Date(year, month, day, hour, min, 0);
        var endTime = new Date(startTime.getTime() + 60 * 60 * 1000);

        var event = cal.createEvent(eventTitle, startTime, endTime, {
          description: eventDescription,
          location: locationText,
          guests: data.email
        });
        event.addPopupReminder(30);
      }
    } catch (calErr) {
      Logger.log('Calendar error: ' + calErr.message);
    }

    // 3. Team Push Notification Email (Triggers Gmail App Push on Phone)
    var teamSubject = '📋 New Booking: ' + data.name + ' — ' + data.service + ' (' + data.date + ' at ' + data.time + ')';
    var teamBody = 
      'NEW CONSULTATION BOOKING RECEIVED\n' +
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
      'Client Name: ' + data.name + '\n' +
      'Phone: ' + data.phone + '\n' +
      'Email: ' + data.email + '\n' +
      'Service: ' + data.service + '\n' +
      'Mode: ' + data.mode + ' (' + (isOnline ? 'Online Google Meet' : 'In-Person Hyderabad Clinic') + ')\n' +
      'Date (IST): ' + data.date + '\n' +
      'Time (IST): ' + data.time + '\n' +
      'Booking ID: ' + data.bookingId + '\n\n' +
      'Client Notes / Concerns:\n' + (data.notes ? data.notes : 'None provided.') + '\n\n' +
      'Reply to Client on WhatsApp:\n' +
      'https://wa.me/' + (data.phone || '').replace(/[^0-9]/g, '') + '\n\n' +
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
      'Anima Space Booking System';

    MailApp.sendEmail({
      to: 'animaspace9@gmail.com',
      replyTo: data.email,
      subject: teamSubject,
      body: teamBody
    });

    // 4. Customer Confirmation Email
    if (data.email) {
      var clientSubject = '✓ Confirmed: Your Consultation with Prashanthi Simon on ' + data.date + ' (' + data.time + ' IST)';
      var clientBody = 
        'Dear ' + data.name + ',\n\n' +
        'Your consultation appointment with Prashanthi Simon at Anima Space has been scheduled.\n\n' +
        'SESSION DETAILS (Indian Standard Time):\n' +
        '• Date: ' + data.date + '\n' +
        '• Time: ' + data.time + ' (IST)\n' +
        '• Service: ' + data.service + '\n' +
        '• Mode: ' + (isOnline ? 'Online (Google Meet: https://meet.google.com/new)' : 'In-Person (Hyderabad Clinic)') + '\n' +
        '• Booking Reference: ' + data.bookingId + '\n\n' +
        'Need to reschedule or have questions?\n' +
        '• WhatsApp / Phone: +91 98664 10936\n' +
        '• Email: animaspace9@gmail.com\n\n' +
        'Warm regards,\nPrashanthi Simon\nAnima Space';

      MailApp.sendEmail({
        to: data.email,
        replyTo: 'animaspace9@gmail.com',
        subject: clientSubject,
        body: clientBody
      });
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', service: 'Anima Space Booking Webhook' }))
    .setMimeType(ContentService.MimeType.JSON);
}
