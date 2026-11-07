import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { allBlogSlugsQuery, allServiceSlugsQuery } from "@/sanity/lib/queries";
import { blogPosts } from "@/app/data/blogs";
import { servicePages } from "@/app/data/content";

export const revalidate = 3600; // revalidate sitemap every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.animaspace.net";
  const now = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Service sub-pages (fetch from CMS or fall back to typed data)
  let serviceSlugs: string[] = Object.keys(servicePages);
  try {
    const cmsServiceSlugs = await client.fetch(allServiceSlugsQuery).catch(() => null);
    if (cmsServiceSlugs && cmsServiceSlugs.length > 0) {
      serviceSlugs = Array.from(
        new Set([...serviceSlugs, ...cmsServiceSlugs.map((s: { slug: string }) => s.slug)])
      );
    }
  } catch {
    // fallback used
  }

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Blog post pages (fetch from CMS or fall back to typed data)
  let blogSlugs: string[] = blogPosts.map((p) => p.slug);
  try {
    const cmsBlogSlugs = await client.fetch(allBlogSlugsQuery).catch(() => null);
    if (cmsBlogSlugs && cmsBlogSlugs.length > 0) {
      blogSlugs = Array.from(
        new Set([...blogSlugs, ...cmsBlogSlugs.map((b: { slug: string }) => b.slug)])
      );
    }
  } catch {
    // fallback used
  }

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
