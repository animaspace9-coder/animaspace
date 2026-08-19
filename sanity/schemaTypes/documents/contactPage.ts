import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  groups: [
    { name: 'pageHero', title: '1. Page Hero' },
    { name: 'contactInfo', title: '2. Contact Details' },
    { name: 'cta', title: '3. Footer CTA' },
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

    // ── 2. Contact Details ────────────────────────────────────────────────────
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      group: 'contactInfo',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      group: 'contactInfo',
    }),
    defineField({
      name: 'address',
      title: 'Clinic Address',
      type: 'string',
      group: 'contactInfo',
    }),
    defineField({
      name: 'hours',
      title: 'Working Hours',
      type: 'string',
      group: 'contactInfo',
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Maps URL',
      type: 'url',
      group: 'contactInfo',
    }),

    // ── 3. Footer CTA ─────────────────────────────────────────────────────────
    defineField({
      name: 'ctaHeading',
      title: 'CTA — Heading',
      type: 'string',
      group: 'cta',
    }),
    defineField({
      name: 'ctaBody',
      title: 'CTA — Body Text',
      type: 'text',
      rows: 2,
      group: 'cta',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Contact Page' }
    },
  },
})
