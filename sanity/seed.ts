/**
 * Anima Space — Sanity Seed Script
 * Pre-populates all page documents with the client's approved content.
 *
 * Run with:
 *   npx tsx sanity/seed.ts
 *
 * Requires SANITY_API_WRITE_TOKEN in .env.local
 * tsx auto-loads .env.local — no need for dotenv.
 */

import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !dataset || !token) {
  console.error('❌  Missing env vars. Ensure .env.local has NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_WRITE_TOKEN')
  process.exit(1)
}

console.log(`📡  Project: ${projectId}, Dataset: ${dataset}, Token starts: ${token.slice(0, 6)}...`)

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-08-19',
  token,
  useCdn: false,
})

// ─── Helper: create or replace a document ────────────────────────────────────
async function upsert(doc: { _id: string; _type: string; [key: string]: any }) {
  const result = await client.createOrReplace(doc)
  console.log(`✅  ${doc._type} — "${doc._id}" created/updated`)
  return result
}

// ─────────────────────────────────────────────────────────────────────────────
// SEED DATA
// ─────────────────────────────────────────────────────────────────────────────

async function seed() {
  console.log('\n🌱  Seeding Anima Space CMS...\n')

  // ── siteSettings ────────────────────────────────────────────────────────────
  await upsert({
    _id: 'siteSettings',
    _type: 'siteSettings',
    tagline: 'Well-being, Psychological Consulting & Counselling Centre',
    trustStats: [
      { _key: 'ts1', _type: 'statItem', value: '15+', label: 'Years Experience' },
      { _key: 'ts2', _type: 'statItem', value: '300+', label: 'Workshops Conducted' },
      { _key: 'ts3', _type: 'statItem', value: '50+', label: '5 Star Reviews' },
    ],
    phone: '+91 98664 10936',
    email: 'animaspace9@gmail.com',
    address: 'Online & In-person consultations by appointment',
    hours: 'Mon – Sat: 9:00 AM – 6:00 PM (By appointment)',
    bookingServiceOptions: [
      'Personal Counselling',
      'Career Counseling',
      'Child & Adolescent Counselling',
      'Couple Counselling',
      'Life Coaching',
      'Parental Guidance',
      'Training Services',
    ],
    whatsappNumber: '919866410936',
  })

  // ── homePage ────────────────────────────────────────────────────────────────
  await upsert({
    _id: 'homePage',
    _type: 'homePage',

    // 1. Hero
    heroHeadline: 'Where Understanding Begins, Growth Unfolds.',
    heroSubHeadline:
      'We provide psychological counselling, career counselling, coaching, and training for children, adolescents, and adults in a safe, confidential, and supportive environment.',
    heroBadgeText: 'Safe, confidential & compassionate care',
    heroCtaText: 'Book a Consultation',
    heroCardItems: [
      'Emotional & Psychological Well-being',
      'Child & Adolescent Support',
      'Career Guidance & Coaching',
    ],

    // 2. Trust Strip
    trustStats: [
      { _key: 'hs1', _type: 'statItem', value: '15+', label: 'Years Experience' },
      { _key: 'hs2', _type: 'statItem', value: '300+', label: 'Workshops Conducted' },
      { _key: 'hs3', _type: 'statItem', value: '50+', label: '5 Star Reviews' },
    ],

    // 3. Age Groups
    ageGroupsTitle: 'Supporting Children, Adolescents & Adults',
    ageGroups: [
      {
        _key: 'ag1',
        _type: 'ageGroup',
        id: 'children',
        title: 'Children',
        description:
          'Support for emotional, behavioural, developmental, and social concerns, helping children develop emotional awareness, confidence, resilience, and healthy coping skills.',
        character: '🧒',
        bulletPoints: [
          'Emotional awareness & regulation',
          'Behavioural & developmental concerns',
          'Confidence & resilience building',
          'Social skills & healthy coping',
        ],
      },
      {
        _key: 'ag2',
        _type: 'ageGroup',
        id: 'adolescents',
        title: 'Adolescents',
        description:
          'Guidance through academic pressure, emotional challenges, self-esteem, identity, relationships, and career decisions, with support for navigating the transition into adulthood.',
        character: '🧑‍🎓',
        bulletPoints: [
          'Academic pressure & exam stress',
          'Self-esteem & identity',
          'Relationships & social challenges',
          'Career decisions & life transitions',
        ],
      },
      {
        _key: 'ag3',
        _type: 'ageGroup',
        id: 'adults',
        title: 'Adults',
        description:
          'Support with emotional well-being, stress, personal challenges, relationships, life transitions, career concerns, and personal growth.',
        character: '🧑‍💼',
        bulletPoints: [
          'Emotional well-being & stress',
          'Relationships & life transitions',
          'Career concerns & growth',
          'Personal development',
        ],
      },
    ],

    // 4. Offerings
    offeringsTitle: 'Our Offerings',
    offeringsSubtitle:
      'At Anima Space, every offering is centred around one simple idea: when people are given the right space to understand themselves, they can discover new possibilities for growth.',
    offerings: [
      {
        _key: 'of1',
        _type: 'serviceCard',
        title: 'Counselling',
        description:
          'Professional psychological counselling for children, adolescents, and adults addressing concerns such as anxiety, stress, emotional difficulties, behavioural concerns, self-esteem, relationships, life transitions, and mental well-being.',
        icon: '💬',
        slug: 'counselling',
        colorKey: 'sky',
        bulletPoints: [
          'Anxiety and stress management',
          'Emotional and behavioural concerns',
          'Self-esteem and confidence',
          'Relationship and interpersonal concerns',
          'Life transitions and adjustment',
          'Child and adolescent counselling',
        ],
      },
      {
        _key: 'of2',
        _type: 'serviceCard',
        title: 'Coaching',
        description:
          'Individualised well-being and personal development coaching focused on self-awareness, confidence, goal-setting, communication, performance, and achieving meaningful personal and professional goals.',
        icon: '🎯',
        slug: 'coaching',
        colorKey: 'pink',
        bulletPoints: [
          'Personal development',
          'Well-being coaching',
          'Performance enhancement',
          'Goal setting and achievement',
          'Confidence building',
          'Communication and interpersonal skills',
          'Professional growth',
        ],
      },
      {
        _key: 'of3',
        _type: 'serviceCard',
        title: 'Healing',
        description:
          'A holistic space for emotional healing, self-discovery, resilience, and inner well-being, supporting individuals as they process experiences, reconnect with themselves, and develop healthier ways of moving forward.',
        icon: '🌿',
        slug: 'healing',
        colorKey: 'rose',
        bulletPoints: [
          'Emotional healing',
          'Self-discovery and self-awareness',
          'Emotional resilience',
          'Inner well-being',
          'Processing difficult experiences',
          'Personal growth',
          'Mindful living',
        ],
      },
      {
        _key: 'of4',
        _type: 'serviceCard',
        title: 'Career Counselling',
        description:
          'Guidance for academic and career decision-making, helping individuals understand their interests, strengths, abilities, values, and aspirations to make informed educational and professional choices.',
        icon: '🧭',
        slug: 'career-counselling',
        colorKey: 'mauve',
        bulletPoints: [
          'Career exploration',
          'Academic and course selection',
          'Interest and aptitude exploration',
          'Strength and skill identification',
          'Career planning',
          'Career transitions',
          'Educational and professional guidance',
        ],
      },
      {
        _key: 'of5',
        _type: 'serviceCard',
        title: 'Training',
        description:
          'Psychology and professional development training for schools, colleges, parents, educators, professionals, and organisations, covering mental health awareness, emotional intelligence, communication skills, and more.',
        icon: '📚',
        slug: 'training',
        colorKey: 'olive',
        bulletPoints: [
          'Mental health and psychological well-being',
          'Emotional intelligence',
          'Parenting and child development',
          'Student well-being',
          'Communication and interpersonal skills',
          'Leadership and professional development',
          'Workplace and organisational well-being',
        ],
      },
    ],

    // 5. Approach
    approachHeadline: 'Psychological Support. Personal Growth. Purposeful Living.',
    approachDescription:
      'At Anima Space, we believe that seeking support is a step towards greater self-awareness, resilience, well-being, and purposeful living. Whether you are looking for psychological counselling, career guidance, coaching, or professional training, Anima Space offers a space to understand where you are, discover where you want to go, and develop the tools to move forward.',

    // 6. Team / Prashanthi
    teamSectionTitle: 'Meet Prashanthi',
    teamMember: {
      _type: 'teamMember',
      name: 'Prashanthi Simon',
      role: 'Psychologist · Writer · Communications Trainer · Well-being Coach · Career Counsellor · Child Psychologist',
      experience: '15+ Years Experience',
      bio: 'With a background in Psychology and English, along with training in Child Psychology, Parenting Coaching, Clinical Research, Psychotherapy, and Soft skills training, Prashanthi Simon brings together psychological understanding, communication, education, and personal development in her work with individuals, families, students, educators, and organisations. As a writer and communications trainer, she also works in the areas of performance, communication, personal development, and well-being, helping individuals recognise their strengths and develop the confidence to navigate personal, academic, and professional challenges.',
      qualifications: [
        'Background in Psychology & English',
        'Trained in Child Psychology & Parenting Coaching',
        'Clinical Research & Psychotherapy Training',
        'Soft Skills & Communications Training',
      ],
      specialties: [
        'Child Psychology',
        'Well-being Coaching',
        'Career Counselling',
        'Communications Training',
        'Parenting Guidance',
      ],
    },

    // 7. Testimonials
    testimonialsSectionTitle: 'What Clients Say',
    testimonials: [
      {
        _key: 'tm1',
        _type: 'testimonial',
        quote:
          'Anima Space completely changed our family dynamic. My son is finally able to express his feelings without shutting down.',
        author: 'Parent',
      },
      {
        _key: 'tm2',
        _type: 'testimonial',
        quote:
          "Prashanthi's approach is incredibly warm and understanding. We felt safe from the very first session.",
        author: 'Parent',
      },
      {
        _key: 'tm3',
        _type: 'testimonial',
        quote:
          'The training sessions gave me tools I use every single day. I finally feel confident navigating challenges with my students.',
        author: 'Educator',
      },
    ],

    // 8. FAQ
    faqSectionTitle: 'Frequently Asked Questions',
    faqs: [
      {
        _key: 'fq1',
        _type: 'faqItem',
        question: 'What should I expect during the first session?',
        answer:
          'The initial session is a conversation — a space to share your concerns, background, and goals. We listen carefully and work together to understand the best pathway forward for you or your child.',
      },
      {
        _key: 'fq2',
        _type: 'faqItem',
        question: 'Do you offer online sessions?',
        answer:
          'Yes, we offer secure online sessions for counselling, coaching, and career guidance. In-clinic sessions are also available at our Hyderabad centre.',
      },
      {
        _key: 'fq3',
        _type: 'faqItem',
        question: 'Is everything discussed kept confidential?',
        answer:
          'Yes. We take confidentiality very seriously. All sessions are conducted in a safe, confidential, and non-judgemental space. Information is only shared with relevant parties with your consent.',
      },
      {
        _key: 'fq4',
        _type: 'faqItem',
        question: 'Who can benefit from Anima Space services?',
        answer:
          'Our services support children, adolescents, and adults. Whether you are navigating emotional challenges, academic decisions, career transitions, or personal growth, we have a pathway that fits your needs.',
      },
    ],
  })

  // ── aboutPage ───────────────────────────────────────────────────────────────
  await upsert({
    _id: 'aboutPage',
    _type: 'aboutPage',

    pageHeroTitle: 'Where Understanding Begins, Growth Unfolds.',
    pageHeroSubtitle:
      'Anima Space was founded with the vision to create a safe space where psychological well-being, personal growth, and purposeful living come together.',

    storyHeadline: 'The Vision Behind Anima Space',
    storyParagraphs: [
      'Anima means life, and Space represents what we strive to create: a safe, confidential, compassionate, and non-judgemental space where you can speak freely, be heard, and feel understood.',
      'Anima Space began with a vision to bring together psychological well-being, personal growth, emotional healing, and professional development in one meaningful space. What began as a desire to make psychological support more accessible has grown into a platform offering counselling, coaching, healing, career guidance, and training for individuals and organisations.',
      'It is built on the belief that every individual deserves to be heard, understood, supported, and empowered.',
    ],

    coreValuesSectionTitle: 'What guides us',
    coreValues: [
      {
        _key: 'cv1',
        _type: 'coreValue',
        icon: '🤍',
        title: 'Safe & Confidential',
        description:
          'Every session is held in a safe, confidential, compassionate, and non-judgemental space where you can speak freely.',
      },
      {
        _key: 'cv2',
        _type: 'coreValue',
        icon: '🌱',
        title: 'Growth-Centred',
        description:
          'We believe every individual has the capacity for growth. Our goal is to help you recognise your strengths and unlock your potential.',
      },
      {
        _key: 'cv3',
        _type: 'coreValue',
        icon: '🤝',
        title: 'Personalised Support',
        description:
          'We understand that every individual is unique. Our approach is tailored to your specific needs, goals, and life stage.',
      },
      {
        _key: 'cv4',
        _type: 'coreValue',
        icon: '💡',
        title: 'Purposeful Living',
        description:
          'We help individuals move from understanding themselves to living with greater clarity, confidence, and purpose.',
      },
    ],

    teamSectionTitle: 'Meet Prashanthi Simon',
    teamMember: {
      _type: 'teamMember',
      name: 'Prashanthi Simon',
      role: 'Psychologist · Writer · Communications Trainer · Well-being Coach · Career Counsellor · Child Psychologist',
      experience: '15+ Years Experience',
      bio: 'With a background in Psychology and English, along with training in Child Psychology, Parenting Coaching, Clinical Research, Psychotherapy, and Soft skills training, Prashanthi Simon brings together psychological understanding, communication, education, and personal development in her work with individuals, families, students, educators, and organisations. As a writer and communications trainer, she also works in the areas of performance, communication, personal development, and well-being, helping individuals recognise their strengths and develop the confidence to navigate personal, academic, and professional challenges.',
      qualifications: [
        'Background in Psychology & English',
        'Trained in Child Psychology & Parenting Coaching',
        'Clinical Research & Psychotherapy Training',
        'Soft Skills & Communications Training',
      ],
      specialties: [
        'Child Psychology',
        'Well-being Coaching',
        'Career Counselling',
        'Communications Training',
        'Parenting Guidance',
      ],
    },

    visionHeadline: 'Psychological Support. Personal Growth. Purposeful Living.',
    visionParagraphs: [
      'At Anima Space, we provide psychological counselling, career counselling, coaching, and training for children, adolescents, and adults in a safe, confidential, and supportive environment.',
      'We support individuals in navigating emotional challenges, behavioural concerns, academic and career decisions, personal development, and life transitions through personalised and professional guidance.',
    ],

    ctaHeading: 'Ready to start your journey?',
    ctaBody:
      'Whether you are looking for counselling, coaching, career guidance, or training — we are here to help. Take the first step today.',
    ctaButtonText: 'Book a Consultation',
  })

  // ── servicesPage ────────────────────────────────────────────────────────────
  await upsert({
    _id: 'servicesPage',
    _type: 'servicesPage',

    pageHeroTitle: 'A Space to Understand. A Space to Grow.',
    pageHeroSubtitle:
      'Our services are designed to support children, adolescents, and adults through different emotional, psychological, personal, academic, and professional challenges.',

    sectionTitle: 'Our Services',
    services: [
      {
        _key: 'sv1',
        _type: 'serviceCard',
        title: 'Counselling',
        description:
          'Psychological counselling provides a professional and confidential space to understand thoughts, emotions, behaviours, and personal experiences. Our counselling services are tailored to children, adolescents, and adults based on their individual needs.',
        icon: '💬',
        slug: 'counselling',
        colorKey: 'sky',
        bulletPoints: [
          'Anxiety and stress management',
          'Emotional and behavioural concerns',
          'Self-esteem and confidence',
          'Relationship and interpersonal concerns',
          'Life transitions and adjustment',
          'Child and adolescent counselling',
        ],
      },
      {
        _key: 'sv2',
        _type: 'serviceCard',
        title: 'Coaching',
        description:
          'Coaching is a structured, goal-oriented process that helps individuals recognise their strengths, overcome barriers, and move towards meaningful personal and professional goals. It is designed to help individuals turn potential into purposeful action.',
        icon: '🎯',
        slug: 'coaching',
        colorKey: 'pink',
        bulletPoints: [
          'Personal development',
          'Well-being coaching',
          'Performance enhancement',
          'Goal setting and achievement',
          'Confidence building',
          'Communication and interpersonal skills',
          'Professional growth',
        ],
      },
      {
        _key: 'sv3',
        _type: 'serviceCard',
        title: 'Healing',
        description:
          'Healing creates space for individuals to process experiences, reconnect with themselves, and develop a deeper understanding of their emotional world. It encourages self-discovery, emotional resilience, and inner well-being.',
        icon: '🌿',
        slug: 'healing',
        colorKey: 'rose',
        bulletPoints: [
          'Emotional healing',
          'Self-discovery and self-awareness',
          'Emotional resilience',
          'Inner well-being',
          'Processing difficult experiences',
          'Personal growth',
          'Mindful living',
        ],
      },
      {
        _key: 'sv4',
        _type: 'serviceCard',
        title: 'Career Counselling',
        description:
          'Career counselling helps individuals make informed decisions about their academic and professional futures by understanding themselves and exploring suitable opportunities. The process supports greater clarity and confidence in educational and career planning.',
        icon: '🧭',
        slug: 'career-counselling',
        colorKey: 'mauve',
        bulletPoints: [
          'Career exploration',
          'Academic and course selection',
          'Interest and aptitude exploration',
          'Strength and skill identification',
          'Career planning',
          'Career transitions',
          'Educational and professional guidance',
        ],
      },
      {
        _key: 'sv5',
        _type: 'serviceCard',
        title: 'Training',
        description:
          'Our training programmes translate psychological knowledge into practical skills for individuals, educational institutions, and organisations. We offer customised workshops, seminars, and development programmes based on the specific needs of each group.',
        icon: '📚',
        slug: 'training',
        colorKey: 'olive',
        bulletPoints: [
          'Mental health and psychological well-being',
          'Emotional intelligence',
          'Parenting and child development',
          'Student well-being',
          'Communication and interpersonal skills',
          'Leadership and professional development',
          'Workplace and organisational well-being',
        ],
      },
    ],

    ctaStripHeading: 'Book a Consultation to explore our services',
    ctaStripBody:
      'Not sure which service is right for you? Book an introductory consultation. We will listen, ask the right questions, and guide you to the best pathway — no pressure, no commitment.',
    ctaStripButtonText: 'Book a Consultation',
  })

  // ── servicePages (5 sub-pages) ───────────────────────────────────────────────

  await upsert({
    _id: 'servicePage-counselling',
    _type: 'servicePage',
    title: 'Counselling',
    slug: { _type: 'slug', current: 'counselling' },
    icon: '💬',
    colorKey: 'sky',
    tagline: 'A safe and confidential space to explore thoughts, emotions, and personal challenges.',
    intro:
      'Psychological counselling provides a professional and confidential space to understand thoughts, emotions, behaviours, and personal experiences. Our counselling services are tailored to children, adolescents, and adults based on their individual needs and concerns. The focus is on strengthening emotional well-being, self-awareness, resilience, and healthy coping.',
    bulletPoints: [
      'Anxiety and stress management',
      'Emotional and behavioural concerns',
      'Self-esteem and confidence',
      'Relationship and interpersonal concerns',
      'Life transitions and adjustment',
      'Child and adolescent counselling',
    ],
    whatToExpect: [
      'An initial consultation to understand your needs and concerns',
      'Regular confidential sessions with Prashanthi Simon',
      'A personalised support plan reviewed and adjusted as needed',
      'A safe, non-judgemental space to speak freely',
    ],
    whoItsFor:
      'Children, adolescents, and adults experiencing anxiety, stress, emotional difficulties, self-esteem concerns, relationship challenges, or life transitions.',
    faqs: [
      {
        _key: 'cq1',
        _type: 'faqItem',
        question: 'How many sessions will I need?',
        answer:
          'Every individual is different. Some concerns can be addressed in a few sessions; others benefit from longer-term support. We will give you an honest assessment after the initial consultation.',
      },
      {
        _key: 'cq2',
        _type: 'faqItem',
        question: 'Is everything discussed kept confidential?',
        answer:
          'Yes. All sessions are held in a safe and confidential space. Information is only shared with relevant parties with your consent.',
      },
    ],
  })

  await upsert({
    _id: 'servicePage-coaching',
    _type: 'servicePage',
    title: 'Coaching',
    slug: { _type: 'slug', current: 'coaching' },
    icon: '🎯',
    colorKey: 'pink',
    tagline: 'Unlock your personal and professional potential.',
    intro:
      'Coaching is a structured, goal-oriented process that helps individuals recognise their strengths, overcome barriers, and move towards meaningful personal and professional goals. Our approach combines self-awareness, motivation, performance, and practical strategies for sustainable growth. It is designed to help individuals turn potential into purposeful action.',
    bulletPoints: [
      'Personal development',
      'Well-being coaching',
      'Performance enhancement',
      'Goal setting and achievement',
      'Confidence building',
      'Communication and interpersonal skills',
      'Professional growth',
    ],
    whatToExpect: [
      'A values and goals session to understand what matters most to you',
      'Structured skill-building and action-planning between sessions',
      'Tools for managing performance pressure and setbacks',
      'Practical strategies for sustainable personal and professional growth',
    ],
    whoItsFor:
      'Individuals who want to build self-awareness, develop confidence, improve communication, manage performance pressure, or work towards meaningful personal and professional goals.',
    faqs: [
      {
        _key: 'coq1',
        _type: 'faqItem',
        question: 'What is the difference between coaching and counselling?',
        answer:
          'Counselling focuses on understanding and processing emotional challenges. Coaching is present- and future-focused — it is about developing skills and working towards goals. We will recommend the right approach after an initial consultation.',
      },
      {
        _key: 'coq2',
        _type: 'faqItem',
        question: 'Can coaching help with academic or career stress?',
        answer:
          'Yes. We work on mindset, planning strategies, and practical skills specifically around academic performance, career decisions, and professional challenges.',
      },
    ],
  })

  await upsert({
    _id: 'servicePage-healing',
    _type: 'servicePage',
    title: 'Healing',
    slug: { _type: 'slug', current: 'healing' },
    icon: '🌿',
    colorKey: 'rose',
    tagline: 'A holistic space for emotional healing, self-discovery, and inner well-being.',
    intro:
      'Healing creates space for individuals to process experiences, reconnect with themselves, and develop a deeper understanding of their emotional world. It encourages self-discovery, emotional resilience, and inner well-being while supporting healthier ways of navigating life\'s challenges. Every healing journey is personal, gradual, and individual.',
    bulletPoints: [
      'Emotional healing',
      'Self-discovery and self-awareness',
      'Emotional resilience',
      'Inner well-being',
      'Processing difficult experiences',
      'Personal growth',
      'Mindful living',
    ],
    whatToExpect: [
      'A safe, compassionate space to process your experiences at your own pace',
      'Guided self-discovery and emotional exploration',
      'Support in developing healthier ways of navigating challenges',
      'A deeply personal and non-judgemental approach',
    ],
    whoItsFor:
      'Individuals looking to process difficult experiences, develop greater self-awareness, reconnect with their inner life, and move towards emotional well-being and resilience.',
    faqs: [
      {
        _key: 'hq1',
        _type: 'faqItem',
        question: 'How is healing different from counselling?',
        answer:
          'Counselling tends to focus on specific emotional or psychological concerns. The healing space is a broader, more holistic journey — focused on self-discovery, inner well-being, and personal transformation. Both can complement each other.',
      },
      {
        _key: 'hq2',
        _type: 'faqItem',
        question: 'Do I need to have a specific concern to start?',
        answer:
          'No. Many individuals come to the healing space simply feeling stuck, disconnected, or in search of greater clarity and meaning. You are welcome wherever you are on your journey.',
      },
    ],
  })

  await upsert({
    _id: 'servicePage-career-counselling',
    _type: 'servicePage',
    title: 'Career Counselling',
    slug: { _type: 'slug', current: 'career-counselling' },
    icon: '🧭',
    colorKey: 'mauve',
    tagline: 'Helping you make informed decisions about your academic and professional future.',
    intro:
      'Career counselling helps individuals make informed decisions about their academic and professional futures by understanding themselves and exploring suitable opportunities. Through personalised guidance, individuals can identify their interests, abilities, strengths, values, and aspirations. The process supports greater clarity and confidence in educational and career planning.',
    bulletPoints: [
      'Career exploration',
      'Academic and course selection',
      'Interest and aptitude exploration',
      'Strength and skill identification',
      'Career planning',
      'Career transitions',
      'Educational and professional guidance',
    ],
    whatToExpect: [
      'An in-depth exploration of your interests, strengths, values, and aspirations',
      'Psychometric and interest assessments where relevant',
      'Personalised guidance on academic pathways and career options',
      'Support for career transitions and professional decisions',
    ],
    whoItsFor:
      'Students choosing academic pathways, individuals planning their career, adults navigating career changes, and anyone seeking greater clarity about their professional direction.',
    faqs: [
      {
        _key: 'ccq1',
        _type: 'faqItem',
        question: 'Is career counselling only for students?',
        answer:
          'No. Career counselling is equally relevant for working professionals exploring career changes, adults seeking greater clarity about their professional path, and individuals navigating transitions at any stage of life.',
      },
      {
        _key: 'ccq2',
        _type: 'faqItem',
        question: 'Do you use psychometric assessments?',
        answer:
          'Where relevant, we use interest and aptitude assessments as a tool for self-understanding — not as a verdict. The insights are used to support a broader, personalised career exploration process.',
      },
    ],
  })

  await upsert({
    _id: 'servicePage-training',
    _type: 'servicePage',
    title: 'Training',
    slug: { _type: 'slug', current: 'training' },
    icon: '📚',
    colorKey: 'olive',
    tagline: 'Learn. Develop. Transform.',
    intro:
      'Our training programmes translate psychological knowledge into practical skills for individuals, educational institutions, and organisations. We offer customised workshops, seminars, and development programmes based on the specific needs of each group. The goal is to strengthen awareness, capabilities, communication, and overall well-being.',
    bulletPoints: [
      'Mental health and psychological well-being',
      'Emotional intelligence',
      'Parenting and child development',
      'Student well-being',
      'Communication and interpersonal skills',
      'Leadership and professional development',
      'Workplace and organisational well-being',
    ],
    whatToExpect: [
      'Customised workshops and seminars tailored to your group\'s specific needs',
      'Practical, skills-based content grounded in psychological knowledge',
      'Group or individual training formats available',
      'Programmes for schools, colleges, parents, educators, professionals, and organisations',
    ],
    whoItsFor:
      'Schools, colleges, educators, parents, professionals, and organisations seeking training in mental health awareness, emotional intelligence, communication, leadership, and well-being.',
    faqs: [
      {
        _key: 'tq1',
        _type: 'faqItem',
        question: 'Do you offer training for schools and colleges?',
        answer:
          'Yes. We offer customised training programmes for school staff, college educators, and student groups — covering mental health awareness, student well-being, emotional intelligence, and communication skills.',
      },
      {
        _key: 'tq2',
        _type: 'faqItem',
        question: 'Can organisations book training programmes?',
        answer:
          'Yes. We work with organisations to design and deliver training programmes focused on workplace well-being, leadership, emotional intelligence, and organisational development.',
      },
    ],
  })

  // ── bookPage ────────────────────────────────────────────────────────────────
  await upsert({
    _id: 'bookPage',
    _type: 'bookPage',

    pageHeroTitle: 'Book Your Consultation',
    pageHeroSubtitle:
      'Fill the form below to book a consultation with Prashanthi Simon. Talk to our experts and take the first step towards a healthier and happier life.',

    formTitle: 'Book Your Consultation',
    formSubtitle:
      'Ready to start your journey towards a healthier and happier life? Take the first step now. Fill the form and talk to our experts.',
    serviceDropdownOptions: [
      'Personal Counselling',
      'Career Counseling',
      'Child & Adolescent Counselling',
      'Couple Counselling',
      'Life Coaching',
      'Parental Guidance',
      'Training Services',
    ],
    modeOptions: ['Online', 'Offline'],

    stepsSectionTitle: 'What happens after you book',
    steps: [
      {
        _key: 'st1',
        _type: 'step',
        number: '01',
        title: 'Select Your Service & Mode',
        description:
          'Choose your service and preferred mode — Online Video Call or In-Clinic at our Hyderabad centre.',
      },
      {
        _key: 'st2',
        _type: 'step',
        number: '02',
        title: 'Pick Your Date & Time',
        description:
          'Select your preferred date and time slot for your consultation session.',
      },
      {
        _key: 'st3',
        _type: 'step',
        number: '03',
        title: 'Receive Confirmation',
        description:
          'You will receive a confirmation with session details, video call link (for online), or clinic location (for in-person).',
      },
    ],
  })

  // ── contactPage ─────────────────────────────────────────────────────────────
  await upsert({
    _id: 'contactPage',
    _type: 'contactPage',

    pageHeroTitle: 'Get in Touch',
    pageHeroSubtitle:
      'We are here to help. Reach out to us with any questions, and we will guide you to the right support.',

    phone: '+91 98664 10936',
    email: 'animaspace9@gmail.com',
    address: 'Online & In-person consultations by appointment, Hyderabad',
    hours: 'Mon – Sat: 9:00 AM – 6:00 PM (By appointment)',
    googleMapsUrl: 'https://maps.google.com/?q=Jubilee+Hills+Hyderabad',

    ctaHeading: 'Ready to start your journey?',
    ctaBody:
      'Ready to start your journey towards a healthier and happier life? Take the first step now. Fill the form, talk to our experts.',
  })

  console.log('\n✅  All done! Open Sanity Studio to see your pre-filled content.\n')
}

seed().catch((err) => {
  console.error('\n❌  Seed failed:', err)
  process.exit(1)
})
