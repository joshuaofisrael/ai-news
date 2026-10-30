---
title: "OpenAI rebuilds its Model Spec around five values"
description: "OpenAI's updated Model Spec groups its rules under five values, adds guidance on context and agency, drops most style rules, and calls the model GPT."
date: 2026-10-30T08:10:00.000Z
updated: "2026-10-30T08:10:00.000Z"
category: policy-regulation
tags:
  - openai
  - model-spec
  - alignment
  - ai-safety
author: AI Headline Hub
draft: false
image:
  src: /images/stories/decisions-api.webp
  alt: A close view of a laptop screen showing a blurred decision tree of three unlabeled branches, on a dark desk.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/decisions-api.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "An updated Model Spec for more capable and beneficial AI"
    url: https://openai.com/index/updated-model-spec/
    publisher: OpenAI
  - title: "OpenAI Model Spec (2026-10-29)"
    url: https://model-spec.openai.com/2026-10-29.html
    publisher: OpenAI
  - title: "Model Spec changelog"
    url: https://github.com/openai/model_spec/blob/main/CHANGELOG.md
    publisher: OpenAI on GitHub
---

OpenAI published a new version of its Model Spec on October 29, 2026, the public document that describes how it wants its models to behave. The [announcement](https://openai.com/index/updated-model-spec/) says the guidance is now organised around five values: faithfulness to human intent, harm minimisation, honesty and transparency, human agency, and care. OpenAI also says plainly that its models "do not yet fully reflect" the Spec. It describes a target, not a measured result.

## What the five values mean, in OpenAI's words

OpenAI calls faithfulness to human intent the foundation. It says this means understanding what OpenAI, developers, and users intend, not just following instructions literally, and acting carefully when that understanding is incomplete. The other four values, per the post:

- **Minimising harm:** respecting firm safety limits and the foreseeable results of the model's actions.
- **Honesty and transparency:** being truthful about what the model knows, does, and is unsure of.
- **Human agency:** strengthening people's ability to understand, choose, and act for themselves.
- **Care:** paying attention to the people affected, following relevant social and professional norms, and doing work people can rely on.

The post says most of the Spec remains defaults that users and developers can override, with firm boundaries only where needed.

## What was added, and what was dropped

The [full Spec](https://model-spec.openai.com/2026-10-29.html) folds an updated "chain of command", which sets out whose instructions apply when they conflict, into the new faithfulness section. A new subsection, "consider context carefully", covers how conversations, memories, and other context should shape the model's reading of what a person wants. OpenAI also added defaults on supporting human agency and following social norms, and expanded its guidance on controlling and explaining side effects of the model's actions. The [changelog](https://github.com/openai/model_spec/blob/main/CHANGELOG.md) on GitHub lists the revisions.

OpenAI retired most of the detailed style guidance, saying style should follow what people prefer. It kept some stronger defaults, such as approaching questions objectively; the post says the model should not assume a user wants a particular slant just because it guesses that is what they want to hear. The Spec also now calls the model "GPT" instead of "the assistant."

## Training is a separate step

A written spec does not change a model on its own. OpenAI says it has been exploring new training methods to help models learn these values and the reasons behind them, and that it will share results later. It invites public feedback on the document.

## Why it matters (analysis)

The Model Spec is one of the few places a large AI developer writes down, in public, the trade-offs it wants its products to make. That gives users and researchers something concrete to compare behaviour against. The gap OpenAI itself names, between the document and how current models act, is the part to watch. This week OpenAI also described [how it monitors its models for misaligned behaviour](/2026/10/30/openai-misalignment-monitoring-layers/). More under [OpenAI](/topics/openai/) and [AI safety](/topics/ai-safety/).
