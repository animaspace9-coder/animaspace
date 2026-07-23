# 📅 Google Calendar & Google Meet Live Integration Setup Guide

This guide explains step-by-step how to connect the **Anima Space** frontend scheduler to live Google Calendar & Google Meet for automated online & in-clinic appointment management.

---

## 🚀 Option 1: Direct Google Calendar API Integration (Recommended for Custom Branding)

With this setup, when a parent selects a slot on your website:
1. Next.js queries Google Calendar API to ensure Prashanthi is not busy.
2. It creates the event on Prashanthi's primary Google Calendar.
3. For **Online Video Calls**, it automatically generates a unique Google Meet link (`meet.google.com/xxx-yyyy-zzz`).
4. For **In-Clinic Visits**, it sets the location to the Jubilee Hills clinic and emails physical pass directions.

### Step 1: Create a Google Cloud Project & Enable Calendar API
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Click **Select a Project** > **New Project** and name it `Anima Space Booking`.
3. In the left sidebar, go to **APIs & Services** > **Library**.
4. Search for **Google Calendar API** and click **Enable**.

### Step 2: Create a Service Account Key
1. Go to **APIs & Services** > **Credentials**.
2. Click **+ Create Credentials** > **Service Account**.
3. Name it `animaspace-calendar-bot` and click **Create and Continue**.
4. Under **Grant this service account access to project**, select role **Editor** or **Owner**, then click **Done**.
5. Click on the newly created service account email (e.g. `animaspace-calendar-bot@animaspace-booking.iam.gserviceaccount.com`).
6. Go to the **Keys** tab > **Add Key** > **Create New Key** > Select **JSON** > Click **Create**.
7. Download the JSON key file to a safe location.

### Step 3: Share Prashanthi's Google Calendar with the Service Account
1. Open [Google Calendar](https://calendar.google.com/).
2. Under **My Calendars**, hover over Prashanthi Simon's calendar, click the three dots `⋮` > **Settings and sharing**.
3. Scroll to **Share with specific people or groups** > Click **+ Add people and groups**.
4. Paste the Service Account email (`animaspace-calendar-bot@animaspace-booking.iam.gserviceaccount.com`).
5. Set Permission to: **Make changes to events**.
6. Copy the **Calendar ID** (under *Integrate calendar* section, e.g. `prashanthi@animaspace.com` or `c_xxx@group.calendar.google.com`).

### Step 4: Configure Environment Variables in `.env.local`
Create or update `.env.local` in your root directory (and add these to Vercel Project Settings):

```env
GOOGLE_CLIENT_EMAIL="animaspace-calendar-bot@animaspace-booking.iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYourPrivateKeyHere\n-----END PRIVATE KEY-----\n"
GOOGLE_CALENDAR_ID="prashanthi@animaspace.com"
```

### Step 5: Install Google APIs SDK & Add API Route
Run in terminal:
```bash
npm install googleapis
```

Create `/app/api/booking/route.ts`:
```ts
import { google } from "googleapis";
import { NextResponse } from "next/server";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({ version: "v3", auth });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, mode, parentName, email, startTime, endTime, notes } = body;

    const event = {
      summary: `[${mode === "online" ? "Online" : "Clinic"}] ${title} - ${parentName}`,
      description: `Parent: ${parentName}\nEmail: ${email}\nNotes: ${notes || "None"}`,
      start: { dateTime: startTime, timeZone: "Asia/Kolkata" },
      end: { dateTime: endTime, timeZone: "Asia/Kolkata" },
      attendees: [{ email }],
      location: mode === "online" ? "Google Meet" : "Anima Space Center, Jubilee Hills, Hyderabad",
      conferenceData: mode === "online" ? {
        createRequest: {
          requestId: `animaspace-${Date.now()}`,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      } : undefined,
    };

    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      requestBody: event,
      conferenceDataVersion: mode === "online" ? 1 : 0,
      sendUpdates: "all",
    });

    return NextResponse.json({ success: true, event: response.data });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
```

---

## ⚡ Option 2: Google Workspace Built-In Appointment Schedules (Zero Code Option)

If Prashanthi uses Google Workspace Business, Google has built-in appointment scheduling:

1. Open **Google Calendar** on Prashanthi's desktop browser.
2. Click **+ Create** > **Appointment Schedule**.
3. Set duration (50 mins), weekly recurring hours (e.g. Mon-Sat 9am-6pm).
4. Under **Location and conferencing**, select **Google Meet video conferencing** or specify **In-person location**.
5. Save and copy the booking page link.
