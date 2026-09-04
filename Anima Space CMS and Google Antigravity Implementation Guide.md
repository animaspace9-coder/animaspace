# Anima Space CMS and Google Antigravity Implementation Guide

## Purpose

This guide converts the current Anima Space website into a **non-technical, editor-friendly Sanity CMS**. It is based on an inspection of `https://animaspace.vercel.app/` and its linked routes on 4 September 2026.

The desired experience is that a person can open Sanity Studio, understand where every piece of website content lives, edit it without touching code, preview the result, and publish safely. Google Antigravity should use the same Sanity project and API as the website so that edits never diverge between the CMS, the generated code, and the live site.

> **Important ownership rule:** Sanity is the canonical content database. The website reads from Sanity. Antigravity may create or update Sanity documents through the Sanity API, but it must not keep a second copy of production content in source files, JSON, local state, or a separate database.

---

## 1. Observed website structure

### Main navigation

| Navigation label | Route | CMS representation |
|---|---|---|
| Home | `/` | Singleton: **Home Page** |
| About Us | `/about` | Singleton: **About Page** |
| Our Services | `/services` | Singleton: **Services Landing Page** |
| Blogs | `/blog` | Collection: **Blog Posts** + Blog Settings |
| Contact | `/contact` | Singleton: **Contact Page** |
| Book Session | `/book` | Singleton: **Booking Page** |

### Service routes

| Service | Route |
|---|---|
| Psychological Counselling | `/services/counselling` |
| Career Counselling | `/services/career-counselling` |
| Coaching | `/services/coaching` |
| Training | `/services/training` |
| Emotional Well-being & Personal Growth | `/services/emotional-well-being` |

### Homepage sections observed

1. Hero: “Where Understanding Begins, Growth Unfolds.”
2. Primary calls to action: Book a Consultation, WhatsApp Us, Call Us.
3. “What We Can Help With” summary cards.
4. Experience, workshops, and review metrics.
5. Founder section for Prashanthi Simon.
6. Four-step “How It Works” process.
7. Vision and philosophy.
8. Tailored care for Children, Adolescents, and Adults.
9. Areas of focus.
10. Five service cards.
11. Frequently Asked Questions.
12. Closing philosophy and contact CTA.
13. Footer navigation, email, phone, privacy, and disclaimer links.

### Existing contact details observed

- Phone: `+91 98664 10936`
- Email: `animaspace9@gmail.com`
- WhatsApp: `https://wa.me/919866410936`
- Founder: Prashanthi Simon
- Website: Anima Space

Confirm these values before publishing because phone numbers, emails, and legal links are operational content.

---

## 2. Recommended Sanity Studio structure

Organize the Studio sidebar into clear groups. Editors should not see a flat list of technical document types.

### Studio groups

**Website Settings**

- Site Settings
- Navigation Settings
- Contact Settings
- SEO Defaults
- Social Links

**Pages**

- Home Page
- About Page
- Services Landing Page
- Contact Page
- Booking Page
- Privacy Policy
- Disclaimer

**Services**

- All Services
- Audience Profiles
- Areas of Focus

**Content**

- Blog Posts
- FAQs
- Testimonials or Reviews
- Statistics / Impact Metrics

**Media**

- Founder Profile
- Brand Assets
- Illustration and Section Images

Use singleton documents for pages that should exist only once. Use collections for services, FAQs, blog posts, testimonials, and reusable cards.

---

## 3. Content model

### 3.1 Site Settings — singleton

Fields:

- `siteName` — text; default: `Anima Space`
- `siteTagline` — text; default: `Heal | Grow | Explore`
- `logo` — image with hotspot/crop
- `favicon` — image
- `defaultSocialImage` — image
- `primaryBrandColor` — color
- `secondaryBrandColor` — color
- `footerDescription` — rich text
- `copyrightText` — text
- `enableFloatingWhatsApp` — boolean
- `lastReviewedAt` — date

Editor help text: “Global brand details used across the whole website. Change these here instead of editing individual pages.”

### 3.2 Contact Settings — singleton

Fields:

- `phoneDisplay` — text
- `phoneE164` — text; validation should require a complete international number
- `email` — email
- `whatsappNumber` — text
- `whatsappMessage` — text
- `address` — text or rich text, optional
- `onlineSessionsAvailable` — boolean
- `inPersonSessionsAvailable` — boolean
- `bookingInstructions` — rich text
- `contactFormRecipient` — email
- `officeHours` — array of day/time rows

Create preview helpers so the editor sees “Phone, email, and WhatsApp” rather than technical field names.

### 3.3 Navigation Settings — singleton

Fields:

- `primaryLinks` — ordered array of link objects
- `headerCta` — reusable CTA object
- `footerLinks` — ordered array of link objects
- `showSearch` — boolean

Each link object should contain:

- `label` — required text
- `linkType` — internal page, service, blog, external URL, phone, email, WhatsApp
- `internalReference` — reference, shown only when link type is internal
- `externalUrl` — URL, shown only when link type is external
- `openInNewTab` — boolean
- `visible` — boolean

Do not ask editors to type internal URLs manually when a reference can be selected.

### 3.4 Home Page — singleton

Create a visual array or clearly separated field groups in this order:

1. **Hero**
   - eyebrow: `Safe, confidential & compassionate care`
   - title: `Where Understanding Begins, Growth Unfolds.`
   - description
   - hero image
   - primary CTA
   - secondary CTA
   - phone CTA
2. **Help Summary**
   - section heading
   - repeatable summary cards
3. **Impact Metrics**
   - repeatable metric rows: value, label, optional icon
   - mark values as “needs confirmation” where the existing site currently shows `0+`
4. **Founder Preview**
   - reference to Founder Profile
   - visible biography excerpt
   - CTA
5. **How It Works Preview**
   - repeatable numbered step cards
6. **Vision and Philosophy Preview**
   - heading, body, optional image
7. **Tailored Care**
   - repeatable audience cards referencing Audience Profile documents
8. **Areas of Focus Preview**
   - ordered references to Focus Area documents
9. **Services Preview**
   - ordered references to Service documents
10. **FAQ Preview**
   - selected FAQ references
11. **Closing CTA**
   - heading, body, buttons

Each section should have `enabled` and `displayOrder` where appropriate. This allows an editor to hide or reorder a section without deleting its content.

### 3.5 Founder Profile — singleton or one reusable document

Fields:

- `name`: Prashanthi Simon
- `portrait`: image
- `badgeText`: `15+ Years Experience`
- `roles`: ordered string list
- `shortBio`: rich text
- `longBio`: rich text
- `qualificationsAndTraining`: ordered list
- `featuredOnHome`: boolean
- `seo`: shared SEO object

Seed roles observed on the site:

- Psychologist
- Writer
- Communications Trainer
- Well-being Coach
- Career Counsellor
- Child Psychologist

Seed qualifications/training observed on the site:

- Background in Psychology & English
- Trained in Child Psychology & Parenting Coaching
- Clinical Research & Psychotherapy Training
- Soft Skills & Communications Training

### 3.6 Audience Profile — reusable collection

Create three documents:

- Children
- Adolescents
- Adults

Fields:

- `title`
- `icon`
- `shortDescription`
- `supportAreas`
- `relatedServices` — references to Service documents
- `displayOrder`
- `active`

This is better than manually duplicating service links in three separate page sections. A service update automatically appears wherever that service is related.

### 3.7 Service — reusable collection

Create one document for each of the five current services:

- Psychological Counselling
- Career Counselling
- Coaching
- Training
- Emotional Well-being & Personal Growth

Fields:

- `title` — required
- `shortTitle`
- `slug` — required and unique
- `icon`
- `tagline`
- `homeSummary`
- `description`
- `whoItIsFor` — rich text
- `focusAreas` — ordered list of strings
- `audiences` — references to Audience Profile documents
- `howItHelps` — rich text
- `processSteps` — ordered step objects
- `ctaLabel`
- `ctaDestination`
- `heroImage`
- `seo`
- `published` — boolean
- `displayOrder`

The current homepage includes service bullets such as anxiety and stress management, academic/course selection, personal development, emotional intelligence, parenting and child development, and healthy coping/resilience. Put each item in `focusAreas` so editors can add, remove, or reorder them without code.

### 3.8 FAQ — collection

Fields:

- `question` — required
- `answer` — rich text
- `category` — optional reference or dropdown
- `audience` — optional reference
- `featuredOnHome` — boolean
- `displayOrder` — number
- `published` — boolean

Seed the eight observed questions:

1. Who can seek counselling?
2. Do I need a diagnosis to seek counselling?
3. Are sessions confidential?
4. How long is a session?
5. Are sessions online or in person?
6. How do I book a session?
7. Can parents seek support regarding their child?
8. What happens during the first session?

Use the existing website answers as the initial draft, then have the practice owner review them before publishing because confidentiality and professional/legal wording are sensitive.

### 3.9 Blog Post — collection

Fields:

- `title`
- `slug`
- `excerpt`
- `coverImage`
- `body` — Portable Text
- `author` — reference to Founder Profile or Author
- `categories`
- `tags`
- `relatedServices`
- `publishedAt`
- `status` — draft, review, published, archived
- `seo`

Observed initial blog posts:

- Screen Time & Mental Health: Finding the Right Balance
- Talking to Your Child About Big Feelings
- Understanding Anxiety in Children: What Parents Need to Know

The blog page currently also says “More articles coming soon. Want to be notified?” Represent this as a configurable Blog Settings field rather than hardcoding it.

### 3.10 CTA — reusable object

Use one reusable CTA object everywhere:

- `label`
- `actionType` — internal page, WhatsApp, phone, email, external URL
- `internalReference`
- `url`
- `style` — primary, secondary, text
- `trackingName`
- `enabled`

This prevents a phone number or WhatsApp message from becoming inconsistent across the header, hero, footer, service pages, and contact page.

### 3.11 SEO — reusable object

Fields:

- `metaTitle`
- `metaDescription`
- `ogImage`
- `noIndex`
- `canonicalUrl`

Add validation for title and description lengths, but do not block saving merely because a draft is outside an ideal character range.

---

## 4. Editor experience requirements

Implement these Sanity Studio usability rules:

1. **Use human labels.** Display “Hero title” rather than `heroHeading`.
2. **Add descriptions to every field.** Explain where the content appears, for example: “Shown as the large heading at the top of the homepage.”
3. **Use references instead of copied text.** Services, FAQs, founder content, and audiences should be reusable documents.
4. **Use drag-and-drop arrays.** Enable editors to reorder cards, steps, FAQs, services, and navigation links.
5. **Use conditional fields.** Only show URL fields for external links; only show references for internal links.
6. **Add previews.** A service preview should show icon, title, status, and slug. A blog preview should show title, status, and publish date.
7. **Separate draft from publish.** Editors should be able to save a draft, preview it, send it for review, and publish only when ready.
8. **Protect sensitive settings.** Limit access to contact settings, integrations, and legal copy to administrators.
9. **Add a content checklist.** Require or visibly remind editors to check title, image alt text, CTA, SEO description, and publish status.
10. **Avoid technical fields for ordinary editors.** Hide document IDs, raw JSON, API fields, and implementation-only flags in the main editor view.
11. **Add a “Getting Started” dashboard.** Show links: “Edit homepage,” “Edit services,” “Add a blog post,” “Update contact details,” and “Preview website.”
12. **Use one-click previews.** Every page and post should have a preview URL that opens the matching route in a draft-aware preview mode.

---

## 5. Synchronization architecture

### Canonical data flow

```text
Sanity Studio or Antigravity
            |
            | Sanity API / mutations
            v
       Sanity Content Lake
            |
            | GROQ queries through the website
            v
  Next.js pages and shared components
            |
            | webhook / revalidation
            v
      Fast live content updates
```

### Rules that prevent drift

- Do not duplicate production copy in React/Next.js components.
- Do not let Antigravity edit a local `data.ts`, `constants.ts`, or JSON file as the final source.
- Keep only layout, styling, validation, and fallback labels in code.
- Store all editable text, images, links, FAQs, services, metrics, and settings in Sanity.
- Use stable document IDs for singleton documents, for example `siteSettings`, `homePage`, `aboutPage`, `contactPage`, and `bookingPage`.
- Use references for relationships; do not rely on matching title strings.
- Use a shared `resolveCta()` utility so every CTA uses the same phone/WhatsApp/email settings.
- After every mutation, validate the document, update the published/draft state, and trigger the website revalidation endpoint.
- Add a webhook from Sanity to the website for create, update, publish, and unpublish events.
- Revalidate by affected route, not only the homepage. A service update should invalidate `/services`, the service detail route, and any homepage service preview.
- Add a nightly or deployment-time content integrity check that reports broken references, missing slugs, missing SEO fields, and invalid CTA destinations. Do not silently overwrite content.

### Recommended route invalidation map

| Changed document | Revalidate |
|---|---|
| Home Page | `/` |
| About Page / Founder Profile | `/about`, `/` |
| Services Landing Page | `/services` |
| Service | `/services`, matching `/services/[slug]`, `/` |
| FAQ | `/`, `/contact`, any FAQ page |
| Blog Post | `/blog`, matching `/blog/[slug]` |
| Contact Settings | `/`, `/contact`, `/book`, `/about`, `/services` |
| Navigation Settings | all public routes |
| Site Settings | all public routes |

### Antigravity operating instructions

Give Google Antigravity the following instruction as a project-level rule:

> Treat Sanity as the only production content source. Before changing content, query Sanity and identify the document type and stable document ID. When creating or editing content, write it to Sanity using the project’s configured API and preserve references, slugs, ordering, publication status, and SEO fields. Never create a second production content store in code or local JSON. After a mutation, run schema/content validation, confirm the affected route list, trigger or request Sanity webhook revalidation, and report the Sanity document ID and preview URL. If the requested change is ambiguous, ask which Sanity document should be changed rather than silently creating duplicate content.

For code changes, Antigravity should update the schema and rendering components but should not replace seeded Sanity content with hardcoded defaults. All seed data must be idempotent: rerunning the seed should update the same stable documents, not create duplicates.

---

## 6. Preseed plan

Create the following initial documents with stable IDs. Use the current website content as the initial draft, then review and publish it from Sanity Studio.

| Stable ID | Type | Initial status |
|---|---|---|
| `siteSettings` | siteSettings | draft/review |
| `navigationSettings` | navigationSettings | draft/review |
| `contactSettings` | contactSettings | draft/review |
| `homePage` | homePage | draft/review |
| `aboutPage` | aboutPage | draft/review |
| `servicesPage` | servicesPage | draft/review |
| `contactPage` | contactPage | draft/review |
| `bookingPage` | bookingPage | draft/review |
| `founder-prashanthi-simon` | founderProfile | draft/review |
| `audience-children` | audienceProfile | draft/review |
| `audience-adolescents` | audienceProfile | draft/review |
| `audience-adults` | audienceProfile | draft/review |
| `service-counselling` | service | draft/review |
| `service-career-counselling` | service | draft/review |
| `service-coaching` | service | draft/review |
| `service-training` | service | draft/review |
| `service-emotional-well-being` | service | draft/review |
| `faq-who-can-seek-counselling` | faq | draft/review |
| `faq-diagnosis` | faq | draft/review |
| `faq-confidentiality` | faq | draft/review |
| `faq-session-length` | faq | draft/review |
| `faq-online-or-in-person` | faq | draft/review |
| `faq-book-session` | faq | draft/review |
| `faq-parents-support` | faq | draft/review |
| `faq-first-session` | faq | draft/review |
| `blog-screen-time-mental-health` | blogPost | draft/review |
| `blog-big-feelings` | blogPost | draft/review |
| `blog-anxiety-children` | blogPost | draft/review |

### Seed content cautions

- The homepage currently displays `0+` for years of experience, workshops conducted, and five-star reviews. Treat these as incomplete placeholders, not verified facts.
- The founder page includes professional training and role descriptions. Confirm the exact wording with Prashanthi Simon before publishing.
- FAQ wording discusses confidentiality and session availability. Have the practice owner review it for accuracy and local professional/legal requirements.
- Do not invent missing address, prices, office hours, appointment availability, testimonials, or credentials.
- Preserve existing image assets where available: logo, founder portrait, hero/caring-hands illustration, and WhatsApp icon. Add meaningful alt text in Sanity.

---

## 7. Implementation sequence for Antigravity

1. Inspect the existing Next.js repository and identify all current hardcoded content objects.
2. Create the Sanity schema types and singleton IDs described above.
3. Add field descriptions, previews, validation, conditional fields, and Studio groups.
4. Create the idempotent seed script using stable IDs and environment variables for the Sanity project, dataset, and token.
5. Upload or reference the existing brand images and assign alt text.
6. Seed all initial drafts; do not publish automatically.
7. Replace hardcoded page content with GROQ queries and typed content adapters.
8. Add draft preview mode and a Sanity webhook/revalidation endpoint.
9. Add route-aware cache invalidation using the map above.
10. Add content integrity checks and a visible “missing content” fallback for editors.
11. Test editing one field in Sanity and verify it appears in the correct live or preview route.
12. Test editing one service, one FAQ, one blog post, the phone number, and a navigation link.
13. Confirm that rerunning the seed creates no duplicate documents.
14. Publish only after the owner reviews sensitive copy, contact information, metrics, and legal pages.

---

## 8. Acceptance checklist

The implementation is ready when all of the following are true:

- A non-technical editor can find every page from the Studio sidebar.
- A non-technical editor can change the homepage hero without touching code.
- A service can be edited once and updates everywhere it is referenced.
- A blog editor can create, preview, schedule/review, and publish an article.
- Phone, email, and WhatsApp details are managed once and remain consistent.
- Internal links are selected by reference rather than retyped URLs.
- Draft previews show unpublished changes without exposing them publicly.
- Publishing a Sanity change updates the correct route through webhook revalidation.
- Unpublishing a service or blog post removes it safely from listings and its public route.
- Missing images, slugs, CTA destinations, and SEO fields are reported clearly.
- Seed data is idempotent and does not create duplicates.
- There are no production content copies in React components or local JSON files.

---

## 9. What is and is not synchronized yet

This document provides the observed content map, the recommended Sanity model, the initial seed inventory, and the exact Antigravity operating rules. It does **not** directly write to the user’s Sanity project because the project ID, dataset, write token, repository, and deployment/revalidation endpoint were not provided in this session.

To perform the actual sync, Antigravity or the project owner must supply/configure:

- Sanity project ID and dataset
- Sanity Studio repository or project location
- A write-capable token stored as a secret, never committed to source
- Website repository and deployment environment
- Sanity webhook secret and website revalidation URL
- Final approval for sensitive contact, professional, metric, FAQ, and legal content

Once those are configured, the implementation sequence above should be executed in order, with the first publish done only after the acceptance checklist passes.
