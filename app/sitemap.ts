import type { MetadataRoute } from "next";

import { researchArticles } from "@/lib/research-articles";

const SITE_URL = "https://multiagentdebates.com";

const HOMEPAGE_LAST_MODIFIED = new Date("2026-05-26");

export default function sitemap(): MetadataRoute.Sitemap {
  const researchUrls = researchArticles.map((article) => ({
    url: `${SITE_URL}/research/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const mostRecentArticleDate = researchArticles.reduce((latest, article) => {
    const articleDate = new Date(article.publishedAt);
    return articleDate > latest ? articleDate : latest;
  }, HOMEPAGE_LAST_MODIFIED);

  return [
    {
      url: SITE_URL,
      lastModified: HOMEPAGE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/research`,
      lastModified: mostRecentArticleDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...researchUrls,
  ];
}
