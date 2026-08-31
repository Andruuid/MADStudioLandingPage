export default function Recursive() {
  return (
    <section
      id="experiments"
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
            04 / Evidence and iteration
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Test settings. Ground the result.
          </h2>
          <p className="text-balance text-zinc-400 md:text-lg">
            Lab Experiments compare parameter choices across child runs, while
            Evidence Packs and optional Truth-Seeking internet research keep
            factual work connected to source material.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <article className="glow-border relative flex flex-col gap-5 rounded-xl border border-white/10 bg-ink-800/60 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-cyan">
                Lab Experiments
              </span>
              <span className="h-px flex-1 bg-white/5" />
              <span className="font-mono text-[10px] text-zinc-600">
                parameter sweeps
              </span>
            </div>

            <h3 className="text-xl font-semibold leading-snug text-white md:text-2xl">
              Compare configurations systematically.
            </h3>

            <p className="text-sm leading-relaxed text-zinc-400">
              Start from a draft discussion, create hidden child runs, vary
              temperature and repetition, frequency, and presence penalties,
              then score each transcript against a validation prompt and
              expected outcome.
            </p>

            <ul className="mt-2 space-y-2 text-xs text-zinc-500">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>Inspect child-run links, scores, costs, and parameter snapshots</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>Pause, resume, stop, edit, or delete an Experiment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>Stop on score threshold, iteration limit, or total cost cap</span>
              </li>
            </ul>
          </article>

          <article className="glow-border relative flex flex-col gap-5 rounded-xl border border-white/10 bg-ink-800/60 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-cyan">
                Evidence and research
              </span>
              <span className="h-px flex-1 bg-white/5" />
              <span className="font-mono text-[10px] text-zinc-600">
                source-aware
              </span>
            </div>

            <h3 className="text-xl font-semibold leading-snug text-white md:text-2xl">
              Give agents material they can inspect.
            </h3>

            <p className="text-sm leading-relaxed text-zinc-400">
              Upload an Evidence Pack for a discussion. In Truth-Seeking Debate,
              optional internet research prepares separate material for both
              debaters and neutral material for the Arbiter before the relevant
              phases run.
            </p>

            <ul className="mt-2 space-y-2 text-xs text-zinc-500">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                <span>Shared files and pasted evidence stay attached to the draft</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                <span>Research is purpose-built for Truth-Seeking Debate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                <span>Claims and citations remain visible in the persisted run</span>
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
                What this adds
              </span>
              <p className="text-balance text-lg font-medium text-white md:text-xl">
                Compare runs without losing the transcript, parameters, evidence,
                or cost trail behind the result.
              </p>
            </div>
            <a
              href="#waitlist"
              className="inline-flex shrink-0 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-accent/60 hover:bg-accent/10"
            >
              Join the beta
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
