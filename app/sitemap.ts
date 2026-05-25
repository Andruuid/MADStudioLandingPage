import type { MetadataRoute } from "next";

import { researchArticles } from "@/lib/research-articles";

const SITE_URL = "https://multiagentdebates.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const researchUrls = researchArticles.map((article) => ({
    url: `${SITE_URL}/research/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/research`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...researchUrls,
  ];
}
