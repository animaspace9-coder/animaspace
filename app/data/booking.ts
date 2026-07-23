export type ConsultationMode = "online" | "offline";

export interface EventType {
  id: string;
  title: string;
  duration: number; // in minutes
  description: string;
  badge: string;
  color: string;
  icon: string;
  allowedModes: ConsultationMode[];
}

export interface TimeSlot {
  time: string; // e.g. "10:00 AM"
  available: boolean;
}

export const clinicDetails = {
  name: "Anima Space Child Psychology Center",
  doctor: "Prashanthi Simon",
  address: "Plot 104, Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033",
  landmark: "Near Metro Station & Peddamma Temple Road",
  googleMapsUrl: "https://maps.google.com/?q=Jubilee+Hills+Hyderabad",
  phone: "+91 98664 10936",
  hours: "Monday – Saturday: 9:00 AM – 7:00 PM",
  parking: "Dedicated client parking available on premise",
};

export const eventTypes: EventType[] = [
  {
    id: "intake",
    title: "Initial Consultation & Intake",
    duration: 50,
    description: "A comprehensive 50-minute session for parents & child to discuss emotional concerns, goals, and care options.",
    badge: "Most Popular",
    color: "bg-[var(--color-brand-sky)]/30 border-[var(--color-brand-navy)]",
    icon: "💬",
    allowedModes: ["online", "offline"],
  },
  {
    id: "child-session",
    title: "Child & Adolescent Therapy",
    duration: 45,
    description: "One-on-one session (ages 8–18) incorporating CBT, play therapy, and emotion regulation strategies.",
    badge: "1-on-1 Session",
    color: "bg-[var(--color-brand-pink)]/30 border-[var(--color-brand-navy)]",
    icon: "🌱",
    allowedModes: ["online", "offline"],
  },
  {
    id: "parent-coaching",
    title: "Parent Guidance & Coaching",
    duration: 45,
    description: "Dedicated coaching session for parents dealing with behavioral issues, school stress, or emotional outbursts.",
    badge: "Parenting",
    color: "bg-[var(--color-brand-rose)]/30 border-[var(--color-brand-navy)]",
    icon: "👨‍👩‍👧",
    allowedModes: ["online", "offline"],
  },
  {
    id: "discovery",
    title: "15-Min Quick Discovery Call",
    duration: 15,
    description: "Free introductory video call with Prashanthi Simon to understand if Anima Space is the right fit for your family.",
    badge: "Free Video Call",
    color: "bg-[var(--color-brand-mauve)]/20 border-[var(--color-brand-navy)]",
    icon: "📞",
    allowedModes: ["online"],
  },
];

// Mode-specific slot schedules
export const mockSlotsByMode: Record<ConsultationMode, { weekday: string[]; weekend: string[] }> = {
  online: {
    weekday: [
      "09:00 AM",
      "10:30 AM",
      "12:00 PM",
      "02:00 PM",
      "04:00 PM",
      "06:00 PM",
      "07:30 PM",
    ],
    weekend: [
      "09:30 AM",
      "11:00 AM",
      "02:00 PM",
      "04:00 PM",
    ],
  },
  offline: {
    weekday: [
      "10:00 AM (Clinic)",
      "11:30 AM (Clinic)",
      "03:00 PM (Clinic)",
      "04:30 PM (Clinic)",
      "05:45 PM (Clinic)",
    ],
    weekend: [
      "10:00 AM (Clinic)",
      "11:30 AM (Clinic)",
      "01:00 PM (Clinic)",
    ],
  },
};
