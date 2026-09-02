import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden border-b border-blue-300/10">
      <div
        aria-hidden
        className="absolute inset-0 blueprint-bg opacity-90"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,11,26,0.98)_0%,rgba(2,11,26,0.88)_43%,rgba(2,11,26,0.28)_78%,rgba(2,11,26,0.58)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink-950 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-24 md:pb-36 md:pt-32">
        <div className="flex max-w-4xl flex-col gap-7">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-300/20 bg-blue-950/45 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-blue-100/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan shadow-[0_0_12px_2px_rgba(0,213,220,0.45)]" />
            Closed beta · early access
          </div>

          <h1 className="text-balance font-semibold leading-[0.98] tracking-tight text-white">
            <span className="block text-5xl md:text-7xl">
              Multi Agent Debates
            </span>
            <span className="mt-4 block text-2xl font-medium tracking-[-0.015em] text-blue-100/65 md:text-4xl">
              by <span className="text-accent-glow">Delibora</span>
            </span>
          </h1>

          <p className="max-w-2xl text-balance text-lg leading-relaxed text-blue-100/70 md:text-xl">
            A structured multi-agent debate platform for decisions, pitches,
            research, and ideas. Give several AI participants the same question,
            compare their arguments, and leave with an inspectable result.
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
              Explore the research
            </Link>
            <span className="w-full text-xs text-blue-100/45 sm:w-auto">
              Free during beta · no credit card
            </span>
          </div>

          <dl className="mt-6 grid grid-cols-3 gap-6 border-t border-white/5 pt-8 text-left">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Participants
              </dt>
              <dd className="mt-1 font-mono text-lg text-white">2 – 100</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Formats
              </dt>
              <dd className="mt-1 font-mono text-lg text-white">10</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Model routes
              </dt>
              <dd className="mt-1 font-mono text-lg text-white">Cloud + local</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
