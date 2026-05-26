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
const CURRENT_YEAR = new Date().getFullYear();
const DESCRIPTION =
  "Run 2–100 LLM agents through peer-reviewed multi-agent debate protocols. Auditable verdicts, hallucination scoring, free during beta.";
const SOCIAL_DESCRIPTION =
  "The most advanced multi-agent debate platform. Configure 2–100 reasoning agents, run peer-reviewed debate protocols, surface insights no single LLM prompt can find.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `MAD Studio — Multi-Agent Debate Platform for LLMs (${CURRENT_YEAR})`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "multi-agent debate",
    "MAD Studio",
    "AI debate platform",
    "LLM reasoning",
    "M-MAD",
    "structured AI deliberation",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
      "x-default": SITE_URL,
    },
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
    title: "MAD Studio — Multi-Agent Debate Platform for LLMs",
    description: SOCIAL_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "MAD Studio — Multi-Agent Debate Platform",
    description: SOCIAL_DESCRIPTION,
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
