const features = [
  {
    title: "Three rigorous protocols",
    body: "Open Discussion for brainstorming, Truth-Seeking Debate with a 10-phase M-MAD verdict, and Team Discussion for two-team battle or collaboration modes.",
  },
  {
    title: "2 to 12 reasoning agents",
    body: "Compose participants from a reusable Worker library. Snapshotted into the conversation so editing a Worker never rewrites historical transcripts.",
  },
  {
    title: "Dimension-sweep arbiter",
    body: "Five independent arbiter passes — correctness, evidence use, responsiveness, calibration, citation quality — feed a structured verdict the model cannot retroactively rewrite.",
  },
  {
    title: "Rolling summary + recent window",
    body: "Bounded prompts that scale to long-running runs. Full transcripts stay persisted, but each turn is fed a compact, faithful context.",
  },
  {
    title: "Saga recursive optimization",
    body: "Hidden child runs iteratively refine the parent prompt. Stops on convergence, score threshold, cost cap, or generation limit.",
  },
  {
    title: "Lab Experiments",
    body: "Sweep temperature, repetition, frequency, and presence penalties across hidden child copies. Score transcripts against a validation prompt and expected outcome.",
  },
  {
    title: "Live human intervention",
    body: "Inject guidance mid-run, optionally targeting the next responding agent. Interventions are first-class transcript inputs.",
  },
  {
    title: "Multi-provider routing",
    body: "OpenRouter, LM Studio, and deterministic dummy providers. Configure per-agent fallbacks with server-side prompt caching.",
  },
  {
    title: "Cost, runtime, and turn caps",
    body: "Hard ceilings on every dimension that matters. Sessions self-terminate before they burn budget or time.",
  },
  {
    title: "Durable orchestration",
    body: "Supabase-backed job claims, runtime locks, and transactional mutations. One failed conversation never stalls the others.",
  },
  {
    title: "Personas, Playbooks, Teams",
    body: "Reusable prompt guidance, hidden discussion rules, and snapshotted 2–6 Worker teams. Configure once, run forever.",
  },
  {
    title: "In-app + email notifications",
    body: "Get pinged when a run finishes or hits its cost cap. Resend integration when configured, in-app fallback when not.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative border-t border-white/5 py-28 md:py-36"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
            02 / Capabilities
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Engineered for serious deliberation.
          </h2>
          <p className="text-balance text-zinc-400 md:text-lg">
            Every primitive a researcher, strategist, or analyst needs to run a
            structured AI debate at production quality — without rebuilding the
            scaffolding from scratch.
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <li
              key={feature.title}
              className="group relative flex flex-col gap-3 bg-ink-900/80 p-6 transition hover:bg-ink-800/80"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-wider text-zinc-600">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-white/5" />
              </div>
              <h3 className="text-base font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
