import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'object',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string' }),
    defineField({ name: 'role', title: 'Role / Title', type: 'string' }),
    defineField({ name: 'bio', title: 'Biography', type: 'text', rows: 5 }),
    defineField({ name: 'experience', title: 'Experience Badge (e.g. 15+ Years)', type: 'string' }),
    defineField({
      name: 'image',
      title: 'Profile Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'qualifications',
      title: 'Qualifications / Credentials',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'specialties',
      title: 'Specialty Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
