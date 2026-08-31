import Link from "next/link";
import {
  furtherReading,
  papers,
  pdfLink,
  primaryLinkLabel,
} from "@/lib/papers";

function PaperLinks({ href, extraLinks }: { href: string; extraLinks?: { label: string; href: string }[] }) {
  const pdf = pdfLink(href);

  return (
    <div className="mt-1 flex flex-wrap items-center gap-3 border-t border-white/5 pt-4">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition hover:border-accent/60 hover:bg-accent/10"
      >
        {primaryLinkLabel(href)}
        <span aria-hidden>↗</span>
      </a>
      {pdf && (
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-zinc-500 underline decoration-white/10 underline-offset-2 transition hover:text-accent-glow"
        >
          PDF
        </a>
      )}
      {extraLinks?.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-zinc-500 underline decoration-white/10 underline-offset-2 transition hover:text-accent-glow"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default function Science() {
  const allReferences = [...papers, ...furtherReading];

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
            Protocols connected to their research origins.
          </h2>
          <p className="text-balance text-zinc-400 md:text-lg">
            Delibora&apos;s debate workflows are informed by published
            multi-agent research. The references below explain the methods and
            tradeoffs behind structured debate, judging, and collaboration on{" "}
            <a
              href="https://arxiv.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-glow underline decoration-accent/40 underline-offset-2 transition hover:text-white"
            >
              arXiv
            </a>
            ,{" "}
            <a
              href="https://aclanthology.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-glow underline decoration-accent/40 underline-offset-2 transition hover:text-white"
            >
              ACL Anthology
            </a>
            , or{" "}
            <a
              href="https://neurips.cc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-glow underline decoration-accent/40 underline-offset-2 transition hover:text-white"
            >
              NeurIPS
            </a>
            .
          </p>
          <p className="text-balance text-zinc-400 md:text-lg">
            New to the field? Read our guide on{" "}
            <Link
              href="/research/multi-agent-debate-vs-self-consistency"
              className="text-accent-glow underline decoration-accent/40 underline-offset-2 transition hover:text-white"
            >
              when to use multi-agent debate vs self-consistency
            </Link>
            .
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
              <PaperLinks href={paper.href} extraLinks={paper.extraLinks} />
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
            Further reading
          </h3>
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {furtherReading.map((item) => (
              <li
                key={item.id}
                className="glow-border flex flex-col gap-3 rounded-xl border border-white/10 bg-ink-900/60 p-5"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-cyan">
                  {item.venue}
                </span>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold leading-snug text-white transition hover:text-accent-glow"
                >
                  {item.title}
                </a>
                <p className="text-xs text-zinc-500">{item.authors}</p>
                <p className="text-sm text-zinc-400">{item.note}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition hover:border-accent/60 hover:bg-accent/10"
                >
                  Read on Medium
                  <span aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 rounded-xl border border-white/10 bg-ink-900/60 p-6">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
            Full reference list
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {allReferences.map((ref) => (
              <li key={`ref-${ref.id}`}>
                <a
                  href={ref.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 underline decoration-white/10 underline-offset-2 transition hover:text-accent-glow"
                >
                  {ref.authors} — {ref.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
