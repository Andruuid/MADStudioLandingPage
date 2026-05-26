import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-accent/40 via-ink-800 to-accent-cyan/20"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="6" cy="7" r="2" />
              <circle cx="18" cy="7" r="2" />
              <circle cx="12" cy="18" r="2" />
              <path d="M7.5 8.4 11 16.4" />
              <path d="M16.5 8.4 13 16.4" />
              <path d="M8 7h8" />
            </svg>
          </span>
          <span className="text-sm text-zinc-400">
            MAD Studio — Multi-Agent Debates
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-500">
          <Link href="/research" className="transition hover:text-zinc-300">
            Research
          </Link>
          <Link href="/glossary" className="transition hover:text-zinc-300">
            Glossary
          </Link>
          <Link href="/bullshit-index" className="transition hover:text-zinc-300">
            Bullshit Index
          </Link>
          <a
            href="mailto:mad@multiagentdebates.com"
            className="transition hover:text-zinc-300"
          >
            mad@multiagentdebates.com
          </a>
          <span>© {new Date().getFullYear()} MAD Studio</span>
          <span className="font-mono">multiagentdebates.com</span>
        </div>
      </div>
    </footer>
  );
}
