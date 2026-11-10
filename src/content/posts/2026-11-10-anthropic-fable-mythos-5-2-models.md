---
title: Anthropic launches Claude Fable 5.2 and Mythos 5.2, one model with two routes to users
description: Anthropic's new Fable 5.2 is open to all users while Mythos 5.2, the same model with fewer safeguards, stays limited to vetted cyber and life sciences groups.
date: '2026-11-10T14:10:00.000Z'
updated: '2026-11-10T14:10:00.000Z'
category: models-research
tags:
  - anthropic
  - claude
  - model-launch
  - ai-safety
author: AI Headline Hub
draft: false
image:
  src: /images/stories/anthropic-fable-mythos-5-2-models.webp
  alt: Abstract glowing neural network nodes floating in dark space
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/anthropic-fable-mythos-5-2-models.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: Introducing Claude Fable 5.2 and Claude Mythos 5.2
    url: https://www.anthropic.com/claude-fable-and-mythos-5-2
    publisher: Anthropic
  - title: Anthropic unveils new Fable, Mythos models as competition heats up ahead of IPO
    url: https://www.investing.com/news/stock-market-news/anthropic-unveils-new-fable-mythos-models-as-competition-heats-up-ahead-of-ipo-5013116
    publisher: Reuters via Investing.com
---

Anthropic on Monday released Claude Fable 5.2 and Claude Mythos 5.2, the latest versions of the two models it pitches at the hardest coding, research and engineering work. The company's [launch post](https://www.anthropic.com/claude-fable-and-mythos-5-2) says the pair are "the same underlying model" offered on different terms.

## Same model, different access

Fable 5.2 ships with cybersecurity and biology safeguards that block high risk requests, which is why Anthropic makes it available to all users and on Amazon Web Services, Google Cloud and Microsoft Azure. Mythos 5.2 drops some of those blocks and is reserved for organisations approved through Anthropic's Cyber Verification Program and Life Sciences Verification Program.

[Reuters reported](https://www.investing.com/news/stock-market-news/anthropic-unveils-new-fable-mythos-models-as-competition-heats-up-ahead-of-ipo-5013116) that Fable targets coding, reasoning and agent tasks, while Mythos targets approved cybersecurity and life sciences research. The agency framed the launch as part of Anthropic's push to strengthen its position ahead of a planned IPO, following the release of Claude Haiku 5.5 in October.

## Faster and cheaper

Anthropic says the new versions generate output up to 30% faster than Fable 5.1 and Mythos 5.1 and are priced at $8 per million input tokens and $40 per million output tokens, lower than earlier Fable and Mythos releases. An optional fast mode, which Anthropic says speeds generation by up to 2.5 times, costs $16 and $80 per million input and output tokens.

The company still recommends Claude Opus 5.5 as the starting point for most everyday coding and knowledge work, with Fable or Mythos reserved for larger, open ended jobs. Fable 5.2 can also act as an adviser or orchestrator that hands simpler tasks to smaller Claude models.

## What Anthropic is claiming

The launch post lists results from Anthropic's own prerelease testing, including a Python to Rust migration of an internal service and a formal proof of Fermat's Last Theorem completed by about 1,000 Fable 5.2 agents in 30 hours. Those are company reported results and have not been independently reproduced.

On safety, Anthropic says it judges the risk of high stakes misaligned behaviour to be low, and that early testing showed about 55% fewer unnecessary safety blocks for Fable 5.2 than for Fable 5.1. External evaluators including the UK AI Security Institute and METR tested the model before release, according to the company, which publishes the details in a system card.

## Why it matters

Splitting one model into a broadly available version and a gated version lets Anthropic sell its most capable system to security and biomedical teams without opening those capabilities to every account. Developers can call the model as `claude-fable-5-2` on the Claude Platform from today.
