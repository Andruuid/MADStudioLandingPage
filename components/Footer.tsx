import Link from "next/link";
import SiteBrand from "@/components/SiteBrand";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div className="flex flex-col items-start gap-2">
          <SiteBrand />
          <span className="pl-[46px] text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            by Delibora
          </span>
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
          <span>© {new Date().getFullYear()} Multi Agent Debates</span>
          <span className="font-mono">multiagentdebates.com</span>
        </div>
      </div>
    </footer>
  );
}
