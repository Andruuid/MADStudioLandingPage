import { faqs } from "@/lib/faq";
import { productFormats } from "@/lib/product-formats";
import { seoReferences } from "@/lib/seo-references";

const SITE_URL = "https://multiagentdebates.com";
const SITE_NAME = "Multi Agent Debates";
const MAKER_NAME = "Delibora";

function scholarlyArticle(ref: (typeof seoReferences)[number]) {
  return {
    "@type": "ScholarlyArticle",
    "@id": `${ref.url}#citation`,
    name: ref.title,
    headline: ref.title,
    author: ref.authors.split(", ").map((name) => ({
      "@type": "Person",
      name: name.trim(),
    })),
    isPartOf: {
      "@type": "PublicationEvent",
      name: ref.venue,
    },
    url: ref.url,
    mainEntityOfPage: ref.url,
  };
}

export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: MAKER_NAME,
    alternateName: "Delibora AI",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon`,
      width: 32,
      height: 32,
    },
    email: "mad@multiagentdebates.com",
    contactPoint: {
      "@type": "ContactPoint",
      email: "mad@multiagentdebates.com",
      contactType: "customer support",
      availableLanguage: ["English"],
    },
    description:
      "Delibora develops Multi Agent Debates, a workspace for structured multi-agent AI deliberation.",
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: SITE_NAME,
    alternateName: "Multi Agent Debates by Delibora",
    url: SITE_URL,
    inLanguage: "en-US",
    publisher: {
      "@id": `${SITE_URL}#organization`,
    },
  };

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    alternateName: "Multi Agent Debates by Delibora",
    url: SITE_URL,
    brand: {
      "@type": "Brand",
      name: MAKER_NAME,
    },
    applicationCategory: "DeveloperApplication",
    applicationSubCategory: "Multi-Agent AI Debate Platform",
    operatingSystem: "Web, Linux, macOS, Windows",
    description:
      "Run 2–100 reasoning agents across 10 structured multi-agent debate formats and review a report, verdict, transcript, or decision artifact.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free during beta",
    },
    featureList: [
      ...productFormats.map(
        (format) => `${format.name} — ${format.output}`,
      ),
      "Evidence Packs and optional Truth-Seeking internet research",
      "Reusable Workers, Teams, Personas, and Playbooks",
      "Lab Experiments with parameter sweeps and transcript evaluation",
      "Multi-provider support (OpenRouter, LM Studio)",
      "Live human intervention",
      "Cost, runtime, and turn caps",
      "Persisted transcripts, run logs, token and cost metadata, and JSON exports",
      "In-app and optional email notifications",
    ],
    citation: seoReferences.map((ref) => ({
      "@id": `${ref.url}#citation`,
    })),
    isBasedOn: seoReferences.map((ref) => ref.url),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  };

  const researchCitations = {
    "@context": "https://schema.org",
    "@graph": seoReferences.map(scholarlyArticle),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(researchCitations) }}
      />
    </>
  );
}
