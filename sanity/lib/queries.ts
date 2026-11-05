import { defineQuery } from 'next-sanity'

// ── Site Settings (global) ────────────────────────────────────────────────────
export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0] {
    tagline,
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
    "teamMember": select(
      *[_type == "aboutPage"][0]._updatedAt > _updatedAt && defined(*[_type == "aboutPage"][0].teamMember.image.asset) => {
        "name": coalesce(*[_type == "aboutPage"][0].teamMember.name, teamMember.name),
        "role": coalesce(*[_type == "aboutPage"][0].teamMember.role, teamMember.role),
        "bio": coalesce(*[_type == "aboutPage"][0].teamMember.bio, teamMember.bio),
        "experience": coalesce(*[_type == "aboutPage"][0].teamMember.experience, teamMember.experience),
        "imageUrl": coalesce(*[_type == "aboutPage"][0].teamMember.image.asset->url, teamMember.image.asset->url),
        "qualifications": coalesce(*[_type == "aboutPage"][0].teamMember.qualifications, teamMember.qualifications),
        "specialties": coalesce(*[_type == "aboutPage"][0].teamMember.specialties, teamMember.specialties),
      },
      {
        "name": coalesce(teamMember.name, *[_type == "aboutPage"][0].teamMember.name),
        "role": coalesce(teamMember.role, *[_type == "aboutPage"][0].teamMember.role),
        "bio": coalesce(teamMember.bio, *[_type == "aboutPage"][0].teamMember.bio),
        "experience": coalesce(teamMember.experience, *[_type == "aboutPage"][0].teamMember.experience),
        "imageUrl": coalesce(teamMember.image.asset->url, *[_type == "aboutPage"][0].teamMember.image.asset->url),
        "qualifications": coalesce(teamMember.qualifications, *[_type == "aboutPage"][0].teamMember.qualifications),
        "specialties": coalesce(teamMember.specialties, *[_type == "aboutPage"][0].teamMember.specialties),
      }
    ),
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
    "teamMember": select(
      *[_type == "homePage"][0]._updatedAt > _updatedAt && defined(*[_type == "homePage"][0].teamMember.image.asset) => {
        "name": coalesce(*[_type == "homePage"][0].teamMember.name, teamMember.name),
        "role": coalesce(*[_type == "homePage"][0].teamMember.role, teamMember.role),
        "bio": coalesce(*[_type == "homePage"][0].teamMember.bio, teamMember.bio),
        "experience": coalesce(*[_type == "homePage"][0].teamMember.experience, teamMember.experience),
        "imageUrl": coalesce(*[_type == "homePage"][0].teamMember.image.asset->url, teamMember.image.asset->url),
        "qualifications": coalesce(*[_type == "homePage"][0].teamMember.qualifications, teamMember.qualifications),
        "specialties": coalesce(*[_type == "homePage"][0].teamMember.specialties, teamMember.specialties),
      },
      {
        "name": coalesce(teamMember.name, *[_type == "homePage"][0].teamMember.name),
        "role": coalesce(teamMember.role, *[_type == "homePage"][0].teamMember.role),
        "bio": coalesce(teamMember.bio, *[_type == "homePage"][0].teamMember.bio),
        "experience": coalesce(teamMember.experience, *[_type == "homePage"][0].teamMember.experience),
        "imageUrl": coalesce(teamMember.image.asset->url, *[_type == "homePage"][0].teamMember.image.asset->url),
        "qualifications": coalesce(teamMember.qualifications, *[_type == "homePage"][0].teamMember.qualifications),
        "specialties": coalesce(teamMember.specialties, *[_type == "homePage"][0].teamMember.specialties),
      }
    ),
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

// ── Blogs Overview Page & Post List ──────────────────────────────────────────
export const blogsPageQuery = defineQuery(`
  {
    "page": *[_type == "blogsPage"][0] {
      pageHeroTitle,
      pageHeroSubtitle,
      newsletterHeading,
      newsletterSubtext,
    },
    "posts": *[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      category,
      publishedAt,
      readTime,
      author,
      colorKey,
      excerpt,
      "imageUrl": mainImage.asset->url,
      reflectionQuote,
    }
  }
`)

// ── Single Blog Post Detail by Slug ──────────────────────────────────────────
export const blogPostBySlugQuery = defineQuery(`
  {
    "post": *[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      category,
      publishedAt,
      readTime,
      author,
      colorKey,
      excerpt,
      "imageUrl": mainImage.asset->url,
      body,
      reflectionQuote,
      infographic {
        title,
        summary,
        steps[] {
          stepNumber,
          title,
          description
        },
        altText
      },
      "infographicImageUrl": infographicImage.asset->url,
      "infographicImageAlt": infographicImage.alt,
      seo {
        metaTitle,
        metaDescription
      }
    },
    "relatedPosts": *[_type == "blogPost" && slug.current != $slug] | order(publishedAt desc)[0...3] {
      _id,
      title,
      "slug": slug.current,
      category,
      publishedAt,
      readTime,
      author,
      colorKey,
      excerpt,
      "imageUrl": mainImage.asset->url
    }
  }
`)

// ── All Blog Slugs (for generateStaticParams) ────────────────────────────────
export const allBlogSlugsQuery = defineQuery(`
  *[_type == "blogPost"] { "slug": slug.current }
`)

// ── Legacy generic page query (kept for backwards compat) ─────────────────────
export const pageQuery = defineQuery(`
  *[_type == "page" && slug.current == $slug][0] {
    title,
    seo,
    pageBuilder[]
  }
`)
