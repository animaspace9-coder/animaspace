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
  time: string;
  available: boolean;
}

export const clinicDetails = {
  name: "Anima Space",
  doctor: "Prashanthi Simon",
  address: "Online & In-person consultations by appointment, Hyderabad",
  landmark: "Hyderabad, Telangana",
  googleMapsUrl: "https://maps.google.com/?q=Hyderabad+Telangana",
  phone: "+91 98664 10936",
  hours: "Monday – Saturday: 9:00 AM – 6:00 PM",
  parking: "Available by appointment",
};

export const eventTypes: EventType[] = [
  {
    id: "personal-counselling",
    title: "Personal Counselling",
    duration: 50,
    description: "Professional psychological counselling addressing anxiety, stress, emotional difficulties, and mental well-being.",
    badge: "Most Popular",
    color: "bg-[var(--color-brand-sky)]/30 border-[var(--color-brand-navy)]",
    icon: "💬",
    allowedModes: ["online", "offline"],
  },
  {
    id: "career-counselling",
    title: "Career Counseling",
    duration: 50,
    description: "Guidance for academic and career decision-making, exploring interests, strengths, values, and aspirations.",
    badge: "Career Focus",
    color: "bg-[var(--color-brand-mauve)]/20 border-[var(--color-brand-navy)]",
    icon: "🧭",
    allowedModes: ["online", "offline"],
  },
  {
    id: "child-adolescent",
    title: "Child & Adolescent Counselling",
    duration: 50,
    description: "Age-appropriate support for emotional, behavioural, developmental, self-esteem, and school concerns.",
    badge: "Children & Teens",
    color: "bg-[var(--color-brand-pink)]/30 border-[var(--color-brand-navy)]",
    icon: "🧒",
    allowedModes: ["online", "offline"],
  },
  {
    id: "couple-counselling",
    title: "Couple Counselling",
    duration: 60,
    description: "Support for relationship dynamics, communication, and interpersonal understanding.",
    badge: "Relationships",
    color: "bg-[var(--color-brand-rose)]/30 border-[var(--color-brand-navy)]",
    icon: "🤝",
    allowedModes: ["online", "offline"],
  },
  {
    id: "life-coaching",
    title: "Life Coaching",
    duration: 50,
    description: "Structured personal development focused on self-awareness, confidence, goal-setting, and performance.",
    badge: "Goal-Oriented",
    color: "bg-[var(--color-brand-sky)]/30 border-[var(--color-brand-navy)]",
    icon: "🎯",
    allowedModes: ["online", "offline"],
  },
  {
    id: "parental-guidance",
    title: "Parental Guidance",
    duration: 50,
    description: "Practical guidance and emotional support for parents navigating family and child challenges.",
    badge: "Parenting",
    color: "bg-[var(--color-brand-pink)]/30 border-[var(--color-brand-navy)]",
    icon: "👨‍👩‍👧",
    allowedModes: ["online", "offline"],
  },
  {
    id: "training-services",
    title: "Training services",
    duration: 60,
    description: "Customised psychology workshops and development programmes for schools, educators, and organisations.",
    badge: "Workshops",
    color: "bg-[var(--color-brand-mauve)]/20 border-[var(--color-brand-navy)]",
    icon: "📚",
    allowedModes: ["online", "offline"],
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
      "05:30 PM",
    ],
    weekend: [
      "10:00 AM",
      "11:30 AM",
      "02:00 PM",
      "03:30 PM",
    ],
  },
  offline: {
    weekday: [
      "10:00 AM",
      "11:30 AM",
      "03:00 PM",
      "04:30 PM",
    ],
    weekend: [
      "10:00 AM",
      "11:30 AM",
      "01:00 PM",
    ],
  },
};
