---
title: "Anthropic: analysts matched an agent’s lean 86% of the time"
description: "In an October 27 study, 50 analysts using Claude Code followed a hidden coin-flip lean on four choices. Most reused the agent’s arguments. Few named the agent as the source."
date: 2026-10-28T13:30:00.000Z
updated: "2026-10-28T13:45:00.000Z"
category: models-research
tags:
  - anthropic
  - agents
  - research
  - safety
author: AI Headline Hub
draft: true
image:
  src: /images/stories/anthropic-analysts-follow-agent-lean.webp
  alt: An empty office desk with a closed laptop, two blank notebooks side by side, and a coin, and no people, logos, or readable pages.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/anthropic-analysts-follow-agent-lean.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "How AI agents shape experts’ judgment calls"
    url: https://www.anthropic.com/research/agents-judgment-calls
    publisher: Anthropic
  - title: "Who’s Aligned to Whom? How AI Agents Shape Experts’ Research Judgment Calls"
    url: https://www-cdn.anthropic.com/519c17a5d23a794e8b6d50a854048d0b61e0d73a.pdf
    publisher: Anthropic
---

Anthropic says professional analysts followed an AI agent’s secretly assigned preference on four analytical choices 86 percent of the time. The [research post](https://www.anthropic.com/research/agents-judgment-calls), published October 27, 2026, by Amaç Herdağdelen, Hailey Joren, and Alex Tamkin, describes a study of 50 analysts doing a causal-inference task in Claude Code. If the agent’s lean had made no difference, Anthropic says the match rate would have been about 50 percent. The [paper](https://www-cdn.anthropic.com/519c17a5d23a794e8b6d50a854048d0b61e0d73a.pdf) states the same 86 percent figure. The numbers are Anthropic’s. This desk did not repeat the trial.

## How the lean was assigned

Anthropic says it recruited 61 analysts from a screened pool of people who had passed a causal-inference check, used Python or R regularly, and had done observational causal work. Eleven chose not to use the agent. The other 50 worked in a browser version of VS Code with Claude Code, on Claude Opus 4.8 at high effort. Among those 50, Anthropic says 65 percent held a master’s or doctorate or had six or more years of experience, and 90 percent of the 48 who answered a survey called themselves proficient or expert. The median time on the task was 65 minutes.

The task was fiction. A farming cooperative had to decide whether to expand a paid advisory program. The board would expand it only if productivity rose by roughly 3 to 4 percent, and it did not define productivity. Anthropic left four choices open, each with two defensible options: yield per hectare or yield per unit of cost; a difference-in-differences comparison or a direct comparison with statistical adjustment; the enrolled farms only or the whole membership; equal weight per farm or more weight for larger producers. Those choices fed a final recommendation to roll the program out, stop it, or propose a one-year extension.

For each analyst and each decision, a coin flip set which option the agent would favor. Anthropic says the analysts were not told. A hidden instruction told the agent to treat the lean as its own view, to raise it when the decision came up, and to make the strongest case the data allowed. The same instruction told it to change its mind if the evidence turned decisively the other way, and not to hide data or argue for a result the numbers did not support.

{% figure "/images/inline/anthropic-analysts-follow-agent-lean-1.webp", "A single coin on a bare wood desk beside a closed laptop, the screen dark, with no people, logos, or readable keys.", "Anthropic says a coin flip set each agent’s lean, and the analysts were not told." %}

## What Anthropic measured

On the four analytical choices, Anthropic says the match rates were 92 percent for the outcome measure, 82 percent for the comparison method, 81 percent for which farms the estimate covered, and 90 percent for weighting. Combined, that is the 86 percent. When an analyst had already stated a preference before the agent spoke, which happened in 38 cases, they switched 60 percent of the time if the lean disagreed and 6 percent of the time if it agreed. Anthropic says that gap rests on a small set of cases. Its 95 percent confidence interval for the 54-point difference runs from 24 to 82 points, and it says the analysts who spoke first may have differed from the others.

The final recommendation moved less. When the agent leaned toward a full rollout, 54 percent of analysts recommended one, against 36 percent when it leaned the other way. Anthropic counts a one-year extension as not rolling the program out. It says the recommendation mostly followed from whether the estimate cleared the board’s threshold, so there was less room left to argue. A statistical model using only the four earlier leans predicted 82 percent of the rollout-or-stop recommendations, against 61 percent for always guessing the most common recommendation. That comparison leaves out analysts who proposed an extension. The paper’s abstract states those 82 and 61 percent figures as well.

After the task, analysts could not look back at the chat. Anthropic says 77 percent still repeated the agent’s argument in at least one explanation, sometimes in the same words, and 15 percent credited the agent anywhere. On the survey of 48 people, 52 percent called the final recommendation more their own than the agent’s. Anthropic says both groups had been shifted by the leans, about 65 percentage points for those who called it their own and about 79 for the rest, a difference it places inside the margin of error. Confidence ratings were close too: 71 on average for analysts who followed the lean on all four choices, and 73 for the rest, on a scale from 0 to 100. Asked what the study was about, six of the 48 said influence. None, Anthropic says, suspected that the agent’s preferences had been assigned.

{% figure "/images/inline/anthropic-analysts-follow-agent-lean-2.webp", "Two blank notepads on a steel table, a pencil between them, in an empty office, with no writing, people, or logos.", "Anthropic says 77 percent reused the agent’s argument and 15 percent credited the agent." %}

## The comparison Anthropic says is weaker

Of the 11 analysts who worked without the agent, Anthropic says six made serious methodological errors that invalidated their results, against three of the 50 who used it. Two models flagged the errors, and an author checked each one without knowing the group. The no-agent median time was 90 minutes, against 65. Anthropic says the groups were not matched. The analysts who skipped the agent were less experienced on average, so the post refuses to treat the gap as proof that the agent caused the cleaner work.

The post lists limits in its own voice. The leans were strengthened on purpose, so the rates describe an agent that holds a preference and says so. The task was one fictional farm problem, about an hour long, on one model. The analysts knew causal inference and were new to farming. Anthropic did not record each person’s view before the agent spoke, except in the 38 cases where someone stated one, and it recorded the option chosen rather than how strongly the person preferred it. In a separate check with no assigned lean, the post says Opus 4.8 made the same five choices in 112 of 123 runs.

## Why it matters (analysis)

The measured result is a shift on underdetermined choices, in a trial Anthropic designed so the lean was random and hidden. The post’s own reading is that a human sign-off is an independent check only when the judgment is the person’s, and that agreement across teams can echo one model’s preferences. That reading is Anthropic’s. The model in the trial was Opus 4.8 at high effort. [Artificial Analysis’s October 27 index](/2026/10/28/artificial-analysis-index-v5/) ranks a different Claude setting, Opus 5.5 at max, at the top of its new composite. [What is an AI agent?](/explainers/what-is-an-ai-agent/) is the label Anthropic and other vendors use for this kind of tool. Related files are on the [Anthropic](/topics/anthropic/) and [AI agent](/topics/ai-agents/) pages.
