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
    "multi-agent debate",
    "multi-agent AI debate",
    "multi-agent LLM",
    "AI debate platform",
    "MAD Studio",
    "structured AI deliberation",
    "LLM multi-agent reasoning",
    "AI agent framework",
    "AI fact checking",
    "AI evaluation matrix",
    "M-MAD",
    "AutoGen alternative",
    "AI debate workbench",
    "agent orchestration",
    "GPT debate",
    "Claude debate",
    "multi-agent reasoning",
    "AI hallucination detection",
    "LLM truthfulness",
    "constitutional AI alternative",
    "MAD-M2 memory masking",
    "GroupDebate multi-agent",
    "sparse communication topology",
    "ChatEval ICLR",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  alternates: {
    canonical: SITE_URL,
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
