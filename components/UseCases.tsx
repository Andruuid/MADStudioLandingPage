const cases = [
  {
    label: "Political Campaigns",
    headline: "Test a message from more than one angle.",
    body: "Use Team Battle for structured opposition, Focus Group for moderated reactions, or TribeMind to observe synthetic audience shifts across rounds.",
  },
  {
    label: "Academic Research",
    headline: "Run a simulated peer review.",
    body: "Put a hypothesis in front of an Expert Panel or compare two competing interpretations in a Judged Debate with attached evidence.",
  },
  {
    label: "Marketing & Brand",
    headline: "Move from reactions to a usable report.",
    body: "Moderate known personas in a Focus Group, score a campaign pitch in Shark Tank, or simulate wider audience response with TribeMind.",
  },
  {
    label: "Legal & Due Diligence",
    headline: "Lay out competing arguments.",
    body: "Use a Decision Stress-Test or Judged Debate to compare competing cases, preserve the transcript, and keep supporting evidence with the run.",
  },
  {
    label: "Product Strategy",
    headline: "Stress-test a decision or select an idea.",
    body: "Challenge a roadmap choice with opposing agents, or send several concepts through an Idea Tournament for a champion spec and kill cards.",
  },
  {
    label: "Education & Training",
    headline: "Make contrasting viewpoints visible.",
    body: "Review the transcript from an Expert Panel, 1:1 Human Dialogue, or Judged Debate and discuss how each participant handled the question.",
  },
  {
    label: "Investigative Journalism",
    headline: "Rehearse the counterargument before publication.",
    body: "Attach source material, run a Judged Debate or Team Battle, and collect the counterarguments your draft still needs to answer.",
  },
  {
    label: "Just for Fun",
    headline: "Stage a conversation or bracket.",
    body: "Put two AI personalities into a 1:1 Human Dialogue, build a custom discussion, or let several ideas compete in a tournament.",
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
            06 / Use cases
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            A workspace for questions that benefit from structured disagreement.
          </h2>
          <p className="text-balance text-zinc-400 md:text-lg">
            Delibora can support message testing, qualitative research, pitch
            review, argument mapping, product decisions, audience simulation,
            and idea selection.
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
