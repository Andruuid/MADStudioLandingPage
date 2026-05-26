import { faqs } from "@/lib/faq";
import { seoReferences } from "@/lib/seo-references";

const SITE_URL = "https://multiagentdebates.com";
const SITE_NAME = "MAD Studio";

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
    name: SITE_NAME,
    alternateName: "MAD Studio · Multi-Agent Debates",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon`,
      width: 32,
      height: 32,
    },
    sameAs: [
      "https://github.com/Andruuid/MADStudioLandingPage",
    ],
    email: "mad@multiagentdebates.com",
    contactPoint: {
      "@type": "ContactPoint",
      email: "mad@multiagentdebates.com",
      contactType: "customer support",
      availableLanguage: ["English"],
    },
    description:
      "MAD Studio is the most advanced multi-agent debate platform for structured AI deliberation, built on peer-reviewed research.",
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
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
    applicationCategory: "DeveloperApplication",
    applicationSubCategory: "Multi-Agent AI Debate Platform",
    operatingSystem: "Web, Linux, macOS, Windows",
    description:
      "Configure 2–100 reasoning agents, run them through peer-reviewed debate protocols including M-MAD truth-seeking debate and two-team battle modes, and surface insights no single LLM prompt can find.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free during beta",
    },
    featureList: [
      "Open Discussion, Truth-Seeking Debate, and Team Discussion protocols",
      "M-MAD multi-dimensional arbiter scoring",
      "Saga recursive prompt optimization",
      "Lab Experiments with parameter sweeps",
      "12-dimension Evaluation Matrix",
      "Bullshit Index real-time fact-checking",
      "Full REST API and MCP server",
      "Multi-provider support (OpenRouter, LM Studio)",
      "Live human intervention",
      "Cost, runtime, and turn caps",
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
