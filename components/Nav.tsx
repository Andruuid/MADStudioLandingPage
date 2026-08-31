import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-300/10 bg-ink-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3"
          aria-label="Delibora home"
        >
          <Image
            src="/brand/delibora-wordmark.svg"
            alt="Delibora"
            width={825}
            height={166}
            className="h-auto w-[126px]"
            priority
          />
        </Link>

        <nav
          aria-label="Primary"
          className="flex items-center gap-3 text-sm text-zinc-400 lg:gap-6"
        >
          <a href="#science" className="hidden transition hover:text-white lg:inline">
            Science
          </a>
          <a href="#formats" className="hidden transition hover:text-white lg:inline">
            Formats
          </a>
          <a href="#research-formats" className="hidden transition hover:text-white lg:inline">
            Pitch & Research
          </a>
          <a href="#experiments" className="hidden transition hover:text-white lg:inline">
            Experiments
          </a>
          <a href="#outputs" className="hidden transition hover:text-white lg:inline">
            Outputs
          </a>
          <a href="#use-cases" className="hidden transition hover:text-white lg:inline">
            Use Cases
          </a>
          <Link href="/research" className="hidden transition hover:text-white lg:inline">
            Research
          </Link>
          <Link href="/glossary" className="hidden transition hover:text-white lg:inline">
            Glossary
          </Link>
          <a href="#faq" className="hidden transition hover:text-white lg:inline">
            FAQ
          </a>

          <details className="relative lg:hidden">
            <summary
              aria-label="Open menu"
              className="flex cursor-pointer list-none items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-white transition hover:border-accent/60 hover:bg-accent/10 [&::-webkit-details-marker]:hidden"
            >
              <span>Menu</span>
              <svg
                aria-hidden
                className="h-3 w-3 transition group-open:rotate-180"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 4.5 6 7.5l3-3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <ul className="absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-md border border-white/10 bg-ink-900/95 p-1 text-sm shadow-xl backdrop-blur">
              <li>
                <a href="#science" className="block rounded px-3 py-2 text-zinc-300 transition hover:bg-white/5 hover:text-white">
                  Science
                </a>
              </li>
              <li>
                <a href="#formats" className="block rounded px-3 py-2 text-zinc-300 transition hover:bg-white/5 hover:text-white">
                  Formats
                </a>
              </li>
              <li>
                <a href="#research-formats" className="block rounded px-3 py-2 text-zinc-300 transition hover:bg-white/5 hover:text-white">
                  Pitch & Research
                </a>
              </li>
              <li>
                <a href="#experiments" className="block rounded px-3 py-2 text-zinc-300 transition hover:bg-white/5 hover:text-white">
                  Experiments
                </a>
              </li>
              <li>
                <a href="#outputs" className="block rounded px-3 py-2 text-zinc-300 transition hover:bg-white/5 hover:text-white">
                  Outputs
                </a>
              </li>
              <li>
                <a href="#use-cases" className="block rounded px-3 py-2 text-zinc-300 transition hover:bg-white/5 hover:text-white">
                  Use Cases
                </a>
              </li>
              <li>
                <Link href="/research" className="block rounded px-3 py-2 text-zinc-300 transition hover:bg-white/5 hover:text-white">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="block rounded px-3 py-2 text-zinc-300 transition hover:bg-white/5 hover:text-white">
                  Glossary
                </Link>
              </li>
              <li>
                <a href="#faq" className="block rounded px-3 py-2 text-zinc-300 transition hover:bg-white/5 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </details>

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
