import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/delibora-wordmark.svg"
            alt="Delibora"
            width={825}
            height={166}
            className="h-auto w-[126px]"
          />
        </div>
        <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-500">
          <Link href="/research" className="transition hover:text-zinc-300">
            Research
          </Link>
          <Link href="/glossary" className="transition hover:text-zinc-300">
            Glossary
          </Link>
          <a
            href="mailto:mad@multiagentdebates.com"
            className="transition hover:text-zinc-300"
          >
            mad@multiagentdebates.com
          </a>
          <span>© {new Date().getFullYear()} Delibora</span>
          <span className="font-mono">multiagentdebates.com</span>
        </div>
      </div>
    </footer>
  );
}
