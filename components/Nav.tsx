import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3"
          aria-label="MAD Studio home"
        >
          <span
            aria-hidden
            className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-accent/40 via-ink-800 to-accent-cyan/20 shadow-[0_0_24px_-12px_rgba(124,92,255,0.8)]"
          >
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"
            />
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
          <span className="flex flex-col leading-tight whitespace-nowrap">
            <span className="text-sm font-semibold tracking-wide text-white">
              MAD Studio
            </span>
            <span className="text-[10px] uppercase tracking-[0.14em] text-zinc-500">
              Multi-Agent Debates
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#science" className="transition hover:text-white">
            Science
          </a>
          <a href="#features" className="transition hover:text-white">
            Features
          </a>
          <a href="#use-cases" className="transition hover:text-white">
            Use Cases
          </a>
          <a
            href="#waitlist"
            className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-white transition hover:border-accent/60 hover:bg-accent/10"
          >
            Beta Access
          </a>
        </nav>
      </div>
    </header>
  );
}
