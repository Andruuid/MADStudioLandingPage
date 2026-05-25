const dimensions = [
  { key: "logic", label: "Logical consistency" },
  { key: "evidence", label: "Evidence density" },
  { key: "rebuttal", label: "Rebuttal robustness" },
  { key: "steelman", label: "Steelman quality" },
  { key: "calibration", label: "Calibration accuracy" },
  { key: "novelty", label: "Novelty index" },
  { key: "compression", label: "Signal-to-noise" },
  { key: "citation", label: "Citation fidelity" },
  { key: "drift", label: "Position drift" },
  { key: "concession", label: "Concession quality" },
  { key: "falsify", label: "Falsifiability" },
  { key: "decisiveness", label: "Decision-readiness" },
];

const agents = [
  { name: "Debater A", scores: [92, 78, 88, 71, 84, 66, 81, 90, 58, 73, 87, 79] },
  { name: "Debater B", scores: [85, 91, 76, 82, 70, 88, 74, 83, 65, 80, 72, 86] },
  { name: "Arbiter",   scores: [94, 89, 95, 90, 93, 71, 92, 96, 84, 91, 88, 95] },
];

function cellColor(score: number) {
  if (score >= 90) return "bg-accent/70 text-white";
  if (score >= 80) return "bg-accent/50 text-white";
  if (score >= 70) return "bg-accent-cyan/40 text-white";
  if (score >= 60) return "bg-accent-cyan/25 text-zinc-100";
  return "bg-white/5 text-zinc-400";
}

const capabilities = [
  {
    title: "Custom rubrics",
    body: "Define your own dimensions, weights, and scoring guidance. The arbiter pipeline picks them up without re-architecting the protocol.",
  },
  {
    title: "ELO across topics",
    body: "Pairwise debate outcomes update per-agent, per-topic ELO ratings. Find which Worker is actually best at adversarial law versus product strategy.",
  },
  {
    title: "Heatmaps + diffs",
    body: "Compare two runs side by side. Spot the dimension that shifted when you tweaked the prompt. Export to CSV, JSON, or paste straight into a report.",
  },
  {
    title: "Auditable verdicts",
    body: "Every score is traceable to the turn that earned it. Click any cell to jump to the supporting transcript span and the arbiter rationale.",
  },
];

export default function Evaluation() {
  return (
    <section
      id="evaluation"
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
            05 / Evaluation
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Twelve dimensions. One verdict you can defend.
          </h2>
          <p className="text-balance text-zinc-400 md:text-lg">
            The MAD Studio Evaluation Matrix scores every agent, turn, and run
            across twelve rigorous dimensions — from logical consistency to
            steelman quality to calibration. The single number you ship is the
            single number you can prove.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-xl border border-white/10 bg-ink-900/70">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 bg-white/5 px-5 py-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-cyan">
                live matrix
              </span>
              <span className="font-mono text-[10px] text-zinc-600">
                session #84a3 · turn 14 / 28
              </span>
            </div>
            <div className="flex items-center gap-4 font-mono text-[10px] text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-3 rounded-sm bg-accent/70" />
                ≥ 90
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-3 rounded-sm bg-accent/50" />
                80–89
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-3 rounded-sm bg-accent-cyan/40" />
                70–79
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-3 rounded-sm bg-accent-cyan/25" />
                60–69
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-3 rounded-sm bg-white/10" />
                &lt; 60
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-0 text-left">
              <thead>
                <tr className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  <th className="sticky left-0 z-10 bg-ink-900/70 px-4 py-3 text-left font-medium">
                    Agent
                  </th>
                  {dimensions.map((d) => (
                    <th
                      key={d.key}
                      className="border-l border-white/5 px-3 py-3 font-medium"
                      title={d.label}
                    >
                      {d.label.split(" ")[0]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {agents.map((agent) => (
                  <tr key={agent.name}>
                    <td className="sticky left-0 z-10 border-t border-white/5 bg-ink-900/70 px-4 py-3 text-sm font-medium text-white">
                      {agent.name}
                    </td>
                    {agent.scores.map((score, idx) => (
                      <td
                        key={dimensions[idx].key}
                        className="border-l border-t border-white/5 px-1.5 py-1.5"
                      >
                        <div
                          className={`flex h-9 items-center justify-center rounded-sm font-mono text-[11px] font-semibold transition ${cellColor(score)}`}
                          title={`${dimensions[idx].label}: ${score}`}
                        >
                          {score}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/5 px-5 py-3 font-mono text-[11px] text-zinc-500">
            <span>
              <span className="text-zinc-300">aggregate</span>{" "}
              <span className="text-accent-glow">87.3</span>
            </span>
            <span>
              <span className="text-zinc-300">winner</span>{" "}
              <span className="text-accent-cyan">Debater B (Δ +2.1)</span>
            </span>
            <span>
              <span className="text-zinc-300">confidence</span>{" "}
              <span className="text-white">0.91</span>
            </span>
            <span className="ml-auto">
              <span className="text-zinc-600">12 dims · 36 cells · 1.4s</span>
            </span>
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-rose-500/[0.08] via-ink-900/80 to-accent/[0.08] p-6 md:p-8">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-400/40 to-transparent"
          />

          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-rose-300/90">
                  the bullshit index
                </span>
                <span className="rounded-full border border-rose-400/30 bg-rose-400/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-rose-200">
                  beta
                </span>
              </div>

              <h3 className="text-balance text-2xl font-semibold leading-tight text-white md:text-3xl">
                We built a bullshit meter. It works.
              </h3>

              <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
                Every factual claim is extracted, cross-checked against your
                evidence pack, the public web, and the agent's own earlier
                turns. Hallucinated citations, drifted positions, false
                precision, and unsupported assertions all push the needle.
                Bullshit gets flagged before it becomes a quote.
              </p>

              <ul className="mt-2 grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-zinc-500 sm:grid-cols-3">
                <li>
                  <span className="block font-mono text-zinc-600">verified</span>
                  <span className="text-zinc-200">73 claims</span>
                </li>
                <li>
                  <span className="block font-mono text-zinc-600">flagged</span>
                  <span className="text-amber-300">9 hedged</span>
                </li>
                <li>
                  <span className="block font-mono text-zinc-600">contradicted</span>
                  <span className="text-rose-300">3 cases</span>
                </li>
                <li>
                  <span className="block font-mono text-zinc-600">false positives</span>
                  <span className="text-zinc-200">0.04%</span>
                </li>
                <li>
                  <span className="block font-mono text-zinc-600">avg latency</span>
                  <span className="text-zinc-200">1.2s / claim</span>
                </li>
                <li>
                  <span className="block font-mono text-zinc-600">sources</span>
                  <span className="text-zinc-200">evidence + web</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-lg border border-white/10 bg-ink-950/60 p-5">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  <span>Session BS-index</span>
                  <span className="text-emerald-300">low</span>
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-mono text-4xl font-semibold text-white md:text-5xl">
                    6
                  </span>
                  <span className="font-mono text-sm text-zinc-500">/ 100</span>
                  <span className="ml-auto font-mono text-[10px] text-emerald-400">
                    ▼ 4 vs prev run
                  </span>
                </div>

                <div className="relative mt-5">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gradient-to-r from-emerald-500/80 via-amber-400/80 to-rose-500/80" />
                  <div
                    className="absolute -top-1 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-ink-950 bg-white shadow-[0_0_16px_2px_rgba(255,255,255,0.4)]"
                    style={{ left: "6%" }}
                    aria-hidden
                  />
                  <div className="mt-2 flex justify-between font-mono text-[9px] uppercase tracking-wider text-zinc-600">
                    <span>clean</span>
                    <span>hedged</span>
                    <span>contradicted</span>
                    <span>fabricated</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-ink-950/60 p-4">
                <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  Latest flag
                </div>
                <div className="mt-2 text-sm text-zinc-200">
                  <span className="text-rose-300">Debater A · turn 11</span>{" "}
                  cited a 2027 study that does not exist.
                </div>
                <div className="mt-1 font-mono text-[10px] text-zinc-600">
                  source: web cross-check · score impact: −2.3 calibration · −4 evidence
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap) => (
            <li
              key={cap.title}
              className="glow-border relative flex flex-col gap-2 rounded-xl border border-white/10 bg-ink-800/50 p-5"
            >
              <h3 className="text-base font-semibold text-white">
                {cap.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {cap.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
