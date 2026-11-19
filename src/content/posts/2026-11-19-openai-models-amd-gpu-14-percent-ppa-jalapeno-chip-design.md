---
title: OpenAI says its models found a year's worth of gains in AMD's flagship GPU design in under five months
description: OpenAI says its models found up to 14% PPA gains on AMD's flagship GPU IP and cut Jalapeño's vector unit area by about 13%, with some changes already sent to manufacturing.
date: '2026-11-19T17:00:00.000Z'
updated: '2026-11-19T17:00:00.000Z'
category: models-research
tags:
  - openai
  - amd
  - chip-design
  - jalapeno
  - synopsys
author: AI Headline Hub
draft: false
image:
  src: /images/stories/openai-models-amd-gpu-14-percent-ppa-jalapeno-chip-design.webp
  alt: Macro photo of a processor chip on a circuit board, no logos or readable text
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/openai-models-amd-gpu-14-percent-ppa-jalapeno-chip-design.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: 'OpenAI on X: models identified up to 14% PPA improvement on flagship GPU IP with AMD'
    url: https://x.com/OpenAI/status/2123100386638877054
    publisher: OpenAI on X
    date: '2026-11-18'
  - title: Advancing chip design with OpenAI models
    url: https://openai.com/index/advancing-chip-design-with-our-models/
    publisher: OpenAI
    date: '2026-11-18'
---

OpenAI says its own models are now improving the chips that run AI. "Working with @AMD, our models identified up to 14% PPA improvement on flagship GPU IP in less than five months," the company [posted on X](https://x.com/OpenAI/status/2123100386638877054) on Wednesday, adding that this built "on designs AMD's engineers had already spent years optimizing".

PPA stands for power, performance and area, the three numbers chip designers trade against each other.

## What OpenAI says happened at AMD

In a [technical post](https://openai.com/index/advancing-chip-design-with-our-models/), OpenAI says the gains are "up to 14% improvement relative to heavily optimized baselines on the flagship GPU IP". Its model found them by rewriting the SystemVerilog RTL, the code that describes the chip's circuits, and used Synopsys tools to check that each rewrite kept the block's behaviour while measuring the power, performance and area trade-offs.

OpenAI calls this "roughly a year of progress achieved in less than 5 months". It also says AMD has already included some of the changes in a recent design it sent for manufacturing, has added others to its production design files, and verified single-digit percentage PPA gains across key blocks of its upcoming next-generation flagship CPU using model-written designs. AMD's own figures were not published alongside the post, so these are OpenAI's account of the work.

## Jalapeño, OpenAI's own chip

The same approach was used on Jalapeño, OpenAI's first custom inference chip. OpenAI says the team started using GPT-o3 mini on the design in early 2025, and estimates that model-proposed changes cut standard-cell area by about 13% in the vector unit and 10% in the matrix unit. One multiplier redesign used about 15% less cell area while cutting latency from two clock cycles to one. OpenAI says these optimisations were proven on silicon during bring-up.

## Model-versus-model tests

OpenAI also tested successive models on two open-source 32-bit RISC-V cores, PicoRV32 and Ibex, asking them to raise throughput. At a budget of about 112,000 tokens per run, it says GPT-6.2 Astra had the highest average score on both cores, across 9,881 scored runs. OpenAI notes a caveat itself: designing from a written specification let models drop features such as performance counters, which may explain part of the higher scores.

## What comes next

OpenAI says it is working with Synopsys to train a new model, GPT-Synopsys, to use Synopsys's electronic design automation tools the way expert designers do. More on the company is on our [OpenAI topic page](/topics/openai/).

## Our read

Analysis: the claim that matters is the AMD one, because it is measured against a rival's production design rather than OpenAI's own chip. Until AMD publishes its own numbers, treat "up to 14%" as the best case OpenAI chose to report.
