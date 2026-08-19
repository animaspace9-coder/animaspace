import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2026-08-19", // today's date, kept hard-coded per Sanity best practices
  useCdn: true, // fast, cached published-content reads
});
