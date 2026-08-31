export type ProductFormat = {
  id:
    | "decision"
    | "expert"
    | "debate"
    | "dialogue"
    | "team"
    | "shark"
    | "focus"
    | "tribe"
    | "tournament"
    | "custom";
  name: string;
  group: "Build your own" | "Decide and debate" | "Pitch and research";
  description: string;
  bestFor: string;
  participants: string;
  output: string;
};

/**
 * Public product copy mirrored from the canonical format registry in
 * AgentDiscussionMVP-PersonaTemplates/lib/discussion-formats.ts.
 */
export const productFormats: readonly ProductFormat[] = [
  {
    id: "decision",
    name: "Decision stress-test",
    group: "Decide and debate",
    description:
      "Two opposing agents pressure-test the assumptions and converge on a practical recommendation.",
    bestFor: "Challenge a concrete decision before committing",
    participants: "2 opposing agents",
    output: "Decision memo",
  },
  {
    id: "expert",
    name: "Expert panel",
    group: "Decide and debate",
    description:
      "A small panel debates your topic and distills the most useful insights.",
    bestFor: "Explore a problem from specialist viewpoints",
    participants: "3–5 experts",
    output: "Key insights, no verdict",
  },
  {
    id: "debate",
    name: "Judged debate",
    group: "Decide and debate",
    description:
      "Two debaters build opposing cases while an arbiter scores the exchange.",
    bestFor: "Compare two competing answers with a neutral ruling",
    participants: "2 debaters + arbiter",
    output: "Arbiter's scored verdict",
  },
  {
    id: "dialogue",
    name: "1:1 Human Dialogue",
    group: "Decide and debate",
    description:
      "Two Worker-backed LLMs take turns in a private chat, each believing the other speaker is human.",
    bestFor: "Watch two AI personalities talk naturally",
    participants: "2 Worker-backed LLMs",
    output: "Dialogue transcript",
  },
  {
    id: "team",
    name: "Team Battle",
    group: "Decide and debate",
    description:
      "Every member prepares privately, saved spokespersons debate in a fixed public sequence, and a neutral Arbiter scores the result.",
    bestFor: "Let two saved Teams defend opposite run positions",
    participants: "2 saved Teams + fixed Arbiter",
    output: "Five-dimension scorecard and verdict",
  },
  {
    id: "shark",
    name: "Shark Tank",
    group: "Pitch and research",
    description:
      "Choose what is being decided, then have 2–4 Workers judge the pitch independently against that goal.",
    bestFor: "Get a scored verdict on a pitch for a named audience",
    participants: "2–4 Workers",
    output: "Cited scorecard and verdict",
  },
  {
    id: "focus",
    name: "Focus group",
    group: "Pitch and research",
    description:
      "A moderator follows an editable guide with known Worker personas and grounded findings.",
    bestFor: "Run moderated qualitative research",
    participants: "4–12 Workers",
    output: "Themes and verified quotes",
  },
  {
    id: "tribe",
    name: "TribeMind",
    group: "Pitch and research",
    description:
      "Generated participants react independently, then influence each other in networked rounds.",
    bestFor: "Simulate broader audience reactions and opinion shifts",
    participants: "12–50 synthetic participants",
    output: "Metrics and Observer report",
  },
  {
    id: "tournament",
    name: "Idea Tournament",
    group: "Decide and debate",
    description:
      "Ideas are seeded, then argued head to head in a bracket until one survives with the best of the rest folded in.",
    bestFor: "Choose one idea out of many and know why",
    participants: "4–16 ideas, 1–5 judges",
    output: "Champion spec and kill cards",
  },
  {
    id: "custom",
    name: "Custom discussion",
    group: "Build your own",
    description:
      "Choose the protocol, participants, models, runtime, evidence, and notifications.",
    bestFor: "Control the complete multi-agent setup yourself",
    participants: "2–12 participants",
    output: "Configurable",
  },
] as const;
