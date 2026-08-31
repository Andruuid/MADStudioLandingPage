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

export default function RedTeamIdeasWithDebate() {
  return (
    <article className="research-prose">
      <div className="research-tldr">
        <p className="research-tldr-label">TL;DR</p>
        <ul>
          <li>
            Red-teaming with LLMs means simulating your harshest critics{" "}
            <em>before</em> real critics get the chance — not checking for
            toxic outputs after the fact.
          </li>
          <li>
            Single-prompt &ldquo;play devil&apos;s advocate&rdquo; fails because
            one model playing both sides collapses into agreement (
            <ExternalLink href="https://aclanthology.org/2024.emnlp-main.992/">
              Degeneration-of-Thought
            </ExternalLink>
            ).
          </li>
          <li>
            Multi-agent debate works when agents have{" "}
            <strong>different roles, evidence, and incentives</strong> — then an
            independent arbiter scores the result.
          </li>
          <li>
            Run bounded rounds with hard cost caps; the transcript is the
            deliverable, not just the final verdict.
          </li>
        </ul>
      </div>

      <p className="text-lg leading-relaxed text-zinc-300">
        Every organization has a version of this story: a confident strategy doc,
        a campaign message, a research claim, or a product bet that looked bulletproof
        in internal review — until someone outside the room asked the one question
        nobody thought to ask. Red-teaming exists to manufacture that question
        on demand.
      </p>
      <p>
        With LLMs, the temptation is to paste your draft into ChatGPT and ask
        &ldquo;what&apos;s wrong with this?&rdquo; That helps, but it is not
        adversarial deliberation. It is one model negotiating with itself. This
        guide covers how to red-team ideas properly using multi-agent debate —
        what to configure, what the research says, and where it fails.
      </p>

      <h2>Two kinds of &ldquo;red teaming&rdquo;</h2>
      <p>
        The term gets used loosely. In AI safety, red-teaming usually means
        probing a model for harmful outputs, jailbreaks, or policy violations — work
        that{" "}
        <ExternalLink href="https://arxiv.org/abs/2402.06782">
          Khan et al.
        </ExternalLink>{" "}
        and others frame as debate between persuasive agents. In strategy,
        journalism, law, and politics, red-teaming means something different:
        <strong className="text-white"> stress-testing an idea against hostile
        scrutiny</strong> before you commit to it.
      </p>
      <p>
        This guide focuses on the second kind — adversarial idea testing — though
        the same architecture applies to both. The goal is not a thumbs-up/thumbs-down.
        The goal is a structured record of objections, weak evidence, missing
        citations, and failure modes you can act on.
      </p>

      <h2>Why single-prompt devil&apos;s advocate fails</h2>
      <p>
        Ask one LLM to critique its own proposal and you hit three walls:
      </p>
      <ol>
        <li>
          <strong className="text-white">Degeneration-of-Thought.</strong>{" "}
          <ExternalLink href="https://aclanthology.org/2024.emnlp-main.992/">
            Liang et al. (EMNLP 2024)
          </ExternalLink>{" "}
          showed that once a model commits to an answer, self-reflection rarely
          produces genuinely novel reasoning — even when the initial answer is
          wrong. The critic and the advocate share the same latent commitment.
        </li>
        <li>
          <strong className="text-white">Agreement bias.</strong>{" "}
          <ExternalLink href="https://arxiv.org/abs/2509.05396">
            Wynn et al.
          </ExternalLink>{" "}
          found agents shift from correct to incorrect answers to match peers,
          favoring social agreement over challenging flawed reasoning. A single
          model playing both roles drifts toward the path of least resistance.
        </li>
        <li>
          <strong className="text-white">No auditable adversary.</strong>{" "}
          You get a bullet list of concerns with no record of which objections
          survived scrutiny, which were rebutted, and which the arbiter weighted
          most heavily. That is brainstorming, not deliberation.
        </li>
      </ol>
      <p>
        Multi-agent debate fixes this by separating agents into distinct roles
        with separate context — each agent defends or attacks from a defined
        perspective, across multiple rounds, before a verdict.
      </p>

      <h2>The red-team debate architecture</h2>
      <p>
        A structured red-team run has five components. Leaving one out can turn
        the exercise into expensive theater.
      </p>

      <div className="research-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Role</th>
              <th>Common mistake</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Subject matter</td>
              <td>The claim, draft, or decision under test — shared evidence pack</td>
              <td>Vague prompts with no shared document for agents to cite</td>
            </tr>
            <tr>
              <td>Advocate team</td>
              <td>Agents defending the proposal with assigned personas</td>
              <td>All agents given identical system prompts</td>
            </tr>
            <tr>
              <td>Adversary team</td>
              <td>Agents assigned to attack — skeptic, competitor, regulator, journalist</td>
              <td>Adversaries that are too polite or too generic</td>
            </tr>
            <tr>
              <td>Debate protocol</td>
              <td>Bounded rounds with structured turn order and rebuttal rules</td>
              <td>Open-ended chat with no turn limits or cost caps</td>
            </tr>
            <tr>
              <td>Independent arbiter</td>
              <td>Separate scoring pass on fixed dimensions — not a debater</td>
              <td>Letting the strongest debater declare victory</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        <ExternalLink href="https://arxiv.org/abs/2412.20127">
          Feng et al. (M-MAD, ACL 2025)
        </ExternalLink>{" "}
        formalized the arbiter side: instead of one holistic &ldquo;who
        won?&rdquo; judgment, run independent passes on correctness, evidence
        use, responsiveness to counterarguments, calibration, and citation
        quality. A claim can lose on evidence while winning on rhetoric — and
        you want to know that before publication, not after.
      </p>

      <h2>Five red-team scenarios that work</h2>

      <h3>1. Political and campaign messaging</h3>
      <p>
        Configure opposition agents seeded with personas across the political
        spectrum — not caricatures, but plausible voters and commentators with
        specific priors. Run Team Discussion in battle mode: one team defends the
        message, one team attacks it with the strongest available rebuttals.
        The deliverable is a list of claims that survived cross-examination and
        a list that did not.
      </p>
      <p>
        What you are looking for: lines that sound persuasive in isolation but
        collapse when an agent with different values engages. That is the
        question a hostile interviewer or opponent will ask on camera.
      </p>

      <h3>2. Product and strategy decisions</h3>
      <p>
        Assign agents to competitor personas, customer archetypes, and internal
        risk lenses (legal, security, finance). Open Discussion for exploratory
        objection surfacing, then Truth-Seeking Debate to pressure-test the
        top three risks.{" "}
        <ExternalLink href="https://arxiv.org/abs/2305.14325">
          Du et al.
        </ExternalLink>{" "}
        found debate particularly strong on factuality — agents drop uncertain
        claims when peers challenge them, which is exactly what you want in a
        roadmap review.
      </p>

      <h3>3. Research claims and pre-print review</h3>
      <p>
        Simulate peer review before submission. Configure agents with
        field-specific skepticism: methodology critic, replication skeptic,
        statistics reviewer, domain expert with opposing priors. The arbiter
        scores each major claim on evidence and citation quality. Gaps become
        explicit: &ldquo;Claim 2 rated low on citation quality — no primary
        source cited for the effect size.&rdquo;
      </p>

      <h3>4. Legal and due diligence</h3>
      <p>
        Map prosecutor/defense argument trees over a shared evidence pack.
        <ExternalLink href="https://arxiv.org/abs/2507.23348">
          SWE-Debate
        </ExternalLink>{" "}
        showed competitive multi-agent debate helps when the problem spans
        multiple parts of a codebase — the same logic applies to multi-document
        legal arguments where fault propagation matters. Each agent traces a
        different line of reasoning; debate consolidates the fix plan (or in
        legal terms, the claims ledger).
      </p>

      <h3>5. Investigative journalism pre-flight</h3>
      <p>
        Before publication, simulate the most aggressive defense your subject
        could mount. Configure a subject advocate with the best available
        counter-narrative, a legal counsel agent focused on defamation risk, and
        a skeptical editor agent. If the story survives that panel, you have
        done more diligence than most newsrooms can afford on deadline.
      </p>

      <h2>How to configure agents that actually disagree</h2>
      <p>
        <ExternalLink href="https://proceedings.iclr.cc/paper_files/paper/2024/hash/25cc3adf8c85f7c70989cb8a97a691a7-Abstract-Conference.html">
          ChatEval (ICLR 2024)
        </ExternalLink>{" "}
        found that diverse role prompts are essential — identical personas
        degrade multi-agent performance. For red-teaming specifically:
      </p>
      <ul>
        <li>
          <strong className="text-white">Give adversaries real incentives in
          the prompt.</strong> &ldquo;Find the weakest claim&rdquo; beats
          &ldquo;offer constructive feedback.&rdquo;
        </li>
        <li>
          <strong className="text-white">Mix models if you can.</strong>{" "}
          Heterogeneous agents surface blind spots homogeneous pools miss — though{" "}
          <ExternalLink href="https://aclanthology.org/2024.emnlp-main.992/">
            Liang et al.
          </ExternalLink>{" "}
          note LLMs may not be fair judges when debaters use different models.
          Keep the arbiter separate and consistent.
        </li>
        <li>
          <strong className="text-white">Share the evidence, not the
          conclusion.</strong> All agents read the same source document; none
          start with a pre-written verdict.
        </li>
        <li>
          <strong className="text-white">Cap rounds and cost.</strong>{" "}
          <ExternalLink href="https://arxiv.org/abs/2409.14051">
            GroupDebate
          </ExternalLink>{" "}
          shows token cost scales brutally with agents × rounds. Red-teaming
          should have hard ceilings — stop when the arbiter stabilizes or you
          hit your budget.
        </li>
      </ul>

      <div className="research-callout">
        <p className="research-callout-title">Warning: debate can make things worse</p>
        <p>
          If adversaries are too weak, too polite, or outnumbered by advocates,
          debate becomes rubber-stamping. If agents are homogeneous,{" "}
          <ExternalLink href="https://arxiv.org/abs/2509.05396">
            Wynn et al.
          </ExternalLink>{" "}
          show accuracy can <em>decrease</em> as agents conform. Calibrate
          adversary strength and use adaptive stopping (
          <ExternalLink href="https://neurips.cc/virtual/2025/loc/san-diego/poster/117644">
            Hu et al., NeurIPS 2025
          </ExternalLink>
          ) so you do not keep debating after consensus is stable.
        </p>
      </div>

      <h2>What a good red-team output looks like</h2>
      <p>
        Do not optimize for a binary pass/fail. A useful red-team run produces:
      </p>
      <ul>
        <li>
          <strong className="text-white">A claims ledger</strong> — every
          material assertion extracted and tracked across rounds
        </li>
        <li>
          <strong className="text-white">Objection log</strong> — which
          counterarguments were raised, which were rebutted, which stand
        </li>
        <li>
          <strong className="text-white">Dimension scores</strong> — M-MAD-style
          breakdown, not a single gut-check score
        </li>
        <li>
          <strong className="text-white">Citation gaps</strong> — claims marked
          unsupported or weakly sourced
        </li>
        <li>
          <strong className="text-white">Full transcript</strong> — auditable
          record for compliance, editorial, or legal review
        </li>
      </ul>
      <p>
        The transcript is often more valuable than the verdict. It shows{" "}
        <em>why</em> a claim failed — the reasoning chain a human reviewer can
        follow and challenge.
      </p>

      <h2>Red-team debate vs other LLM checks</h2>

      <div className="research-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Best for</th>
              <th>Weakness</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Single-prompt critique</td>
              <td>Quick sanity check, typos, obvious gaps</td>
              <td>DoT, agreement bias, no audit trail</td>
            </tr>
            <tr>
              <td>Self-consistency voting</td>
              <td>Discrete answers (math, classification)</td>
              <td>No adversarial scrutiny; shared blind spots</td>
            </tr>
            <tr>
              <td>RAG fact-check</td>
              <td>Verifying claims against a corpus</td>
              <td>Corpus-limited; no argument structure</td>
            </tr>
            <tr>
              <td>Multi-agent red-team debate</td>
              <td>Strategy, messaging, research, legal arguments</td>
              <td>Higher cost; needs protocol tuning</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        For a deeper comparison of debate vs self-consistency on reasoning tasks,
        see our guide on{" "}
        <Link
          href="/research/multi-agent-debate-vs-self-consistency"
          className="text-accent-glow underline decoration-accent/40 underline-offset-2 transition hover:decoration-accent"
        >
          when to use multi-agent debate vs self-consistency
        </Link>
        .
      </p>

      <h2>Running red-team debate in Delibora</h2>
      <p>
        Delibora supports this workflow. Configure adversary and
        advocate Workers with distinct personas and playbooks, snapshotted into
        a Team Battle or Judged Debate run. Set cost
        and turn caps before you start. Inject human guidance mid-run if an
        agent misses an obvious line of attack. When the run finishes, review
        the format-specific verdict or scorecard and export the full transcript.
      </p>
      <p>
        Lab Experiments can compare sampling configurations by sweeping
        temperature and repetition, frequency, and presence penalties in hidden
        child runs, then evaluating each transcript against a validation prompt.
      </p>

      <div className="mt-10 rounded-xl border border-accent/20 bg-accent/5 p-6">
        <p className="mb-1 text-sm font-medium text-white">
          Stress-test your next idea before it ships
        </p>
        <p className="mb-4 text-sm leading-relaxed text-zinc-300">
          Delibora combines structured adversarial formats, reusable Workers
          and Teams, Evidence Packs, human intervention, format-specific
          verdicts, and persisted transcripts. Join the beta waitlist to
          red-team without building the orchestration yourself.
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
