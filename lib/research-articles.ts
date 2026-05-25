export type ResearchArticle = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTimeMinutes: number;
  tags: string[];
};

export const researchArticles: ResearchArticle[] = [
  {
    slug: "multi-agent-debate-vs-self-consistency",
    title: "When to Use Multi-Agent Debate vs Self-Consistency",
    description:
      "Self-consistency and multi-agent debate both improve LLM reasoning — but they fail in different ways. Here is a practical decision guide grounded in peer-reviewed research.",
    publishedAt: "2026-05-26",
    readTimeMinutes: 5,
    tags: [
      "multi-agent debate",
      "self-consistency",
      "LLM reasoning",
      "CoT-SC",
    ],
  },
];

export function getResearchArticle(slug: string): ResearchArticle | undefined {
  return researchArticles.find((article) => article.slug === slug);
}
