// Environment variables for Sanity — read server-side only from process.env.
// Public vars (NEXT_PUBLIC_*) are safe to use in both Server and Client Components.
// Secret tokens (SANITY_API_READ_TOKEN, etc.) must stay server-only.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "fjecj7up";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-08-19";
