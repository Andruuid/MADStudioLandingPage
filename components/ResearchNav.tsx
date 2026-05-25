import Link from "next/link";

export default function ResearchNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3"
          aria-label="MAD Studio home"
        >
          <span
            aria-hidden
            className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-accent/40 via-ink-800 to-accent-cyan/20"
          >
            <svg
              viewBox="0 0 24 24"
              className="relative h-4 w-4 text-white"
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
          <span className="text-sm font-semibold tracking-wide text-white">
            MAD Studio
          </span>
        </Link>

        <nav className="flex items-center gap-4 text-sm text-zinc-400">
          <Link href="/research" className="transition hover:text-white">
            Research
          </Link>
          <Link
            href="/#waitlist"
            className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-white transition hover:border-accent/60 hover:bg-accent/10"
          >
            Beta Access
          </Link>
        </nav>
      </div>
    </header>
  );
}
