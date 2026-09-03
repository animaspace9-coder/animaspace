// Content data for Anima Space — structured for CMS swap & static fallback.
// Source of truth: "Changes proposed by the client by Prashanthi Simon.md"

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const serviceSubNav = [
  { name: "Counselling", href: "/services/counselling" },
  { name: "Coaching", href: "/services/coaching" },
  { name: "Emotional Well-being & Personal Growth", href: "/services/emotional-well-being" },
  { name: "Career Counselling", href: "/services/career-counselling" },
  { name: "Training", href: "/services/training" },
];

export const siteSettings = {
  name: "Anima Space",
  tagline: "Well-being, Psychological Consulting & Counselling Centre",
  phone: "+91 98664 10936",
  email: "animaspace9@gmail.com",
  address: "Online & In-person consultations by appointment, Hyderabad",
  hours: "Mon – Sat: 9:00 AM – 6:00 PM (By appointment)",
};

export const heroContent = {
  headline: "Where Understanding Begins, Growth Unfolds.",
  subHeadline:
    "We provide psychological counselling, career counselling, coaching, and training for children, adolescents, and adults in a safe, confidential, and supportive environment.",
  badgeText: "Safe, confidential & compassionate care",
  ctaText: "Book a Consultation",
  heroCardItems: [
    "Emotional & Psychological Well-being",
    "Child & Adolescent Support",
    "Career Guidance & Coaching",
  ],
};

export const trustStats = [
  { value: "15+", label: "Years Experience" },
  { value: "300+", label: "Workshops Conducted" },
  { value: "50+", label: "5 Star Reviews" },
];

export const meetPrashanthi = {
  title: "Meet Prashanthi Simon",
  role: "A Psychologist, Writer, Communications Trainer, Well-being Coach, Career Counsellor, Parenting Coaching, & Child Psychologist",
  bio1: "With a background in Psychology and English, along with training in Child Psychology, Parenting Coaching, Clinical Research, Psychotherapy, and Soft skills training, Prashanthi Simon brings together psychological understanding, communication, education, and personal development in her work with individuals, families, students, educators, and organisations.",
  bio2: "As a writer and communications trainer, she also works in the areas of performance, communication, personal development, and well-being, helping individuals recognise their strengths and develop the confidence to navigate personal, academic, and professional challenges.",
  image: "/prashanthi-simon.png",
  qualifications: [
    "Background in Psychology & English",
    "Training in Child Psychology & Parenting Coaching",
    "Clinical Research & Psychotherapy Training",
    "Soft Skills & Communications Training",
  ],
  specialties: [
    "Child Psychology",
    "Parenting Coaching",
    "Well-being Coaching",
    "Career Counselling",
    "Psychological Counselling",
    "Communications Training",
  ],
};

export const team = [
  {
    name: "Prashanthi Simon",
    role: "A Psychologist, Writer, Communications Trainer, Well-being Coach, Career Counsellor, Parenting Coaching, & Child Psychologist",
    image: "/prashanthi-simon.png",
    experience: "15+ Years Experience",
    specialty: "Psychological Counselling & Well-being Coaching",
    specialties: meetPrashanthi.specialties,
    bio: `${meetPrashanthi.bio1} ${meetPrashanthi.bio2}`,
    qualifications: meetPrashanthi.qualifications,
  },
];

export const visionBlock = {
  headline: "The Vision Behind Anima Space",
  paragraphs: [
    "Anima Space was founded with the vision to create a safespace where psychological well-being, personal growth, and purposeful living come together.",
    "It is built on the belief that every individual deserves to be heard, understood, supported, and empowered. Through counselling, coaching, career guidance, and training, Anima Space aims to help people to better understand themselves, navigate challenges, and unlock their potential.",
  ],
};

export const approachBlock = {
  headline: "Psychological Support. Personal Growth. Purposeful Living.",
  paragraphs: [
    "At Anima Space, we provide psychological counselling, career counselling, coaching, and training for children, adolescents, and adults in a safe, confidential, and supportive environment.",
    "We support individuals in navigating emotional challenges, behavioural concerns, academic and career decisions, personal development, and life transitions through personalised and professional guidance.",
  ],
  description:
    "At Anima Space, we provide psychological counselling, career counselling, coaching, and training for children, adolescents, and adults in a safe, confidential, and supportive environment. We support individuals in navigating emotional challenges, behavioural concerns, academic and career decisions, personal development, and life transitions through personalised and professional guidance.",
};

export const ageGroups = [
  {
    id: "children",
    title: "Children",
    description:
      "Support for emotional, behavioural, developmental, and social concerns, helping children develop emotional awareness, confidence, resilience, and healthy coping skills.",
    character: "🧒",
    colorClass: "bg-[var(--color-brand-pink)]",
    textColorClass: "text-[var(--color-brand-navy)]",
    services: [
      { label: "Counselling", href: "/services/counselling" },
      { label: "Coaching", href: "/services/coaching" },
      { label: "Emotional Well-being", href: "/services/emotional-well-being" },
      { label: "Career Counselling", href: "/services/career-counselling" },
    ],
  },
  {
    id: "adolescents",
    title: "Adolescents",
    description:
      "Guidance through academic pressure, emotional challenges, self-esteem, identity, relationships, and career decisions, with support for navigating the transition into adulthood.",
    character: "🧑‍🎓",
    colorClass: "bg-[var(--color-brand-sky)]",
    textColorClass: "text-[var(--color-brand-navy)]",
    services: [
      { label: "Counselling", href: "/services/counselling" },
      { label: "Coaching", href: "/services/coaching" },
      { label: "Career Counselling", href: "/services/career-counselling" },
      { label: "Emotional Well-being", href: "/services/emotional-well-being" },
    ],
  },
  {
    id: "adults",
    title: "Adults",
    description:
      "Support with emotional well-being, stress, personal challenges, relationships, life transitions, career concerns, and personal growth.",
    character: "🧑‍💼",
    colorClass: "bg-[var(--color-brand-mauve)]",
    textColorClass: "text-white",
    services: [
      { label: "Counselling", href: "/services/counselling" },
      { label: "Coaching", href: "/services/coaching" },
      { label: "Career Counselling", href: "/services/career-counselling" },
      { label: "Training", href: "/services/training" },
    ],
  },
];

export const whatWeCanHelpWith = {
  headline: "What We Can Help With",
  items: [
    "Emotional & Psychological Well-being",
    "Child & Adolescent Concerns",
    "Anxiety, Stress & Coping Difficulties",
    "Academic & Career Guidance",
    "Personal Growth & Life Transitions",
  ],
};

export const processSteps = [
  {
    number: "01",
    title: "Schedule an Initial Consultation",
    description: "Choose a convenient time to begin your conversation with us.",
  },
  {
    number: "02",
    title: "Share What Brings You Here",
    description:
      "The first session is a space to talk about what you are experiencing, your concerns, and what you hope to understand or work through.",
  },
  {
    number: "03",
    title: "Understand Your Needs",
    description:
      "Together, we explore your concerns and identify the kind of support that may be appropriate for you.",
  },
  {
    number: "04",
    title: "Plan Your Next Step",
    description:
      "Based on your needs and goals, we discuss possible ways forward and create a supportive path at a pace that feels comfortable.",
  },
];

export const howWeCanSupportYou = {
  headline: "How We Can Support You",
  areas: [
    {
      title: "Emotional & Psychological Well-being",
      description:
        "Support for understanding emotions, managing stress, developing healthy coping strategies, and strengthening psychological well-being.",
      sub: "Anxiety, Stress & Coping Difficulties — a supportive space to understand difficult emotions, manage everyday pressures, and develop healthier ways of coping.",
      icon: "🌿",
      colorClass: "bg-[var(--color-brand-pink)]",
    },
    {
      title: "Child & Adolescent Concerns",
      description:
        "Age-appropriate support for emotional, behavioural, academic, social, and developmental concerns.",
      sub: "",
      icon: "🧒",
      colorClass: "bg-[var(--color-brand-sky)]",
    },
    {
      title: "Academic & Career Decisions",
      description:
        "Guidance for students and adults navigating academic choices, career decisions, transitions, and professional goals.",
      sub: "",
      icon: "🧭",
      colorClass: "bg-[var(--color-brand-mauve)]/20",
    },
    {
      title: "Personal Growth & Life Transitions",
      description:
        "Support in developing self-awareness, confidence, resilience, and clarity during periods of change.",
      sub: "",
      icon: "✨",
      colorClass: "bg-[var(--color-brand-sky)]/30",
    },
  ],
};

export const services = [
  {
    id: "counselling",
    title: "Psychological Counselling",
    shortTitle: "Counselling",
    tagline: "A safe and confidential space to explore thoughts, emotions, and personal challenges.",
    homeSummary:
      "A safe and confidential space to explore thoughts, emotions, behaviours, relationships, and personal challenges. Our counselling approach focuses on self-understanding, emotional well-being, healthy coping, and building psychological resilience.",
    description:
      "Psychological counselling provides a professional and confidential space to understand thoughts, emotions, behaviours, and personal experiences. Our counselling services are tailored to children, adolescents, and adults based on their individual needs and concerns. The focus is on strengthening emotional well-being, self-awareness, resilience, and healthy coping.",
    colorClass: "bg-[var(--color-brand-sky)]",
    icon: "💬",
    href: "/services/counselling",
    ctaButtonText: "Book Your Counselling Session Now",
    bulletPoints: [
      "Anxiety and stress management",
      "Emotional and behavioural concerns",
      "Self-esteem and confidence",
      "Relationship and interpersonal concerns",
      "Life transitions and adjustment",
      "Child and adolescent counselling",
    ],
  },
  {
    id: "career-counselling",
    title: "Career Counselling",
    shortTitle: "Career Counselling",
    tagline: "Helping you make informed decisions about your academic and professional future.",
    homeSummary:
      "Helping individuals make informed educational and career decisions by exploring their interests, strengths, abilities, values, and aspirations. Career counselling can support students choosing academic pathways as well as adults navigating career changes and professional transitions.",
    description:
      "Career counselling helps individuals make informed decisions about their academic and professional futures by understanding themselves and exploring suitable opportunities. Through personalised guidance, individuals can identify their interests, abilities, strengths, values, and aspirations. The process supports greater clarity and confidence in educational and career planning.",
    colorClass: "bg-[var(--color-brand-mauve)]/20",
    icon: "🧭",
    href: "/services/career-counselling",
    ctaButtonText: "Book Your Career Counselling Session Now",
    bulletPoints: [
      "Career exploration",
      "Academic and course selection",
      "Interest and aptitude exploration",
      "Strength and skill identification",
      "Career planning",
      "Career transitions",
      "Educational and professional guidance",
    ],
  },
  {
    id: "coaching",
    title: "Coaching",
    shortTitle: "Coaching",
    tagline: "Unlock Your Personal & Professional Potential",
    homeSummary:
      "Coaching focuses on self-awareness, goal-setting, confidence, performance, communication, and personal effectiveness. Through structured guidance, individuals can identify their strengths, overcome barriers, develop practical strategies, and work towards meaningful personal and professional goals.",
    description:
      "Coaching is a structured, goal-oriented process that helps individuals recognise their strengths, overcome barriers, and move towards meaningful personal and professional goals. Our approach combines self-awareness, motivation, performance, and practical strategies for sustainable growth. It is designed to help individuals turn potential into purposeful action.",
    colorClass: "bg-[var(--color-brand-pink)]",
    icon: "🎯",
    href: "/services/coaching",
    ctaButtonText: "Book Your Coaching Session Now",
    bulletPoints: [
      "Personal development",
      "Well-being coaching",
      "Performance enhancement",
      "Goal setting and achievement",
      "Confidence building",
      "Communication and interpersonal skills",
      "Professional growth",
    ],
  },
  {
    id: "training",
    title: "Training",
    shortTitle: "Training",
    tagline: "Learn. Develop. Transform.",
    homeSummary:
      "We offer personalised training programmes for schools, colleges, educators, parents, professionals, and organisations. Our training programmes are designed to create greater awareness, stronger communication, healthier environments, and more empowered individuals and teams.",
    description:
      "Our training programmes translate psychological knowledge into practical skills for individuals, educational institutions, and organisations. We offer customised workshops, seminars, and development programmes based on the specific needs of each group. The goal is to strengthen awareness, capabilities, communication, and overall well-being.",
    colorClass: "bg-[var(--color-brand-sky)]/30",
    icon: "📚",
    href: "/services/training",
    ctaButtonText: "Register Now",
    bulletPoints: [
      "Mental health and psychological well-being",
      "Emotional intelligence",
      "Parenting and child development",
      "Student well-being",
      "Communication and interpersonal skills",
      "Leadership and professional development",
      "Workplace and organisational well-being",
      "Organisational well-being and psychological awareness",
    ],
    closingText:
      "Our training programmes are designed to create greater awareness, stronger communication, healthier environments, and more empowered individuals and teams.",
  },
  {
    id: "emotional-well-being",
    title: "Emotional Well-being & Personal Growth",
    shortTitle: "Emotional Well-being",
    tagline: "A supportive space to understand yourself more deeply, strengthen emotional well-being, and develop healthier ways of responding to life's challenges.",
    homeSummary:
      "A supportive space to understand yourself more deeply, strengthen emotional well-being, build resilience, and develop healthier ways of responding to life's challenges.",
    description:
      "Emotional Well-being & Personal Growth is a supportive space to understand yourself more deeply, strengthen emotional well-being, build resilience, and develop healthier ways of responding to life's challenges. This service focuses on self-awareness, emotional growth, personal strengths, coping skills, and meaningful personal development. It can support individuals who want to better understand their experiences, navigate periods of change, or work towards greater confidence, balance, and purposeful living.",
    colorClass: "bg-[var(--color-brand-rose)]",
    icon: "🌿",
    href: "/services/emotional-well-being",
    ctaButtonText: "Book a Consultation",
    bulletPoints: [
      "Self-awareness and self-understanding",
      "Emotional well-being",
      "Healthy coping and resilience",
      "Confidence and personal development",
      "Life transitions and adjustment",
      "Personal strengths and purposeful growth",
      "Many more areas",
    ],
  },
];

export const spaceToGrowBlock = {
  headline: "A Space for Life, Growth & Possibility",
  paragraph1:
    "At Anima Space, every offering is centred around one simple idea: when people are given the right space to understand themselves, they can discover new possibilities for growth.",
};


export const aboutPageContent = {
  subtitle: "Well-being, Psychological Consulting & Counselling Centre",
  headline: "A Safe Space to Understand, Heal, and Grow.",
  welcomeHeadline: "Welcome to Anima Space",
  welcomeParagraphs: [
    "Anima means life, and Space represents what we strive to create: a safe, confidential, compassionate, and non-judgemental space where you can speak freely, be heard, and feel understood.",
    "Anima Space began with a vision to bring together psychological well-being, personal growth, emotional healing, and professional development in one meaningful space. What began as a desire to make psychological support more accessible has grown into a platform offering counselling, coaching, healing, career guidance, and training for individuals and organisations.",
    "Our services are designed to support children, adolescents, and adults through different emotional, psychological, personal, academic, and professional challenges.",
  ],
  offeringsTitle: "Our Offerings",
  offerings: [
    {
      title: "Counselling",
      description:
        "Professional psychological counselling for children, adolescents, and adults addressing concerns such as anxiety, stress, emotional difficulties, behavioural concerns, self-esteem, relationships, life transitions, and mental well-being.",
      href: "/services/counselling",
      icon: "💬",
      colorClass: "bg-[var(--color-brand-sky)]",
    },
    {
      title: "Coaching",
      description:
        "Individualised well-being and personal development coaching focused on self-awareness, confidence, goal-setting, communication, performance, and achieving meaningful personal and professional goals.",
      href: "/services/coaching",
      icon: "🎯",
      colorClass: "bg-[var(--color-brand-pink)]",
    },
    {
      title: "Emotional Well-being & Personal Growth",
      description:
        "A supportive space to understand yourself more deeply, strengthen emotional well-being, build resilience, and develop healthier ways of responding to life's challenges.",
      href: "/services/emotional-well-being",
      icon: "🌿",
      colorClass: "bg-[var(--color-brand-rose)]",
    },
    {
      title: "Career Counselling",
      description:
        "Guidance for academic and career decision-making, helping individuals understand their interests, strengths, abilities, values, and aspirations to make informed educational and professional choices.",
      href: "/services/career-counselling",
      icon: "🧭",
      colorClass: "bg-[var(--color-brand-mauve)]/20",
    },
    {
      title: "Training",
      description:
        "Psychology and professional development training for schools, colleges, parents, educators, professionals, and organisations, covering mental health awareness, emotional intelligence, communication skills, parenting, student well-being, stress management, leadership, workplace well-being, and organisational development.",
      href: "/services/training",
      icon: "📚",
      colorClass: "bg-[var(--color-brand-sky)]/30",
    },
  ],
  closingTitle: "A Space for Life, Growth & Possibility",
  closingText:
    "At Anima Space, every offering is centred around one simple idea: when people are given the right space to understand themselves, they can discover new possibilities for growth.",
};

export const servicePages: Record<
  string,
  {
    slug: string;
    title: string;
    tagline: string;
    colorClass: string;
    bgAccent: string;
    icon: string;
    intro: string;
    bulletPoints: string[];
    whatToExpect?: string[];
    whoItsFor?: string;
  }
> = {
  counselling: {
    slug: "counselling",
    title: "Counselling",
    tagline: "A safe and confidential space to explore thoughts, emotions, and personal challenges.",
    colorClass: "bg-[var(--color-brand-sky)]",
    bgAccent: "var(--color-brand-sky)",
    icon: "💬",
    intro:
      "Psychological counselling provides a professional and confidential space to understand thoughts, emotions, behaviours, and personal experiences. Our counselling services are tailored to children, adolescents, and adults based on their individual needs and concerns. The focus is on strengthening emotional well-being, self-awareness, resilience, and healthy coping.",
    bulletPoints: [
      "Anxiety and stress management",
      "Emotional and behavioural concerns",
      "Self-esteem and confidence",
      "Relationship and interpersonal concerns",
      "Life transitions and adjustment",
      "Child and adolescent counselling",
    ],
    whoItsFor:
      "Children, adolescents, and adults seeking a safe, confidential space for emotional well-being, self-understanding, and resilience.",
  },
  coaching: {
    slug: "coaching",
    title: "Coaching",
    tagline: "Unlock Your Personal & Professional Potential",
    colorClass: "bg-[var(--color-brand-pink)]",
    bgAccent: "var(--color-brand-pink)",
    icon: "🎯",
    intro:
      "Coaching is a structured, goal-oriented process that helps individuals recognise their strengths, overcome barriers, and move towards meaningful personal and professional goals. Our approach combines self-awareness, motivation, performance, and practical strategies for sustainable growth. It is designed to help individuals turn potential into purposeful action.",
    bulletPoints: [
      "Personal development",
      "Well-being coaching",
      "Performance enhancement",
      "Goal setting and achievement",
      "Confidence building",
      "Communication and interpersonal skills",
      "Professional growth",
    ],
    whoItsFor:
      "Individuals aiming to unlock potential, achieve meaningful goals, develop confidence, and enhance communication and personal effectiveness.",
  },
  "emotional-well-being": {
    slug: "emotional-well-being",
    title: "Emotional Well-being & Personal Growth",
    tagline: "A supportive space to understand yourself more deeply, strengthen emotional well-being, and develop healthier ways of responding to life's challenges.",
    colorClass: "bg-[var(--color-brand-rose)]",
    bgAccent: "var(--color-brand-rose)",
    icon: "🌿",
    intro:
      "Emotional Well-being & Personal Growth is a supportive space to understand yourself more deeply, strengthen emotional well-being, build resilience, and develop healthier ways of responding to life's challenges. This service focuses on self-awareness, emotional growth, personal strengths, coping skills, and meaningful personal development. It can support individuals who want to better understand their experiences, navigate periods of change, or work towards greater confidence, balance, and purposeful living.",
    bulletPoints: [
      "Self-awareness and self-understanding",
      "Emotional well-being",
      "Healthy coping and resilience",
      "Confidence and personal development",
      "Life transitions and adjustment",
      "Personal strengths and purposeful growth",
      "Many more areas",
    ],
    whoItsFor:
      "Individuals who want to better understand their experiences, navigate periods of change, or work towards greater confidence, balance, and purposeful living.",
  },
  // backward-compat alias — redirect is handled in next.config.ts
  healing: {
    slug: "healing",
    title: "Emotional Well-being & Personal Growth",
    tagline: "A supportive space to understand yourself more deeply, strengthen emotional well-being, and develop healthier ways of responding to life's challenges.",
    colorClass: "bg-[var(--color-brand-rose)]",
    bgAccent: "var(--color-brand-rose)",
    icon: "🌿",
    intro:
      "Emotional Well-being & Personal Growth is a supportive space to understand yourself more deeply, strengthen emotional well-being, build resilience, and develop healthier ways of responding to life's challenges.",
    bulletPoints: [
      "Self-awareness and self-understanding",
      "Emotional well-being",
      "Healthy coping and resilience",
      "Confidence and personal development",
      "Life transitions and adjustment",
      "Personal strengths and purposeful growth",
      "Many more areas",
    ],
    whoItsFor:
      "Individuals who want to better understand their experiences, navigate periods of change, or work towards greater confidence, balance, and purposeful living.",
  },
  "career-counselling": {
    slug: "career-counselling",
    title: "Career Counselling",
    tagline: "Helping you make informed decisions about your academic and professional future.",
    colorClass: "bg-[var(--color-brand-mauve)]/20",
    bgAccent: "var(--color-brand-mauve)",
    icon: "🧭",
    intro:
      "Career counselling helps individuals make informed decisions about their academic and professional futures by understanding themselves and exploring suitable opportunities. Through personalised guidance, individuals can identify their interests, abilities, strengths, values, and aspirations. The process supports greater clarity and confidence in educational and career planning.",
    bulletPoints: [
      "Career exploration",
      "Academic and course selection",
      "Interest and aptitude exploration",
      "Strength and skill identification",
      "Career planning",
      "Career transitions",
      "Educational and professional guidance",
    ],
    whoItsFor:
      "Students choosing academic paths and adults navigating career decisions, transitions, and professional aspirations.",
  },
  training: {
    slug: "training",
    title: "Training",
    tagline: "Learn. Develop. Transform.",
    colorClass: "bg-[var(--color-brand-sky)]/30",
    bgAccent: "var(--color-brand-sky)",
    icon: "📚",
    intro:
      "Our training programmes translate psychological knowledge into practical skills for individuals, educational institutions, and organisations. We offer customised workshops, seminars, and development programmes based on the specific needs of each group. The goal is to strengthen awareness, capabilities, communication, and overall well-being.",
    bulletPoints: [
      "Mental health and psychological well-being",
      "Emotional intelligence",
      "Parenting and child development",
      "Student well-being",
      "Communication and interpersonal skills",
      "Leadership and professional development",
      "Workplace and organisational well-being",
    ],
    whoItsFor:
      "Schools, colleges, educators, parents, professionals, and organisations seeking impactful psychology-based training.",
  },
};

export const bookingServiceOptions = [
  "Personal Counselling",
  "Career Counseling",
  "Child & Adolescent Counselling",
  "Couple Counselling",
  "Life Coaching",
  "Parental Guidance",
  "Emotional Well-being & Personal Growth",
  "Training services",
];

export const consultationTimeSlots = [
  "09:00 AM – 10:00 AM",
  "10:00 AM – 11:00 AM",
  "11:00 AM – 12:00 PM",
  "12:00 PM – 01:00 PM",
  "02:00 PM – 03:00 PM",
  "03:00 PM – 04:00 PM",
  "04:00 PM – 05:00 PM",
  "05:00 PM – 06:00 PM",
  "Flexible / Any Time",
];

export const bookingContent = {
  title: "Book Your Consultation",
  tagline: "Book Appointment",
  subtitle:
    "Ready to start your journey towards a healthier and happier life…take the first step now.. Fill the form, talk to our experts",
  stats: trustStats,
  services: bookingServiceOptions,
};

export const contactInfo = siteSettings;

export const testimonials = [
  {
    quote: "Anima Space completely changed our family dynamic. My son is finally able to express his feelings without shutting down.",
    author: "Parent",
  },
  {
    quote: "Prashanthi's approach is incredibly warm and understanding. We felt safe from the very first session.",
    author: "Parent",
  },
  {
    quote: "The training sessions gave me tools I use every single day. I finally feel confident navigating challenges with my students.",
    author: "Educator",
  },
];

export const faqs = [
  {
    question: "Who can seek counselling?",
    answer:
      "Counselling is for children, adolescents, adults, parents, and anyone seeking support with emotional, personal, or psychological concerns.",
  },
  {
    question: "Do I need a diagnosis to seek counselling?",
    answer:
      "No. You do not need a diagnosis to seek counselling. You can reach out whenever you feel you need support, clarity, or guidance.",
  },
  {
    question: "Are sessions confidential?",
    answer:
      "Yes. Sessions are private and confidential, subject to applicable professional and legal limits.",
  },
  {
    question: "How long is a session?",
    answer: "A typical counselling session lasts around 45–60 minutes.",
  },
  {
    question: "Are sessions online or in person?",
    answer:
      "Sessions may be available online or in person, depending on your needs and availability.",
  },
  {
    question: "How do I book a session?",
    answer:
      "You can book a session by contacting us through the website, phone, or email. We will guide you through the next steps.",
  },
  {
    question: "Can parents seek support regarding their child?",
    answer:
      "Yes. Parents can seek guidance regarding their child's emotional, behavioural, academic, or developmental concerns.",
  },
  {
    question: "What happens during the first session?",
    answer:
      "The first session focuses on understanding your concerns, background, and goals. It is a safe space to talk openly and decide what kind of support may be helpful.",
  },
];

export { blogPosts, blogsPageContent } from "./blogs";
export type { BlogPostData, BlogSection, BlogInfographic, BlogStep } from "./blogs";

