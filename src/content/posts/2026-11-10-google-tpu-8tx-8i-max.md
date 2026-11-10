---
title: Google adds TPU 8tx and TPU 8i Max, its third and fourth AI chip systems this year
description: Google's TPU 8tx targets confidential inference for regulated users, while the dual chip TPU 8i Max is built for very long context AI workloads.
date: '2026-11-10T13:40:00.000Z'
updated: '2026-11-10T13:40:00.000Z'
category: industry-business
tags:
  - google
  - tpu
  - ai-chips
  - data-centres
author: AI Headline Hub
draft: false
image:
  src: /images/stories/google-tpu-8tx-8i-max.webp
  alt: Macro view of an unbranded processor chip on a green circuit board
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/google-tpu-8tx-8i-max.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: 'Our newest TPUs: 8tx and 8i Max, built for the agentic era'
    url: https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/
    publisher: Google
  - title: Google specializes TPUs for agentic, confidential computing
    url: https://www.techtarget.com/news/google-specializes-tpus-for-agentic-confidential-computing/874084/
    publisher: TechTarget
---

Google has added two more systems to its eighth generation of Tensor Processing Units: TPU 8tx for confidential computing and TPU 8i Max for workloads with very large context windows. In its [announcement on Monday](https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/), Google said it is the first time it has introduced four TPU systems in a single year, after TPU 8t and TPU 8i were unveiled in April.

## TPU 8tx: protecting data while it is in use

TPU 8tx is aimed at governments and regulated businesses that want to run frontier or proprietary models next to sensitive data. Data is normally encrypted at rest and in transit but has to be decrypted in memory while it is processed. Google says TPU 8tx, built on the same silicon as TPU 8t and paired with 5th Generation AMD EPYC host processors, keeps data and model weights protected and isolated even during processing.

Google also claims up to 2x lower latency than TPU 8t with a near zero performance penalty, and says teams can fine tune, distil and train agents with reinforcement learning on the same system without moving data between clusters.

## TPU 8i Max: two chips in one package

TPU 8i Max tackles what Google calls the memory wall, the point at which memory bandwidth rather than compute limits large agent workloads. Google combined two TPU 8i chips in a single package, giving double the compute, double the on chip SRAM and double the HBM bandwidth of TPU 8i. Because twice the silicon fits in the same rack footprint, Google says operators get more compute per square foot and per watt.

[TechTarget reported](https://www.techtarget.com/news/google-specializes-tpus-for-agentic-confidential-computing/874084/) that the dual chip design gives TPU 8i Max 768 MB of on chip SRAM and 17.2 TB/s of HBM bandwidth. It also noted that Google did not give availability dates or prices for either system.

## Where they fit

Google now positions its eighth generation as four specialised parts: TPU 8t for large scale training, TPU 8i for low latency reasoning, TPU 8tx for confidential computing and TPU 8i Max for long context work and rack density. The company also said it is widening software support, including PyTorch and open source tooling, to make TPUs easier to adopt.

For cloud buyers, the split means security and memory capacity are now separate hardware choices rather than settings on a single accelerator, a sign of how quickly inference demand is reshaping chip design.
