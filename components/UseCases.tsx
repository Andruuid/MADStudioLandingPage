const cases = [
  {
    label: "Political Campaigns",
    headline: "Stress-test every message before it ships.",
    body: "Stage opposition agents that hammer your platform with the strongest rebuttals from across the spectrum. Find weak claims before journalists do.",
  },
  {
    label: "Academic Research",
    headline: "Simulate the toughest peer review you'll ever get.",
    body: "Run hypotheses through a panel of skeptical agents with persona-specific priors. Capture structured rebuttals, citations needed, and open questions.",
  },
  {
    label: "Marketing & Brand",
    headline: "Debate positioning until only the strongest survives.",
    body: "Run two competing campaign angles as Teams. Battle mode surfaces critique; collaboration mode synthesizes the best of both into a single brief.",
  },
  {
    label: "Legal & Due Diligence",
    headline: "Map adversarial arguments end-to-end.",
    body: "Configure prosecutor and defense agents over a shared evidence pack. Get a structured claims ledger and a five-dimension verdict scorecard.",
  },
  {
    label: "Product Strategy",
    headline: "Institutionalize the devil's advocate.",
    body: "Pressure-test roadmap decisions, pricing models, and launch plans against agents seeded with competitor personas, customer archetypes, and risk lenses.",
  },
  {
    label: "Education & Training",
    headline: "Watch reasoning happen, step by step.",
    body: "Make critical thinking visible. Students follow turn-by-turn argument structure, evidence handling, and the arbiter's dimension-level rationale.",
  },
  {
    label: "Investigative Journalism",
    headline: "Pre-flight your strongest counterstory.",
    body: "Before publication, simulate the most aggressive defense your subject could mount. Identify the holes that will get raised — and patch them.",
  },
  {
    label: "Just for Fun",
    headline: "Send GPT 5.5 and Opus 4.7 into a five-round debate.",
    body: "Pick a spicy topic. Pick six agents. Hit start. Watch them go. Export the transcript. No wrong answers — that's what the arbiter is for.",
  },
];

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="relative border-t border-white/5 bg-ink-900/40 py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
            03 / Use cases
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            One platform. Every domain that needs structured argument.
          </h2>
          <p className="text-balance text-zinc-400 md:text-lg">
            MAD Studio is the only platform on the web that delivers
            peer-reviewed multi-agent debate as a daily-driver tool. From war
            rooms to lab notebooks to weekend curiosity — the same engine, the
            same rigor.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {cases.map((useCase) => (
            <article
              key={useCase.label}
              className="glow-border group relative flex flex-col gap-3 rounded-xl border border-white/10 bg-ink-800/50 p-6 transition hover:border-white/20"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-cyan">
                {useCase.label}
              </span>
              <h3 className="text-lg font-semibold leading-snug text-white md:text-xl">
                {useCase.headline}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {useCase.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
