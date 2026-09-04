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

import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
dotenv.config()
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
      'Emotional Well-being & Personal Growth',
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
        title: 'Emotional Well-being & Personal Growth',
        description:
          'A holistic space for emotional healing, self-discovery, resilience, and inner well-being, supporting individuals as they process experiences, reconnect with themselves, and develop healthier ways of moving forward.',
        icon: '🌿',
        slug: 'emotional-well-being',
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

    pageHeroTitle: 'A Safe Space to Understand, Heal, and Grow.',
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
        title: 'Emotional Well-being & Personal Growth',
        description:
          'Emotional well-being & personal growth creates space for individuals to process experiences, reconnect with themselves, and develop a deeper understanding of their emotional world. It encourages self-discovery, emotional resilience, and inner well-being.',
        icon: '🌿',
        slug: 'emotional-well-being',
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
    _id: 'servicePage-emotional-well-being',
    _type: 'servicePage',
    title: 'Emotional Well-being & Personal Growth',
    slug: { _type: 'slug', current: 'emotional-well-being' },
    icon: '🌿',
    colorKey: 'rose',
    tagline: 'A holistic space for emotional well-being, self-discovery, and personal growth.',
    intro:
      'Emotional Well-being & Personal Growth creates space for individuals to process experiences, reconnect with themselves, and develop a deeper understanding of their emotional world. It encourages self-discovery, emotional resilience, and inner well-being while supporting healthier ways of navigating life\'s challenges. Every journey is personal, gradual, and individual.',
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
      'Individuals looking to process difficult experiences, develop greater self-awareness, reconnect with their inner life, and move towards emotional well-being and personal growth.',
    faqs: [
      {
        _key: 'hq1',
        _type: 'faqItem',
        question: 'How is Emotional Well-being & Personal Growth different from counselling?',
        answer:
          'Counselling tends to focus on specific emotional or psychological concerns. The emotional well-being space is a broader, more holistic journey — focused on self-discovery, inner well-being, and personal transformation. Both can complement each other.',
      },
      {
        _key: 'hq2',
        _type: 'faqItem',
        question: 'Do I need to have a specific concern to start?',
        answer:
          'No. Many individuals come simply feeling stuck, disconnected, or in search of greater clarity and meaning. You are welcome wherever you are on your journey.',
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
    googleMapsUrl: 'https://maps.google.com/?q=Hyderabad+Telangana',

    ctaHeading: 'Ready to start your journey?',
    ctaBody:
      'Ready to start your journey towards a healthier and happier life? Take the first step now. Fill the form, talk to our experts.',
  })

  // ── blogsPage ───────────────────────────────────────────────────────────────
  await upsert({
    _id: 'blogsPage',
    _type: 'blogsPage',
    pageHeroTitle: 'Blogs',
    pageHeroSubtitle:
      'Practical guidance, research-backed perspectives, and real-world tools — written by Prashanthi Simon.',
    newsletterHeading: 'More articles coming soon. Want to be notified?',
    newsletterSubtext:
      'Subscribe to receive new insights and practical tools for your family.',
  })

  // ── Helper to convert sections to Portable Text ─────────────────────────────
  function toPortableText(sections: { heading?: string; paragraphs: string[] }[]) {
    const blocks: any[] = []
    let keyIdx = 0
    for (const sec of sections) {
      if (sec.heading) {
        blocks.push({
          _key: `h_${++keyIdx}`,
          _type: 'block',
          style: 'h2',
          children: [{ _key: `s_${keyIdx}`, _type: 'span', text: sec.heading }],
        })
      }
      for (const p of sec.paragraphs) {
        blocks.push({
          _key: `p_${++keyIdx}`,
          _type: 'block',
          style: 'normal',
          children: [{ _key: `s_${keyIdx}`, _type: 'span', text: p }],
        })
      }
    }
    return blocks
  }

  // ── blogPost 1: Understanding Anxiety in Children ───────────────────────────
  await upsert({
    _id: 'blogPost-understanding-anxiety-in-children',
    _type: 'blogPost',
    title: 'Understanding Anxiety in Children: What Parents Need to Know',
    slug: { _type: 'slug', current: 'understanding-anxiety-in-children' },
    category: 'Anxiety',
    publishedAt: '2026-08-26',
    readTime: '3 min read',
    author: 'Prashanthi Simon',
    colorKey: 'sky',
    excerpt:
      'Anxiety is one of the most common challenges children face today. Learn how to spot the signs, respond with empathy, and know when to seek professional support.',
    body: toPortableText([
      {
        paragraphs: [
          'Children do not always say, “I feel anxious.” Instead, anxiety may appear as stomach aches before school, repeated questions about what might happen, difficulty sleeping, irritability, tears, avoidance, or a sudden need to stay close to a parent. One difficult day does not automatically mean that a child has an anxiety disorder. Anxiety is a human response to uncertainty or perceived danger. It becomes important to look more closely when the worry is persistent, unusually intense, or begins to interfere with school, friendships, family life, sleep, or ordinary activities.',
        ],
      },
      {
        heading: 'Look beyond the behaviour',
        paragraphs: [
          'A child who refuses to attend a birthday party may not be trying to be difficult. They may be worried about being judged, getting separated from a caregiver, or not knowing what will happen. A child who becomes angry when homework begins may be overwhelmed by fear of making mistakes. Behaviour is often the visible part of an emotional experience that the child does not yet have words for.',
          'Notice patterns rather than jumping to conclusions. Ask yourself: When does the worry appear? What seems to make it stronger? What helps the child feel safer? Tracking these details for a few days can help parents respond with understanding instead of reacting only to the surface behaviour.',
        ],
      },
      {
        heading: 'Respond with connection first',
        paragraphs: [
          'Start by getting physically and emotionally close. Use a calm voice and simple language: “I can see that this feels scary,” or “Something about tomorrow is worrying you.” Validation does not mean agreeing that something terrible will happen. It means showing the child that their feelings make sense from their point of view.',
          'Then help the child separate the feeling from the prediction. You might say, “Your worry is telling you that you will not manage. Let us look at what you can do if the worry arrives.” This gently builds confidence without demanding that the child stop feeling anxious immediately.',
          'Small, predictable steps are usually more helpful than sudden pressure. If school drop-off is difficult, a consistent morning routine, a brief goodbye ritual, and a planned check-in may provide more support than a long negotiation. Praise brave effort, not just a successful outcome: “You felt worried and still took one step.”',
        ],
      },
      {
        heading: 'When to seek support',
        paragraphs: [
          'Consider professional guidance when anxiety lasts for weeks, keeps returning, causes frequent physical complaints, disrupts sleep, prevents participation in age-appropriate activities, or places significant strain on the child or family. A qualified professional can help identify what is maintaining the anxiety and teach the child and caregivers practical coping strategies.',
          'The goal is not to remove every worry from childhood. It is to help children understand what they feel, experience safe support, and gradually discover that difficult feelings can be managed. With patience, predictable routines, and the right help when needed, anxiety can become a signal to listen to rather than a force that runs the whole family’s life.',
        ],
      },
    ]),
    reflectionQuote:
      'A child does not need a perfect parent. They need a steady adult who is willing to pause, listen, and help them take the next manageable step.',
    infographic: {
      _type: 'infographic',
      title: 'When Worry Speaks',
      summary: 'A calm four-step flow for families: Notice → Name → Nurture → Next step',
      steps: [
        {
          _key: 'st1',
          stepNumber: '01',
          title: 'Notice Patterns',
          description:
            'Observe body cues (tummy aches, sleep changes, clinginess) and note triggers without jumping to immediate conclusions.',
        },
        {
          _key: 'st2',
          stepNumber: '02',
          title: 'Name & Validate',
          description:
            "Use calm words: 'I can see this feels scary.' Help separate the anxious feeling from catastrophic predictions.",
        },
        {
          _key: 'st3',
          stepNumber: '03',
          title: 'Nurture Connection',
          description:
            'Listen without rushing and provide steady reassurance before trying to jump into problem-solving mode.',
        },
        {
          _key: 'st4',
          stepNumber: '04',
          title: 'Small Next Steps',
          description:
            'Take one manageable step together, praise brave efforts, and consult a professional if worry persistently limits life.',
        },
      ],
      altText:
        'Infographic showing how parents can respond to childhood anxiety: notice patterns, name and validate feelings, offer a small predictable step, and seek professional support when needed.',
    },
  })

  // ── blogPost 2: Screen Time & Mental Health ─────────────────────────────────
  await upsert({
    _id: 'blogPost-screen-time-and-mental-health',
    _type: 'blogPost',
    title: 'Screen Time & Mental Health: Finding the Right Balance',
    slug: { _type: 'slug', current: 'screen-time-and-mental-health' },
    category: 'Wellbeing',
    publishedAt: '2026-08-26',
    readTime: '3 min read',
    author: 'Prashanthi Simon',
    colorKey: 'pink',
    excerpt:
      'With screens ever-present in family life, what does the research actually say? We break down the evidence and share practical strategies for healthy boundaries.',
    body: toPortableText([
      {
        paragraphs: [
          'Screens are part of everyday life. Children and adolescents use them to learn, communicate, create, relax, and maintain friendships. That means the most useful question is rarely “Are screens good or bad?” A better question is: What is this screen use doing in this child’s life?',
          'Research describes a mixed picture. Digital activities can offer connection and support, while problematic use can also be linked with sleep disruption, reduced participation in offline life, and difficulty controlling use. The relationship often works in both directions: emotional difficulties may lead to more technology use, and certain patterns of technology use may then make well-being harder to protect.',
        ],
      },
      {
        heading: 'Focus on function, not only minutes',
        paragraphs: [
          'Two children may spend the same amount of time online and have very different experiences. One may be completing homework or talking to a trusted friend. Another may be scrolling late into the night, feeling worse after comparing themselves with others, or becoming distressed whenever the device is put away.',
          'Watch for the function and the after-effects. Does screen use leave the child restored, connected, and ready to return to daily life? Or does it regularly replace sleep, movement, meals, schoolwork, family conversations, and in-person relationships? Problematic use often appears through loss of control, withdrawal-like distress, neglect of offline activities, and friction in family life.',
        ],
      },
      {
        heading: 'Build boundaries together',
        paragraphs: [
          'Rules are easier to follow when children understand the reason behind them and have some voice in shaping them. Start with a family conversation rather than a sudden confiscation. Agree on a few visible boundaries: devices away during meals, a charging place outside the bedroom, a wind-down period before sleep, and protected time for schoolwork, movement, hobbies, and face-to-face connection.',
          'Be specific about transitions. Give a ten-minute reminder, finish at a natural stopping point where possible, and name what comes next: “The game ends after this round, then we are having dinner.” Adults also need to model the boundaries they expect. A family digital plan works best when it protects everyone’s attention, not only the child’s.',
          'Avoid treating every difficult reaction as proof of addiction. Children may protest a limit because stopping an enjoyable activity is hard. Look for the broader pattern over time. If a child repeatedly cannot reduce use, loses sleep, abandons important activities, or experiences significant distress, a conversation with a qualified professional may help.',
        ],
      },
      {
        heading: 'Aim for balance, not perfection',
        paragraphs: [
          'Healthy digital well-being is not a screen-free childhood. It is a life in which technology has a place without crowding out sleep, relationships, learning, play, and emotional recovery. Ask regularly: “Is this helping you feel connected or more drained?” and “What do you want your screen routine to make room for?”',
          'Small changes are meaningful. One device-free meal, one earlier charging time, or one shared outdoor activity can begin to reset the rhythm of a household. The goal is not to win a daily battle over screens. It is to help young people develop the awareness and skills to use technology without letting technology make every decision for them.',
        ],
      },
    ]),
    reflectionQuote:
      'Boundaries are most effective when they protect connection rather than punish children for needing it.',
    infographic: {
      _type: 'infographic',
      title: 'A Balanced Digital Day',
      summary: 'Technology should support life, not replace it.',
      steps: [
        {
          _key: 'st1',
          stepNumber: '01',
          title: 'Protect Sleep',
          description:
            'Keep chargers outside the bedroom and build a 30–60 minute screen-free wind-down buffer before bedtime.',
        },
        {
          _key: 'st2',
          stepNumber: '02',
          title: 'Mealtime Connection',
          description:
            'Designate family mealtimes as device-free zones to preserve attention, presence, and open conversation.',
        },
        {
          _key: 'st3',
          stepNumber: '03',
          title: 'Offline Life First',
          description:
            'Ensure physical movement, schoolwork, creative play, and face-to-face friendships have protected time daily.',
        },
        {
          _key: 'st4',
          stepNumber: '04',
          title: 'Evaluate the After-Effect',
          description:
            'Regularly ask whether screen activities leave your child feeling energized or drained and irritable.',
        },
      ],
      altText:
        'Infographic presenting a balanced digital day, balancing technology with sleep, connection, movement, learning, and offline enjoyment.',
    },
  })

  // ── blogPost 3: Talking to Your Child About Big Feelings ─────────────────────
  await upsert({
    _id: 'blogPost-talking-to-your-child-about-big-feelings',
    _type: 'blogPost',
    title: 'Talking to Your Child About Big Feelings',
    slug: { _type: 'slug', current: 'talking-to-your-child-about-big-feelings' },
    category: 'Parenting',
    publishedAt: '2026-08-26',
    readTime: '3 min read',
    author: 'Prashanthi Simon',
    colorKey: 'rose',
    excerpt:
      "Many parents feel at a loss when their child is overwhelmed by emotion. Here's a simple framework that helps children name, understand, and manage what they feel.",
    body: toPortableText([
      {
        paragraphs: [
          'When children are overwhelmed, adults often want to stop the crying, anger, fear, or frustration as quickly as possible. We may say, “Calm down,” “It is not a big deal,” or “There is nothing to be upset about.” These phrases usually come from care, but they can leave a child feeling misunderstood. Before children can manage a strong emotion, they often need help recognising what is happening inside them.',
          'A useful conversation can follow four gentle steps: Name, Notice, Need, Next.',
        ],
      },
      {
        heading: '1. Name the feeling',
        paragraphs: [
          'Begin with an observation rather than an accusation. “Your fists are tight and your voice is loud. I wonder if you are feeling angry.” You can offer a few possibilities without insisting that you are right: “Is it anger, disappointment, or worry?”',
          'Children may not know the exact word. That is okay. Start with basic language such as happy, sad, angry, scared, disappointed, embarrassed, or frustrated. A feelings chart can help, but your tone matters more than the perfect label.',
        ],
      },
      {
        heading: '2. Notice what the feeling is doing',
        paragraphs: [
          'Help the child connect emotion with body sensations, thoughts, and actions. Ask, “Where do you feel it in your body?” or “What happened just before the feeling became bigger?” This teaches the child that emotions have signals and patterns. It also creates a small pause between the feeling and the behaviour.',
          'Keep the conversation short during the peak of a meltdown. A dysregulated child may not be ready for a long explanation. First offer safety, space, water, a slower voice, or a quiet presence. Reflection can happen later, when the child’s body is calmer.',
        ],
      },
      {
        heading: '3. Discover the need',
        paragraphs: [
          'Every feeling carries information, even when the behaviour needs a limit. Anger may point to unfairness or frustration. Sadness may need comfort. Fear may need reassurance and a clear plan. Overwhelm may need fewer words and a break.',
          'Try asking, “What would help your body feel a little safer right now?” The answer may be a hug, quiet time, help with a task, or simply knowing that an adult will stay nearby. If physical aggression or unsafe behaviour occurs, hold the boundary calmly: “I will not let you hit. I will help you be safe.”',
        ],
      },
      {
        heading: '4. Choose the next small step',
        paragraphs: [
          'Do not expect a child to solve the entire problem while upset. Offer two manageable choices: “Would you like to sit here or take three slow breaths with me?” Later, help the child plan what to try next time. Praise the repair as well as the calm: “You were very upset, and you came back to talk. That took courage.”',
          'Children learn emotional regulation through repeated experiences with safe, steady adults. The aim is not to make difficult feelings disappear. It is to show that feelings can be named, listened to, and expressed without harming themselves or others.',
          'If intense emotions are frequent, last a long time, cause significant impairment, or are accompanied by safety concerns, professional support is appropriate. Seeking help is not a sign that a family has failed. It is one way of giving a child more tools and giving caregivers more support.',
        ],
      },
    ]),
    reflectionQuote:
      'Connection comes before correction. When a child feels understood, learning becomes easier.',
    infographic: {
      _type: 'infographic',
      title: "The Four N's for Big Feelings",
      summary: 'Name → Notice → Need → Next',
      steps: [
        {
          _key: 'st1',
          stepNumber: '01',
          title: '1. Name',
          description:
            "Put gentle words to the emotion: 'I wonder if you are feeling angry, sad, scared, or disappointed.'",
        },
        {
          _key: 'st2',
          stepNumber: '02',
          title: '2. Notice',
          description:
            'Identify body sensations (tight chest, clenched fists, stomach) and what triggered the surge.',
        },
        {
          _key: 'st3',
          stepNumber: '03',
          title: '3. Need',
          description:
            'Explore the underlying need: comfort, quiet time, help, reassurance, or a safe and steady limit.',
        },
        {
          _key: 'st4',
          stepNumber: '04',
          title: '4. Next',
          description:
            'Choose one small safe step together: deep breaths, a sip of water, or a quiet pause before re-engaging.',
        },
      ],
      altText:
        'Infographic showing a four-step framework for supporting children with big emotions: Name, Notice, Need, and Next.',
    },
  })

  console.log('\n✅  All done! Open Sanity Studio to see your pre-filled content.\n')
}

seed().catch((err) => {
  console.error('\n❌  Seed failed:', err)
  process.exit(1)
})
