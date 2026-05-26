export type GlossaryTerm = {
  term: string;
  slug: string;
  /** 40–60 words. Tuned for Google featured-snippet eligibility. */
  definition: string;
  aliases?: string[];
  related?: string[];
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Multi-Agent Debate (MAD)",
    slug: "multi-agent-debate",
    definition:
      "Multi-Agent Debate is an LLM reasoning technique in which two or more language model instances argue across structured rounds, critiquing each other's claims before a verdict. Compared to single-prompt baselines, multi-agent debate consistently improves factuality, calibration, and adversarial robustness across peer-reviewed benchmarks.",
    aliases: ["MAD", "LLM debate", "multi-agent AI debate"],
    related: ["self-consistency", "m-mad", "degeneration-of-thought"],
  },
  {
    term: "Self-Consistency (CoT-SC)",
    slug: "self-consistency",
    definition:
      "Self-Consistency is a reasoning strategy that samples multiple chain-of-thought paths from one model at non-zero temperature, then majority-votes the final answer. Introduced by Wang et al. (ICLR 2023), it is fast, embarrassingly parallel, and the strong default for math and multiple-choice tasks with a single correct label.",
    aliases: ["CoT-SC", "chain-of-thought self-consistency", "majority voting LLM"],
    related: ["multi-agent-debate", "chain-of-thought"],
  },
  {
    term: "M-MAD",
    slug: "m-mad",
    definition:
      "M-MAD (Multidimensional Multi-Agent Debate) is a verdict-scoring protocol from Feng et al. (ACL 2025) that runs independent arbiter passes on separate dimensions — correctness, evidence use, responsiveness, calibration, and citation quality — instead of one holistic 'who won' judgment. MAD Studio uses M-MAD as the backbone of its Truth-Seeking Debate verdict.",
    related: ["multi-agent-debate", "arbiter", "dimension-sweep"],
  },
  {
    term: "Degeneration of Thought (DoT)",
    slug: "degeneration-of-thought",
    definition:
      "Degeneration of Thought is a failure mode formalized by Liang et al. (EMNLP 2024) where an LLM, once committed to an answer, fails to produce genuinely novel reasoning during self-reflection — even when the initial answer is wrong. Multi-agent debate fixes this by separating critic and advocate into agents with distinct context.",
    aliases: ["DoT"],
    related: ["multi-agent-debate", "self-refine"],
  },
  {
    term: "Bullshit Index",
    slug: "bullshit-index",
    definition:
      "The Bullshit Index is MAD Studio's real-time fact-checking layer. Every claim made by an agent is extracted and cross-referenced against the evidence pack, the public web, and the agent's earlier turns. Hallucinated citations, drifted positions, false precision, and contradicted statements all push the meter higher.",
    related: ["hallucination", "fact-checking", "calibration"],
  },
  {
    term: "Saga",
    slug: "saga",
    definition:
      "Saga is MAD Studio's recursive optimization engine. It spawns hidden child sessions from a source conversation, scores each transcript against a rubric, applies the best optimizer suggestion, and re-runs — generation after generation — until the score curve flattens or a stop condition fires. Direct precedent: Reflexion and Self-Refine.",
    related: ["reflexion", "self-refine", "experiments"],
  },
  {
    term: "Truth-Seeking Debate",
    slug: "truth-seeking-debate",
    definition:
      "Truth-Seeking Debate is MAD Studio's verdict-grade protocol — a 10-phase pipeline that combines structured rebuttals, claim extraction, and an independent M-MAD arbiter sweep. Designed for cases where the deliverable must be an auditable per-dimension scorecard rather than a single confidence number.",
    related: ["m-mad", "arbiter", "multi-agent-debate"],
  },
  {
    term: "Open Discussion",
    slug: "open-discussion",
    definition:
      "Open Discussion is MAD Studio's brainstorming protocol — agents take turns surfacing objections, evidence, and angles without a fixed verdict pipeline. Best for exploratory pre-mortems, early-stage idea expansion, and surfacing the long tail of objections before pressure-testing the strongest ones with Truth-Seeking Debate.",
    related: ["truth-seeking-debate", "team-discussion"],
  },
  {
    term: "Team Discussion",
    slug: "team-discussion",
    definition:
      "Team Discussion is MAD Studio's two-team protocol. Battle mode pits an advocate team against an adversary team across bounded rounds; collaboration mode lets the teams synthesize. Useful for political messaging, product positioning, and any setting where the strongest opposing case must be staged before a decision is locked in.",
    related: ["open-discussion", "truth-seeking-debate"],
  },
  {
    term: "Dimension-Sweep Arbiter",
    slug: "dimension-sweep-arbiter",
    definition:
      "A Dimension-Sweep Arbiter scores a debate across independent passes — typically correctness, evidence use, responsiveness, calibration, and citation quality — rather than producing a single holistic judgment. Introduced by Feng et al. (ACL 2025) as M-MAD, it prevents an arbiter from retroactively rewriting its own verdict.",
    related: ["m-mad", "arbiter"],
  },
  {
    term: "Mixture-of-Agents (MoA)",
    slug: "mixture-of-agents",
    definition:
      "Mixture-of-Agents is a layered multi-LLM architecture from Wang et al. (ICLR 2025) where each layer's agents refine the previous layer's outputs. Open-source MoA reached 65.1% on AlpacaEval 2.0, beating GPT-4 Omni — strong evidence that orchestrated ensembles can outperform any single frontier model.",
    aliases: ["MoA"],
    related: ["multi-agent-debate"],
  },
  {
    term: "Chain-of-Thought (CoT)",
    slug: "chain-of-thought",
    definition:
      "Chain-of-Thought prompting (Wei et al., 2022) is the technique of asking an LLM to 'think step by step' before giving an answer. It unlocks reasoning that greedy single-shot decoding misses and is the foundation that Self-Consistency and Multi-Agent Debate both build on.",
    aliases: ["CoT"],
    related: ["self-consistency"],
  },
  {
    term: "Reflexion",
    slug: "reflexion",
    definition:
      "Reflexion (Shinn et al., NeurIPS 2023) is a verbal self-critique loop where an agent reflects on prior attempts, generates a critique, and retries. It iteratively raises performance without weight updates — the direct precedent for MAD Studio's Saga recursive optimization passes.",
    related: ["saga", "self-refine"],
  },
  {
    term: "Self-Refine",
    slug: "self-refine",
    definition:
      "Self-Refine (Madaan et al., NeurIPS 2023) is single-model iterative refinement using self-generated feedback. It is the minimal version of what multi-agent debate scales up across roles — the same critique-and-revise loop, but performed by separate agents with distinct context to avoid Degeneration of Thought.",
    related: ["reflexion", "degeneration-of-thought"],
  },
  {
    term: "ChatEval",
    slug: "chateval",
    definition:
      "ChatEval (Chan et al., ICLR 2024) demonstrated that multi-agent debate panels evaluate generated text more reliably than single-judge baselines. It is one of the foundational results behind using LLM-as-judge debates for tasks like response quality scoring and open-ended evaluation.",
    related: ["llm-as-judge", "arbiter"],
  },
  {
    term: "AutoGen",
    slug: "autogen",
    definition:
      "AutoGen (Microsoft, COLM 2024) is a multi-agent conversation framework that orchestrates role-specialized agents through structured dialogues. It is one of the most-cited alternatives to MAD Studio for general multi-agent tasks; MAD Studio differentiates with peer-reviewed debate protocols and the M-MAD arbiter pipeline.",
    related: ["multi-agent-debate"],
  },
  {
    term: "CrewAI",
    slug: "crewai",
    definition:
      "CrewAI is an open-source framework for role-based multi-agent orchestration with sequential or hierarchical task execution. Compared to MAD Studio, it is general-purpose agent orchestration; MAD Studio is specifically built for debate, arbitration, and recursive optimization with academic-grade protocols.",
    related: ["multi-agent-debate", "autogen"],
  },
  {
    term: "LangGraph",
    slug: "langgraph",
    definition:
      "LangGraph is LangChain's graph-based agent orchestration library, modeling multi-agent flows as stateful directed graphs. MAD Studio uses purpose-built debate protocols rather than user-authored graphs, with built-in M-MAD scoring and Bullshit Index hallucination detection.",
    related: ["multi-agent-debate", "autogen"],
  },
  {
    term: "Model Context Protocol (MCP)",
    slug: "mcp",
    definition:
      "The Model Context Protocol is an open standard for connecting LLM clients to external tools and data sources. MAD Studio ships a native MCP server so debates can be triggered as a callable tool from Claude Desktop, Cursor, or any MCP-compatible client — your agent of agents.",
    aliases: ["MCP"],
  },
  {
    term: "Sycophancy",
    slug: "sycophancy",
    definition:
      "Sycophancy is the tendency of LLMs to agree with users or peers even when the correct answer disagrees. In multi-agent debate, Wynn et al. (2025) showed agents can shift from correct to incorrect answers to match peers — making adversary calibration and adaptive stopping essential.",
    related: ["agreement-bias", "calibration"],
  },
  {
    term: "Adaptive Stability Detection",
    slug: "adaptive-stability",
    definition:
      "Adaptive Stability Detection (Hu et al., NeurIPS 2025) is a stopping rule for multi-agent debates: stop the moment the arbiter verdict stabilizes across consecutive rounds, rather than running fixed-length debates. Improves accuracy over majority vote while cutting token cost by 30–60% in reported benchmarks.",
    related: ["m-mad", "truth-seeking-debate"],
  },
  {
    term: "GroupDebate",
    slug: "groupdebate",
    definition:
      "GroupDebate (Liu et al., AAMAS 2026) introduces group-based discussion to scale multi-agent debate efficiency. By partitioning agents into discussion groups before plenary synthesis, it cuts token cost relative to all-pairs debate while preserving accuracy on hard reasoning tasks.",
    related: ["multi-agent-debate", "sparse-topology"],
  },
  {
    term: "Sparse Communication Topology",
    slug: "sparse-topology",
    definition:
      "Sparse Communication Topology (Li et al., EMNLP 2024 Findings) shows that fully-connected agent communication is wasteful — selecting a sparse subset of inter-agent edges preserves multi-agent debate accuracy while dramatically reducing context length and cost.",
    related: ["groupdebate", "multi-agent-debate"],
  },
  {
    term: "Calibration",
    slug: "calibration",
    definition:
      "In LLM evaluation, calibration measures whether a model's stated confidence matches its actual accuracy. Well-calibrated agents say 'I'm uncertain' on questions they get wrong. Multi-agent debate generally improves calibration; the M-MAD arbiter scores it as a separate dimension.",
    related: ["m-mad", "bullshit-index"],
  },
  {
    term: "Steelman",
    slug: "steelman",
    definition:
      "Steelmanning is the rhetorical practice of constructing the strongest possible version of an opposing argument before rebutting it. In multi-agent debate, steelman quality is a scored dimension — adversaries that produce only strawmen flag low and reduce trust in the verdict.",
    related: ["red-teaming"],
  },
  {
    term: "Position Drift",
    slug: "position-drift",
    definition:
      "Position Drift is the failure mode where an agent silently abandons or contradicts an earlier claim without acknowledgment. The Bullshit Index tracks drift across turns: if an agent endorses A in turn 3 and contradicts it in turn 9 without explicit reversal, the meter rises.",
    related: ["bullshit-index", "sycophancy"],
  },
  {
    term: "Hallucination",
    slug: "hallucination",
    definition:
      "An LLM hallucination is a confidently-stated claim that is fabricated, contradicted by sources, or unsupported by the evidence pack. Multi-agent debate reduces hallucination rates by forcing claims through adversarial cross-examination; the Bullshit Index quantifies it in real time.",
    related: ["bullshit-index", "calibration"],
  },
  {
    term: "LLM-as-Judge",
    slug: "llm-as-judge",
    definition:
      "LLM-as-Judge is the practice of using a language model to score, rank, or arbitrate the outputs of other models. ChatEval and M-MAD both work in this paradigm. Risks include positional bias, length bias, and self-preference — mitigated by debate among judges and dimension-sweep scoring.",
    related: ["chateval", "m-mad"],
  },
  {
    term: "Red-Teaming",
    slug: "red-teaming",
    definition:
      "In AI strategy, red-teaming means stress-testing an idea, claim, or decision against hostile scrutiny before commitment. Multi-agent debate operationalizes this by staging structured adversary teams with specific personas, then capturing the surviving claims and unresolved objections as deliverables.",
    related: ["steelman", "team-discussion"],
  },
  {
    term: "Best-of-N",
    slug: "best-of-n",
    definition:
      "Best-of-N sampling runs an LLM N times and selects the highest-scoring output by a reward model or rubric. It is conceptually close to Self-Consistency but selects rather than votes. MAD Studio's Lab Experiments use Best-of-N over parameter sweeps with a validation prompt as the selector.",
    related: ["self-consistency", "experiments"],
  },
  {
    term: "Worker",
    slug: "worker",
    definition:
      "In MAD Studio, a Worker is a reusable agent definition — model, system prompt, persona, and provider configuration. Workers are snapshotted into a conversation when used, so editing a Worker definition never rewrites historical transcripts. The primitive that makes 2–100 agent compositions practical.",
    related: ["persona", "playbook"],
  },
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((term) => term.slug === slug);
}
