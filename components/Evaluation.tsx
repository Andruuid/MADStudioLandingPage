const outputGroups = [
  {
    label: "Decisions and verdicts",
    title: "Know what was decided—and why.",
    body: "Decision stress-tests produce a decision memo. Judged Debate returns an Arbiter score, and Team Battle ends with a five-dimension scorecard and verdict.",
  },
  {
    label: "Qualitative research",
    title: "Turn the session into findings.",
    body: "Focus Group produces grounded themes and verified quotes. Expert Panel distills key insights without forcing a winner.",
  },
  {
    label: "Audience and pitch signals",
    title: "Inspect reactions, scores, and movement.",
    body: "Shark Tank returns a cited pitch scorecard and verdict. TribeMind provides descriptive metrics and a grounded Observer report.",
  },
  {
    label: "Selection and exploration",
    title: "Keep the path to the result.",
    body: "Idea Tournament produces a champion spec and kill cards. Human Dialogue preserves the private-chat transcript, while Custom Discussion keeps its output configurable.",
  },
];

const traceCapabilities = [
  "Persisted transcripts and run logs",
  "Token and cost metadata",
  "Format-specific reports and scorecards",
  "Portable JSON exports",
];

export default function Evaluation() {
  return (
    <section
      id="outputs"
      className="relative isolate overflow-hidden border-t border-white/5 py-28 md:py-36"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:max-w-3xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
            05 / Outputs
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Every format leaves something inspectable.
          </h2>
          <p className="text-balance text-zinc-400 md:text-lg">
            Multi Agent Debates keeps the transcript and operational trail, then adds the
            output that fits the job: a memo, verdict, report, scorecard,
            dialogue, metrics package, or tournament result.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 md:grid-cols-2">
          {outputGroups.map((group) => (
            <li
              key={group.label}
              className="glow-border relative flex flex-col gap-3 rounded-xl border border-white/10 bg-ink-800/50 p-6"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-cyan">
                {group.label}
              </span>
              <h3 className="text-lg font-semibold leading-snug text-white md:text-xl">
                {group.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {group.body}
              </p>
            </li>
          ))}
        </ul>

        <ul className="mt-8 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {traceCapabilities.map((capability) => (
            <li
              key={capability}
              className="bg-ink-900/80 px-5 py-4 text-sm text-zinc-300"
            >
              <span className="mr-2 text-accent-cyan" aria-hidden>
                ✓
              </span>
              {capability}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
