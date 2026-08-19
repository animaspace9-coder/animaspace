import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'servicePage',
  title: 'Service Sub-Page',
  type: 'document',
  groups: [
    { name: 'meta', title: 'Identity' },
    { name: 'content', title: 'Content' },
    { name: 'details', title: 'Details & FAQs' },
  ],
  fields: [
    // ── Identity ──────────────────────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Service Name',
      type: 'string',
      group: 'meta',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'meta',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
      description: 'e.g. counselling, coaching, healing, career-counselling, training',
    }),
    defineField({
      name: 'icon',
      title: 'Icon (Emoji)',
      type: 'string',
      group: 'meta',
    }),
    defineField({
      name: 'colorKey',
      title: 'Colour Theme Key',
      type: 'string',
      group: 'meta',
      options: {
        list: [
          { title: 'Sky Blue', value: 'sky' },
          { title: 'Pink', value: 'pink' },
          { title: 'Rose', value: 'rose' },
          { title: 'Mauve', value: 'mauve' },
          { title: 'Olive', value: 'olive' },
        ],
      },
    }),

    // ── Content ───────────────────────────────────────────────────────────────
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'content',
      description: 'Short inspirational line shown under the page title',
    }),
    defineField({
      name: 'intro',
      title: 'Introduction Paragraph',
      type: 'text',
      rows: 4,
      group: 'content',
    }),
    defineField({
      name: 'bulletPoints',
      title: 'What We Cover (Bullet Points)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
    }),

    // ── Details ───────────────────────────────────────────────────────────────
    defineField({
      name: 'whatToExpect',
      title: 'What to Expect (numbered list)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'details',
    }),
    defineField({
      name: 'whoItsFor',
      title: 'Who This Is For',
      type: 'text',
      rows: 2,
      group: 'details',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      group: 'details',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          title: 'FAQ',
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
    select: { title: 'title', subtitle: 'tagline' },
  },
})
