# MAD Studio — Landing Page

**Live site:** [https://multiagentdebates.com](https://multiagentdebates.com)

**Contact:** [mad@multiagentdebates.com](mailto:mad@multiagentdebates.com)

**MAD Studio** (Multi-Agent Debates) is the most advanced platform on the web for structured multi-agent AI deliberation, built on peer-reviewed research in multi-agent debate.

## Research guides (free)

- [Research hub](https://multiagentdebates.com/research)
- [When to Use Multi-Agent Debate vs Self-Consistency](https://multiagentdebates.com/research/multi-agent-debate-vs-self-consistency)
- [How to Red-Team Ideas with Multi-Agent Debate](https://multiagentdebates.com/research/red-team-ideas-multi-agent-debate)
- [RSS feed](https://multiagentdebates.com/research/feed.xml)

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- [Formspree](https://formspree.io/) for waitlist email collection
- [Vercel](https://vercel.com/) for hosting and analytics

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Waitlist setup

The waitlist form posts to a Formspree endpoint when configured:

```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

Add this in `.env.local` (local) and Vercel project settings (production).

## Deployment

1. Import the repo in Vercel.
2. Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in project settings.
3. Domain: `multiagentdebates.com` (A record + www CNAME to Vercel).

## Structure

```
app/
  page.tsx              Homepage sections
  research/             Research guides + RSS feed
  layout.tsx            Metadata, JSON-LD, analytics
components/
  Hero, Science, Features, ResearchSpotlight, FAQ, Waitlist, …
lib/
  papers.ts, research-articles.ts, faq.ts, seo-references.ts
public/
  llms.txt              AI crawler site summary
```
