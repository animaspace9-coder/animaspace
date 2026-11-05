import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // In Next.js App Router with ISR (revalidate), useCdn: false ensures fresh data from Sanity on every revalidation
});
