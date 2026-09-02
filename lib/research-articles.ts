export type ResearchArticle = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  modifiedAt: string;
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
    modifiedAt: "2026-09-02",
    readTimeMinutes: 12,
    tags: [
      "multi-agent debate",
      "self-consistency",
      "LLM reasoning",
      "CoT-SC",
    ],
  },
  {
    slug: "red-team-ideas-multi-agent-debate",
    title: "How to Red-Team Ideas with Multi-Agent Debate",
    description:
      "A practical playbook for adversarial AI deliberation — stress-test political messaging, product decisions, research claims, and legal arguments before they ship.",
    publishedAt: "2026-05-27",
    modifiedAt: "2026-09-02",
    readTimeMinutes: 10,
    tags: [
      "AI red teaming",
      "multi-agent debate",
      "adversarial reasoning",
      "devil's advocate AI",
    ],
  },
];

export function getResearchArticle(slug: string): ResearchArticle | undefined {
  return researchArticles.find((article) => article.slug === slug);
}
