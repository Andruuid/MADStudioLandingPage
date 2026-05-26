import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://multiagentdebates.com";
const SITE_NAME = "MAD Studio";
const TAGLINE = "Multi-Agent Debates";
const DESCRIPTION =
  "MAD Studio is the most advanced multi-agent debate platform on the web. Configure 2–100 reasoning agents, run peer-reviewed debate protocols, score every claim with the Bullshit Index, and surface insights no single LLM prompt can find.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${TAGLINE} | The Multi-Agent Debate Platform`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    // Core product
    "multi-agent debate",
    "multi-agent AI debate",
    "multi-agent LLM",
    "AI debate platform",
    "MAD Studio",
    "multiagentdebates.com",
    "structured AI deliberation",
    "LLM multi-agent reasoning",
    "AI agent framework",
    "AI debate workbench",
    "agent orchestration",
    "multi-agent reasoning",
    // Protocols & features
    "M-MAD",
    "truth-seeking debate protocol",
    "open discussion AI agents",
    "team debate mode LLM",
    "dimension-sweep arbiter",
    "AI evaluation matrix",
    "Bullshit Index AI",
    "factuality scoring LLM",
    "Saga recursive prompt optimization",
    "AI lab experiments parameter sweep",
    "live human intervention AI debate",
    "rolling summary long context agents",
    // Problems we solve
    "AI fact checking",
    "AI hallucination detection",
    "LLM truthfulness",
    "Degeneration of Thought",
    "when single prompt fails",
    "LLM self-reflection limits",
    "debate vs majority vote LLM",
    "multi-agent debate failure modes",
    // Research & papers
    "constitutional AI alternative",
    "MAD-M2 memory masking",
    "GroupDebate multi-agent",
    "sparse communication topology",
    "ChatEval ICLR",
    "Should we be going MAD",
    "SWE-Debate software engineering",
    "Debate or Vote NeurIPS",
    "society of minds LLM",
    "LLM-as-judge debate",
    // Models & providers
    "GPT debate",
    "Claude debate",
    "Opus debate agents",
    "multi-model debate platform",
    "OpenRouter multi-agent",
    "LM Studio agent orchestration",
    "heterogeneous LLM debate",
    // Alternatives & ecosystem
    "AutoGen alternative",
    "CrewAI debate alternative",
    "LangGraph multi-agent reasoning",
    "AI red teaming platform",
    "adversarial LLM reasoning",
    // Use cases — creative long-tail
    "devil's advocate AI",
    "AI red team your ideas",
    "stress test political messaging AI",
    "simulate peer review with AI",
    "AI thesis defense simulator",
    "legal argument mapping AI",
    "due diligence AI agents",
    "competitive intelligence debate AI",
    "investigative journalism AI tool",
    "product strategy devil's advocate",
    "pre-mortem AI analysis",
    "counterargument generator LLM",
    "AI war room deliberation",
    "campaign message testing AI",
    // Conceptual / memorable
    "epistemic AI debate",
    "cognitive diversity LLM agents",
    "collective LLM intelligence",
    "AI argumentation engine",
    "structured argument AI",
    "agents that disagree productively",
    "debate until consensus AI",
    "LLM deliberation platform",
    "AI panel discussion simulator",
    "multi-agent truth seeking",
    "rigorous AI reasoning platform",
    "peer-reviewed debate protocols AI",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  alternates: {
    canonical: SITE_URL,
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
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — The Multi-Agent Debate Platform`,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Multi-Agent Debates`,
    description: DESCRIPTION,
    creator: "@madstudio",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "theme-color": "#05070b",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <StructuredData />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
