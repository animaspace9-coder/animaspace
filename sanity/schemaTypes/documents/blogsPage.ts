import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogsPage',
  title: 'Blogs Overview Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageHeroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Insights for Parents & Families.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageHeroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
      initialValue:
        'Practical guidance, research-backed perspectives, and real-world tools — written by Prashanthi Simon.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'newsletterHeading',
      title: 'Newsletter Heading',
      type: 'string',
      initialValue: 'More articles coming soon. Want to be notified?',
    }),
    defineField({
      name: 'newsletterSubtext',
      title: 'Newsletter Subtext',
      type: 'string',
      initialValue: 'Subscribe to receive new insights and practical tools for your family.',
    }),
    defineField({
      name: 'seo',
      title: 'SEO & Metadata',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'pageHeroTitle',
    },
    prepare({ title }) {
      return {
        title: title || 'Blogs Overview Page',
        subtitle: '📰 Blogs Page Settings',
      }
    },
  },
})
