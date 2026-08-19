import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  groups: [
    { name: 'pageHero', title: '1. Page Hero' },
    { name: 'services', title: '2. Service Cards' },
    { name: 'ctaStrip', title: '3. CTA Strip' },
  ],
  fields: [
    // ── 1. Page Hero ──────────────────────────────────────────────────────────
    defineField({
      name: 'pageHeroTitle',
      title: 'Page Hero — Title',
      type: 'string',
      group: 'pageHero',
    }),
    defineField({
      name: 'pageHeroSubtitle',
      title: 'Page Hero — Subtitle',
      type: 'text',
      rows: 2,
      group: 'pageHero',
    }),

    // ── 2. Service Cards ──────────────────────────────────────────────────────
    defineField({
      name: 'sectionTitle',
      title: 'Section Title (above cards)',
      type: 'string',
      group: 'services',
    }),
    defineField({
      name: 'services',
      title: 'Service Cards',
      type: 'array',
      group: 'services',
      description: '5 services: Counselling, Coaching, Healing, Career Counselling, Training',
      of: [{ type: 'serviceCard' }],
    }),

    // ── 3. CTA Strip ─────────────────────────────────────────────────────────
    defineField({
      name: 'ctaStripHeading',
      title: 'CTA Strip — Heading',
      type: 'string',
      group: 'ctaStrip',
    }),
    defineField({
      name: 'ctaStripBody',
      title: 'CTA Strip — Body Text',
      type: 'text',
      rows: 2,
      group: 'ctaStrip',
    }),
    defineField({
      name: 'ctaStripButtonText',
      title: 'CTA Strip — Button Text',
      type: 'string',
      group: 'ctaStrip',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Services Page' }
    },
  },
})
