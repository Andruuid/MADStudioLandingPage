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
      "A research-backed guide to choosing between self-consistency (CoT-SC) and multi-agent debate (MAD) — with benchmark numbers, cost analysis, failure modes, and a hybrid playbook for production.",
    publishedAt: "2026-05-26",
    readTimeMinutes: 12,
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
