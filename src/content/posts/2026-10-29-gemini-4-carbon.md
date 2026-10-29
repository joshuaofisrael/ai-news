---
title: "Google: Gemini 4 Carbon scores 59 on the new index"
description: "Google says Gemini 4 Carbon scored 59 on Intelligence Index v5. Access starts with a limited set of cyber defenders, not public product surfaces."
date: 2026-10-29T11:00:00.000Z
updated: "2026-10-29T11:00:00.000Z"
category: models-research
tags:
  - google
  - deepmind
  - models
  - benchmarks
author: AI Headline Hub
draft: false
image:
  src: /images/stories/gemini-4-carbon.webp
  alt: An empty server-room aisle lined with dark racks and small status lights, with no people, logos, or readable labels.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/gemini-4-carbon.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "Introducing Gemini 4 Carbon"
    url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/
    publisher: Google
---

Google said on October 28, 2026 that Gemini 4 Carbon is its strongest model, and that Carbon ranks first on version 5 of the Artificial Analysis Intelligence Index with a score of 59. The [announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/), by Koray Kavukcuoglu, says access starts this week with a subset of cyber defenders, then widens to trusted partners in a program Google calls Fairwind, before developers, businesses, and consumers. This desk did not rerun the index or the security tests. The prices below are Google’s list. They are not a buying guide.

## What Google says the model scores

Google says Carbon builds on Gemini 4 Argon, which the post says launched two weeks earlier. On the index, it puts Carbon at 59. This desk’s [October 28 file](/2026/10/28/artificial-analysis-index-v5/) reported Artificial Analysis’s own write-up, dated October 27, which ranked Claude Opus 5.5 (max) at 58 and did not name Carbon. Google’s 59 is Google’s claim about that index. It is not a new measurement by this desk, and this file does not treat it as a replacement for the ranking Artificial Analysis published.

The same post gives three cybersecurity scores and says they were measured without guardrails. It says Carbon scores 88.2 percent on SEC-bench Pro, which Google describes as finding vulnerabilities in real software, 54.8 percent on ExploitGym, which it describes as checking which of those findings can be exercised, and 71.0 percent on Collinear’s CWE-bench, which it describes as turning a finding into a code fix. It also says Carbon is fourth on WebDev Arena at 1768, 89 Elo above the comparison it uses.

Google says its own teams have seen Carbon keep working for days on multi-step engineering tasks, including tracing a fault across a large codebase. It says an internal check showed more than twice Argon’s success rate at generating secure code, and that the Chrome team reported Carbon was more than ten times better than another lab’s large frontier model at producing high-quality patches. It says Wiz sees Carbon ahead on benchmarks Wiz uses for web testing under a program Wiz calls Scan for Good. Those sentences are Google’s account of other teams. This desk did not find a separate Chrome or Wiz write-up to cite.

{% figure "/images/inline/gemini-4-carbon-1.webp", "Black network cables plugged into an unlabeled metal panel in a rack, with no people, logos, or readable tags.", "Google says the external cyber scores were measured without guardrails." %}

## Who Google says can use it, and at what list price

Google says it is taking part in the U.S. government’s voluntary process for testing a model before release. That is Google’s description of a process. It is not a certification, and the post does not say an agency has approved the model. Access this week, it says, is a subset of cyber defenders. Further access goes to trusted partners through Fairwind. Developers, businesses, and consumers come later, “as soon as possible,” and not in this announcement.

The introductory token price is the one Google says it used for Argon: $2 per million input tokens and $10 per million output tokens. Cached input tokens are priced at 95 percent off the input price. The post says that after the introductory period the price is $4 per million input tokens and $20 per million output tokens. The body of the post, as this desk read it on October 29, does not say how long that introductory period lasts.

{% figure "/images/inline/gemini-4-carbon-2.webp", "A powered-off monitor and a plain keyboard on an empty desk at night, with no people, logos, or readable screens.", "Google’s list price is introductory. The post does not say when it ends." %}

## What Google says changed in its own checks

Google says Carbon keeps the safety stack it described for Argon: model training, real-time misuse defenses, resistance to prompt injection, and monitoring of the model’s reasoning. It says Carbon was trained to answer complex or high-pressure tasks without taking shortcuts. On Terminal-Bench 4.0, it says successful shortcut behavior fell to 0.0 percent and attempts fell to 0.4 percent, while accuracy improved. In live coding with its own teams, it says high-severity misalignment alerts dropped by almost 80 percent.

On honesty, Google says internal testing cut unsupported claims by about two times compared with Argon, and that the model either puts a caveat in the work or lists what is still required instead of filling a gap. It says overreach fell 26 percent and under-service fell 29 percent. On Gray Swan’s Indirect Prompt Injection benchmark, it says Argon had a 0.7 percent attack success rate and Carbon’s measured rate was 0.0 percent. All of those figures are Google’s. This desk did not repeat the tests.

## Why it matters (analysis)

A one-point move at the top of an index is a claim about a test Artificial Analysis rebuilt, with most of the weight on private or held-out items, as [that file](/2026/10/28/artificial-analysis-index-v5/) laid out. Carbon is not on a public product surface in this post. The cyber numbers are the reason Google gives for holding it back, and they are also numbers a reader cannot check from a second institution in the source list below. [What is a large language model?](/explainers/what-is-a-large-language-model/) is the training term behind the product name. The Google and DeepMind files are grouped under [that topic](/topics/google-deepmind/).
