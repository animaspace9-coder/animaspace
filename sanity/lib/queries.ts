import { defineQuery } from 'next-sanity'

// ── Site Settings (global) ────────────────────────────────────────────────────
export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0] {
    tagline,
    trustStats[] { value, label },
    phone,
    email,
    address,
    hours,
    bookingServiceOptions,
    whatsappNumber,
  }
`)

// ── Home Page ─────────────────────────────────────────────────────────────────
export const homePageQuery = defineQuery(`
  *[_type == "homePage"][0] {
    heroHeadline,
    heroSubHeadline,
    heroBadgeText,
    heroCtaText,
    heroCardItems,
    trustStats[] { value, label },
    ageGroupsTitle,
    ageGroups[] {
      id,
      title,
      description,
      character,
      bulletPoints,
    },
    offeringsTitle,
    offeringsSubtitle,
    offerings[] {
      title,
      description,
      icon,
      slug,
      colorKey,
      bulletPoints,
    },
    approachHeadline,
    approachDescription,
    teamSectionTitle,
    teamMember {
      name,
      role,
      bio,
      experience,
      "imageUrl": image.asset->url,
      qualifications,
      specialties,
    },
    testimonialsSectionTitle,
    testimonials[] { quote, author },
    faqSectionTitle,
    faqs[] { question, answer },
  }
`)

// ── About Page ────────────────────────────────────────────────────────────────
export const aboutPageQuery = defineQuery(`
  *[_type == "aboutPage"][0] {
    pageHeroTitle,
    pageHeroSubtitle,
    storyHeadline,
    storyParagraphs,
    coreValuesSectionTitle,
    coreValues[] { icon, title, description },
    teamSectionTitle,
    teamMember {
      name,
      role,
      bio,
      experience,
      "imageUrl": image.asset->url,
      qualifications,
      specialties,
    },
    visionHeadline,
    visionParagraphs,
    ctaHeading,
    ctaBody,
    ctaButtonText,
  }
`)

// ── Services Page ─────────────────────────────────────────────────────────────
export const servicesPageQuery = defineQuery(`
  *[_type == "servicesPage"][0] {
    pageHeroTitle,
    pageHeroSubtitle,
    sectionTitle,
    services[] {
      title,
      description,
      icon,
      slug,
      colorKey,
      bulletPoints,
    },
    ctaStripHeading,
    ctaStripBody,
    ctaStripButtonText,
  }
`)

// ── Service Sub-Page (by slug) ────────────────────────────────────────────────
export const servicePageQuery = defineQuery(`
  *[_type == "servicePage" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    icon,
    colorKey,
    tagline,
    intro,
    bulletPoints,
    whatToExpect,
    whoItsFor,
    faqs[] { question, answer },
  }
`)

// ── All service slugs (for generateStaticParams) ──────────────────────────────
export const allServiceSlugsQuery = defineQuery(`
  *[_type == "servicePage"] { "slug": slug.current }
`)

// ── Book Page ─────────────────────────────────────────────────────────────────
export const bookPageQuery = defineQuery(`
  *[_type == "bookPage"][0] {
    pageHeroTitle,
    pageHeroSubtitle,
    formTitle,
    formSubtitle,
    serviceDropdownOptions,
    modeOptions,
    stepsSectionTitle,
    steps[] { number, title, description },
  }
`)

// ── Contact Page ──────────────────────────────────────────────────────────────
export const contactPageQuery = defineQuery(`
  *[_type == "contactPage"][0] {
    pageHeroTitle,
    pageHeroSubtitle,
    phone,
    email,
    address,
    hours,
    googleMapsUrl,
    ctaHeading,
    ctaBody,
  }
`)

// ── Legacy generic page query (kept for backwards compat) ─────────────────────
export const pageQuery = defineQuery(`
  *[_type == "page" && slug.current == $slug][0] {
    title,
    seo,
    pageBuilder[]
  }
`)
