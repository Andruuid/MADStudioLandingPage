import { productFormats } from "@/lib/product-formats";

const featuredIds = new Set(["shark", "focus", "tribe", "tournament"]);
const featuredFormats = productFormats.filter((format) => featuredIds.has(format.id));

export default function ApiSection() {
  return (
    <section
      id="research-formats"
      className="relative border-t border-white/5 py-28 md:py-36"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:max-w-3xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
            03 / Pitch and research
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Go beyond a debate transcript.
          </h2>
          <p className="text-balance text-zinc-400 md:text-lg">
            Multi Agent Debates includes dedicated workflows for pitch evaluation,
            moderated qualitative research, synthetic-audience simulation, and
            head-to-head idea selection.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 md:grid-cols-2">
          {featuredFormats.map((format) => (
            <li
              key={format.id}
              className="glow-border relative flex h-full flex-col rounded-xl border border-white/10 bg-ink-900/70 p-6 md:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-cyan">
                  {format.name}
                </span>
                <span className="h-px flex-1 bg-white/5" />
                <span className="font-mono text-[10px] text-zinc-500">
                  {format.participants}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold leading-snug text-white md:text-2xl">
                {format.bestFor}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {format.description}
              </p>
              <div className="mt-6 border-t border-white/5 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                  Output
                </span>
                <p className="mt-1 text-sm font-medium text-zinc-200">
                  {format.output}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
