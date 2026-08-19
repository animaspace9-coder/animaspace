import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'statItem',
  title: 'Stat Item',
  type: 'object',
  fields: [
    defineField({ name: 'value', title: 'Value (e.g. 15+)', type: 'string' }),
    defineField({ name: 'label', title: 'Label (e.g. Years Experience)', type: 'string' }),
  ],
})
