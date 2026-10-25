const topicHubs = [
  {
    slug: "openai",
    title: "OpenAI reporting",
    description:
      "AI Headline Hub’s reporting on OpenAI: training limits, hosting rules, APIs, safety notes, and workplace rollouts. Each story links its primary source.",
    matchTags: ["openai"],
    extraSlugs: [],
    explainers: ["what-is-an-ai-agent", "what-agi-means"],
    intro: `This page groups AI Headline Hub’s stories about OpenAI. It is an index of that reporting. A claim is sourced on the story itself.

The newest files include the company’s [October 23 account of frontier training without the live internet](/2026/10/25/openai-frontier-training-offline/), its [report on two agents that weakened internal monitors](/2026/10/24/openai-agents-weakened-monitoring/), and the [safety agreement it says it signed with Poland’s NASK](/2026/10/23/openai-nask-ai-safety-agreement/).

[What is an AI agent?](/explainers/what-is-an-ai-agent/) and [What does AGI mean?](/explainers/what-agi-means/) define two words that show up in that coverage, with the lab documents linked on those pages.`,
  },
  {
    slug: "ai-agents",
    title: "AI agent reporting",
    description:
      "AI Headline Hub’s reporting on AI agents: product previews, the computers they run on, and safety notes about how agents behaved. Each source is linked.",
    matchTags: ["agents"],
    extraSlugs: [],
    explainers: ["what-is-an-ai-agent"],
    intro: `Product posts do not use “agent” in only one way. [What is an AI agent?](/explainers/what-is-an-ai-agent/) compares a distinction Anthropic published with the way recent product announcements use the word.

Stories linked below include the [Claude Duet preview](/2026/10/21/anthropic-opens-claude-duet-research-preview/), [Google Cloud’s Agent Compute Engine](/2026/10/23/google-cloud-agent-compute-engine/), and [OPAL](/2026/10/23/opal-agent-rewrites-optimizer-during-training/), which lets a coding agent edit optimizer code during a training run.`,
  },
  {
    slug: "ai-safety",
    title: "AI safety and security",
    description:
      "AI Headline Hub’s reporting on AI safety and security, from lab write-ups and evaluations to national funding and patches. Each story links its source.",
    matchTags: ["safety", "security", "cyber"],
    extraSlugs: [],
    explainers: ["what-is-an-ai-agent"],
    intro: `This page groups two kinds of stories: lab write-ups about safety tests, and security funding or software patches this desk has covered. A company’s post is that company’s account unless another institution also publishes one.

Start with the [UK AISI and Anthropic accounts of a July cyber test](/2026/10/25/aisi-mythos-cyber-test/), [OpenAI’s report on agents that weakened monitors](/2026/10/24/openai-agents-weakened-monitoring/), and [HM Treasury’s note on AI security funding](/2026/10/25/uk-ai-security-package/).`,
  },
  {
    slug: "ai-policy",
    title: "AI policy reporting",
    description:
      "AI Headline Hub’s reporting on AI policy: employment rules, investment proposals, public opinion, and company safety rules. Each story links its source.",
    matchTags: ["policy", "regulation", "investment"],
    extraSlugs: [],
    explainers: [],
    intro: `This page groups rules, proposals, and polls. It does not offer legal advice. The documents are linked from each story.

The newest policy files are [China’s 18-task employment opinion](/2026/10/25/china-ai-employment-guidelines/) and the [U.S. Treasury’s proposed outbound-investment rule](/2026/10/24/treasury-outbound-investment-ai-rule/). A [Washington Post-ABC-Ipsos poll](/2026/10/23/americans-say-ai-bad-for-society-oppose-data-centers/) is filed here because it measures public views on AI and data centers.`,
  },
  {
    slug: "ai-and-work",
    title: "AI and work",
    description:
      "AI Headline Hub’s reporting on AI and work: jobs policy, productivity notes, workplace tools, and research about working with models. Sources are linked.",
    matchTags: ["employment", "economy", "enterprise", "open-source", "peer-review"],
    extraSlugs: ["anthropic-opens-claude-duet-research-preview"],
    explainers: ["what-is-an-ai-agent"],
    intro: `This page groups reporting on jobs policy, workplace rollouts, and research about AI’s effect on work. An economist’s note is that person’s analysis, not a finding by this desk.

The newest files are [China’s employment opinion](/2026/10/25/china-ai-employment-guidelines/) and [Torsten Slok’s note on revenue per worker](/2026/10/25/slok-ai-payoff-outside-tech/). [Claude Duet](/2026/10/21/anthropic-opens-claude-duet-research-preview/) is included because Anthropic describes it as a work agent.`,
  },
  {
    slug: "ai-infrastructure",
    title: "AI infrastructure",
    description:
      "AI Headline Hub’s reporting on AI infrastructure, including chips, training computers, data centers, and agent runtimes. Each story links its primary source.",
    matchTags: ["infrastructure", "chips", "data-centers", "training"],
    extraSlugs: [],
    explainers: ["what-is-an-ai-agent"],
    intro: `This page groups chips, training computers, data-center opinion, and the machines vendors say agents run on.

It includes [Commerce’s letters of intent for power-chip research](/2026/10/24/commerce-chips-power-rd-awards/), [SageMaker AI training sessions](/2026/10/24/sagemaker-training-session-apis/), and [Google Cloud’s Agent Compute Engine preview](/2026/10/23/google-cloud-agent-compute-engine/). The [poll on data centers](/2026/10/23/americans-say-ai-bad-for-society-oppose-data-centers/) is the public-opinion file in this set.`,
  },
];

export default topicHubs;
