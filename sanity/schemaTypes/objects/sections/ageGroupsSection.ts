import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'ageGroupsSection',
  title: 'Age Groups Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'groups',
      title: 'Age Groups',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'id', title: 'ID', type: 'string' },
            { name: 'title', title: 'Group Title', type: 'string' },
            { name: 'ageRange', title: 'Age Range', type: 'string' },
            { name: 'ageLabel', title: 'Age Label', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'character', title: 'Character Emoji', type: 'string' },
            {
              name: 'services',
              title: 'Services',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'label', title: 'Label', type: 'string' },
                    { name: 'href', title: 'Link', type: 'string' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
})
