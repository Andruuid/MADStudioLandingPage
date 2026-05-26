const protocols = [
  {
    name: "Truth-Seeking Debate",
    tag: "10-phase · M-MAD",
    body: "Independent openings and rebuttals, then a five-dimension arbiter sweep — correctness, evidence, responsiveness, calibration, citations — before a binding verdict.",
  },
  {
    name: "Open Discussion",
    tag: "Multi-agent",
    body: "Rolling brainstorm where 2–100 agents reason in public. Models nominate the next speaker; human interventions steer mid-run.",
  },
  {
    name: "Team Discussion",
    tag: "Battle · Collaborate",
    body: "Two saved Teams of 2–6 Workers each. Private huddles, public spokesperson turns — battle mode for adversarial critique, collaboration mode for joint synthesis.",
  },
  {
    name: "Blind Ping Pong",
    tag: "Masked 1:1",
    body: "Two participants alternate in a blind, human-style chat. Identities masked until external stop — ideal for unbiased pairwise reasoning.",
  },
  {
    name: "Scored Debate",
    tag: "FREE-MAD",
    body: "Round-robin debate on a single structured question. Score-based decisions across rounds with anti-conformity prompts built in.",
  },
  {
    name: "Custom Protocol Library",
    tag: "Your rules",
    body: "Fork any built-in engine, edit prompt sections, and save named variants. Your protocol — without forking the codebase.",
  },
];

const features = [
  {
    title: "Evidence packs & claims ledger",
    body: "Attach plain-text evidence to truth-seeking runs. Claims are tracked across phases so the arbiter scores against what was actually cited — not what agents wish they had said.",
  },
  {
    title: "2 to 100 reasoning agents",
    body: "Compose participants from a reusable Worker library. Snapshotted into the conversation so editing a Worker never rewrites historical transcripts.",
  },
  {
    title: "Dimension-sweep arbiter",
    body: "Five independent arbiter passes feed a structured verdict the model cannot retroactively rewrite — each dimension scored before the final call.",
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
            Five engines. One protocol library. Zero duct tape.
          </h2>
          <p className="text-balance text-zinc-400 md:text-lg">
            Five built-in debate engines and a custom protocol library you can
            fork and save. Each mode is peer-reviewed or production-hardened —
            from 10-phase M-MAD truth-seeking to blind pairwise ping-pong.
          </p>
        </div>

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {protocols.map((protocol) => (
            <li
              key={protocol.name}
              className="glow-border flex flex-col gap-2 rounded-xl border border-accent/15 bg-accent/5 p-5 transition hover:border-accent/30"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-semibold text-white">
                  {protocol.name}
                </h3>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent-cyan">
                  {protocol.tag}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-zinc-400">
                {protocol.body}
              </p>
            </li>
          ))}
        </ul>

        <ul className="mt-8 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 md:grid-cols-2 lg:grid-cols-3">
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
