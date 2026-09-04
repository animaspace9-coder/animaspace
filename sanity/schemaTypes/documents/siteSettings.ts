import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Brand Tagline',
      type: 'string',
      description: 'Displayed under the logo and in meta. E.g. "Well-being, Psychological Consulting & Counselling Centre"',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Clinic Address',
      type: 'string',
    }),
    defineField({
      name: 'hours',
      title: 'Working Hours',
      type: 'string',
    }),
    defineField({
      name: 'bookingServiceOptions',
      title: 'Booking Form — Service Dropdown Options',
      description: 'The list of services shown in the "Select Service" dropdown on the booking form',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number (with country code, no spaces)',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})
