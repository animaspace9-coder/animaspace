import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'offeringsSection',
  title: 'Offerings Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'offerings',
      title: 'Offerings',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'icon', title: 'Icon (Emoji)', type: 'string' },
            { name: 'href', title: 'Link', type: 'string' },
          ],
        },
      ],
    }),
  ],
})
