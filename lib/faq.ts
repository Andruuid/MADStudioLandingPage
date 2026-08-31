export const faqs = [
  {
    question: "What is multi-agent debate?",
    answer:
      "Multi-agent debate is an AI reasoning technique where multiple language models, or multiple instances of the same model with different roles, discuss a question across structured rounds. Research suggests it can improve some reasoning and evaluation tasks, though results depend on the models, format, and problem.",
  },
  {
    question: "How is Delibora different from running prompts in ChatGPT or Claude?",
    answer:
      "A single prompt gives you one model's first-pass answer. Delibora gives you 10 purpose-built formats: Decision stress-test, Expert panel, Judged debate, 1:1 Human Dialogue, Team Battle, Shark Tank, Focus group, TribeMind, Idea Tournament, and Custom discussion. Each format preserves the run and produces an output suited to the job.",
  },
  {
    question: "Which AI models can I use with Delibora?",
    answer:
      "Delibora supports models available through OpenRouter and local models served by LM Studio. You can select models per Worker and configure automatic fallback order in Settings.",
  },
  {
    question: "Is multi-agent debate scientifically validated?",
    answer:
      "Delibora's debate workflows draw on published research from several institutions. The evidence is promising for some reasoning and evaluation tasks, but results remain model-, protocol-, and task-dependent. Key papers include:",
    links: [
      {
        label: "Du et al. — Multiagent Debate (ICML 2024)",
        href: "https://arxiv.org/abs/2305.14325",
      },
      {
        label: "Liang et al. — Multi-Agent Debate / DoT (EMNLP 2024)",
        href: "https://aclanthology.org/2024.emnlp-main.992/",
      },
      {
        label: "Hu et al. — LLM Judges with Adaptive Stability (NeurIPS 2025)",
        href: "https://neurips.cc/virtual/2025/loc/san-diego/poster/117644",
      },
      {
        label: "Feng et al. — M-MAD dimension-sweep arbiter (ACL 2025)",
        href: "https://arxiv.org/abs/2412.20127",
      },
      {
        label: "Wang et al. — Mixture-of-Agents (ICLR 2025)",
        href: "https://arxiv.org/abs/2406.04692",
      },
    ],
  },
  {
    question: "Where can I read more about multi-agent debate?",
    answer:
      "We publish free, in-depth guides on multi-agent debate methodology—no signup required. Start here:",
    links: [
      {
        label: "When to use multi-agent debate vs self-consistency",
        href: "/research/multi-agent-debate-vs-self-consistency",
      },
      {
        label: "How to red-team ideas with multi-agent debate",
        href: "/research/red-team-ideas-multi-agent-debate",
      },
      {
        label: "All research guides",
        href: "/research",
      },
    ],
  },
  {
    question: "What can I use Delibora for?",
    answer:
      "Use it to pressure-test decisions, gather specialist viewpoints, compare two arguments, observe a private AI-to-AI dialogue, stage Team Battles, evaluate pitches, run moderated Focus Groups, simulate audience response with TribeMind, select ideas in a tournament, or configure a discussion from scratch.",
  },
  {
    question: "How does the Focus group format work?",
    answer:
      "Choose 4–12 Workers with known personas, edit the discussion guide, and let a neutral moderator run the session. The resulting report is grounded in that simulated panel and includes themes and verified quotes rather than presenting the run as real population research.",
  },
  {
    question: "What do Shark Tank, TribeMind, and Idea Tournament produce?",
    answer:
      "Shark Tank returns a cited pitch scorecard and verdict. TribeMind runs 12–50 fictional participants through independent and social rounds, then produces descriptive metrics and a grounded Observer report. Idea Tournament compares 4–16 ideas head to head and produces a champion spec plus kill cards.",
  },
  {
    question: "What do Lab Experiments do?",
    answer:
      "Lab Experiments copy a draft discussion into hidden child runs, vary temperature and repetition, frequency, and presence penalties, then evaluate each transcript against your validation prompt and expected outcome. They can stop on a score threshold, iteration limit, or total cost cap.",
  },
  {
    question: "Is Delibora an alternative to AutoGen, CrewAI, or LangGraph?",
    answer:
      "Delibora focuses on purpose-built discussion formats, durable run monitoring, and format-specific reports rather than general-purpose agent orchestration. AutoGen, CrewAI, and LangGraph are broader frameworks for building custom agent applications and graphs.",
  },
  {
    question: "How much does a Delibora run cost?",
    answer:
      "Cost varies with the selected models, participant count, number of rounds, research calls, and report generation. Delibora records token and cost metadata and supports turn, runtime, and observed-cost limits. Lab Experiments also support their own total cost cap.",
  },
  {
    question: "Can I use Delibora without writing any code?",
    answer:
      "Yes. All 10 discussion formats, Workers, Teams, Personas, Playbooks, Lab Experiments, live monitors, and exports are available through the web interface.",
  },
  {
    question: "Is my data used to train AI models?",
    answer:
      "Delibora does not train models on your transcripts. Prompts are sent to the model route you configure, so provider data handling depends on your OpenRouter model choice or LM Studio setup. Delibora persists workspace records in its configured Supabase storage and provides archive, delete, and export controls.",
  },
  {
    question: "What is the Degeneration of Thought problem?",
    answer:
      "Degeneration of Thought, formalized by Liang et al. (EMNLP 2024), is a failure mode where an LLM commits to an answer and struggles to produce genuinely novel reasoning during self-reflection. Separating roles across agents may help surface different arguments, but it does not eliminate the underlying risk.",
  },
];

export type FAQ = (typeof faqs)[number] & {
  links?: { label: string; href: string }[];
};
