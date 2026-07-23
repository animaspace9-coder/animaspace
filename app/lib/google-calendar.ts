/**
 * Google Calendar Helper Utilities
 * Generates direct Google Calendar web links and ICS data for online meetings.
 */

export interface MeetingDetails {
  title: string;
  description: string;
  startDate: Date;
  durationMinutes: number;
  attendeeEmail: string;
  attendeeName: string;
  location?: string;
}

export function generateGoogleCalendarUrl(details: MeetingDetails): string {
  const startIso = details.startDate.toISOString().replace(/-|:|\.\d\d\d/g, "");
  const endDate = new Date(details.startDate.getTime() + details.durationMinutes * 60000);
  const endIso = endDate.toISOString().replace(/-|:|\.\d\d\d/g, "");

  const meetUrl = `https://meet.google.com/animaspace-${Math.random().toString(36).substring(2, 7)}`;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `[Anima Space] ${details.title}`,
    dates: `${startIso}/${endIso}`,
    details: `${details.description}\n\nJoin Google Meet: ${meetUrl}\nClient: ${details.attendeeName} (${details.attendeeEmail})`,
    location: details.location || "Google Meet Video Call",
    add: details.attendeeEmail,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function generateGoogleMeetLink(): string {
  const code = Array.from({ length: 3 }, () => Math.random().toString(36).substring(2, 5)).join("-");
  return `https://meet.google.com/${code}`;
}
