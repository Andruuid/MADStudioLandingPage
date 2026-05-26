import type { Metadata } from "next";
import Link from "next/link";
import ResearchNav from "@/components/ResearchNav";
import Footer from "@/components/Footer";
import { researchArticles } from "@/lib/research-articles";

const SITE_URL = "https://multiagentdebates.com";

export const metadata: Metadata = {
  title: "Research — Multi-Agent Debate Guides",
  description:
    "Practical guides on multi-agent debate, LLM reasoning, and when structured AI deliberation beats single-prompt approaches. From the MAD Studio team.",
  alternates: {
    canonical: `${SITE_URL}/research`,
  },
  openGraph: {
    title: "Research | MAD Studio",
    description:
      "Guides on multi-agent debate vs self-consistency, LLM reasoning strategies, and structured AI deliberation.",
    url: `${SITE_URL}/research`,
  },
};

export default function ResearchIndexPage() {
  return (
    <main className="relative min-h-screen bg-ink-950 text-zinc-200">
      <ResearchNav />

      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
          Research
        </span>
        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Guides on multi-agent debate &amp; LLM reasoning
        </h1>
        <p className="mt-4 text-balance text-zinc-400 md:text-lg">
          Practical write-ups grounded in peer-reviewed work — when to debate,
          when to vote, and how to get more from structured AI deliberation.
        </p>

        <ul className="mt-12 space-y-4">
          {researchArticles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/research/${article.slug}`}
                className="glow-border group block rounded-xl border border-white/10 bg-ink-800/40 p-6 transition hover:border-white/20"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
                  <time dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span aria-hidden>·</span>
                  <span>{article.readTimeMinutes} min read</span>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-white transition group-hover:text-accent-glow">
                  {article.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {article.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-xl border border-accent/20 bg-accent/5 p-6">
          <p className="text-sm font-medium text-white">
            Ready to run structured debate?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            MAD Studio implements the protocols described in these guides — join
            the free beta waitlist.
          </p>
          <Link
            href="/#waitlist"
            className="mt-4 inline-flex items-center rounded-md border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-accent/20"
          >
            Request beta access →
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
