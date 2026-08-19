import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Us Page',
  type: 'document',
  groups: [
    { name: 'pageHero', title: '1. Page Hero' },
    { name: 'story', title: '2. Our Story' },
    { name: 'coreValues', title: '3. Core Values' },
    { name: 'team', title: '4. Meet Prashanthi' },
    { name: 'vision', title: '5. Vision' },
    { name: 'cta', title: '6. CTA' },
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

    // ── 2. Our Story ──────────────────────────────────────────────────────────
    defineField({
      name: 'storyHeadline',
      title: 'Story — Headline',
      type: 'string',
      group: 'story',
    }),
    defineField({
      name: 'storyParagraphs',
      title: 'Story — Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      group: 'story',
      description: 'Each item is a separate paragraph in the story section',
    }),

    // ── 3. Core Values ───────────────────────────────────────────────────────
    defineField({
      name: 'coreValuesSectionTitle',
      title: 'Core Values — Section Title',
      type: 'string',
      group: 'coreValues',
    }),
    defineField({
      name: 'coreValues',
      title: 'Core Values',
      type: 'array',
      group: 'coreValues',
      of: [
        {
          type: 'object',
          name: 'coreValue',
          title: 'Core Value',
          fields: [
            { name: 'icon', title: 'Icon (Emoji)', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    }),

    // ── 4. Team / Prashanthi ──────────────────────────────────────────────────
    defineField({
      name: 'teamSectionTitle',
      title: 'Team — Section Label',
      type: 'string',
      group: 'team',
    }),
    defineField({
      name: 'teamMember',
      title: 'Prashanthi Simon',
      type: 'teamMember',
      group: 'team',
    }),

    // ── 5. Vision ─────────────────────────────────────────────────────────────
    defineField({
      name: 'visionHeadline',
      title: 'Vision — Headline',
      type: 'string',
      group: 'vision',
    }),
    defineField({
      name: 'visionParagraphs',
      title: 'Vision — Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      group: 'vision',
    }),

    // ── 6. CTA ───────────────────────────────────────────────────────────────
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
    defineField({
      name: 'ctaButtonText',
      title: 'CTA — Button Text',
      type: 'string',
      group: 'cta',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'About Us Page' }
    },
  },
})
