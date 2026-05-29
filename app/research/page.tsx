import type { Metadata } from "next";
import Link from "next/link";
import ResearchNav from "@/components/ResearchNav";
import Footer from "@/components/Footer";
import { researchArticles } from "@/lib/research-articles";

const SITE_URL = "https://multiagentdebates.com";

export const metadata: Metadata = {
  title: "Research — Free Guides on Multi-Agent Debate & LLM Reasoning",
  description:
    "Practical, research-backed guides on multi-agent debate, self-consistency, and LLM reasoning. From the MAD Studio team. Free, no signup.",
  alternates: {
    canonical: `${SITE_URL}/research`,
    types: {
      "application/rss+xml": [
        {
          url: `${SITE_URL}/research/feed.xml`,
          title: "MAD Studio Research",
        },
      ],
    },
  },
  openGraph: {
    title: "Research Guides on Multi-Agent Debate | MAD Studio",
    description:
      "Free guides on multi-agent debate vs self-consistency, LLM reasoning, and red-teaming with AI.",
    url: `${SITE_URL}/research`,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MAD Studio Research — guides on multi-agent debate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Guides on Multi-Agent Debate | MAD Studio",
    description:
      "Free guides on multi-agent debate vs self-consistency and LLM reasoning.",
    images: ["/opengraph-image"],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/research`,
  url: `${SITE_URL}/research`,
  name: "MAD Studio Research",
  description:
    "Practical guides on multi-agent debate, LLM reasoning, and structured AI deliberation.",
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: "MAD Studio",
    url: SITE_URL,
  },
  blogPost: researchArticles.map((article) => ({
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    url: `${SITE_URL}/research/${article.slug}`,
    author: { "@type": "Organization", name: "MAD Studio", url: SITE_URL },
    image: [`${SITE_URL}/opengraph-image`],
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Research", item: `${SITE_URL}/research` },
  ],
};

export default function ResearchIndexPage() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-zinc-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ResearchNav />

      <main id="main-content" className="mx-auto max-w-3xl px-6 py-16 md:py-24">
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

        <section aria-labelledby="research-resources" className="mt-14">
          <h2
            id="research-resources"
            className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent"
          >
            Reference
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            <li>
              <Link
                href="/glossary"
                className="glow-border group block h-full rounded-xl border border-white/10 bg-ink-800/40 p-5 transition hover:border-white/20"
              >
                <h3 className="text-base font-semibold leading-snug text-white transition group-hover:text-accent-glow">
                  Multi-Agent Debate Glossary
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  25+ definitions — M-MAD, CoT-SC, Degeneration of Thought,
                  sycophancy, and more.
                </p>
                <span className="mt-3 inline-block text-xs font-medium text-accent-cyan transition group-hover:text-white">
                  Browse glossary →
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/bullshit-index"
                className="glow-border group block h-full rounded-xl border border-white/10 bg-ink-800/40 p-5 transition hover:border-white/20"
              >
                <h3 className="text-base font-semibold leading-snug text-white transition group-hover:text-accent-glow">
                  The Bullshit Index
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  How MAD Studio detects hallucinations, position drift, and
                  fabricated citations in real time.
                </p>
                <span className="mt-3 inline-block text-xs font-medium text-accent-cyan transition group-hover:text-white">
                  Read deep dive →
                </span>
              </Link>
            </li>
          </ul>
        </section>

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
      </main>

      <Footer />
    </div>
  );
}
