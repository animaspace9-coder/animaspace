import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO Metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Title used for search engines and browser tabs',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Description for search engines',
    }),
    defineField({
      name: 'openGraphImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image used when sharing on social media',
    }),
  ],
})
