import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'bookPage',
  title: 'Book a Consultation Page',
  type: 'document',
  groups: [
    { name: 'pageHero', title: '1. Page Hero' },
    { name: 'form', title: '2. Booking Form' },
    { name: 'steps', title: '3. Steps After Booking' },
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

    // ── 2. Booking Form ───────────────────────────────────────────────────────
    defineField({
      name: 'formTitle',
      title: 'Form — Title',
      type: 'string',
      group: 'form',
    }),
    defineField({
      name: 'formSubtitle',
      title: 'Form — Subtitle',
      type: 'text',
      rows: 2,
      group: 'form',
    }),
    defineField({
      name: 'serviceDropdownOptions',
      title: 'Service Dropdown Options',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'form',
      description: 'The exact list of services shown in the "Select Service" dropdown',
    }),
    defineField({
      name: 'modeOptions',
      title: 'Mode Options (Online / Offline labels)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'form',
    }),

    // ── 3. Steps ──────────────────────────────────────────────────────────────
    defineField({
      name: 'stepsSectionTitle',
      title: 'Steps Section — Title',
      type: 'string',
      group: 'steps',
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      group: 'steps',
      of: [
        {
          type: 'object',
          name: 'step',
          title: 'Step',
          fields: [
            { name: 'number', title: 'Step Number (e.g. 01)', type: 'string' },
            { name: 'title', title: 'Step Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
          ],
          preview: { select: { title: 'title', subtitle: 'number' } },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Book a Consultation Page' }
    },
  },
})
