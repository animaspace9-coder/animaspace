import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Anxiety', value: 'Anxiety' },
          { title: 'Wellbeing', value: 'Wellbeing' },
          { title: 'Parenting', value: 'Parenting' },
          { title: 'Child Development', value: 'Child Development' },
          { title: 'Adolescent Support', value: 'Adolescent Support' },
          { title: 'Career Guidance', value: 'Career Guidance' },
          { title: 'Emotional Health', value: 'Emotional Health' },
        ],
      },
      initialValue: 'Parenting',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      initialValue: '3 min read',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Prashanthi Simon',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'colorKey',
      title: 'Card Accent Color',
      type: 'string',
      options: {
        list: [
          { title: 'Sky Blue', value: 'sky' },
          { title: 'Soft Pink', value: 'pink' },
          { title: 'Rose Gold', value: 'rose' },
          { title: 'Mauve', value: 'mauve' },
        ],
      },
      initialValue: 'sky',
    }),
    defineField({
      name: 'excerpt',
      title: 'Article Excerpt (Summary for Cards & SEO)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(250),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main / Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Important for accessibility and SEO.',
        }),
        defineField({
          name: 'caption',
          title: 'Image Caption',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Article Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'reflectionQuote',
      title: 'Anima Space Reflection (Key Takeaway Box)',
      type: 'text',
      rows: 3,
      description: 'A highlighted reflective quote from Prashanthi Simon displayed in a featured box.',
    }),
    defineField({
      name: 'infographic',
      title: 'Article Infographic / Visual Step Flow',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Infographic Title',
          type: 'string',
        }),
        defineField({
          name: 'summary',
          title: 'Infographic Core Message',
          type: 'string',
        }),
        defineField({
          name: 'steps',
          title: 'Flow Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'stepNumber', title: 'Step / Phase', type: 'string' },
                { name: 'title', title: 'Step Title', type: 'string' },
                { name: 'description', title: 'Step Description', type: 'text', rows: 2 },
              ],
            },
          ],
        }),
        defineField({
          name: 'altText',
          title: 'Accessibility Description',
          type: 'text',
          rows: 2,
        }),
      ],
    }),
    defineField({
      name: 'infographicImage',
      title: 'Blog Infographic Image',
      type: 'image',
      description: 'Upload the visual infographic poster for this article. Used in the blog page and for social sharing/SEO.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'SEO Alt Text (Image Name)',
          type: 'string',
          description: 'Descriptive name for the infographic — important for Google Image Search SEO and accessibility.',
          validation: (Rule) => Rule.required().min(10).max(200),
        }),
        defineField({
          name: 'caption',
          title: 'Image Caption',
          type: 'string',
          description: 'Optional caption displayed below the infographic.',
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO & Metadata',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      publishedAt: 'publishedAt',
      media: 'mainImage',
    },
    prepare({ title, category, publishedAt, media }) {
      return {
        title: title || 'Untitled Article',
        subtitle: `${category || 'General'} • ${publishedAt || 'Draft'}`,
        media,
      }
    },
  },
})
