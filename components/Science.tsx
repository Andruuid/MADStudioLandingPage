import { arxivPdfUrl, papers } from "@/lib/papers";

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
            published methodology — each paper below links directly to its{" "}
            <a
              href="https://arxiv.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-glow underline decoration-accent/40 underline-offset-2 transition hover:text-white"
            >
              arXiv
            </a>{" "}
            source.
          </p>
        </div>

        <ol className="mt-14 grid gap-4 md:grid-cols-2">
          {papers.map((paper, idx) => (
            <li
              key={paper.id}
              className="glow-border group relative flex flex-col gap-3 rounded-xl border border-white/10 bg-ink-800/60 p-6 transition hover:border-white/20"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-zinc-500">
                  Paper {String(idx + 1).padStart(2, "0")}
                </span>
                <a
                  href={paper.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-cyan transition hover:text-white"
                >
                  {paper.venue}
                </a>
              </div>
              <a
                href={paper.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold leading-snug text-white transition group-hover:text-accent-glow md:text-lg"
              >
                {paper.title}
              </a>
              <p className="text-xs text-zinc-500">{paper.authors}</p>
              <p className="text-sm leading-relaxed text-zinc-400">
                {paper.note}
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-3 border-t border-white/5 pt-4">
                <a
                  href={paper.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition hover:border-accent/60 hover:bg-accent/10"
                >
                  Read on arXiv
                  <span aria-hidden>↗</span>
                </a>
                <a
                  href={arxivPdfUrl(paper.href)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-zinc-500 underline decoration-white/10 underline-offset-2 transition hover:text-accent-glow"
                >
                  PDF
                </a>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-xl border border-white/10 bg-ink-900/60 p-6">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
            Full reference list
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {papers.map((paper) => (
              <li key={`ref-${paper.id}`}>
                <a
                  href={paper.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 underline decoration-white/10 underline-offset-2 transition hover:text-accent-glow"
                >
                  {paper.authors} — {paper.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
