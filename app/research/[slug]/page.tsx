import type { ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleStructuredData from "@/components/ArticleStructuredData";
import ResearchNav from "@/components/ResearchNav";
import Footer from "@/components/Footer";
import DebateVsSelfConsistency from "@/components/research/DebateVsSelfConsistency";
import {
  getResearchArticle,
  researchArticles,
} from "@/lib/research-articles";

const SITE_URL = "https://multiagentdebates.com";

const articleContent: Record<string, ComponentType> = {
  "multi-agent-debate-vs-self-consistency": DebateVsSelfConsistency,
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
      authors: ["MAD Studio"],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
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

  return (
    <main className="relative min-h-screen bg-ink-950 text-zinc-200">
      <ArticleStructuredData article={article} />
      <ResearchNav />

      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link
          href="/research"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          ← All research
        </Link>

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
      </div>

      <Footer />
    </main>
  );
}
