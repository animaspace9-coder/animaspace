import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'subscriber',
  title: 'Newsletter Subscriber',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'subscribedAt',
      title: 'Subscribed Date & Time',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'source',
      title: 'Subscription Source',
      type: 'string',
      options: {
        list: [
          { title: 'Blog Newsletter Box', value: 'blog_newsletter' },
          { title: 'Home Page', value: 'homepage' },
          { title: 'Footer', value: 'footer' },
        ],
      },
      initialValue: 'blog_newsletter',
    }),
    defineField({
      name: 'status',
      title: 'Subscription Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Unsubscribed', value: 'unsubscribed' },
        ],
      },
      initialValue: 'active',
    }),
  ],
  preview: {
    select: {
      title: 'email',
      subtitle: 'subscribedAt',
      status: 'status',
    },
    prepare({ title, subtitle, status }) {
      const dateStr = subtitle ? new Date(subtitle).toLocaleDateString() : 'Recent'
      return {
        title: title || 'No email',
        subtitle: `${status || 'active'} • ${dateStr}`,
      }
    },
  },
})
