export type PaperLink = {
  label: string;
  href: string;
};

export type Paper = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  href: string;
  note: string;
  extraLinks?: PaperLink[];
};

export const papers: Paper[] = [
  {
    id: "du-2024",
    title:
      "Improving Factuality and Reasoning in Language Models through Multiagent Debate",
    authors: "Du, Li, Torralba, Tenenbaum, Mordatch",
    venue: "MIT / Google Brain · ICML 2024",
    href: "https://arxiv.org/abs/2305.14325",
    note: "Foundational result: agents critiquing each other across rounds converge on more factual, better-reasoned answers.",
  },
  {
    id: "liang-2024",
    title:
      "Encouraging Divergent Thinking in Large Language Models through Multi-Agent Debate",
    authors:
      "Liang, He, Jiao, Wang, Wang, Wang, Yang, Shi, Tu",
    venue: "Tencent AI Lab · EMNLP 2024",
    href: "https://aclanthology.org/2024.emnlp-main.992/",
    extraLinks: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2305.19118",
      },
    ],
    note: "Introduces the Degeneration-of-Thought problem and shows multi-agent debate unlocks divergent thinking where self-reflection stalls.",
  },
  {
    id: "m-mad-2025",
    title:
      "M-MAD: Multidimensional Multi-Agent Debate for Translation Evaluation",
    authors: "Feng, Zhao, Lyu, Li, Tu, Wang",
    venue: "ACL 2025",
    href: "https://arxiv.org/abs/2412.20127",
    note: "Introduces the per-dimension arbiter sweep that informs the platform's truth-seeking verdict scoring.",
  },
  {
    id: "chateval-2024",
    title:
      "ChatEval: Towards Better LLM-based Evaluators through Multi-Agent Debate",
    authors: "Chan, Chen, Yu, Lu, Sun, Liu",
    venue: "ICLR 2024",
    href: "https://arxiv.org/abs/2308.07201",
    note: "Demonstrates that multi-agent debate panels evaluate generated text more reliably than single-judge baselines.",
  },
  {
    id: "khan-2024",
    title:
      "Debating with More Persuasive LLMs Leads to More Truthful Answers",
    authors:
      "Khan, Hughes, Valentine, Ruis, Sachan, Radhakrishnan, Bowman, Perez",
    venue: "Anthropic · ICML 2024 (Best Paper)",
    href: "https://arxiv.org/abs/2402.06782",
    note: "Strong empirical evidence that debate makes weaker judges reliably select truthful answers from stronger debaters.",
  },
  {
    id: "hu-2025",
    title:
      "Multi-Agent Debate for LLM Judges with Adaptive Stability Detection",
    authors: "Hu, Tan, Wang, Qu, Chen",
    venue: "NeurIPS 2025",
    href: "https://neurips.cc/virtual/2025/loc/san-diego/poster/117644",
    note: "Formalizes debate among LLM judges and adds adaptive stability detection so debates stop when consensus stabilizes — improving accuracy over majority vote.",
  },
  {
    id: "autogen-2024",
    title:
      "AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation",
    authors:
      "Wu, Bansal, Zhang, Wu, Li, Zhu, Wang, Saied, Awadallah, Awadalla, Wang",
    venue: "Microsoft · COLM 2024",
    href: "https://arxiv.org/abs/2308.08155",
    note: "Shows that role-specialized agent groups orchestrated through structured conversation consistently outperform monolithic prompts on complex tasks.",
  },
  {
    id: "reflexion-2023",
    title: "Reflexion: Language Agents with Verbal Reinforcement Learning",
    authors: "Shinn, Cassano, Berman, Gopinath, Narasimhan, Yao",
    venue: "Northeastern · NeurIPS 2023",
    href: "https://arxiv.org/abs/2303.11366",
    note: "Studies verbal self-critique loops in which an agent reflects on prior attempts, generates feedback, and retries.",
  },
  {
    id: "self-refine-2023",
    title: "Self-Refine: Iterative Refinement with Self-Feedback",
    authors: "Madaan, Tandon, Gupta, Hallinan, Gao, Wiegreffe, Alon, et al.",
    venue: "CMU · NeurIPS 2023",
    href: "https://arxiv.org/abs/2303.17651",
    note: "Single-model iterative refinement via self-generated feedback. The minimal version of what multi-agent debate scales up across roles.",
  },
  {
    id: "moa-2025",
    title: "Mixture-of-Agents Enhances Large Language Model Capabilities",
    authors: "Wang, Bai, Liu, Chen, Cardie, Zhang, et al.",
    venue: "Together AI · ICLR 2025",
    href: "https://arxiv.org/abs/2406.04692",
    note: "Layered multi-LLM collaboration where each layer's agents refine the previous layer's outputs. Open-source MoA reaches 65.1% on AlpacaEval 2.0, beating GPT-4 Omni.",
  },
  {
    id: "choi-2026",
    title:
      "Demystifying Multi-Agent Debate: The Role of Confidence and Diversity",
    authors: "Choi, Zhu, Li, et al.",
    venue: "2026",
    href: "https://arxiv.org/abs/2601.19921",
    note: "Pinpoints when multi-agent debate actually beats majority vote: diversity-aware initialization plus calibrated confidence communication.",
  },
];

export const furtherReading = [
  {
    id: "medium-debate-deep-dive",
    title: "Building a Multi-Agent AI Debate System: A Technical Deep Dive",
    authors: "Swastik Raj",
    venue: "Medium · Engineering",
    href: "https://medium.com/@swastikraj619/building-a-multi-agent-ai-debate-system-a-technical-deep-dive-e0ebf64d8180",
    note: "Practical walkthrough of orchestrating multi-agent debate in production — useful context for how debate systems are built and scaled in the wild.",
  },
];

export function arxivPdfUrl(absUrl: string): string {
  return absUrl.replace("/abs/", "/pdf/");
}

export function primaryLinkLabel(href: string): string {
  if (href.includes("arxiv.org")) return "Read on arXiv";
  if (href.includes("aclanthology.org")) return "Read on ACL Anthology";
  if (href.includes("neurips.cc")) return "Read on NeurIPS";
  return "Read paper";
}

export function pdfLink(href: string): string | null {
  if (href.includes("arxiv.org/abs/")) return arxivPdfUrl(href);
  if (href.includes("aclanthology.org") && !href.endsWith(".pdf")) {
    return href.endsWith("/") ? `${href.slice(0, -1)}.pdf` : `${href}.pdf`;
  }
  return null;
}
