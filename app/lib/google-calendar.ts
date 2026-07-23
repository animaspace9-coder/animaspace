/**
 * Google Calendar Helper Utilities
 * Generates direct Google Calendar web links for valid Google Meet & In-Clinic appointments.
 */

export interface MeetingDetails {
  title: string;
  description: string;
  startDate: Date;
  durationMinutes: number;
  attendeeEmail: string;
  attendeeName: string;
  location?: string;
  isOnline?: boolean;
}

export function generateGoogleCalendarUrl(details: MeetingDetails): string {
  // Format YYYYMMDDTHHmmssZ in UTC
  const formatUtc = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, "");
  
  const startIso = formatUtc(details.startDate);
  const endDate = new Date(details.startDate.getTime() + details.durationMinutes * 60000);
  const endIso = formatUtc(endDate);

  const locationText = details.isOnline 
    ? "Google Meet Video Call" 
    : (details.location || "Anima Space Child Psychology Center, Jubilee Hills, Hyderabad");

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: details.title,
    dates: `${startIso}/${endIso}`,
    details: `${details.description}\n\nClient Name: ${details.attendeeName}\nClient Email: ${details.attendeeEmail}`,
    location: locationText,
    add: details.attendeeEmail,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Returns Google's official valid instant meeting URL.
 * Google Meet converts 'meet.google.com/new' instantly into a valid, active meeting room.
 */
export function generateValidGoogleMeetUrl(): string {
  return "https://meet.google.com/new";
}
