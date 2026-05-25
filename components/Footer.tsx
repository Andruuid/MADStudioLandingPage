export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-gradient-to-br from-accent/30 to-accent-cyan/10 font-mono text-[10px] font-semibold tracking-wider text-white">
            M·A·D
          </span>
          <span className="text-sm text-zinc-400">
            MAD Studio — Multi-Agent Debates
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} MAD Studio</span>
          <span className="font-mono">multiagentdebates.com</span>
        </div>
      </div>
    </footer>
  );
}
