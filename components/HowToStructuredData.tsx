/**
 * HowTo structured data for the red-team article.
 * Eligible for Google's HowTo rich result with numbered step layout.
 */

const SITE_URL = "https://multiagentdebates.com";

const redTeamHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Red-Team Ideas with Multi-Agent Debate",
  description:
    "A practical playbook for adversarial AI deliberation — stress-test political messaging, product decisions, research claims, and legal arguments before they ship.",
  totalTime: "PT2H",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "0",
  },
  supply: [
    {
      "@type": "HowToSupply",
      name: "A draft, claim, or decision document to stress-test",
    },
    {
      "@type": "HowToSupply",
      name: "An evidence pack — sources the agents will cite",
    },
    {
      "@type": "HowToSupply",
      name: "A rubric for what 'survived scrutiny' means",
    },
  ],
  tool: [
    {
      "@type": "HowToTool",
      name: "Multi Agent Debates by Delibora (or any multi-agent debate framework)",
    },
    {
      "@type": "HowToTool",
      name: "Access to two or more LLMs (OpenRouter, LM Studio, etc.)",
    },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Assemble the subject matter and evidence pack",
      text: "Write down the exact claim, draft, or decision under test. Attach a shared evidence pack — sources, prior memos, primary documents — that every agent will reference. Vague prompts with no shared document are the most common cause of useless red-team runs.",
      url: `${SITE_URL}/research/red-team-ideas-multi-agent-debate#architecture`,
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Configure the advocate team",
      text: "Assign 2–4 agents to defend the proposal. Give each one a distinct persona — author, sponsor, expert advocate — with system prompts that differ in priors and rhetorical style, not just name.",
      url: `${SITE_URL}/research/red-team-ideas-multi-agent-debate#architecture`,
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Configure the adversary team",
      text: "Assign 2–4 agents to attack — skeptic, competitor, regulator, hostile journalist, opposing-party voter. Give them real incentives in the prompt: 'find the weakest claim' beats 'offer constructive feedback.' Adversaries that are too polite produce rubber-stamp verdicts.",
      url: `${SITE_URL}/research/red-team-ideas-multi-agent-debate#configure`,
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Pick a discussion format with bounded rounds",
      text: "Use Expert Panel for exploratory objection surfacing, Judged Debate for a neutral scored verdict, or Team Battle for adversarial team dynamics. Set turn, runtime, and cost limits before the run starts.",
      url: `${SITE_URL}/research/red-team-ideas-multi-agent-debate#configure`,
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Run independent arbiter scoring",
      text: "Use a separate scoring pass — not one of the debaters — on fixed M-MAD dimensions: correctness, evidence use, responsiveness to counterarguments, calibration, citation quality. A claim can lose on evidence while winning on rhetoric; the arbiter surfaces that.",
      url: `${SITE_URL}/research/red-team-ideas-multi-agent-debate#configure`,
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Review the verdict, evidence gaps, and transcript",
      text: "Pull the format-specific verdict or scorecard, inspect the supporting rationale and evidence gaps, and export the full transcript. The transcript is often more valuable than the final verdict because it shows which objections changed the result.",
      url: `${SITE_URL}/research/red-team-ideas-multi-agent-debate#output`,
    },
  ],
};

const speakableArticle = (url: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": url,
  url,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".research-tldr", "article > p:first-of-type"],
  },
});

export function RedTeamHowToStructuredData({ slug }: { slug: string }) {
  const url = `${SITE_URL}/research/${slug}`;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(redTeamHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableArticle(url)) }}
      />
    </>
  );
}

export function SpeakableArticleStructuredData({ slug }: { slug: string }) {
  const url = `${SITE_URL}/research/${slug}`;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableArticle(url)) }}
    />
  );
}
