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
      <div className="research-tldr">
        <p className="research-tldr-label">TL;DR</p>
        <ul>
          <li>
            <strong>Self-consistency</strong> (sample + majority vote) is the
            default for discrete-answer reasoning — fast, parallel, proven on
            GSM8K and friends.
          </li>
          <li>
            <strong>Multi-agent debate</strong> wins when you need adversarial
            scrutiny, role diversity, or auditable transcripts — especially on
            factuality, not just math.
          </li>
          <li>
            Much of MAD&apos;s benchmark lift may come from{" "}
            <em>ensembling</em>, not conversation itself (
            <ExternalLink href="https://arxiv.org/abs/2508.17536">
              Choi et al., NeurIPS 2025
            </ExternalLink>
            ). Design your pipeline accordingly.
          </li>
          <li>
            The best production systems combine both: diverse agents debate,
            then vote or arbitrate.
          </li>
        </ul>
      </div>

      <p className="text-lg leading-relaxed text-zinc-300">
        Every team building with LLMs eventually hits the same wall: a single
        chain-of-thought looks confident, reads well, and is sometimes completely
        wrong. Two fixes dominate the research literature — run the same model
        many times and vote, or put multiple agents in structured disagreement.
        Both appear in top conference papers. Both show up in production
        stacks. They are not interchangeable.
      </p>
      <p>
        This guide is a practical decision framework grounded in peer-reviewed
        results — not hype. We cover what each method actually does, where the
        numbers come from, when each one fails, and how to combine them without
        burning your token budget.
      </p>

      <h2>The two paradigms at a glance</h2>

      <div className="research-table-wrap">
        <table>
          <thead>
            <tr>
              <th />
              <th>Self-consistency (CoT-SC)</th>
              <th>Multi-agent debate (MAD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Core mechanism</td>
              <td>Sample <em>m</em> independent reasoning paths; majority-vote the final answer</td>
              <td>Agents see each other&apos;s outputs across rounds; critique and revise</td>
            </tr>
            <tr>
              <td>Best-known paper</td>
              <td>
                <ExternalLink href="https://arxiv.org/abs/2203.11171">
                  Wang et al., ICLR 2023
                </ExternalLink>
              </td>
              <td>
                <ExternalLink href="https://arxiv.org/abs/2305.14325">
                  Du et al., ICML 2024
                </ExternalLink>
              </td>
            </tr>
            <tr>
              <td>Parallelism</td>
              <td>Embarrassingly parallel — all samples at once</td>
              <td>Sequential rounds; token cost grows fast with agents × rounds</td>
            </tr>
            <tr>
              <td>Primary output</td>
              <td>A single answer (reasoning paths often discarded)</td>
              <td>Answer + full argument transcript</td>
            </tr>
            <tr>
              <td>Sweet spot</td>
              <td>Math, logic, multiple-choice with one correct label</td>
              <td>Factuality, open-ended strategy, adversarial red-teaming</td>
            </tr>
            <tr>
              <td>Main risk</td>
              <td>Shared systematic bias — wrong paths vote together</td>
              <td>Sycophancy, agreement bias, runaway token cost</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Self-consistency: statistical robustness over a single path</h2>
      <p>
        Chain-of-thought prompting (
        <ExternalLink href="https://arxiv.org/abs/2201.11903">
          Wei et al.
        </ExternalLink>
        ) showed that asking a model to &ldquo;think step by step&rdquo; unlocks
        reasoning that greedy decoding misses. Self-consistency goes further: instead
        of trusting one sampled path, you draw many and take the plurality answer.
      </p>
      <p>
        The intuition from{" "}
        <ExternalLink href="https://arxiv.org/abs/2203.11171">
          Wang et al.
        </ExternalLink>{" "}
        is elegant — complex problems often admit multiple valid reasoning routes
        to the same correct answer. Wrong routes tend to scatter. Majority vote
        over final answers acts as a noise filter without requiring agents to
        talk to each other.
      </p>

      <div className="research-callout">
        <p className="research-callout-title">Reported gains (Wang et al.)</p>
        <p>
          On arithmetic and commonsense benchmarks with CoT prompting,
          self-consistency improved accuracy by{" "}
          <strong>GSM8K +17.9%</strong>, <strong>SVAMP +11.0%</strong>,{" "}
          <strong>AQuA +12.2%</strong>, <strong>StrategyQA +6.4%</strong>, and{" "}
          <strong>ARC-challenge +3.9%</strong> — absolute percentage points over
          greedy single-path decoding.
        </p>
      </div>

      <p>
        Why it works: sampling at non-zero temperature explores the model&apos;s
        reasoning distribution. When the model is <em>capable but brittle</em> —
        right on most paths, wrong on a few — voting reliably helps. Why it
        fails: when the model is <em>consistently wrong</em> for structural
        reasons (missing knowledge, bad framing, systematic misconception),
        every sample shares the same blind spot. Ten copies of the same mistake
        still win the vote.
      </p>
      <p>
        Self-consistency is also the efficiency champion. All <em>m</em> paths
        can run concurrently. No cross-agent context accumulation. No summary
        rounds. For a latency-sensitive API or a batch job with a fixed budget,
        this matters more than any benchmark leaderboard.
      </p>

      <h2>Multi-agent debate: structured disagreement as a feature</h2>
      <p>
        Multi-agent debate inverts the self-consistency assumption. Instead of
        independent samples that never interact, agents read each other&apos;s
        arguments and must respond. The{" "}
        <ExternalLink href="https://arxiv.org/abs/2305.14325">
          Du et al.
        </ExternalLink>{" "}
        &ldquo;society of minds&rdquo; approach — multiple LLM instances propose,
        debate over rounds, and converge on a shared answer — targets exactly the
        cases where reflection and single-agent verification fall short.
      </p>

      <div className="research-callout">
        <p className="research-callout-title">Reported gains (Du et al., 3 agents, 2 rounds)</p>
        <p>
          On reasoning tasks with GPT-3.5/4-class models: arithmetic accuracy{" "}
          <strong>67.0% → 81.8%</strong>, grade-school math{" "}
          <strong>77.0% → 85.0%</strong>, chess state evaluation{" "}
          <strong>91.4 → 122.9</strong> (Δ PS). Critically, on{" "}
          <strong>factuality</strong> tasks, reflection-style baselines performed
          <em> poorly</em> while debate significantly outperformed — agents drop
          uncertain false claims when peers disagree.
        </p>
      </div>

      <p>
        Three mechanisms make debate qualitatively different from voting alone:
      </p>
      <ol>
        <li>
          <strong className="text-white">Error correction via social proof.</strong>{" "}
          Du et al. document cases where <em>all</em> agents start wrong but
          converge on the correct answer after debate — something self-consistency
          cannot do if every independent path shares the initial error.
        </li>
        <li>
          <strong className="text-white">Hallucination pruning.</strong>{" "}
          Uncertain fabricated facts get dropped when agents challenge each other.
          The biography-generation and MMLU examples in the paper show debate
          settling on bullet points that are more consistent and more factual.
        </li>
        <li>
          <strong className="text-white">Divergent thinking.</strong>{" "}
          <ExternalLink href="https://aclanthology.org/2024.emnlp-main.992/">
            Liang et al. (EMNLP 2024)
          </ExternalLink>{" "}
          formalized the Degeneration-of-Thought (DoT) problem: once a model
          commits to an answer, self-reflection rarely produces genuinely novel
          reasoning. External agents in &ldquo;tit-for-tat&rdquo; disagreement
          break that attractor — essential for translation, counter-intuitive
          arithmetic, and any task where the first instinct is misleading.
        </li>
      </ol>
      <p>
        Debate also has diminishing returns. Du et al. found performance on
        arithmetic improves monotonically up to ~4 rounds, then plateaus. More
        rounds ≠ more truth — just more tokens.
      </p>

      <h2>The cost elephant in the room</h2>
      <p>
        Multi-agent debate can get expensive fast.{" "}
        <ExternalLink href="https://arxiv.org/abs/2409.14051">
          Liu et al. (GroupDebate, AAMAS 2026)
        </ExternalLink>{" "}
        quantify the scaling problem: on Arithmetic, 3 agents × 5 rounds can push
        accuracy from ~50% to ~98% — but at roughly <strong>101× the token
        cost</strong> of a single agent. On GSM8K, 4 agents × 5 rounds moves
        accuracy from 76% to 88% at ~<strong>90× token cost</strong>.
      </p>
      <p>
        Their GroupDebate method (group-local debate + cross-group summary
        sharing) cuts tokens by up to <strong>46.9%</strong> while sometimes
        <em> improving</em> accuracy — a reminder that protocol design matters as
        much as raw agent count.{" "}
        <ExternalLink href="https://aclanthology.org/2024.findings-emnlp.427/">
          Li et al. (EMNLP 2024 Findings)
        </ExternalLink>{" "}
        showed sparse communication topologies can match full-mesh debate at
        lower cost. Adaptive stopping — as in{" "}
        <ExternalLink href="https://neurips.cc/virtual/2025/loc/san-diego/poster/117644">
          Hu et al. (NeurIPS 2025)
        </ExternalLink>{" "}
        — helps too.
      </p>
      <p>
        Self-consistency has linear cost in sample count <em>m</em>. Debate has
        superlinear cost in agents × rounds × context growth. If your constraint
        is dollars or seconds, that asymmetry often decides the method before
        accuracy does.
      </p>

      <h2>The uncomfortable research: is debate just hidden voting?</h2>
      <p>
        The most important recent result for practitioners is{" "}
        <ExternalLink href="https://proceedings.neurips.cc/paper_files/paper/2025/hash/934252acd87f254d5d4672fbde283bd2-Abstract-Conference.html">
          Choi et al. (&ldquo;Debate or Vote,&rdquo; NeurIPS 2025 Spotlight)
        </ExternalLink>
        . They disentangled MAD into two components — majority voting and
        inter-agent debate — and tested both across seven NLP benchmarks.
      </p>
      <p>
        The headline: <strong>majority voting alone accounts for most of the
        performance gains typically attributed to multi-agent debate.</strong> In
        many settings, vote-only matches or beats full debate. Theoretically,
        they model debate as a stochastic process that induces a{" "}
        <strong>martingale</strong> over agent beliefs — meaning debate rounds, in
        expectation, do not improve correctness unless you add targeted
        interventions that bias updates toward correction.
      </p>
      <p>
        This does not kill debate. It clarifies what debate is <em>for</em>:
      </p>
      <ul>
        <li>
          If you only need a final label on a benchmark with a known answer key,
          start with self-consistency or majority vote over diverse prompts.
        </li>
        <li>
          If you need agents to <em>change their minds for good reasons</em>,
          design protocols that break the martingale — diversity-aware
          initialization (
          <ExternalLink href="https://arxiv.org/abs/2601.19921">
            Choi et al. 2026
          </ExternalLink>
          ), calibrated confidence signals, adversarial roles, memory masking (
          <ExternalLink href="https://openreview.net/forum?id=EdTt8nMAMA">
            Tian et al., ICLR 2026
          </ExternalLink>
          ), or sparse topologies that prevent premature consensus.
        </li>
      </ul>
      <p>
        <ExternalLink href="https://arxiv.org/abs/2311.17371">
          Smit et al. (&ldquo;Should we be going MAD?&rdquo;)
        </ExternalLink>{" "}
        reached a complementary conclusion from an engineering angle: out-of-the-box
        MAD often <em>underperforms</em> well-tuned single-agent baselines like
        self-consistency — but tuned debate protocols (e.g. Multi-Persona) can
        surpass them. MAD is hyperparameter-sensitive: agent count, round count,
        agreement level, and prompt format all matter. Treat it like training a
        model, not flipping a switch.
      </p>

      <h2>When debate makes things worse</h2>
      <p>
        Naive debate is not safe.{" "}
        <ExternalLink href="https://arxiv.org/abs/2509.05396">
          Wynn et al. (&ldquo;Talk Isn&apos;t Always Cheap,&rdquo; ICML MAS 2025)
        </ExternalLink>{" "}
        show debate can <em>reduce</em> accuracy over time — even when stronger
        models outnumber weaker ones. Agents shift from correct to incorrect
        answers in response to peer reasoning, favoring agreement over
        challenging flawed arguments. Sycophancy and social conformity are real
        failure modes, especially in homogeneous agent pools.
      </p>
      <p>
        Mitigations that research and production both point toward:
      </p>
      <ul>
        <li>
          <strong className="text-white">Heterogeneous agents</strong> — different
          models, personas, or evidence packs (
          <ExternalLink href="https://proceedings.iclr.cc/paper_files/paper/2024/hash/25cc3adf8c85f7c70989cb8a97a691a7-Abstract-Conference.html">
            ChatEval
          </ExternalLink>{" "}
          found diverse role prompts essential; identical personas degrade
          performance).
        </li>
        <li>
          <strong className="text-white">Independent arbiters</strong> — don&apos;t
          let debaters judge themselves; use a separate scoring pass (
          <ExternalLink href="https://arxiv.org/abs/2412.20127">
            M-MAD
          </ExternalLink>{" "}
          dimension-sweep arbiters are one example).
        </li>
        <li>
          <strong className="text-white">Adaptive stopping</strong> — quit when
          consensus stabilizes, not after a fixed round count.
        </li>
        <li>
          <strong className="text-white">Structured incentives</strong> — truth-seeking
          protocols that reward evidence and penalize uncited claims, not just
          rhetorical agreement.
        </li>
      </ul>

      <h2>Decision guide: which should you use?</h2>

      <div className="research-callout research-callout-accent">
        <p className="research-callout-title">Choose self-consistency when…</p>
        <ul>
          <li>The task has a <strong>discrete, verifiable answer</strong> (number, class label, code output)</li>
          <li>You need <strong>minimum latency</strong> and can parallelize</li>
          <li>All agents would share the same model, prompt, and context anyway</li>
          <li>The model is already near correct — you&apos;re filtering sampling noise</li>
          <li>You don&apos;t need an auditable argument trail</li>
        </ul>
      </div>

      <div className="research-callout research-callout-accent">
        <p className="research-callout-title">Choose multi-agent debate when…</p>
        <ul>
          <li>The cost of being wrong exceeds the cost of extra tokens</li>
          <li>You need <strong>adversarial scrutiny</strong> — legal, political, security, due diligence</li>
          <li><strong>Role diversity</strong> is the point (prosecutor/defense, skeptic/builder, competitor/customer)</li>
          <li>The deliverable is <strong>structured reasoning</strong>, not just a label</li>
          <li>Factuality matters more than benchmark math — debate beats reflection here</li>
          <li>You would schedule a meeting to stress-test the idea if humans were available</li>
        </ul>
      </div>

      <p>
        <ExternalLink href="https://arxiv.org/abs/2402.06782">
          Khan et al. (ICML 2024 Best Paper)
        </ExternalLink>{" "}
        identified a setting where debate is not optional: when a weaker model
        must judge between answers proposed by stronger debaters, debate
        structures the evidence in ways that help non-expert judges identify
        truth — a dynamic self-consistency cannot replicate.
      </p>

      <h2>The hybrid playbook (what actually ships)</h2>
      <p>
        The literature converges on a practical pattern neither camp advertises
        in its abstract:
      </p>
      <ol>
        <li>
          <strong className="text-white">Initialize with diversity.</strong>{" "}
          Different personas, models, or temperature settings. Don&apos;t run five
          identical copies.
        </li>
        <li>
          <strong className="text-white">Debate for a bounded number of rounds</strong>{" "}
          with a protocol that forces engagement with counterarguments — not
          open-ended chat.
        </li>
        <li>
          <strong className="text-white">Stop early</strong> when answers stabilize
          or an arbiter confidence threshold is met.
        </li>
        <li>
          <strong className="text-white">Consolidate via vote or arbiter.</strong>{" "}
          Extract the final answer through majority vote, dimension-sweep scoring,
          or a dedicated judge model — explicitly separating deliberation from
          decision.
        </li>
        <li>
          <strong className="text-white">Persist the transcript.</strong>{" "}
          The debate trace is often more valuable than the final string — for
          audit, compliance, and human review.
        </li>
      </ol>
      <p>
        This is exactly the architecture serious debate platforms implement:
        structured phases, heterogeneous agents, independent scoring, hard caps
        on cost and rounds, and full transcript persistence. The debate rounds
        surface objections; the vote or arbiter prevents endless rhetorical
        drift.
      </p>

      <h2>Where MAD Studio fits</h2>
      <p>
        MAD Studio is built for the hybrid playbook — not naive round-robin chat.
        Three protocols cover different deliberation modes: Open Discussion for
        exploratory brainstorming, Truth-Seeking Debate with a 10-phase M-MAD
        verdict for adversarial fact-finding, and Team Discussion for
        two-team battle or collaboration. You configure 2–100 agents with
        distinct personas, set cost and turn caps, and get dimension-level
        arbiter scores plus a transcript you can actually audit.
      </p>
      <p>
        Saga recursive optimization and Lab Experiments handle the Smit et al.
        lesson — MAD is hyperparameter-sensitive — by letting you sweep
        temperature, repetition penalties, and prompt variants in hidden child
        runs without manual guesswork.
      </p>

      <h2>Further reading</h2>
      <ul>
        <li>
          <ExternalLink href="https://arxiv.org/abs/2203.11171">
            Self-Consistency Improves Chain of Thought Reasoning
          </ExternalLink>{" "}
          — Wang et al., ICLR 2023
        </li>
        <li>
          <ExternalLink href="https://arxiv.org/abs/2305.14325">
            Improving Factuality and Reasoning through Multiagent Debate
          </ExternalLink>{" "}
          — Du et al., ICML 2024
        </li>
        <li>
          <ExternalLink href="https://aclanthology.org/2024.emnlp-main.992/">
            Encouraging Divergent Thinking through Multi-Agent Debate
          </ExternalLink>{" "}
          — Liang et al., EMNLP 2024
        </li>
        <li>
          <ExternalLink href="https://arxiv.org/abs/2508.17536">
            Debate or Vote
          </ExternalLink>{" "}
          — Choi et al., NeurIPS 2025
        </li>
        <li>
          <ExternalLink href="https://arxiv.org/abs/2311.17371">
            Should we be going MAD?
          </ExternalLink>{" "}
          — Smit et al., 2024
        </li>
        <li>
          <ExternalLink href="https://arxiv.org/abs/2509.05396">
            Talk Isn&apos;t Always Cheap
          </ExternalLink>{" "}
          — Wynn et al., ICML MAS 2025
        </li>
        <li>
          <ExternalLink href="https://arxiv.org/abs/2409.14051">
            GroupDebate
          </ExternalLink>{" "}
          — Liu et al., AAMAS 2026
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-accent/20 bg-accent/5 p-6">
        <p className="mb-1 text-sm font-medium text-white">
          Ready to run structured debate?
        </p>
        <p className="mb-4 text-sm leading-relaxed text-zinc-300">
          MAD Studio implements peer-reviewed protocols with M-MAD arbiter
          scoring, 2–100 agents, and full transcript persistence. Join the beta
          waitlist — no scaffolding required.
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
