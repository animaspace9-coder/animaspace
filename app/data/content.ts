// Placeholder data for Anima Space — structured for easy CMS swap.
// This file acts as the FALLBACK layer when Sanity data is unavailable.
// Source of truth is Sanity CMS (populated via sanity/seed.ts).

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
  { name: "Healing", href: "/services/healing" },
  { name: "Career Counselling", href: "/services/career-counselling" },
  { name: "Training", href: "/services/training" },
];

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

export const ageGroups = [
  {
    id: "children",
    title: "Children",
    description:
      "Support for emotional, behavioural, developmental, and social concerns, helping children develop emotional awareness, confidence, resilience, and healthy coping skills.",
    character: "🧒",
    bulletPoints: [
      "Emotional awareness & regulation",
      "Behavioural & developmental concerns",
      "Confidence & resilience building",
      "Social skills & healthy coping",
    ],
    // legacy fields kept for existing AgeGroups component
    ageRange: "",
    ageLabel: "",
    colorClass: "bg-[var(--color-brand-pink)]",
    textColorClass: "text-[var(--color-brand-navy)]",
    services: [
      { label: "Counselling", href: "/services/counselling" },
      { label: "Coaching", href: "/services/coaching" },
      { label: "Healing", href: "/services/healing" },
      { label: "Career Counselling", href: "/services/career-counselling" },
    ],
  },
  {
    id: "adolescents",
    title: "Adolescents",
    description:
      "Guidance through academic pressure, emotional challenges, self-esteem, identity, relationships, and career decisions, with support for navigating the transition into adulthood.",
    character: "🧑‍🎓",
    bulletPoints: [
      "Academic pressure & exam stress",
      "Self-esteem & identity",
      "Relationships & social challenges",
      "Career decisions & life transitions",
    ],
    ageRange: "",
    ageLabel: "",
    colorClass: "bg-[var(--color-brand-sky)]",
    textColorClass: "text-[var(--color-brand-navy)]",
    services: [
      { label: "Counselling", href: "/services/counselling" },
      { label: "Coaching", href: "/services/coaching" },
      { label: "Career Counselling", href: "/services/career-counselling" },
      { label: "Healing", href: "/services/healing" },
    ],
  },
  {
    id: "adults",
    title: "Adults",
    description:
      "Support with emotional well-being, stress, personal challenges, relationships, life transitions, career concerns, and personal growth.",
    character: "🧑‍💼",
    bulletPoints: [
      "Emotional well-being & stress",
      "Relationships & life transitions",
      "Career concerns & growth",
      "Personal development",
    ],
    ageRange: "",
    ageLabel: "",
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

export const services = [
  {
    id: "counselling",
    title: "Counselling",
    description:
      "Professional psychological counselling for children, adolescents, and adults addressing anxiety, stress, emotional difficulties, behavioural concerns, self-esteem, relationships, life transitions, and mental well-being.",
    colorClass: "bg-[var(--color-brand-sky)]",
    icon: "💬",
    href: "/services/counselling",
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
    id: "coaching",
    title: "Coaching",
    description:
      "Individualised well-being and personal development coaching focused on self-awareness, confidence, goal-setting, communication, performance, and achieving meaningful personal and professional goals.",
    colorClass: "bg-[var(--color-brand-pink)]",
    icon: "🎯",
    href: "/services/coaching",
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
    id: "healing",
    title: "Healing",
    description:
      "A holistic space for emotional healing, self-discovery, resilience, and inner well-being, supporting individuals as they process experiences and develop healthier ways of moving forward.",
    colorClass: "bg-[var(--color-brand-rose)]",
    icon: "🌿",
    href: "/services/healing",
    bulletPoints: [
      "Emotional healing",
      "Self-discovery and self-awareness",
      "Emotional resilience",
      "Inner well-being",
      "Processing difficult experiences",
      "Personal growth",
      "Mindful living",
    ],
  },
  {
    id: "career-counselling",
    title: "Career Counselling",
    description:
      "Guidance for academic and career decision-making, helping individuals understand their interests, strengths, abilities, values, and aspirations to make informed educational and professional choices.",
    colorClass: "bg-[var(--color-brand-mauve)]/20",
    icon: "🧭",
    href: "/services/career-counselling",
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
    id: "training",
    title: "Training",
    description:
      "Psychology and professional development training for schools, colleges, parents, educators, professionals, and organisations covering mental health awareness, emotional intelligence, and more.",
    colorClass: "bg-[var(--color-brand-sky)]/30",
    icon: "📚",
    href: "/services/training",
    bulletPoints: [
      "Mental health and psychological well-being",
      "Emotional intelligence",
      "Parenting and child development",
      "Student well-being",
      "Communication and interpersonal skills",
      "Leadership and professional development",
      "Workplace and organisational well-being",
    ],
  },
];

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
    whatToExpect: string[];
    whoItsFor: string;
    faqs: { question: string; answer: string }[];
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
      "Psychological counselling provides a professional and confidential space to understand thoughts, emotions, behaviours, and personal experiences. Our counselling services are tailored to children, adolescents, and adults based on their individual needs. The focus is on strengthening emotional well-being, self-awareness, resilience, and healthy coping.",
    bulletPoints: [
      "Anxiety and stress management",
      "Emotional and behavioural concerns",
      "Self-esteem and confidence",
      "Relationship and interpersonal concerns",
      "Life transitions and adjustment",
      "Child and adolescent counselling",
    ],
    whatToExpect: [
      "An initial consultation to understand your needs and concerns",
      "Regular confidential sessions with Prashanthi Simon",
      "A personalised support plan reviewed and adjusted as needed",
      "A safe, non-judgemental space to speak freely",
    ],
    whoItsFor:
      "Children, adolescents, and adults experiencing anxiety, stress, emotional difficulties, self-esteem concerns, relationship challenges, or life transitions.",
    faqs: [
      {
        question: "How many sessions will I need?",
        answer:
          "Every individual is different. Some concerns can be addressed in a few sessions; others benefit from longer-term support. We will give you an honest assessment after the initial consultation.",
      },
      {
        question: "Is everything discussed kept confidential?",
        answer:
          "Yes. All sessions are held in a safe and confidential space. Information is only shared with relevant parties with your consent.",
      },
    ],
  },
  coaching: {
    slug: "coaching",
    title: "Coaching",
    tagline: "Unlock your personal and professional potential.",
    colorClass: "bg-[var(--color-brand-pink)]",
    bgAccent: "var(--color-brand-pink)",
    icon: "🎯",
    intro:
      "Coaching is a structured, goal-oriented process that helps individuals recognise their strengths, overcome barriers, and move towards meaningful personal and professional goals. Our approach combines self-awareness, motivation, performance, and practical strategies for sustainable growth.",
    bulletPoints: [
      "Personal development",
      "Well-being coaching",
      "Performance enhancement",
      "Goal setting and achievement",
      "Confidence building",
      "Communication and interpersonal skills",
      "Professional growth",
    ],
    whatToExpect: [
      "A values and goals session to understand what matters most to you",
      "Structured skill-building and action-planning between sessions",
      "Tools for managing performance pressure and setbacks",
      "Practical strategies for sustainable personal and professional growth",
    ],
    whoItsFor:
      "Individuals who want to build self-awareness, develop confidence, improve communication, manage performance pressure, or work towards meaningful personal and professional goals.",
    faqs: [
      {
        question: "What is the difference between coaching and counselling?",
        answer:
          "Counselling focuses on understanding and processing emotional challenges. Coaching is present- and future-focused — it is about developing skills and working towards goals.",
      },
      {
        question: "Can coaching help with academic or career stress?",
        answer:
          "Yes. We work on mindset, planning strategies, and practical skills specifically around academic performance, career decisions, and professional challenges.",
      },
    ],
  },
  healing: {
    slug: "healing",
    title: "Healing",
    tagline: "A holistic space for emotional healing, self-discovery, and inner well-being.",
    colorClass: "bg-[var(--color-brand-rose)]",
    bgAccent: "var(--color-brand-rose)",
    icon: "🌿",
    intro:
      "Healing creates space for individuals to process experiences, reconnect with themselves, and develop a deeper understanding of their emotional world. It encourages self-discovery, emotional resilience, and inner well-being while supporting healthier ways of navigating life's challenges.",
    bulletPoints: [
      "Emotional healing",
      "Self-discovery and self-awareness",
      "Emotional resilience",
      "Inner well-being",
      "Processing difficult experiences",
      "Personal growth",
      "Mindful living",
    ],
    whatToExpect: [
      "A safe, compassionate space to process your experiences at your own pace",
      "Guided self-discovery and emotional exploration",
      "Support in developing healthier ways of navigating challenges",
      "A deeply personal and non-judgemental approach",
    ],
    whoItsFor:
      "Individuals looking to process difficult experiences, develop greater self-awareness, reconnect with their inner life, and move towards emotional well-being and resilience.",
    faqs: [
      {
        question: "How is healing different from counselling?",
        answer:
          "Counselling focuses on specific emotional or psychological concerns. The healing space is a broader, more holistic journey focused on self-discovery, inner well-being, and personal transformation.",
      },
      {
        question: "Do I need to have a specific concern to start?",
        answer:
          "No. Many individuals come to the healing space simply feeling stuck, disconnected, or in search of greater clarity and meaning. You are welcome wherever you are on your journey.",
      },
    ],
  },
  "career-counselling": {
    slug: "career-counselling",
    title: "Career Counselling",
    tagline: "Helping you make informed decisions about your academic and professional future.",
    colorClass: "bg-[var(--color-brand-mauve)]/20",
    bgAccent: "var(--color-brand-mauve)",
    icon: "🧭",
    intro:
      "Career counselling helps individuals make informed decisions about their academic and professional futures by understanding themselves and exploring suitable opportunities. The process supports greater clarity and confidence in educational and career planning.",
    bulletPoints: [
      "Career exploration",
      "Academic and course selection",
      "Interest and aptitude exploration",
      "Strength and skill identification",
      "Career planning",
      "Career transitions",
      "Educational and professional guidance",
    ],
    whatToExpect: [
      "An in-depth exploration of your interests, strengths, values, and aspirations",
      "Psychometric and interest assessments where relevant",
      "Personalised guidance on academic pathways and career options",
      "Support for career transitions and professional decisions",
    ],
    whoItsFor:
      "Students choosing academic pathways, individuals planning their career, adults navigating career changes, and anyone seeking greater clarity about their professional direction.",
    faqs: [
      {
        question: "Is career counselling only for students?",
        answer:
          "No. Career counselling is equally relevant for working professionals exploring career changes, adults navigating transitions, and individuals seeking greater clarity about their professional path.",
      },
      {
        question: "Do you use psychometric assessments?",
        answer:
          "Where relevant, we use interest and aptitude assessments as a tool for self-understanding — not as a verdict. The insights support a broader, personalised career exploration process.",
      },
    ],
  },
  training: {
    slug: "training",
    title: "Training",
    tagline: "Learn. Develop. Transform.",
    colorClass: "bg-[var(--color-brand-sky)]/30",
    bgAccent: "var(--color-brand-sky)",
    icon: "📚",
    intro:
      "Our training programmes translate psychological knowledge into practical skills for individuals, educational institutions, and organisations. We offer customised workshops, seminars, and development programmes based on the specific needs of each group.",
    bulletPoints: [
      "Mental health and psychological well-being",
      "Emotional intelligence",
      "Parenting and child development",
      "Student well-being",
      "Communication and interpersonal skills",
      "Leadership and professional development",
      "Workplace and organisational well-being",
    ],
    whatToExpect: [
      "Customised workshops and seminars tailored to your group's specific needs",
      "Practical, skills-based content grounded in psychological knowledge",
      "Group or individual training formats available",
      "Programmes for schools, colleges, parents, educators, professionals, and organisations",
    ],
    whoItsFor:
      "Schools, colleges, educators, parents, professionals, and organisations seeking training in mental health awareness, emotional intelligence, communication, leadership, and well-being.",
    faqs: [
      {
        question: "Do you offer training for schools and colleges?",
        answer:
          "Yes. We offer customised training programmes for school staff, college educators, and student groups covering mental health awareness, student well-being, emotional intelligence, and communication skills.",
      },
      {
        question: "Can organisations book training programmes?",
        answer:
          "Yes. We work with organisations to design and deliver training programmes focused on workplace well-being, leadership, emotional intelligence, and organisational development.",
      },
    ],
  },
};

export const approachBlock = {
  headline: "Psychological Support. Personal Growth. Purposeful Living.",
  description:
    "At Anima Space, we believe that seeking support is a step towards greater self-awareness, resilience, well-being, and purposeful living. Whether you are looking for psychological counselling, career guidance, coaching, or professional training, Anima Space offers a space to understand where you are, discover where you want to go, and develop the tools to move forward.",
};

export const team = [
  {
    name: "Prashanthi Simon",
    role: "Psychologist · Writer · Communications Trainer · Well-being Coach · Career Counsellor · Child Psychologist",
    image: "/prashanthi-simon.png",
    experience: "15+ Years Experience",
    specialty: "Psychological Counselling & Well-being Coaching",
    specialties: [
      "Child Psychology",
      "Well-being Coaching",
      "Career Counselling",
      "Communications Training",
      "Parenting Guidance",
    ],
    bio: "With a background in Psychology and English, along with training in Child Psychology, Parenting Coaching, Clinical Research, Psychotherapy, and Soft skills training, Prashanthi Simon brings together psychological understanding, communication, education, and personal development in her work with individuals, families, students, educators, and organisations. As a writer and communications trainer, she also works in the areas of performance, communication, personal development, and well-being, helping individuals recognise their strengths and develop the confidence to navigate personal, academic, and professional challenges.",
    qualifications: [
      "Background in Psychology & English",
      "Trained in Child Psychology & Parenting Coaching",
      "Clinical Research & Psychotherapy Training",
      "Soft Skills & Communications Training",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Anima Space completely changed our family dynamic. My son is finally able to express his feelings without shutting down.",
    author: "Parent",
  },
  {
    quote:
      "Prashanthi's approach is incredibly warm and understanding. We felt safe from the very first session.",
    author: "Parent",
  },
  {
    quote:
      "The training sessions gave me tools I use every single day. I finally feel confident navigating challenges with my students.",
    author: "Educator",
  },
];

export const faqs = [
  {
    question: "What should I expect during the first session?",
    answer:
      "The initial session is a conversation — a space to share your concerns, background, and goals. We listen carefully and work together to understand the best pathway forward for you or your child.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes, we offer secure online sessions for counselling, coaching, and career guidance. In-clinic sessions are also available at our Hyderabad centre.",
  },
  {
    question: "Is everything discussed kept confidential?",
    answer:
      "Yes. We take confidentiality very seriously. All sessions are conducted in a safe, confidential, and non-judgemental space.",
  },
  {
    question: "Who can benefit from Anima Space services?",
    answer:
      "Our services support children, adolescents, and adults. Whether you are navigating emotional challenges, academic decisions, career transitions, or personal growth, we have a pathway that fits your needs.",
  },
];

export const blogPosts = [
  {
    id: "understanding-anxiety-in-children",
    title: "Understanding Anxiety in Children: What Parents Need to Know",
    excerpt:
      "Anxiety is one of the most common challenges children face today. Learn how to spot the signs, respond with empathy, and know when to seek professional support.",
    date: "12 July 2026",
    readTime: "5 min read",
    category: "Anxiety",
    colorClass: "bg-[var(--color-brand-sky)]",
  },
  {
    id: "screen-time-and-mental-health",
    title: "Screen Time & Mental Health: Finding the Right Balance",
    excerpt:
      "With screens ever-present in family life, what does the research actually say? We break down the evidence and share practical strategies for healthy boundaries.",
    date: "28 June 2026",
    readTime: "7 min read",
    category: "Wellbeing",
    colorClass: "bg-[var(--color-brand-pink)]",
  },
  {
    id: "talking-to-your-child-about-big-feelings",
    title: "Talking to Your Child About Big Feelings",
    excerpt:
      "Many parents feel at a loss when their child is overwhelmed by emotion. Here's a simple framework that helps children name, understand, and manage what they feel.",
    date: "5 June 2026",
    readTime: "4 min read",
    category: "Parenting",
    colorClass: "bg-[var(--color-brand-rose)]",
  },
];

export const contactInfo = {
  address: "Online & In-person consultations by appointment, Hyderabad",
  phone: "+91 98664 10936",
  email: "animaspace9@gmail.com",
  hours: "Mon – Sat: 9:00 AM – 6:00 PM (By appointment)",
};

export const bookingServiceOptions = [
  "Personal Counselling",
  "Career Counseling",
  "Child & Adolescent Counselling",
  "Couple Counselling",
  "Life Coaching",
  "Parental Guidance",
  "Training Services",
];
