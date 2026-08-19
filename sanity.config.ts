import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './sanity/schemaTypes'
import { structure } from './sanity/structure'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'fjecj7up'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
  ],
})
