import Link from "next/link";

type HeroProps = {
  waitlistCount: number;
};

export default function Hero({ waitlistCount }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 grid-bg radial-fade opacity-60"
      />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[640px] w-[1100px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl animate-drift"
      />
      <div
        aria-hidden
        className="absolute bottom-[-200px] right-[-160px] h-[480px] w-[680px] rounded-full bg-accent-cyan/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-32 pt-28 md:pb-40 md:pt-36">
        <div className="flex max-w-3xl flex-col gap-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(124,92,255,0.6)]" />
            Closed beta · {waitlistCount.toLocaleString()} teams already in
          </div>

          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
            The world's most advanced{" "}
            <span className="bg-gradient-to-r from-accent via-accent-glow to-accent-cyan bg-clip-text text-transparent">
              multi-agent debate
            </span>{" "}
            platform.
          </h1>

          <p className="max-w-2xl text-balance text-lg text-zinc-400 md:text-xl">
            MAD Studio is an operational thinking console for structured AI
            deliberation. Configure 2–100 reasoning agents, run them through
            peer-reviewed debate protocols, and watch them pressure-test ideas
            one turn at a time.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#waitlist"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-accent to-accent-glow px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(124,92,255,0.8)] transition hover:shadow-[0_0_60px_-8px_rgba(124,92,255,1)]"
            >
              Request free beta access
              <svg
                className="h-4 w-4 transition group-hover:translate-x-0.5"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <Link
              href="/research/multi-agent-debate-vs-self-consistency"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/60 hover:bg-accent/10"
            >
              Read the research guides
            </Link>

            <span className="w-full text-xs text-zinc-500 sm:w-auto">
              Join {waitlistCount.toLocaleString()} teams · Free during beta · no credit card
            </span>
          </div>

          <dl className="mt-6 grid grid-cols-3 gap-6 border-t border-white/5 pt-8 text-left">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Agents per session
              </dt>
              <dd className="mt-1 font-mono text-lg text-white">2 – 100</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Debate phases
              </dt>
              <dd className="mt-1 font-mono text-lg text-white">1 – 10</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Concurrent runs
              </dt>
              <dd className="mt-1 font-mono text-lg text-white">1 – 100</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
