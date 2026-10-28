---
title: "Artificial Analysis: Opus 5.5 leads its new index at 58"
description: "Intelligence Index v5, dated October 27, puts 60% of the score on private or held-out tests. Artificial Analysis ranks Claude Opus 5.5 (max) at 58 and GPT-6 Astra (max) at 57."
date: 2026-10-28T12:00:00.000Z
updated: "2026-10-28T12:20:00.000Z"
category: models-research
tags:
  - benchmarks
  - models
  - anthropic
  - openai
author: AI Headline Hub
draft: false
image:
  src: /images/stories/artificial-analysis-index-v5.webp
  alt: An empty lab bench with two dark monitors, a closed laptop, and a blank notepad, and no people, logos, or readable screens.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/artificial-analysis-index-v5.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "Announcing Artificial Analysis Intelligence Index v5"
    url: https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5
    publisher: Artificial Analysis
  - title: "Artificial Analysis Intelligence Index"
    url: https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index
    publisher: Artificial Analysis
---

Artificial Analysis says Claude Opus 5.5, at its max setting, leads Intelligence Index v5 with a score of 58. The [announcement](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5), dated October 27, 2026, puts GPT-6 Astra (max) at 57 and GPT-6.1 Sol (max) at 55, and says Anthropic and OpenAI hold the top five places. Gemini 4 Argon (high) is next in that write-up, at 50. The [live index page](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index) lists the same 58 for Opus 5.5 (max, default fallback), and an Opus 5.5 xhigh default-fallback setting at 57, level with Astra (max). Every score below is Artificial Analysis’s measurement. This desk did not rerun the tests. The prices are not a buying guide.

## What changed in the index

Artificial Analysis calls v5 its largest revision since v4 in January. It says 60 percent of the index now rests on evaluations with private test sets or held-out answers. Two evaluations are new. FrontierCode 2.0 is Cognition’s private coding set, which the post says launched the same day: 132 tasks in real open-source repositories, scored on whether a maintainer would merge the change, run three times in Artificial Analysis’s Stirrup harness. Terminal-Bench-Science is 70 research tasks in a terminal. A task counts only if every test passes.

Three evaluations were replaced or tightened. HLE-Diamond, a 1,000-question revision of Humanity’s Last Exam from the Center for AI Safety and Scale AI, takes the old exam’s slot and is split evenly between reasoning and knowledge. AA-Omniscience v1.1 drops saturated and public-set questions. CritPt v2 is scored on a private 40-question hard subset, in an offline Python sandbox. AA-Briefcase, AutomationBench-AA, GDP.pdf, and Terminal-Bench 4.0 stay. GDPval-AA v2.1, SciCode, and AA-LCR v1.1 come out.

The weights are four equal quarters: knowledge work (AA-Briefcase 15 percent, AutomationBench-AA 5, GDP.pdf 5), coding (FrontierCode 2.0 at 15, Terminal-Bench 4.0 at 10), science (Terminal-Bench-Science 15, CritPt hard subset 10), and general knowledge (AA-Omniscience v1.1 at 15, split into 10 for accuracy and 5 for non-hallucination, plus HLE-Diamond at 10).

{% figure "/images/inline/artificial-analysis-index-v5-1.webp", "Unlabeled server units on an open rack, status lights dark, with no people, logos, or readable asset tags.", "Artificial Analysis says 60 percent of Index v5 uses private test sets or held-out answers." %}

## Where the post says models separate

On FrontierCode 2.0, Artificial Analysis puts Opus 5.5 (max) at 46 percent. Astra (max), GPT-6.1 Terra (max), and Claude Sonnet 5.5 (max) are each at 42 percent. The highest open-weight score it names there is DeepSeek V4.1 Flash 1017 (max), at 28 percent. On Terminal-Bench-Science, Astra (max) leads at 63 percent, Opus 5.5 (max) is at 59, and Sol (max) at 58. The post says scores fall off after that group: Kimi K3.1 Pro, whose weights it says are not yet released, is at 34 percent, and the best released-weight model it names, DeepSeek V4.1 Flash 1017 (max), is at 13 percent.

On HLE-Diamond, Opus 5.5 (max) is at 68 percent, Astra (max) at 64, and Claude Fable 5.1 (max) at 60. The same post says knowledge questions were harder than reasoning questions for the leaders: Opus 5.5 (max) and Astra (max) both scored 78 percent on reasoning, against 58 and 50 percent on knowledge. On the CritPt hard subset, Astra leads at 72 percent on high effort. Sol is at 69 percent on max effort. Opus 5.5 (max), the index leader, is at 61 percent.

Artificial Analysis says no model it measured leads all nine evaluations. Opus 5.5 leads three: FrontierCode 2.0 (46 percent), HLE-Diamond (68 percent), and AA-Omniscience v1.1 (48). Astra leads Terminal-Bench-Science and the CritPt subset. Sonnet 5.5 leads AA-Briefcase, at 1812 Elo. Kimi K3.1 Pro leads Terminal-Bench 4.0, at 67 percent. Gemini 4 Argon leads AutomationBench-AA, at 78 percent. Muse Wonder Full leads GDP.pdf, at 33 percent all-pass.

The open-weight gap, on Artificial Analysis’s comparison with its own previous index, widens from 3 points to 12. Kimi K3.1 Pro is the top open-weight entry at 46, and the post says those weights are not released yet. Among released weights, DeepSeek V4.1 Flash 1017 (max) and GLM-5.3 (max) lead at 32, which the post places 26 points behind the index leader and below Claude Haiku 5.5 (max) at 36.

{% figure "/images/inline/artificial-analysis-index-v5-2.webp", "Printed pages face-down on a wood table beside a powered-off phone, with no readable text, logos, or people.", "The cost figures are Artificial Analysis’s estimates per index task." %}

## What the post says a task costs

Among the ten highest-scoring models in its chart, Artificial Analysis says GPT-6.1 Terra (max) is the cheapest, at $0.96 per index task, and Claude Fable 5.1 (max) the most expensive, at $13.04. Opus 5.5 (max) is $10.04, Astra (max) is $6.24, and Sol (max) is $1.27. The post says Sol (max) sits within 4 points of Opus 5.5 (max) at about an eighth of the cost per task. It also says effort settings move the score more than in v4.3: Opus 5.5 scores 35 at low effort and 58 at max, and the cost per task rises about tenfold, from $0.98 to $10.04.

Output grew with the new tasks. Artificial Analysis says every model it measured produced more output tokens per index task than in v4.3, and the median rose by two thirds, from 35,000 to 59,000. Agentic evaluations are 55 percent of the weight and, it says, about 90 percent of output tokens at the median. Terminal-Bench-Science alone is about a third of output tokens per task.

The same post introduces a Progress Index v1, a separate scale for language models released since November 2022. Artificial Analysis says that scale is for change over time, and that the Intelligence Index remains its measure of the current field. It says the progress scale draws on work from Epoch AI and Anthropic.

## Why it matters (analysis)

The leader changed because the test changed. A 58 against a 57 is a one-point gap on a scale Artificial Analysis rebuilt, with most of the weight on items labs were not supposed to see in advance. The open-weight comparison is also a comparison with v4.3, not a count of how far a given model moved on one frozen exam. Terra’s place in the cost table sits next to the prices OpenAI listed for that model, covered in [the GPT-6.1 Terra release](/2026/10/27/gpt-6-1-terra/). The deferral study Anthropic published the same day, [analysts and an assigned lean](/2026/10/28/anthropic-analysts-follow-agent-lean/), used Claude Opus 4.8, a different setting from the Opus 5.5 at the top of this index. [What is a large language model?](/explainers/what-is-a-large-language-model/) is the training term behind these product names. The model files are grouped under [Anthropic](/topics/anthropic/) and [OpenAI](/topics/openai/).
