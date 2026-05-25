const papers = [
  {
    title:
      "Improving Factuality and Reasoning in Language Models through Multiagent Debate",
    authors: "Du, Li, Torralba, Tenenbaum, Mordatch",
    venue: "MIT / Google Brain · ICML 2024",
    href: "https://arxiv.org/abs/2305.14325",
    note: "Foundational result: agents critiquing each other across rounds converge on more factual, better-reasoned answers.",
  },
  {
    title:
      "Encouraging Divergent Thinking in LLMs through Multi-Agent Debate",
    authors: "Liang, He, Ma, Zhang, Wang, Hu, Zhang, Lin",
    venue: "Tencent AI Lab · EMNLP 2024",
    href: "https://arxiv.org/abs/2305.19118",
    note: "Establishes that adversarial multi-agent debate counteracts degeneration of thought and unlocks deeper reasoning.",
  },
  {
    title:
      "M-MAD: Multidimensional Multi-Agent Debate for Translation Evaluation",
    authors: "Feng, Zhao, Lyu, Li, Tu, Wang",
    venue: "ACL 2025",
    href: "https://arxiv.org/abs/2412.20127",
    note: "Introduces the per-dimension arbiter sweep that powers MAD Studio's truth-seeking verdict scoring.",
  },
  {
    title:
      "ChatEval: Towards Better LLM-based Evaluators through Multi-Agent Debate",
    authors: "Chan, Chen, Yu, Lu, Sun, Liu",
    venue: "ICLR 2024",
    href: "https://arxiv.org/abs/2308.07201",
    note: "Demonstrates that multi-agent debate panels evaluate generated text more reliably than single-judge baselines.",
  },
];

export default function Science() {
  return (
    <section
      id="science"
      className="relative border-t border-white/5 bg-ink-900/40 py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
            01 / Scientific foundation
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Built on peer-reviewed research, not vibes.
          </h2>
          <p className="text-balance text-zinc-400 md:text-lg">
            MAD Studio operationalizes the leading academic frameworks in
            multi-agent debate, turning them from research notebooks into a
            production-grade workbench. Every protocol is traceable to a
            published methodology.
          </p>
        </div>

        <ol className="mt-14 grid gap-4 md:grid-cols-2">
          {papers.map((paper, idx) => (
            <li
              key={paper.title}
              className="glow-border relative flex flex-col gap-3 rounded-xl border border-white/10 bg-ink-800/60 p-6 transition hover:border-white/20"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-500">
                  Paper {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-cyan">
                  {paper.venue}
                </span>
              </div>
              <a
                href={paper.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold leading-snug text-white transition hover:text-accent-glow md:text-lg"
              >
                {paper.title}
              </a>
              <p className="text-xs text-zinc-500">{paper.authors}</p>
              <p className="text-sm text-zinc-400">{paper.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
