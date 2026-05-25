import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://multiagentdebates.com"),
  title: "MAD Studio — Multi-Agent Debates",
  description:
    "The most advanced platform on the web for structured multi-agent debate. Run rigorous, science-backed AI deliberations across politics, research, marketing, and beyond.",
  openGraph: {
    title: "MAD Studio — Multi-Agent Debates",
    description:
      "The most advanced platform on the web for structured multi-agent debate.",
    url: "https://multiagentdebates.com",
    siteName: "MAD Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAD Studio — Multi-Agent Debates",
    description:
      "The most advanced platform on the web for structured multi-agent debate.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
