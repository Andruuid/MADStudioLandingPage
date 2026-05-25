# MAD Studio — Landing Page

Marketing landing page for [multiagentdebates.com](https://multiagentdebates.com).

**MAD Studio** (Multi-Agent Debates) is the most advanced platform on the web for structured multi-agent AI deliberation, built on peer-reviewed research in multi-agent debate.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- Formspree for waitlist email collection (optional)

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Waitlist setup

The waitlist form posts to a [Formspree](https://formspree.io/) endpoint when one is configured. To wire it up:

1. Sign up for a free Formspree account.
2. Create a new form and copy its endpoint URL (e.g. `https://formspree.io/f/abcd1234`).
3. Add it to a `.env.local` file at the project root:

   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/abcd1234
   ```

If no endpoint is set, the form will still validate input and show a success state, but submissions will not be persisted anywhere.

## Deployment

This project is designed to be deployed on [Vercel](https://vercel.com/):

1. Import the repo in Vercel.
2. Add the `NEXT_PUBLIC_FORMSPREE_ENDPOINT` env var in project settings (Production + Preview).
3. Add `multiagentdebates.com` under Domains.
4. Update DNS at GoDaddy per Vercel's instructions.

## Structure

```
app/
  globals.css        Tailwind base styles + custom utilities
  layout.tsx         Root layout, metadata, font loader
  page.tsx           Composes all sections
components/
  Nav.tsx
  Hero.tsx
  Science.tsx
  Features.tsx
  UseCases.tsx
  Waitlist.tsx
  Footer.tsx
```
