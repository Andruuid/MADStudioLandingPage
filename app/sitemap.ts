import type { MetadataRoute } from "next";

const SITE_URL = "https://multiagentdebates.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const sections = [
    "",
    "#science",
    "#features",
    "#api",
    "#recursive",
    "#evaluation",
    "#use-cases",
    "#faq",
    "#waitlist",
  ];

  return sections.map((section) => ({
    url: `${SITE_URL}/${section}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: section === "" ? 1.0 : 0.7,
  }));
}
