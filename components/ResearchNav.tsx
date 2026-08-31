import Image from "next/image";
import Link from "next/link";

export default function ResearchNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
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

        <nav className="flex items-center gap-4 text-sm text-zinc-400">
          <Link href="/research" className="transition hover:text-white">
            Research
          </Link>
          <Link href="/glossary" className="hidden transition hover:text-white sm:inline">
            Glossary
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
