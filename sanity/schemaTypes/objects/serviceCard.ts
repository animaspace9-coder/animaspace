import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'serviceCard',
  title: 'Service Card',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Service Title', type: 'string' }),
    defineField({ name: 'description', title: 'Short Description', type: 'text', rows: 3 }),
    defineField({ name: 'icon', title: 'Icon (Emoji)', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug (URL segment e.g. counselling)', type: 'string' }),
    defineField({
      name: 'bulletPoints',
      title: 'Bullet Points (What we cover)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'colorKey',
      title: 'Colour Theme Key',
      type: 'string',
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
  ],
})
