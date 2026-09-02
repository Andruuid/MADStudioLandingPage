import type { ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleStructuredData from "@/components/ArticleStructuredData";
import {
  RedTeamHowToStructuredData,
  SpeakableArticleStructuredData,
} from "@/components/HowToStructuredData";
import ResearchNav from "@/components/ResearchNav";
import Footer from "@/components/Footer";
import DebateVsSelfConsistency from "@/components/research/DebateVsSelfConsistency";
import RedTeamIdeasWithDebate from "@/components/research/RedTeamIdeasWithDebate";
import {
  getResearchArticle,
  researchArticles,
} from "@/lib/research-articles";

const SITE_URL = "https://multiagentdebates.com";

const articleContent: Record<string, ComponentType> = {
  "multi-agent-debate-vs-self-consistency": DebateVsSelfConsistency,
  "red-team-ideas-multi-agent-debate": RedTeamIdeasWithDebate,
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return researchArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getResearchArticle(slug);

  if (!article) {
    return { title: "Article not found" };
  }

  const url = `${SITE_URL}/research/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    keywords: article.tags,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url,
      publishedTime: article.publishedAt,
      modifiedTime: article.modifiedAt,
      authors: ["Multi Agent Debates"],
      tags: article.tags,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ResearchArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getResearchArticle(slug);
  const Content = articleContent[slug];

  if (!article || !Content) {
    notFound();
  }

  const relatedArticles = researchArticles.filter((a) => a.slug !== article.slug);
  const isRedTeam = article.slug === "red-team-ideas-multi-agent-debate";

  return (
    <div className="relative min-h-screen bg-ink-950 text-zinc-200">
      <ArticleStructuredData article={article} />
      {isRedTeam ? (
        <RedTeamHowToStructuredData slug={article.slug} />
      ) : (
        <SpeakableArticleStructuredData slug={article.slug} />
      )}
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
            <li>
              <Link href="/research" className="transition hover:text-white">
                Research
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-zinc-400">{article.title}</li>
          </ol>
        </nav>

        <header className="mt-6 border-b border-white/10 pb-10">
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
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-balance text-lg text-zinc-400">
            {article.description}
          </p>
        </header>

        <div className="mt-10">
          <Content />
        </div>

        {relatedArticles.length > 0 && (
          <aside className="mt-16 border-t border-white/10 pt-10">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
              Related research
            </h2>
            <ul className="mt-4 grid gap-4 md:grid-cols-2">
              {relatedArticles.map((related) => (
                <li key={related.slug}>
                  <Link
                    href={`/research/${related.slug}`}
                    className="glow-border group block h-full rounded-xl border border-white/10 bg-ink-800/40 p-5 transition hover:border-white/20"
                  >
                    <h3 className="text-base font-semibold leading-snug text-white transition group-hover:text-accent-glow">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {related.description}
                    </p>
                    <span className="mt-3 inline-block text-xs font-medium text-accent-cyan transition group-hover:text-white">
                      Read guide →
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/glossary"
                  className="glow-border group block h-full rounded-xl border border-white/10 bg-ink-800/40 p-5 transition hover:border-white/20"
                >
                  <h3 className="text-base font-semibold leading-snug text-white transition group-hover:text-accent-glow">
                    Multi-Agent Debate Glossary
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    Definitions for M-MAD, CoT-SC, Degeneration of Thought,
                    calibration, and other terms used across the research.
                  </p>
                  <span className="mt-3 inline-block text-xs font-medium text-accent-cyan transition group-hover:text-white">
                    Browse terms →
                  </span>
                </Link>
              </li>
            </ul>
          </aside>
        )}
      </main>

      <Footer />
    </div>
  );
}
