# Multi Agent Debates — Landing Page

**Live site:** [https://multiagentdebates.com](https://multiagentdebates.com)

**Contact:** [mad@multiagentdebates.com](mailto:mad@multiagentdebates.com)

**Multi Agent Debates by Delibora** is a workspace for structured multi-agent AI deliberation, informed by peer-reviewed research in multi-agent debate.

The public format catalogue lives in [`lib/product-formats.ts`](./lib/product-formats.ts)
and mirrors the canonical product registry at
`AgentDiscussionMVP-PersonaTemplates/lib/discussion-formats.ts`. Update the two
together whenever a format name, participant contract, or output changes.

## Research guides (free)

- [Research hub](https://multiagentdebates.com/research)
- [When to Use Multi-Agent Debate vs Self-Consistency](https://multiagentdebates.com/research/multi-agent-debate-vs-self-consistency)
- [How to Red-Team Ideas with Multi-Agent Debate](https://multiagentdebates.com/research/red-team-ideas-multi-agent-debate)
- [RSS feed](https://multiagentdebates.com/research/feed.xml)

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- [Neon Postgres](https://neon.com/) for waitlist storage
- [Resend](https://resend.com/) for the daily waitlist digest
- Vercel Cron Jobs for the daily digest schedule
- [Vercel](https://vercel.com/) for hosting and analytics

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Waitlist storage setup

The three-step waitlist form writes to a private Neon Postgres table through a
Next.js Server Action. No database credential is exposed to the browser.

### 1. Create and connect Neon

1. Open the project in the [Vercel dashboard](https://vercel.com/dashboard).
2. Open **Storage**, choose **Create Database**, and select **Neon** from the
   Marketplace.
3. Create the database and connect it to this project. Vercel injects
   `DATABASE_URL` automatically.
4. From the connected storage resource, choose **Open in Neon**.
5. Open Neon's SQL Editor, paste the contents of
   [`db/waitlist.sql`](./db/waitlist.sql), and run it once.

The schema keeps production, preview, and development rows separate. An email
has one row per environment; submitting again updates its selections and queues
the changed row for the next digest.

### 2. Configure the daily digest

1. Add [Resend](https://vercel.com/marketplace/resend) to the same Vercel
   project. This injects `RESEND_API_KEY`.
2. In Resend, verify `multiagentdebates.com` by adding the DNS records Resend
   provides.
3. In **Vercel → Project Settings → Environment Variables**, add these
   server-only Production variables:

   ```dotenv
   WAITLIST_DIGEST_TO=your-private-inbox@example.com
   WAITLIST_DIGEST_FROM=Multi Agent Debates <waitlist@multiagentdebates.com>
   CRON_SECRET=replace-with-a-long-random-secret
   ```

   Generate a suitable cron secret locally with:

   ```bash
   node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"
   ```

4. Redeploy after adding or changing environment variables.

Vercel invokes `/api/cron/waitlist-digest` every day at `08:00 UTC`. The route
requires `CRON_SECRET`. It sends one digest containing all new or updated
production rows and sends no email on quiet days. Rows are marked as digested
only after Resend accepts the message, so an email failure never loses a signup.

### View and export submissions

1. Open **Vercel → Project → Storage → Neon → Open in Neon**.
2. In Neon, open **Tables** and select `waitlist_submissions` to browse, sort,
   and filter the stored rows.
3. To view the live list in newest-first order, run:

   ```sql
   SELECT
     created_at,
     updated_at,
     email,
     industry,
     use_cases,
     notes
   FROM waitlist_submissions
   WHERE environment = 'production'
   ORDER BY updated_at DESC;
   ```

4. Use the CSV download/export control on the Neon query results to save the
   list locally.

Neon is the authoritative data store. Resend only sends the daily summary; no
private admin page or public list endpoint is exposed by this site.

### Local development

Copy `.env.local.example` to `.env.local` and supply a development Neon branch,
or link the repository to Vercel and pull its Development environment:

```bash
npx vercel link
npx vercel env pull .env.local --environment=development
```

Run `db/waitlist.sql` against the development database before testing a signup.
Local rows are saved with `environment = 'development'` and are never included
in the production digest.

### Remove Formspree

The application no longer contains a Formspree endpoint or sends requests to
Formspree. After the Neon-backed version is deployed and smoke-tested, delete
`NEXT_PUBLIC_FORMSPREE_ENDPOINT` from the Vercel project's environment
variables. Existing submissions remain in the Formspree account as an archive
unless you delete them there manually.

## Deployment

1. Import the repo in Vercel.
2. Complete the Neon and Resend setup above.
3. Run `db/waitlist.sql` in Neon before accepting production submissions.
4. Domain: `multiagentdebates.com` (A record + www CNAME to Vercel).

## Structure

```
app/
  page.tsx              Homepage sections
  actions/              Waitlist Server Action
  api/cron/             Authenticated daily digest
  research/             Research guides + RSS feed
  layout.tsx            Metadata, JSON-LD, analytics
components/
  Hero, Science, Features, ResearchSpotlight, FAQ, Waitlist, …
db/
  waitlist.sql          Neon waitlist schema
lib/
  waitlist*, papers.ts, research-articles.ts, faq.ts, seo-references.ts
public/
  llms.txt              AI crawler site summary
```
