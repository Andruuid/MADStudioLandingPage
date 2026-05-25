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
];
