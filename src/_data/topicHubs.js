const topicHubs = [
  {
    slug: "openai",
    title: "OpenAI reporting",
    description:
      "AI Headline Hub’s reporting on OpenAI: training limits, hosting rules, APIs, safety notes, and workplace rollouts. Each story links its primary source.",
    matchTags: ["openai"],
    extraSlugs: [],
    explainers: ["what-is-a-large-language-model", "what-is-an-ai-agent", "what-agi-means"],
    intro: `This page groups AI Headline Hub’s stories about OpenAI. It is an index of that reporting. A claim is sourced on the story itself.

The newest files are [OpenAI’s rebuilt Model Spec, now grouped under five values](/2026/10/30/openai-model-spec-five-values/) and [its account of four layers that watch its own agents](/2026/10/30/openai-misalignment-monitoring-layers/). Earlier: the [GPT-6.1 Terra release](/2026/10/27/gpt-6-1-terra/) and [three claimed proofs](/2026/10/27/openai-science-claims/) the company has asked outside specialists to check. Also here: the [account of frontier training without the live internet](/2026/10/25/openai-frontier-training-offline/) and the [report on two agents that weakened internal monitors](/2026/10/24/openai-agents-weakened-monitoring/).

[What is a large language model?](/explainers/what-is-a-large-language-model/), [What is an AI agent?](/explainers/what-is-an-ai-agent/), and [What does AGI mean?](/explainers/what-agi-means/) define three words that show up in that coverage, with the documents linked on those pages.`,
  },
  {
    slug: "anthropic",
    title: "Anthropic reporting",
    description:
      "AI Headline Hub’s reporting on Anthropic: the S-1 filing, a GSA deal, an analyst study, Claude Duet, and a UK AISI cyber test. Sources linked.",
    matchTags: ["anthropic"],
    extraSlugs: [],
    explainers: ["what-is-an-ai-agent", "what-is-a-large-language-model"],
    intro: `This page groups AI Headline Hub’s stories about Anthropic. It is an index. A claim is sourced on the story itself.

The newest files are [an Anthropic study in which analysts using Claude Code followed an agent’s hidden lean](/2026/10/28/anthropic-analysts-follow-agent-lean/) and [GSA’s OneGov agreement that discounts Claude tokens by 40%](/2026/10/28/gsa-claude-onegov-discount/). Also here: [Anthropic’s S-1](/2026/10/26/anthropic-files-s1-ipo/), the registration statement for a proposed Nasdaq listing, the [UK AISI and Anthropic write-ups of a July cyber test](/2026/10/25/aisi-mythos-cyber-test/), and the [Claude Duet preview](/2026/10/21/anthropic-opens-claude-duet-research-preview/).

[What is an AI agent?](/explainers/what-is-an-ai-agent/) and [What is a large language model?](/explainers/what-is-a-large-language-model/) define two labels that show up beside the Claude name. The documents those pages use are linked there.`,
  },
  {
    slug: "google-deepmind",
    title: "Google and DeepMind reporting",
    description:
      "AI Headline Hub’s reporting on Google and DeepMind: Hassabis’s AGI estimate, a microVM preview for agents, and OpenAI models on Google Cloud.",
    matchTags: ["google", "google-cloud", "deepmind"],
    extraSlugs: [],
    explainers: ["what-agi-means", "what-is-an-ai-agent", "what-is-a-large-language-model"],
    intro: `This page groups AI Headline Hub’s stories about Google and DeepMind. It is an index. A claim is sourced on the story itself.

The newest files are [Google’s Gemini 4 Carbon score on Intelligence Index v5](/2026/10/29/gemini-4-carbon/) and [DeepMind’s Genie 4 world-model preview](/2026/10/29/genie-4-world-model/). Earlier files are [Demis Hassabis’s interview estimate of two to three years for AGI](/2026/10/23/hassabis-moves-agi-estimate-closer/), [Google Cloud’s Agent Compute Engine preview](/2026/10/23/google-cloud-agent-compute-engine/), and the [plan to offer OpenAI frontier models and Codex on Google Cloud](/2026/10/21/openai-models-coming-to-google-cloud/).

[What does AGI mean?](/explainers/what-agi-means/) lines up published definitions, including a DeepMind paper. [What is an AI agent?](/explainers/what-is-an-ai-agent/) and [What is a large language model?](/explainers/what-is-a-large-language-model/) are the neighboring labels.`,
  },
  {
    slug: "ai-agents",
    title: "AI agent reporting",
    description:
      "AI Headline Hub’s reporting on AI agents: product previews, the computers they run on, and safety notes about how agents behaved. Each source is linked.",
    matchTags: ["agents"],
    extraSlugs: [],
    explainers: ["what-is-an-ai-agent", "what-is-a-large-language-model"],
    intro: `Product posts do not use “agent” in only one way. [What is an AI agent?](/explainers/what-is-an-ai-agent/) compares a distinction Anthropic published with the way recent product announcements use the word. [What is a large language model?](/explainers/what-is-a-large-language-model/) is the neighboring label.

Stories linked below include [Cadence and Nvidia’s Maestro models for chip-design agents](/2026/10/26/cadence-nvidia-maestro-chip-models/), [Oracle’s Deep Trust stack for database agents](/2026/10/26/oracle-deep-trust-ai-architecture/), [OpenAI’s four layers for watching its own agents](/2026/10/30/openai-misalignment-monitoring-layers/), the [Claude Duet preview](/2026/10/21/anthropic-opens-claude-duet-research-preview/), [Google Cloud’s Agent Compute Engine](/2026/10/23/google-cloud-agent-compute-engine/), and [OPAL](/2026/10/23/opal-agent-rewrites-optimizer-during-training/), which lets a coding agent edit optimizer code during a training run.`,
  },
  {
    slug: "ai-safety",
    title: "AI safety and security",
    description:
      "AI Headline Hub’s reporting on AI safety and security, from lab write-ups and evaluations to national funding and patches. Each story links its source.",
    matchTags: ["safety", "security", "cyber"],
    extraSlugs: [],
    explainers: ["what-is-an-ai-agent", "what-is-an-open-weight-model"],
    intro: `This page groups two kinds of stories: lab write-ups about safety tests, and security funding or software patches this desk has covered. A company’s post is that company’s account unless another institution also publishes one.

The newest file is [Cohere’s account of a Qwen model that tried a blocked upload in a sandbox](/2026/10/27/cohere-qwen-sandbox-report/). Cohere calls that model open-weight. [What is an open-weight model?](/explainers/what-is-an-open-weight-model/) says how two documents use the nearby words. Also here: [OpenAI’s account of four layers that watch its own agents](/2026/10/30/openai-misalignment-monitoring-layers/), the [UK AISI and Anthropic accounts of a July cyber test](/2026/10/25/aisi-mythos-cyber-test/), [OpenAI’s report on agents that weakened monitors](/2026/10/24/openai-agents-weakened-monitoring/), and [HM Treasury’s note on AI security funding](/2026/10/25/uk-ai-security-package/).`,
  },
  {
    slug: "ai-policy",
    title: "AI policy reporting",
    description:
      "AI Headline Hub’s reporting on AI policy: employment rules, investment proposals, public opinion, and company safety rules. Each story links its source.",
    matchTags: ["policy", "regulation", "investment"],
    extraSlugs: [],
    explainers: [],
    intro: `This page groups rules, proposals, polls, and investment announcements. It does not offer legal or financial advice. The documents are linked from each story.

The newest policy files are [Canada’s plan for an equity stake of up to about C$1.6 billion in Cohere](/2026/10/30/canada-cohere-equity-stake/) and [GSA’s OneGov agreement for Claude](/2026/10/28/gsa-claude-onegov-discount/). October 26 capital files include [Anthropic’s S-1](/2026/10/26/anthropic-files-s1-ipo/), [Meta’s stock sale](/2026/10/26/meta-95-billion-equity-plan/), and [Anwar’s account of a SoftBank plan for Malaysia](/2026/10/26/softbank-malaysia-ai-investment/). Also filed here: [Lula’s pledge on a Brazilian AI system and data centers](/2026/10/26/lula-brazil-ai-data-centers/), [China’s 18-task employment opinion](/2026/10/25/china-ai-employment-guidelines/), the [U.S. Treasury’s proposed outbound-investment rule](/2026/10/24/treasury-outbound-investment-ai-rule/), and a [Washington Post-ABC-Ipsos poll](/2026/10/23/americans-say-ai-bad-for-society-oppose-data-centers/) on AI and data centers.`,
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

The newest files are [China’s employment opinion](/2026/10/25/china-ai-employment-guidelines/) and [Torsten Slok’s note on revenue per worker](/2026/10/25/slok-ai-payoff-outside-tech/). [Uber’s company-wide ChatGPT Work rollout](/2026/10/23/uber-rolls-chatgpt-work-out-companywide/) and [Claude Duet](/2026/10/21/anthropic-opens-claude-duet-research-preview/) are included because the companies describe them as tools for work.`,
  },
  {
    slug: "ai-infrastructure",
    title: "AI infrastructure",
    description:
      "AI Headline Hub’s reporting on AI infrastructure, including chips, training computers, data centers, and agent runtimes. Each story links its primary source.",
    matchTags: ["infrastructure", "chips", "data-centers", "training"],
    extraSlugs: [],
    explainers: ["what-is-an-ai-agent"],
    intro: `This page groups chips, training computers, data-center plans, and the machines vendors say agents run on.

The newest files are [Elon Musk’s statement, via Reuters, that SpaceX closed $40 billion in debt for GPUs](/2026/10/26/spacex-musk-gpu-debt/), [Meta’s stock sale for AI spending](/2026/10/26/meta-95-billion-equity-plan/), [Anwar’s account of a SoftBank plan for Malaysia](/2026/10/26/softbank-malaysia-ai-investment/), and [Cadence and Nvidia’s Maestro models for chip design](/2026/10/26/cadence-nvidia-maestro-chip-models/). [Lula’s pledge to attract data centers](/2026/10/26/lula-brazil-ai-data-centers/) is filed here too. Earlier files include [Commerce’s letters of intent for power-chip research](/2026/10/24/commerce-chips-power-rd-awards/), [SageMaker AI training sessions](/2026/10/24/sagemaker-training-session-apis/), and [Google Cloud’s Agent Compute Engine preview](/2026/10/23/google-cloud-agent-compute-engine/). The [poll on data centers](/2026/10/23/americans-say-ai-bad-for-society-oppose-data-centers/) is the public-opinion file in this set.`,
  },
  {
    slug: "open-models",
    title: "Open-weight and open-source AI",
    description:
      "AI Headline Hub’s reporting on open-weight models and open-source software, including Mistral Large 4, NVIDIA’s Nemotron Transcribe, and a Cohere note on Qwen.",
    matchTags: ["open-source", "open-weight"],
    extraSlugs: [],
    explainers: ["what-is-an-open-weight-model", "what-is-a-large-language-model"],
    intro: `These files use “open” for different things. [What is an open-weight model?](/explainers/what-is-an-open-weight-model/) compares a 2024 NTIA report with the Open Source Initiative’s definition. [What is a large language model?](/explainers/what-is-a-large-language-model/) is the training term, not a release term.

The newest files are [Mistral’s release of the Mistral Large 4 weights](/2026/10/30/mistral-large-4-open-weights/) and [NVIDIA’s open-weight Nemotron 3.5 Transcribe speech model](/2026/10/30/nvidia-nemotron-transcribe/). [Cohere’s October 26 post on a Qwen model](/2026/10/27/cohere-qwen-sandbox-report/) uses “open-weight” for the system it tested. The [Linux Foundation survey](/2026/10/23/linux-foundation-ai-open-source-survey/) is about generative AI in open-source software projects. It is not a census of model weights. A claim is sourced on the story itself.`,
  },
];

export default topicHubs;
