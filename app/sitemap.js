import { getAllCategorySlugs, tools } from "@/lib/tools";

// Stable dates — update SITE_UPDATED whenever content meaningfully changes.
// Using new Date() here would report every page as modified today on every request.
const SITE_UPDATED = new Date("2026-06-25");
const LEGAL_UPDATED = new Date("2025-06-01");

export default function sitemap() {
  const baseUrl = "https://toolkno.com";

  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: SITE_UPDATED,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const categoryPages = getAllCategorySlugs().map((category) => ({
    url: `${baseUrl}/tools/category/${category}`,
    lastModified: SITE_UPDATED,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const staticPages = [
    {
      url: baseUrl,
      lastModified: SITE_UPDATED,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: SITE_UPDATED,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/newsletter`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/methodology`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/affiliate-registry`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/dmca`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [...staticPages, ...categoryPages, ...toolPages];
}
