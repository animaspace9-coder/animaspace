import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.animaspace.net";
  const now = new Date();

  const routes = [
    "",
    "/about",
    "/services",
    "/book",
    "/contact",
    "/privacy",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/book" ? 0.9 : 0.8,
  }));
}
