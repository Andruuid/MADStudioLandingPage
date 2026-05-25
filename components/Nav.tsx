import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="MAD Studio home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-gradient-to-br from-accent/30 to-accent-cyan/10 font-mono text-[11px] font-semibold tracking-wider text-white">
            M·A·D
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-white">
              MAD Studio
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
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
