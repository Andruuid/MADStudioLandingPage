import type { MetadataRoute } from "next";

import { researchArticles } from "@/lib/research-articles";

const SITE_URL = "https://multiagentdebates.com";

const SITE_LAST_MODIFIED = new Date("2026-09-02");

export default function sitemap(): MetadataRoute.Sitemap {
  const researchUrls = researchArticles.map((article) => ({
    url: `${SITE_URL}/research/${article.slug}`,
    lastModified: new Date(article.modifiedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const mostRecentArticleDate = researchArticles.reduce((latest, article) => {
    const articleDate = new Date(article.modifiedAt);
    return articleDate > latest ? articleDate : latest;
  }, SITE_LAST_MODIFIED);

  return [
    {
      url: SITE_URL,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/research`,
      lastModified: mostRecentArticleDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/glossary`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...researchUrls,
  ];
}
