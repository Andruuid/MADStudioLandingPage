export const faqs = [
  {
    question: "What is multi-agent debate?",
    answer:
      "Multi-agent debate is an AI reasoning technique where multiple language models (or multiple instances of the same model with different roles) argue about a question across structured rounds. Peer-reviewed research consistently shows debate produces more factual, better-calibrated answers than single-prompt baselines, especially on hard reasoning and evaluation tasks.",
  },
  {
    question: "How is MAD Studio different from running prompts in ChatGPT or Claude?",
    answer:
      "A single prompt gives you one model's first-pass answer. MAD Studio runs 2–100 reasoning agents through five built-in protocol engines — Truth-Seeking Debate (10-phase M-MAD), Open Discussion, Team Discussion (battle/collaboration), Blind Ping Pong, Scored Debate (FREE-MAD) — plus a custom Protocol Library you can fork and save. Claims get rebutted, evidence gets weighed, and verdicts come with auditable per-dimension scorecards.",
  },
  {
    question: "Which AI models can I use with MAD Studio?",
    answer:
      "MAD Studio supports any model on OpenRouter (including GPT 5.5, Claude Opus 4.7, Gemini, Llama, Mixtral, and dozens more), local models served by LM Studio, and deterministic dummy providers for testing. You can mix providers per agent and configure automatic fallbacks.",
  },
  {
    question: "Is multi-agent debate scientifically validated?",
    answer:
      "Yes. MAD Studio is built on peer-reviewed research from MIT, Google Brain, Anthropic, Tencent AI Lab, and others. Every protocol traces back to published methodology. Key papers:",
    links: [
      {
        label: "Du et al. — Multiagent Debate (ICML 2024)",
        href: "https://arxiv.org/abs/2305.14325",
      },
      {
        label: "Liang et al. — Multi-Agent Debate / DoT (EMNLP 2024)",
        href: "https://aclanthology.org/2024.emnlp-main.992/",
      },
      {
        label: "Hu et al. — LLM Judges with Adaptive Stability (NeurIPS 2025)",
        href: "https://neurips.cc/virtual/2025/loc/san-diego/poster/117644",
      },
      {
        label: "Feng et al. — M-MAD dimension-sweep arbiter (ACL 2025)",
        href: "https://arxiv.org/abs/2412.20127",
      },
      {
        label: "Wang et al. — Mixture-of-Agents (ICLR 2025)",
        href: "https://arxiv.org/abs/2406.04692",
      },
    ],
  },
  {
    question: "Where can I read more about multi-agent debate?",
    answer:
      "We publish free, in-depth guides on multi-agent debate methodology — no signup required. Start here:",
    links: [
      {
        label: "When to use multi-agent debate vs self-consistency",
        href: "/research/multi-agent-debate-vs-self-consistency",
      },
      {
        label: "How to red-team ideas with multi-agent debate",
        href: "/research/red-team-ideas-multi-agent-debate",
      },
      {
        label: "All research guides",
        href: "/research",
      },
    ],
  },
  {
    question: "What can I use multi-agent debate for?",
    answer:
      "Political campaigns stress-test messaging against simulated opposition. Researchers run hypotheses through skeptical peer-review panels. Marketers debate competing campaign angles. Lawyers map adversarial arguments. Product teams institutionalize the devil's advocate. Educators make critical thinking visible. Anyone can run debates for fun — pick a topic, pick six agents, hit start.",
  },
  {
    question: "What is the Bullshit Index?",
    answer:
      "The Bullshit Index is MAD Studio's real-time fact-checking layer. Every claim made by an agent is extracted, cross-referenced against your evidence pack, the public web, and the agent's earlier turns. Hallucinated citations, drifted positions, false precision, and contradicted statements all push the meter up. It's hallucination detection built directly into the debate loop.",
  },
  {
    question: "Can I integrate MAD Studio into my own product?",
    answer:
      "Yes. MAD Studio offers a full REST API and a native Model Context Protocol (MCP) server. Spin up sessions, inject human turns, stream transcripts, and run experiments programmatically. The MCP server drops directly into Claude Desktop, Cursor, and any MCP-compatible client.",
  },
  {
    question: "What does Saga do?",
    answer:
      "Saga is MAD Studio's recursive optimization engine. It spawns hidden child sessions from a source conversation, scores each transcript against your rubric, applies the best optimizer suggestion, and re-runs — generation after generation — until the score curve flattens or a stop condition fires. It's how you find answers that no single prompt would have produced.",
  },
  {
    question: "Is MAD Studio an alternative to AutoGen, CrewAI, or LangGraph?",
    answer:
      "MAD Studio is purpose-built for multi-agent debate specifically — verdict-grade protocols, the M-MAD arbiter pipeline, and the Bullshit Index — rather than general-purpose agent orchestration. If you need a graph of role-specialized agents executing arbitrary tasks, AutoGen, CrewAI, and LangGraph are excellent. If you need auditable structured disagreement with per-dimension scoring, MAD Studio is the right tool.",
  },
  {
    question: "How much does multi-agent debate cost in tokens?",
    answer:
      "Token cost scales with agents × rounds, so a 6-agent, 5-round Truth-Seeking Debate is roughly 30× a single-prompt baseline before arbiter passes. MAD Studio mitigates this with rolling summaries, sparse communication topology (Li et al., EMNLP 2024), adaptive stopping (Hu et al., NeurIPS 2025), and hard cost caps that self-terminate sessions before they burn budget.",
  },
  {
    question: "Does multi-agent debate actually beat majority voting?",
    answer:
      "It depends on the task. For discrete math and multiple-choice with one correct answer, Self-Consistency (CoT-SC) is usually the better default. For factuality, open-ended strategy, and adversarial red-teaming, multi-agent debate consistently wins in peer-reviewed benchmarks (Du et al. ICML 2024, Khan et al. ICML 2024). MAD Studio supports both paradigms and a hybrid mode that combines them.",
  },
  {
    question: "Can I use MAD Studio without writing any code?",
    answer:
      "Yes. Every protocol — Open Discussion, Truth-Seeking Debate, Team Discussion, Saga, Lab Experiments — is configurable from the web UI. The REST API and MCP server are there if you want to drive debates programmatically from your own stack, but they are optional. The platform ships with reusable Personas, Playbooks, and Teams so a typical first session takes under two minutes to configure.",
  },
  {
    question: "Is my data used to train AI models?",
    answer:
      "No. MAD Studio sends prompts to whichever provider you configure (OpenRouter, LM Studio, or your own endpoint) — we do not retrain models on your transcripts and do not share session data with third parties. Local-only deployments via LM Studio are fully private. Transcripts are stored in your Supabase workspace and you can purge them at any time.",
  },
  {
    question: "What is the Degeneration of Thought problem?",
    answer:
      "Degeneration of Thought, formalized by Liang et al. (EMNLP 2024), is the failure mode where an LLM commits to an answer and then cannot produce genuinely novel reasoning during self-reflection — even when wrong. The critic and advocate inside one model share the same latent commitment. Multi-agent debate fixes this by separating roles into agents with distinct context.",
  },
];

export type FAQ = (typeof faqs)[number] & {
  links?: { label: string; href: string }[];
};
