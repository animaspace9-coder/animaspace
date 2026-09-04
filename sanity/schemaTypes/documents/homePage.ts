import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero', title: '1. Hero' },
    { name: 'ageGroups', title: '2. Age Groups' },
    { name: 'offerings', title: '3. Our Offerings' },
    { name: 'approach', title: '4. Approach Block' },
    { name: 'team', title: '5. Meet Prashanthi' },
    { name: 'testimonials', title: '6. Testimonials' },
    { name: 'faq', title: '7. FAQ' },
  ],
  fields: [
    // ── 1. Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: 'heroHeadline',
      title: 'Hero — Main Headline',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubHeadline',
      title: 'Hero — Sub-headline',
      type: 'text',
      rows: 2,
      group: 'hero',
    }),
    defineField({
      name: 'heroBadgeText',
      title: 'Hero — Trust Badge Text',
      type: 'string',
      group: 'hero',
      description: 'Small label in the top badge, e.g. "Convenient, proven care for a brighter future"',
    }),
    defineField({
      name: 'heroCtaText',
      title: 'Hero — CTA Button Text',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCardItems',
      title: 'Hero — Floating Card Bullet Points',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'hero',
      description: 'The 3 bullet points on the floating card in the hero image area',
      validation: (Rule) => Rule.max(3),
    }),

    // ── 2. Age Groups ────────────────────────────────────────────────────────
    defineField({
      name: 'ageGroupsTitle',
      title: 'Age Groups — Section Title',
      type: 'string',
      group: 'ageGroups',
    }),
    defineField({
      name: 'ageGroups',
      title: 'Age Groups',
      type: 'array',
      group: 'ageGroups',
      of: [
        {
          type: 'object',
          name: 'ageGroup',
          title: 'Age Group',
          fields: [
            { name: 'id', title: 'ID (slug)', type: 'string' },
            { name: 'title', title: 'Group Name (e.g. Children)', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
            { name: 'character', title: 'Emoji Character', type: 'string' },
            {
              name: 'bulletPoints',
              title: 'What we help with',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    }),

    // ── 4. Offerings ─────────────────────────────────────────────────────────
    defineField({
      name: 'offeringsTitle',
      title: 'Offerings — Section Title',
      type: 'string',
      group: 'offerings',
    }),
    defineField({
      name: 'offeringsSubtitle',
      title: 'Offerings — Section Subtitle',
      type: 'text',
      rows: 2,
      group: 'offerings',
    }),
    defineField({
      name: 'offerings',
      title: 'Service Cards',
      type: 'array',
      group: 'offerings',
      of: [{ type: 'serviceCard' }],
    }),

    // ── 5. Approach Block ────────────────────────────────────────────────────
    defineField({
      name: 'approachHeadline',
      title: 'Approach — Headline',
      type: 'string',
      group: 'approach',
    }),
    defineField({
      name: 'approachDescription',
      title: 'Approach — Description',
      type: 'text',
      rows: 3,
      group: 'approach',
    }),

    // ── 6. Team / Prashanthi ─────────────────────────────────────────────────
    defineField({
      name: 'teamSectionTitle',
      title: 'Team — Section Label',
      type: 'string',
      group: 'team',
    }),
    defineField({
      name: 'teamMember',
      title: 'Team Member — Prashanthi Simon',
      type: 'teamMember',
      group: 'team',
    }),

    // ── 7. Testimonials ──────────────────────────────────────────────────────
    defineField({
      name: 'testimonialsSectionTitle',
      title: 'Testimonials — Section Title',
      type: 'string',
      group: 'testimonials',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      group: 'testimonials',
      of: [
        {
          type: 'object',
          name: 'testimonial',
          title: 'Testimonial',
          fields: [
            { name: 'quote', title: 'Quote', type: 'text', rows: 3 },
            { name: 'author', title: 'Author', type: 'string' },
          ],
          preview: { select: { title: 'author', subtitle: 'quote' } },
        },
      ],
    }),

    // ── 8. FAQ ───────────────────────────────────────────────────────────────
    defineField({
      name: 'faqSectionTitle',
      title: 'FAQ — Section Title',
      type: 'string',
      group: 'faq',
    }),
    defineField({
      name: 'faqs',
      title: 'Frequently Asked Questions',
      type: 'array',
      group: 'faq',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          title: 'FAQ Item',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text', rows: 3 },
          ],
          preview: { select: { title: 'question' } },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Home Page' }
    },
  },
})
