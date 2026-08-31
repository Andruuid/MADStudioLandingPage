import { productFormats } from "@/lib/product-formats";

const features = [
  {
    title: "Evidence packs & internet research",
    body: "Attach source material to discussions. Truth-Seeking Debate can also prepare dedicated research for both sides and the neutral Arbiter.",
  },
  {
    title: "2 to 100 reasoning agents",
    body: "Start with a focused pair or assemble a larger panel. Specialized formats add their own participant limits and roles.",
  },
  {
    title: "Workers, Teams, Personas & Playbooks",
    body: "Reuse configured participants, saved teams, visible role presets, shared rules, and hidden turn guidance across discussions.",
  },
  {
    title: "Format-specific outputs",
    body: "Get a decision memo, scored verdict, qualitative report, audience metrics, dialogue transcript, or champion spec—depending on the format.",
  },
  {
    title: "Lab Experiments",
    body: "Copy a draft into hidden child runs, sweep sampling parameters, score each transcript, and stop on score, iteration, or cost limits.",
  },
  {
    title: "Live human intervention",
    body: "Inject a human message into a running or paused discussion when the agents need a correction, constraint, or new piece of context.",
  },
  {
    title: "OpenRouter + LM Studio",
    body: "Use cloud models through OpenRouter or local models through LM Studio, with configurable model fallbacks.",
  },
  {
    title: "Runtime controls",
    body: "Bound work with turn, wall-clock runtime, and observed-cost limits so long-running discussions stop predictably.",
  },
  {
    title: "Durable execution",
    body: "Dedicated workers advance discussions, pitches, focus groups, simulations, evidence, and research outside long HTTP requests.",
  },
  {
    title: "Transcripts, logs & exports",
    body: "Review persisted turns, run logs, token and cost metadata, then export portable JSON records for further analysis.",
  },
  {
    title: "In-app + email notifications",
    body: "Receive an in-app notification—and optional Resend email—when a run finishes or reaches its cost cap.",
  },
];

export default function Features() {
  return (
    <section
      id="formats"
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
            Ten formats for ten different jobs.
          </h2>
          <p className="text-balance text-zinc-400 md:text-lg">
            Start with a purpose-built workflow for decisions, expert review,
            debate, dialogue, team competition, pitches, qualitative research,
            audience simulation, idea selection, or a custom setup.
          </p>
        </div>

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {productFormats.map((format) => (
            <li
              key={format.id}
              className="glow-border flex flex-col gap-2 rounded-xl border border-accent/15 bg-accent/5 p-5 transition hover:border-accent/30"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-white">
                  {format.name}
                </h3>
                <span className="w-fit rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent-cyan">
                  {format.participants}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-zinc-400">
                {format.description}
              </p>
              <p className="mt-auto border-t border-white/5 pt-2 font-mono text-[10px] text-zinc-500">
                Output: <span className="text-zinc-300">{format.output}</span>
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
