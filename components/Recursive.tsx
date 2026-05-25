export default function Recursive() {
  return (
    <section
      id="recursive"
      className="relative isolate overflow-hidden border-t border-white/5 bg-ink-900/40 py-28 md:py-36"
    >
      <div
        aria-hidden
        className="absolute -top-40 right-[-160px] h-[420px] w-[640px] rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-[-200px] left-[-160px] h-[420px] w-[640px] rounded-full bg-accent-cyan/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:max-w-3xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
            04 / Recursive
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Find what a single prompt can't find.
          </h2>
          <p className="text-balance text-zinc-400 md:text-lg">
            Saga and Experiments run hidden recursive debates until the agents
            stop surprising each other. Surface insights no model — not GPT 5.5,
            not Opus 4.7 — would give you from a single shot.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <article className="glow-border relative flex flex-col gap-5 rounded-xl border border-white/10 bg-ink-800/60 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-cyan">
                Saga
              </span>
              <span className="h-px flex-1 bg-white/5" />
              <span className="font-mono text-[10px] text-zinc-600">
                recursive · convergence-stopped
              </span>
            </div>

            <h3 className="text-xl font-semibold leading-snug text-white md:text-2xl">
              Let them argue until something stabilizes.
            </h3>

            <p className="text-sm leading-relaxed text-zinc-400">
              Saga spawns zero-turn child sessions, scores each transcript
              against your rubric, applies the best optimizer suggestion, and
              re-runs. It stops only when the score curve flattens — or when
              the answer changes everything you thought you knew.
            </p>

            <ul className="mt-2 space-y-2 text-xs text-zinc-500">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  Hidden child runs — never pollute the source conversation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  Per-generation scorecard, applied patch, optimizer suggestion
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  Stops on convergence, score threshold, cost cap, or generation
                  limit
                </span>
              </li>
            </ul>
          </article>

          <article className="glow-border relative flex flex-col gap-5 rounded-xl border border-white/10 bg-ink-800/60 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-cyan">
                Experiments
              </span>
              <span className="h-px flex-1 bg-white/5" />
              <span className="font-mono text-[10px] text-zinc-600">
                parameter sweep · best-of-N
              </span>
            </div>

            <h3 className="text-xl font-semibold leading-snug text-white md:text-2xl">
              Run it a hundred times. Keep what wins.
            </h3>

            <p className="text-sm leading-relaxed text-zinc-400">
              Experiments fan out hidden child runs across temperature,
              repetition, frequency, and presence sweeps. Score every transcript
              against a validation prompt. Promote the configuration that beats
              the field. The answer you would have hand-written, rewritten by
              the search.
            </p>

            <ul className="mt-2 space-y-2 text-xs text-zinc-500">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                <span>
                  Run 1 mirrors the source; later runs randomize sampling per
                  agent
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                <span>
                  Validation prompt + expected outcome power transcript scoring
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                <span>
                  Stops on iteration limit, score threshold, or total cost cap
                </span>
              </li>
            </ul>
          </article>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-ink-800/80 via-ink-900/80 to-ink-800/40 p-6 md:p-8">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          />
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                The promise
              </span>
              <p className="text-balance text-lg font-medium text-white md:text-xl">
                Beyond what one prompt can reach. Both Saga and Experiments
                surface answers no human or single model would have arrived at
                unaided.
              </p>
            </div>
            <a
              href="#waitlist"
              className="inline-flex shrink-0 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-accent/60 hover:bg-accent/10"
            >
              Join the beta
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
