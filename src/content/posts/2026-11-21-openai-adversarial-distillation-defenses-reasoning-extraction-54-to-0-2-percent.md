---
title: OpenAI says rivals tried to copy its models' hidden reasoning, and its new defences cut one attack's success from 54% to 0.2%
description: OpenAI says layered safeguards in GPT-6.2 Astra cut one reasoning-extraction attack’s success rate from 54.0% to 0.2%, and that it shares indicators of adversarial distillation with other labs.
date: '2026-11-21T14:00:00.000Z'
updated: '2026-11-21T14:00:00.000Z'
category: policy-regulation
tags:
  - openai
  - distillation
  - ai-security
  - gpt-6-2
  - safeguards
author: AI Headline Hub
draft: false
image:
  src: /images/stories/openai-adversarial-distillation-defenses-reasoning-extraction-54-to-0-2-percent.webp
  alt: Single glowing key on a dark keyboard with soft bokeh, no people, logos or readable text
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/openai-adversarial-distillation-defenses-reasoning-extraction-54-to-0-2-percent.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: 'OpenAI on X: new research on our work to combat distillation of our models'
    url: https://x.com/OpenAI/status/2123862344422088794
    publisher: OpenAI on X
    date: '2026-11-20'
  - title: Combatting adversarial distillation
    url: https://openai.com/index/combatting-adversarial-distillation/
    publisher: OpenAI
    date: '2026-11-20'
  - title: Disrupting a coordinated model-distillation campaign
    url: https://openai.com/index/disrupting-a-coordinated-model-distillation-campaign/
    publisher: OpenAI
    date: '2026-11-20'
---

OpenAI says other people have been trying to copy its models from the outside, and it has published how it fights back. "Distillation can reproduce powerful AI capabilities without the safeguards built around them," [OpenAI posted on X](https://x.com/OpenAI/status/2123862344422088794) on Friday. "We're sharing new research on our work to combat distillation of our models, how these capabilities transfer, and how we detect and disrupt coordinated attempts."

## What adversarial distillation means

Distillation is a normal training trick: a smaller model learns from a larger one's answers. OpenAI's concern is the unauthorised version. In a [companion post](https://openai.com/index/disrupting-a-coordinated-model-distillation-campaign/), it defines adversarial distillation as "the systematic and unauthorized use of one model's outputs or reasoning to help train, reproduce, or improve another model." The prize is protected reasoning, the model's internal working, which OpenAI says can reveal what the final answer leaves out.

## The campaign it says it stopped

OpenAI says it found a coordinated campaign that began on 1 July and spiked on 24 and 25 July, with 16,000 requests using an extraction pattern from more than 4,000 users. Further digging linked prompt activity across more than 15,000 users, which it says it "fully disrupted by July 28." The operators "did not break our encryption, compromise a database, or gain direct access to stored user conversations," OpenAI says; they manipulated model interactions instead.

OpenAI says it is unclear whether all the operators were one actor, but "we attribute a core cluster of the activity to individuals associated with Moonshot AI, the developer of Kimi." That is OpenAI's attribution; the post does not include a response from Moonshot.

## The defences

The [main research post](https://openai.com/index/combatting-adversarial-distillation/) describes two layers. Per request, models are trained to refuse extraction attempts, input and output classifiers look for leaks (including inside tool-call arguments), and API controls limit how protected reasoning can be reused. With GPT-6.2 Astra and Sol, OpenAI ties protected reasoning to the conversation that produced it, so if an earlier message is rewritten the API drops the reasoning that followed.

Per campaign, OpenAI looks for coordinated account patterns, enforces against whole networks and shares indicators of compromise with other model providers. It says its updated GPT-6.2 Astra safeguards cut adaptive reasoning-extraction success from 54.0% to 0.2% on earlier requests and from 22.9% to 0.9% on current ones.

## Why it matters

Frontier labs spend billions on training. If rivals can copy the results cheaply through the API, that money buys less of a lead, and copied models may not carry the original safety work. The numbers are OpenAI's own internal tests and have not been checked independently, so the next thing to watch is whether other labs publish similar results or report the same campaigns.
