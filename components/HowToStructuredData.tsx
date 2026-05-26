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
      name: "MAD Studio (or any multi-agent debate framework)",
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
      name: "Pick a debate protocol with bounded rounds",
      text: "Use Open Discussion for exploratory objection surfacing, Truth-Seeking Debate for verdict-grade pressure-testing, or Team Discussion battle mode for adversarial dynamics. Set hard caps on rounds, tokens, and total cost so debates self-terminate.",
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
      name: "Extract the claims ledger and objection log",
      text: "Pull the structured deliverables: claims ledger, objection log, dimension scores, citation gaps, full transcript. The transcript is often more valuable than the verdict — it shows why a claim failed, in a reasoning chain a human reviewer can challenge.",
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
