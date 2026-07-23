// Placeholder data for Anima Space - structured for easy CMS swap

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
  { name: "Training", href: "/services/training" },
  { name: "Therapy", href: "/services/therapy" },
];

export const heroContent = {
  headline: "A safe space for your child to be heard.",
  subHeadline:
    "Expert psychological support tailored to help your child navigate life's challenges with confidence and resilience.",
  ctaText: "Book Session",
};

export const trustStats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Families Helped" },
  { value: "100%", label: "Confidential" },
];

export const ageGroups = [
  {
    id: "children",
    ageRange: "8–12",
    ageLabel: "Years",
    title: "Children",
    description: "Building emotional vocabulary, managing big feelings, and navigating friendships and school with confidence.",
    colorClass: "bg-[var(--color-brand-pink)]",
    textColorClass: "text-[var(--color-brand-navy)]",
    character: "🧒",
    services: [
      { label: "Anxiety & Stress Counselling", href: "/services/counselling" },
      { label: "CBT & Play Therapy", href: "/services/therapy" },
      { label: "Social Skills Coaching", href: "/services/coaching" },
      { label: "Emotional Regulation Support", href: "/services/training" },
    ],
  },
  {
    id: "teens",
    ageRange: "13–19",
    ageLabel: "Years",
    title: "Teenagers",
    description: "Navigating identity, exam pressure, peer relationships, mood, and the big transitions of adolescence.",
    colorClass: "bg-[var(--color-brand-sky)]",
    textColorClass: "text-[var(--color-brand-navy)]",
    character: "🧑‍🎓",
    services: [
      { label: "Teen Counselling", href: "/services/counselling" },
      { label: "Exam & Performance Coaching", href: "/services/coaching" },
      { label: "Mood & Anxiety Therapy", href: "/services/therapy" },
      { label: "Identity & Self-esteem Support", href: "/services/counselling" },
    ],
  },
  {
    id: "adults",
    ageRange: "Parents",
    ageLabel: "& Adults",
    title: "Parents & Adults",
    description: "Guiding parents to support their child's mental wellbeing — and providing space for adult emotional growth too.",
    colorClass: "bg-[var(--color-brand-mauve)]",
    textColorClass: "text-white",
    character: "🧑‍🤝‍🧑",
    services: [
      { label: "Parent Guidance Sessions", href: "/services/coaching" },
      { label: "Family Counselling", href: "/services/counselling" },
      { label: "Parenting Skills Training", href: "/services/training" },
      { label: "Adult Emotional Wellbeing", href: "/services/therapy" },
    ],
  },
];

export const services = [
  {
    id: "counselling",
    title: "Counselling",
    description:
      "Compassionate one-on-one counselling sessions to help children and families process emotions and build coping skills.",
    colorClass: "bg-[var(--color-brand-sky)]",
    icon: "💬",
    href: "/services/counselling",
  },
  {
    id: "coaching",
    title: "Coaching",
    description:
      "Goal-oriented coaching to help children develop confidence, social skills, and a growth mindset for life.",
    colorClass: "bg-[var(--color-brand-pink)]",
    icon: "🎯",
    href: "/services/coaching",
  },
  {
    id: "training",
    title: "Training",
    description:
      "Parent and educator training programs to build a supportive environment around every child's development.",
    colorClass: "bg-[var(--color-brand-rose)]",
    icon: "📚",
    href: "/services/training",
  },
  {
    id: "therapy",
    title: "Therapy",
    description:
      "Evidence-based therapeutic approaches including CBT, play therapy, and family systems therapy.",
    colorClass: "bg-[var(--color-brand-mauve)]/20",
    icon: "🧠",
    href: "/services/therapy",
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
    whatToExpect: string[];
    whoItsFor: string;
    faqs: { question: string; answer: string }[];
  }
> = {
  counselling: {
    slug: "counselling",
    title: "Counselling",
    tagline: "Being heard is the first step to healing.",
    colorClass: "bg-[var(--color-brand-sky)]",
    bgAccent: "var(--color-brand-sky)",
    icon: "💬",
    intro:
      "Our counselling sessions create a warm, confidential space where children and teenagers can speak freely, explore their feelings, and start making sense of what they're going through. We use child-centred approaches that meet each young person exactly where they are.",
    whatToExpect: [
      "An initial parent consultation to understand your child's needs",
      "Regular 50-minute one-on-one sessions with a qualified psychologist",
      "Progress check-ins with parents after every 4-6 sessions",
      "A personalised support plan reviewed and adjusted as your child grows",
    ],
    whoItsFor:
      "Children and teenagers experiencing anxiety, low mood, grief, friendship difficulties, school stress, or big life transitions.",
    faqs: [
      {
        question: "How many sessions will my child need?",
        answer:
          "Every child is different. Short-term support often spans 6–12 sessions; some children benefit from longer-term work. We'll give you an honest estimate after the initial assessment.",
      },
      {
        question: "Will I be told what my child says?",
        answer:
          "Sessions are confidential. We share themes and progress with parents in check-in conversations, but we protect the specifics so your child feels safe to speak openly.",
      },
    ],
  },
  coaching: {
    slug: "coaching",
    title: "Coaching",
    tagline: "Build skills. Build confidence. Build the future.",
    colorClass: "bg-[var(--color-brand-pink)]",
    bgAccent: "var(--color-brand-pink)",
    icon: "🎯",
    intro:
      "Child coaching is forward-focused and action-orientated. Rather than unpacking the past, we work with your child on who they want to become — setting goals, practising new thinking habits, and building the social and emotional skills that help them thrive at school and at home.",
    whatToExpect: [
      "A values and goals session to understand what your child cares about",
      "Structured skill-building exercises between sessions",
      "Tools for managing performance pressure, perfectionism, and setbacks",
      "Parent involvement as accountability partners (where appropriate for the child's age)",
    ],
    whoItsFor:
      "Children and teens who want to build self-confidence, improve social skills, manage perfectionism, or prepare for big transitions like exams or new schools.",
    faqs: [
      {
        question: "What's the difference between coaching and therapy?",
        answer:
          "Coaching is present- and future-focused — it's about developing skills and reaching goals. Therapy looks more deeply at past experiences and emotional processing. We'll recommend the right fit after the initial consultation.",
      },
      {
        question: "Can coaching help with academic stress?",
        answer:
          "Yes. We work on mindset, planning strategies, and stress regulation specifically around academic performance and exam pressure.",
      },
    ],
  },
  training: {
    slug: "training",
    title: "Training",
    tagline: "Empowering the adults who surround every child.",
    colorClass: "bg-[var(--color-brand-rose)]",
    bgAccent: "var(--color-brand-rose)",
    icon: "📚",
    intro:
      "Children don't grow in isolation — they grow in families, classrooms, and communities. Our training programmes equip parents, caregivers, and educators with the knowledge and practical tools to create emotionally safe environments where every child can flourish.",
    whatToExpect: [
      "Group workshops for parents on topics like emotional coaching, screen time, and managing big emotions",
      "In-school staff training on identifying mental health concerns early",
      "One-on-one parent consultation sessions for specific parenting challenges",
      "Ongoing resource access after each training",
    ],
    whoItsFor:
      "Parents, grandparents, teachers, school counsellors, and any adult who plays a regular role in a child's life.",
    faqs: [
      {
        question: "Do you offer training for schools?",
        answer:
          "Yes. We run half-day and full-day in-service training for school staff, tailored to the school's specific student population and concerns.",
      },
      {
        question: "Can I book a private parent training session?",
        answer:
          "Absolutely. One-on-one parent consultations are available for families who want personalised guidance on a particular concern.",
      },
    ],
  },
  therapy: {
    slug: "therapy",
    title: "Therapy",
    tagline: "Evidence-based healing for mind and family.",
    colorClass: "bg-[var(--color-brand-mauve)]",
    bgAccent: "var(--color-brand-mauve)",
    icon: "🧠",
    intro:
      "Our therapeutic work draws on the most robust evidence-based approaches in child and adolescent psychology — including Cognitive Behavioural Therapy (CBT), play therapy, and family systems therapy. Every treatment plan is tailored to the unique profile of your child.",
    whatToExpect: [
      "A comprehensive initial assessment to understand your child's full picture",
      "A clear, written treatment plan shared with parents",
      "Structured therapy sessions using age-appropriate techniques",
      "Progress reviews every 6 sessions with adjustments as needed",
    ],
    whoItsFor:
      "Children and teens dealing with anxiety disorders, OCD, depression, trauma, ADHD-related emotional difficulties, selective mutism, or specific phobias.",
    faqs: [
      {
        question: "What therapy approaches do you use?",
        answer:
          "We use CBT, play therapy, narrative therapy, acceptance and commitment therapy (ACT), and family systems approaches — chosen based on the child's age, diagnosis, and what the evidence supports.",
      },
      {
        question: "Do you work with children who have a formal diagnosis?",
        answer:
          "Yes. We regularly work with children who have diagnoses such as ADHD, autism spectrum conditions, anxiety disorders, and depression. We also work with children awaiting assessment.",
      },
    ],
  },
};

export const approachBlock = {
  headline: "A Compassionate Approach to Healing",
  description:
    "We believe in creating a supportive, non-judgmental environment where your child feels safe to explore their emotions. Our goal is to equip them with the tools they need to thrive both at home and at school.",
};

export const team = [
  {
    name: "Prashanthi Simon",
    role: "Lead Child & Adolescent Psychologist",
    image: "/prashanthi-simon.png",
    experience: "15+ Years Clinical Experience",
    specialty: "CBT & Family Therapy",
    specialties: ["CBT & Family Therapy", "Child Emotional Wellbeing", "Adolescent Care", "Parent Guidance"],
    bio: "Prashanthi Simon is a registered child and adolescent psychologist with over 15 years of experience supporting children, teenagers, and families through some of life's most challenging moments. She founded Anima Space with a single belief: every child deserves a safe space to be heard, understood, and helped. Her practice is warm, evidence-based, and deeply attuned to the unique needs of each child.",
    qualifications: [
      "PhD in Clinical Child Psychology",
      "Registered with the Psychology Council",
      "Specialist in CBT, Play Therapy & Family Systems",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Anima Space completely changed our family dynamic. Our son is finally able to express his feelings without shutting down.",
    author: "Sarah T., Parent",
  },
  {
    quote:
      "Prashanthi's approach is incredibly warm and understanding. We felt safe from the very first session.",
    author: "Mark L., Parent",
  },
  {
    quote:
      "The parent training workshops gave me tools I use every single day. I finally feel like I understand what my daughter needs.",
    author: "Ananya R., Parent",
  },
];

export const faqs = [
  {
    question: "What should I expect during the first session?",
    answer:
      "The initial session is primarily for parents to discuss their concerns, background, and goals. We will then collaboratively decide on the best approach for your child.",
  },
  {
    question: "How long does therapy usually last?",
    answer:
      "The duration varies greatly depending on the child's needs and progress. Some issues can be addressed in a few weeks, while others may require longer-term support.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes, we offer secure telehealth sessions for certain types of counseling, particularly for adolescents and parent consultations.",
  },
  {
    question: "Is everything discussed kept confidential?",
    answer:
      "Yes. We take confidentiality very seriously. Information is only shared with parents in general, non-identifying terms, and with your consent. The only exceptions are mandated safety concerns.",
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
  address: "Online & In-person consultations by appointment",
  phone: "+91 98664 10936",
  email: "animaspace9@gmail.com",
  hours: "Mon – Sat: 9:00 AM – 6:00 PM (By appointment)",
};
