import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'teamSection',
  title: 'Team Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'members',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'role', title: 'Role', type: 'string' },
            { name: 'bio', title: 'Bio', type: 'text' },
            { name: 'experience', title: 'Experience', type: 'string' },
            {
              name: 'image',
              title: 'Profile Image',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'qualifications',
              title: 'Qualifications',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'specialties',
              title: 'Specialties',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    }),
  ],
})
