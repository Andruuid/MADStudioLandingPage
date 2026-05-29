import type { Metadata } from "next";
import Link from "next/link";
import ResearchNav from "@/components/ResearchNav";
import Footer from "@/components/Footer";

const SITE_URL = "https://multiagentdebates.com";

export const metadata: Metadata = {
  title: "The Bullshit Index — Real-Time LLM Hallucination Detection",
  description:
    "The Bullshit Index is MAD Studio's real-time hallucination meter — every claim cross-checked against your evidence pack, the public web, and the agent's own prior turns.",
  alternates: {
    canonical: `${SITE_URL}/bullshit-index`,
  },
  openGraph: {
    title: "The Bullshit Index | MAD Studio",
    description:
      "Real-time hallucination detection for multi-agent debate. Every claim cross-checked, every drift surfaced, every fabricated citation flagged.",
    url: `${SITE_URL}/bullshit-index`,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MAD Studio Bullshit Index",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Bullshit Index | MAD Studio",
    description:
      "Real-time LLM hallucination detection. Every claim cross-checked against evidence, web, and prior turns.",
    images: ["/opengraph-image"],
  },
};

const definedTermSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "@id": `${SITE_URL}/bullshit-index#definition`,
  name: "Bullshit Index",
  description:
    "The Bullshit Index is MAD Studio's real-time fact-checking layer. Every claim made by an agent is extracted and cross-referenced against the evidence pack, the public web, and the agent's earlier turns. Hallucinated citations, drifted positions, false precision, and contradicted statements all push the meter higher.",
  url: `${SITE_URL}/bullshit-index`,
  termCode: "BS-INDEX",
  inDefinedTermSet: `${SITE_URL}/glossary`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Bullshit Index", item: `${SITE_URL}/bullshit-index` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Bullshit Index?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Bullshit Index is MAD Studio's real-time hallucination meter. It extracts every claim made by an agent and cross-references it against your evidence pack, the public web, and the agent's earlier turns. Hallucinated citations, drifted positions, false precision, and contradicted statements all push the meter higher.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Bullshit Index detect hallucinations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each agent claim is extracted into a structured ledger. The Bullshit Index then verifies it against three sources: the shared evidence pack you supplied, public web sources for factual claims, and the agent's own prior turns to detect position drift. A claim that fails any check raises the index and is flagged in the transcript.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between the Bullshit Index and a fact-checker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A traditional fact-checker scores final outputs. The Bullshit Index operates inside the debate loop — every turn, every claim, in real time. Agents who drift, fabricate citations, or contradict their own earlier positions are flagged the moment it happens, so the arbiter sees the pattern before the verdict.",
      },
    },
    {
      "@type": "Question",
      name: "What does a high Bullshit Index score mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A high score means a session contains many unsupported, fabricated, or contradicted claims. It does not necessarily mean the verdict is wrong — but it means the reasoning chain is fragile and should not be cited without manual review. The transcript shows exactly which claims triggered the score.",
      },
    },
  ],
};

export default function BullshitIndexPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            <li className="text-zinc-400">Bullshit Index</li>
          </ol>
        </nav>

        <header className="mt-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-rose-300/90">
            Feature
          </span>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            The Bullshit Index
          </h1>
          <p className="mt-4 text-balance text-lg text-zinc-400 md:text-xl">
            A real-time hallucination meter built directly into the{" "}
            <Link href="/research" className="text-accent-glow underline decoration-accent/40 underline-offset-2 transition hover:text-white">
              multi-agent debate
            </Link>{" "}
            loop. Every claim, every turn, cross-checked before it becomes a
            quote. See also:{" "}
            <Link href="/glossary#bullshit-index" className="text-accent-glow underline decoration-accent/40 underline-offset-2 transition hover:text-white">
              glossary entry
            </Link>
            .
          </p>
        </header>

        <article className="research-prose mt-12">
          <div className="research-tldr">
            <p className="research-tldr-label">TL;DR</p>
            <ul>
              <li>
                The Bullshit Index extracts every claim made by an agent and
                verifies it in real time against your evidence pack, the public
                web, and the agent&apos;s own earlier turns.
              </li>
              <li>
                Hallucinated citations, drifted positions, false precision, and
                contradicted statements all push the meter higher.
              </li>
              <li>
                It runs inside the debate loop — not after the fact — so the
                arbiter sees fragility before locking the verdict.
              </li>
              <li>
                False-positive rate currently 0.04% on internal benchmarks;
                average latency 1.2s per claim.
              </li>
            </ul>
          </div>

          <h2>What it actually measures</h2>
          <p>
            Most fact-checking layers score final outputs. The Bullshit Index
            scores <em>the reasoning</em>. It tracks four signals simultaneously:
          </p>
          <ul>
            <li>
              <strong>Hallucinated citations</strong> — references to papers,
              studies, dates, or statistics that do not exist in the evidence
              pack or on the public web.
            </li>
            <li>
              <strong>Position drift</strong> — silent contradictions between an
              agent&apos;s current turn and their earlier turns, without
              explicit acknowledgment of the reversal.
            </li>
            <li>
              <strong>False precision</strong> — confidently-stated numbers,
              percentages, or named entities with no traceable source.
            </li>
            <li>
              <strong>Unsupported assertions</strong> — claims marked as
              factual that cannot be grounded in the supplied evidence or
              external sources.
            </li>
          </ul>

          <h2>Why &ldquo;Bullshit&rdquo; instead of &ldquo;Hallucination&rdquo;?</h2>
          <p>
            Hallucination is the term of art in LLM research, and we use it in
            the technical write-ups. The Bullshit Index name picks up something
            the academic term misses: <em>indifference to truth</em>. An LLM
            does not lie — it generates plausible continuations. Bullshit, in
            the precise sense Harry Frankfurt defined in{" "}
            <em>On Bullshit</em>, is speech produced without regard for
            whether it is true. That is exactly what the meter detects.
          </p>

          <h2>How it works in a debate run</h2>
          <ol>
            <li>
              Every agent turn is parsed for atomic claims — extracted into a
              structured ledger keyed to the turn that introduced them.
            </li>
            <li>
              Each claim is verified against the shared evidence pack first
              (highest weight), then web cross-check (medium weight), then
              prior-turn consistency (drift detection).
            </li>
            <li>
              Verified claims pass through. Hedged claims are flagged but not
              penalized. Contradicted or fabricated claims push the meter and
              dock the agent&apos;s evidence and calibration dimension scores.
            </li>
            <li>
              The arbiter sees the per-agent Bullshit Index alongside the
              dimension scores when assembling the final verdict.
            </li>
          </ol>

          <h2>How it integrates with M-MAD scoring</h2>
          <p>
            The Bullshit Index is not a replacement for the M-MAD arbiter — it
            is a feeder. M-MAD scores debates across independent dimensions
            (correctness, evidence use, responsiveness, calibration, citation
            quality). The Bullshit Index produces evidence for two of those
            dimensions: <strong>evidence use</strong> and{" "}
            <strong>citation quality</strong>. A high Bullshit Index does not
            mean the verdict is wrong; it means the reasoning chain is fragile
            and should not be cited without manual review.
          </p>

          <h2>Frequently asked</h2>
          <h3>What is the Bullshit Index?</h3>
          <p>
            The Bullshit Index is MAD Studio&apos;s real-time hallucination
            meter. It extracts every claim made by an agent and cross-references
            it against your evidence pack, the public web, and the agent&apos;s
            earlier turns. Hallucinated citations, drifted positions, false
            precision, and contradicted statements all push the meter higher.
          </p>

          <h3>What does a high Bullshit Index score mean?</h3>
          <p>
            A high score means a session contains many unsupported, fabricated,
            or contradicted claims. It does not necessarily mean the verdict is
            wrong — but it means the reasoning chain is fragile and should not
            be cited without manual review. The transcript shows exactly which
            claims triggered the score.
          </p>

          <h3>Can the Bullshit Index be wrong?</h3>
          <p>
            Yes — current false-positive rate on internal benchmarks is 0.04%,
            and false negatives are higher (hallucinations the layer misses).
            Treat it as a strong prior, not a verdict. Every flag links to the
            specific turn, claim span, and verification source so reviewers can
            audit any disagreement.
          </p>
        </article>

        <aside className="mt-16 rounded-xl border border-accent/20 bg-accent/5 p-6">
          <p className="text-sm font-medium text-white">
            Run debates with the Bullshit Index enabled
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Free during beta — every session ships with the Bullshit Index on
            by default.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/glossary"
              className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
            >
              Browse glossary →
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
