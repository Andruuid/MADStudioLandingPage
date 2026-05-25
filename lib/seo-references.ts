/** Crawler-facing research citations — not rendered in the landing page UI. */
export type SeoReference = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  url: string;
};

export const seoReferences: SeoReference[] = [
  {
    id: "mad-m2-2026",
    title: "Multi-Agent Debate with Memory Masking",
    authors: "Tian, Feng, Zhao, Zhu, Yan, Han",
    venue: "ICLR 2026",
    url: "https://openreview.net/forum?id=EdTt8nMAMA",
  },
  {
    id: "chateval-iclr-proceedings",
    title:
      "ChatEval: Towards Better LLM-based Evaluators through Multi-Agent Debate",
    authors: "Chan, Chen, Su, Yu, Xue, Zhang, Fu, Liu",
    venue: "ICLR 2024",
    url: "https://proceedings.iclr.cc/paper_files/paper/2024/hash/25cc3adf8c85f7c70989cb8a97a691a7-Abstract-Conference.html",
  },
  {
    id: "groupdebate-2026",
    title:
      "GroupDebate: Enhancing the Efficiency of Multi-Agent Debate Using Group Discussion",
    authors: "Liu, Wang, Huang, Xu, Zeng, Jiang, Yang, Li",
    venue: "AAMAS 2026",
    url: "https://arxiv.org/abs/2409.14051",
  },
  {
    id: "sparse-topology-2024",
    title: "Improving Multi-Agent Debate with Sparse Communication Topology",
    authors: "Li, Du, Zhang, Hou, Grabowski, Li, Ie",
    venue: "EMNLP 2024 Findings",
    url: "https://aclanthology.org/2024.findings-emnlp.427/",
  },
  {
    id: "going-mad-2024",
    title:
      "Should we be going MAD? A Look at Multi-Agent Debate Strategies for LLMs",
    authors: "Smit, Duckworth, Grinsztajn, Barrett, Pretorius",
    venue: "arXiv 2024",
    url: "https://arxiv.org/abs/2311.17371",
  },
  {
    id: "swe-debate-2025",
    title:
      "SWE-Debate: Competitive Multi-Agent Debate for Software Issue Resolution",
    authors: "Li, Shi, Lin, Gu, Lian, Wang, Jia, Huang, Wang",
    venue: "arXiv 2025",
    url: "https://arxiv.org/abs/2507.23348",
  },
  {
    id: "debate-or-vote-2025",
    title:
      "Debate or Vote: Which Yields Better Decisions in Multi-Agent Large Language Models?",
    authors: "Choi, Zhu, Li",
    venue: "NeurIPS 2025",
    url: "https://proceedings.neurips.cc/paper_files/paper/2025/hash/934252acd87f254d5d4672fbde283bd2-Abstract-Conference.html",
  },
  {
    id: "talk-isnt-cheap-2025",
    title:
      "Talk Isn't Always Cheap: Understanding Failure Modes in Multi-Agent Debate",
    authors: "Wynn, Satija, Hadfield",
    venue: "ICML MAS Workshop 2025",
    url: "https://arxiv.org/abs/2509.05396",
  },
  {
    id: "liang-mad-acl-proceedings",
    title:
      "Encouraging Divergent Thinking in Large Language Models through Multi-Agent Debate",
    authors:
      "Liang, He, Jiao, Wang, Wang, Wang, Yang, Shi, Tu",
    venue: "EMNLP 2024",
    url: "https://aclanthology.org/2024.emnlp-main.992/",
  },
];
