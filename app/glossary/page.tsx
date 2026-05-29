import type { Metadata } from "next";
import Link from "next/link";
import ResearchNav from "@/components/ResearchNav";
import Footer from "@/components/Footer";
import { glossaryTerms } from "@/lib/glossary";

const SITE_URL = "https://multiagentdebates.com";

export const metadata: Metadata = {
  title: "Glossary — Multi-Agent Debate & LLM Reasoning Terms",
  description:
    "Plain-English definitions for multi-agent debate, M-MAD, CoT-SC, Degeneration of Thought, Bullshit Index, sycophancy, and 25+ other terms — from the MAD Studio team.",
  alternates: {
    canonical: `${SITE_URL}/glossary`,
  },
  openGraph: {
    title: "Multi-Agent Debate Glossary | MAD Studio",
    description:
      "Definitions for multi-agent debate, M-MAD, CoT-SC, Degeneration of Thought, Bullshit Index, and 25+ other LLM reasoning terms.",
    url: `${SITE_URL}/glossary`,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MAD Studio Glossary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Agent Debate Glossary | MAD Studio",
    description:
      "Plain-English definitions for multi-agent debate, M-MAD, CoT-SC, Bullshit Index, and 25+ other LLM reasoning terms.",
    images: ["/opengraph-image"],
  },
};

const definedTermSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": `${SITE_URL}/glossary`,
  name: "Multi-Agent Debate & LLM Reasoning Glossary",
  description:
    "Definitions for multi-agent debate, M-MAD, CoT-SC, Degeneration of Thought, Bullshit Index, sycophancy, and related LLM reasoning terms.",
  inLanguage: "en-US",
  hasDefinedTerm: glossaryTerms.map((term) => ({
    "@type": "DefinedTerm",
    "@id": `${SITE_URL}/glossary#${term.slug}`,
    name: term.term,
    description: term.definition,
    inDefinedTermSet: `${SITE_URL}/glossary`,
    url: `${SITE_URL}/glossary#${term.slug}`,
    ...(term.aliases?.length ? { alternateName: term.aliases } : {}),
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Glossary", item: `${SITE_URL}/glossary` },
  ],
};

export default function GlossaryPage() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-zinc-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ResearchNav />

      <main id="main-content" className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <nav aria-label="Breadcrumb" className="text-sm text-zinc-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-zinc-400">Glossary</li>
          </ol>
        </nav>

        <header className="mt-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
            Glossary
          </span>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Multi-Agent Debate &amp; LLM Reasoning Glossary
          </h1>
          <p className="mt-4 text-balance text-zinc-400 md:text-lg">
            Plain-English definitions for the terms used across{" "}
            <Link href="/research" className="text-accent-glow underline decoration-accent/40 underline-offset-2 transition hover:text-white">
              MAD Studio research
            </Link>{" "}
            — from <em>M-MAD</em> and <em>CoT-SC</em> to{" "}
            <em>Degeneration of Thought</em> and the{" "}
            <Link href="/bullshit-index" className="text-accent-glow underline decoration-accent/40 underline-offset-2 transition hover:text-white">
              Bullshit Index
            </Link>
            .
          </p>
        </header>

        <nav
          aria-label="Glossary index"
          className="mt-10 rounded-xl border border-white/10 bg-ink-800/40 p-5"
        >
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
            Jump to term
          </h2>
          <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-sm">
            {glossaryTerms.map((term) => (
              <li key={term.slug}>
                <a
                  href={`#${term.slug}`}
                  className="text-zinc-300 underline decoration-white/10 underline-offset-2 transition hover:text-accent-glow"
                >
                  {term.term}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <dl className="mt-12 space-y-10">
          {glossaryTerms.map((term) => (
            <div key={term.slug} id={term.slug} className="scroll-mt-24">
              <dt>
                <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                  {term.term}
                </h2>
                {term.aliases && term.aliases.length > 0 && (
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    Also known as: {term.aliases.join(", ")}
                  </p>
                )}
              </dt>
              <dd className="mt-3 text-base leading-relaxed text-zinc-400">
                {term.definition}
              </dd>
              {term.related && term.related.length > 0 && (
                <p className="mt-3 text-xs text-zinc-500">
                  Related:{" "}
                  {term.related.map((rel, idx) => (
                    <span key={rel}>
                      <a
                        href={`#${rel}`}
                        className="text-accent-cyan underline decoration-white/10 underline-offset-2 transition hover:text-white"
                      >
                        {rel.replace(/-/g, " ")}
                      </a>
                      {idx < term.related!.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </dl>

        <aside className="mt-16 rounded-xl border border-accent/20 bg-accent/5 p-6">
          <p className="text-sm font-medium text-white">
            Want to see these protocols in action?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            MAD Studio implements every protocol on this page — M-MAD verdicts,
            Truth-Seeking Debate, Team Discussion, Saga, and the{" "}
            <Link href="/bullshit-index" className="text-accent-glow underline decoration-accent/40 underline-offset-2 transition hover:text-white">
              Bullshit Index
            </Link>
            . Free during beta.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/research"
              className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
            >
              Read research guides →
            </Link>
            <Link
              href="/#waitlist"
              className="inline-flex items-center rounded-md border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-accent/20"
            >
              Request beta access →
            </Link>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
