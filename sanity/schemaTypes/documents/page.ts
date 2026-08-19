import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      of: [
        { type: 'heroSection' },
        { type: 'aboutSection' },
        { type: 'offeringsSection' },
        { type: 'ageGroupsSection' },
        { type: 'teamSection' },
        { type: 'faqSection' },
        { type: 'contactSection' },
      ],
    }),
  ],
})
