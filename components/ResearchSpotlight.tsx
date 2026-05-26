import Link from "next/link";
import { researchArticles } from "@/lib/research-articles";

export default function ResearchSpotlight() {
  return (
    <section className="relative border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
              Research guides
            </span>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Practical guides on multi-agent debate
            </h2>
            <p className="mt-3 text-zinc-400">
              Peer-reviewed methodology, explained for builders — free to read,
              no signup required.
            </p>
          </div>
          <Link
            href="/research"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-accent-glow transition hover:text-white"
          >
            View all guides
            <span aria-hidden>→</span>
          </Link>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {researchArticles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/research/${article.slug}`}
                className="glow-border group flex h-full flex-col gap-3 rounded-xl border border-white/10 bg-ink-800/40 p-6 transition hover:border-white/20"
              >
                <div className="flex items-center gap-3 text-xs text-zinc-500">
                  <span>{article.readTimeMinutes} min read</span>
                  <span aria-hidden>·</span>
                  <span>Free</span>
                </div>
                <h3 className="text-lg font-semibold leading-snug text-white transition group-hover:text-accent-glow">
                  {article.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-zinc-400">
                  {article.description}
                </p>
                <span className="text-xs font-medium text-accent-cyan transition group-hover:text-white">
                  Read guide →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
