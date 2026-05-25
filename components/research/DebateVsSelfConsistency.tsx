import type { ReactNode } from "react";
import Link from "next/link";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent-glow underline decoration-accent/40 underline-offset-2 transition hover:decoration-accent"
    >
      {children}
    </a>
  );
}

export default function DebateVsSelfConsistency() {
  return (
    <article className="research-prose">
      <p className="text-lg leading-relaxed text-zinc-300">
        If you have spent any time pushing large language models on hard
        reasoning tasks, you have probably tried two families of tricks:
        sample the same model several times and vote, or put multiple agents in
        a room and let them argue. Both work — sometimes spectacularly, sometimes
        not at all. The question is not which method is &ldquo;best,&rdquo; but
        which failure mode you are trying to escape.
      </p>

      <h2>What self-consistency actually does</h2>
      <p>
        Self-consistency decoding, popularized through chain-of-thought with
        self-consistency (CoT-SC), runs one model many times at non-zero
        temperature, collects independent reasoning traces, and returns the
        majority answer. The intuition is statistical: if most paths converge on
        the same conclusion, that conclusion is probably right.
      </p>
      <p>
        Self-consistency is fast to implement, embarrassingly parallel, and
        cheap relative to multi-round debate. For well-defined math, logic, and
        multiple-choice benchmarks, it remains one of the strongest
        baselines in the literature. When your task has a single correct
        answer and the model is already in the right ballpark, extra samples
        often push accuracy over the line.
      </p>

      <h2>What multi-agent debate adds</h2>
      <p>
        Multi-agent debate (MAD) is structurally different. Instead of
        independent samples, agents see each other&apos;s arguments and must
        respond. The{" "}
        <ExternalLink href="https://arxiv.org/abs/2305.14325">
          Du et al.
        </ExternalLink>{" "}
        framework showed that iterative critique improves factuality and
        reasoning on tasks where a lone chain-of-thought can drift.{" "}
        <ExternalLink href="https://aclanthology.org/2024.emnlp-main.992/">
          Liang et al.
        </ExternalLink>{" "}
        identified a complementary problem: self-reflection suffers from
        Degeneration-of-Thought — once a model commits to a wrong answer, asking
        it to reflect on its own output rarely produces genuinely new reasoning.
        External agents break that loop.
      </p>
      <p>
        Debate shines when you need{" "}
        <strong className="font-medium text-white">divergent perspectives</strong>
        , not just more of the same. Political message testing, legal argument
        mapping, adversarial red-teaming, and open-ended strategy work all benefit
        from agents with different personas, priors, or evidence packs — not ten
        copies of one prompt.
      </p>

      <h2>When self-consistency is the better bet</h2>
      <ul>
        <li>
          <strong className="text-white">Tight latency or token budget.</strong>{" "}
          Five parallel samples from one model usually cost less than three
          agents debating for four rounds.
        </li>
        <li>
          <strong className="text-white">Closed-form answers.</strong>{" "}
          Arithmetic, code output, classification — tasks where majority vote
          over independent traces is a natural fit.
        </li>
        <li>
          <strong className="text-white">Homogeneous model stack.</strong>{" "}
          If every agent would use the same weights and system prompt, you are
          mostly paying for conversational overhead.{" "}
          <ExternalLink href="https://arxiv.org/abs/2311.17371">
            Smit et al.
          </ExternalLink>{" "}
          found that out-of-the-box MAD often underperforms well-tuned
          single-agent baselines unless hyperparameters are carefully optimized.
        </li>
      </ul>

      <h2>When debate earns its cost</h2>
      <ul>
        <li>
          <strong className="text-white">You need scrutiny, not agreement.</strong>{" "}
          Debate protocols force agents to engage with counterarguments rather
          than silently converging. That is the point of devil&apos;s-advocate
          and red-team workflows.
        </li>
        <li>
          <strong className="text-white">Role diversity matters.</strong>{" "}
          Prosecutor vs. defense, skeptic vs. optimist, competitor vs. customer
          — heterogeneous agents surface failure modes self-consistency never
          encounters.
        </li>
        <li>
          <strong className="text-white">The output is structured reasoning,</strong>{" "}
          not just a label. Transcripts, rebuttals, citation gaps, and
          dimension-level verdicts are first-class deliverables. That is what
          truth-seeking and M-MAD-style arbiter protocols are built for.
        </li>
        <li>
          <strong className="text-white">Persuasion dynamics are the feature.</strong>{" "}
          <ExternalLink href="https://arxiv.org/abs/2402.06782">
            Khan et al.
          </ExternalLink>{" "}
          showed debate can help weaker judges identify truthful answers from
          stronger debaters — a setting where simple ensembling fails.
        </li>
      </ul>

      <h2>The nuance: vote vs. debate</h2>
      <p>
        Not every &ldquo;debate system&rdquo; is doing equal work.{" "}
        <ExternalLink href="https://proceedings.neurips.cc/paper_files/paper/2025/hash/934252acd87f254d5d4672fbde283bd2-Abstract-Conference.html">
          Choi et al. (NeurIPS 2025)
        </ExternalLink>{" "}
        disentangled multi-agent debate into two components — majority voting
        and inter-agent debate — and found that voting alone explains much of
        the gains often attributed to MAD. That does not mean debate is useless;
        it means you should know which part of your pipeline is doing the
        lifting. Adaptive stopping, calibrated confidence, and diversity-aware
        initialization (see{" "}
        <ExternalLink href="https://arxiv.org/abs/2601.19921">
          Choi et al. 2026
        </ExternalLink>
        ) can make the debate rounds themselves matter more.
      </p>
      <p>
        Conversely,{" "}
        <ExternalLink href="https://arxiv.org/abs/2509.05396">
          Wynn et al.
        </ExternalLink>{" "}
        warn that debate can degrade accuracy when agents favor agreement over
        challenging flawed reasoning. Naive MAD is not a free lunch — protocol
        design, agent incentives, and arbiter scoring all matter.
      </p>

      <h2>A practical decision rule</h2>
      <p>
        Start with self-consistency when the task is narrow, the answer is
        discrete, and you need results in one shot. Move to structured debate
        when the cost of a wrong conclusion exceeds the cost of extra tokens —
        policy decisions, public messaging, research claims, legal arguments,
        anything where you would schedule a meeting to stress-test an idea.
      </p>
      <p>
        The strongest production setups often combine both: diverse agents debate
        to surface objections, then an arbiter or vote consolidates a verdict.
        That is the architecture behind MAD Studio&apos;s truth-seeking protocol:
        agents argue across phases, an independent dimension-sweep arbiter scores
        the result, and you get a transcript worth auditing — not just a final
        string.
      </p>

      <div className="mt-10 rounded-xl border border-accent/20 bg-accent/5 p-6">
        <p className="mb-4 text-sm leading-relaxed text-zinc-300">
          MAD Studio implements peer-reviewed debate protocols — Open Discussion,
          Truth-Seeking Debate, and Team Discussion — with 2–100 agents, M-MAD
          arbiter scoring, and full transcript persistence. Join the beta waitlist
          to run structured deliberation without building the scaffolding
          yourself.
        </p>
        <Link
          href="/#waitlist"
          className="inline-flex items-center rounded-md border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-accent/20"
        >
          Join the beta waitlist →
        </Link>
      </div>
    </article>
  );
}
