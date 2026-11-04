---
title: "Moonshot AI releases Kimi K3.1 Pro open weights"
description: "Moonshot AI has published the weights of Kimi K3.1 Pro, a 2.8-trillion-parameter multimodal model with a one-million-token context window."
date: 2026-11-04T19:22:00.000Z
updated: "2026-11-04T19:22:00.000Z"
category: models-research
tags:
  - moonshot-ai
  - open-source
  - coding
author: AI Headline Hub
draft: false
image:
  src: /images/stories/kimi-k3-1-pro-open-weights-nebius.webp
  alt: Rows of server racks with blue and amber lights in a dim data centre aisle, with a laptop on a cart showing blurred code, no people or readable text.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/kimi-k3-1-pro-open-weights-nebius.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "Post releasing the Kimi K3.1 Pro weights"
    url: https://x.com/Kimi_Moonshot/status/2118010528123773297
    publisher: Kimi.ai (Moonshot AI) on X, 4 Nov 2026
  - title: "Kimi K3.1 Pro model card"
    url: https://huggingface.co/moonshotai/Kimi-K3.1-Pro
    publisher: Moonshot AI on Hugging Face
  - title: "Kimi K3.1 Pro lands on Nebius Token Factory from day 0"
    url: https://x.com/nebiustf/status/2118023422248669547
    publisher: Nebius Token Factory on X, 4 Nov 2026
  - title: "Day 0 launch: Kimi K3.1 Pro available on Nebius Token Factory"
    url: https://x.com/nebiusai/status/2118031075419316255
    publisher: Nebius on X, 4 Nov 2026
---

Moonshot AI has released the model weights of Kimi K3.1 Pro, its newest open-weight model. The company [announced it on X on 4 November](https://x.com/Kimi_Moonshot/status/2118010528123773297): "Releasing the model weights of Kimi K3.1 Pro: … We'll keep advancing open intelligence."

## What the model card says

According to the [Hugging Face model card](https://huggingface.co/moonshotai/Kimi-K3.1-Pro), Kimi K3.1 Pro is a mixture-of-experts (MoE) model with 2.8 trillion total parameters, of which 104 billion are active for each token. It has a context length of 1,048,576 tokens (about one million), accepts text and image input through a 401-million-parameter vision encoder, and ships with MXFP4 weights. Moonshot describes it as "our most capable 3T-class model to date", post-trained from Kimi K3, and says it improves coding, 3D creation, financial research and factual accuracy.

A mixture-of-experts design only switches on a small share of the network for each token, which keeps running costs well below what the headline parameter count suggests. Even so, a model of this size needs serious hardware. Moonshot recommends vLLM, SGLang or TokenSpeed, and also offers the model through its own API as `kimi-k3.1-pro`. It is released under its own Kimi K3.1 Pro License rather than a standard open-source licence.

## The Terminal-Bench claim

Cloud provider Nebius made the model available on its Token Factory platform from launch day. [Nebius Token Factory said on X](https://x.com/nebiustf/status/2118023422248669547) that "Moonshot's latest open-weight model delivers coding performance close to Opus 5.5 on Terminal-Bench 4.0." Moonshot [replied](https://x.com/Kimi_Moonshot/status/2118030478230147229) that it was "excited to have Nebius Token Factory as our Day 0 launch partner."

The model card's own table broadly supports Nebius's wording: it lists Kimi K3.1 Pro at 65.7 on Terminal-Bench 4.0, against 66.4 for Claude Opus 5.5. These are Moonshot's own results, run with the Claude Code harness, and the comparison scores come from published reports and leaderboards rather than a single independent test. The same table shows Kimi behind Opus 5.5 on several other benchmarks, including Terminal-Bench-Science and ProgramBench, so "close to Opus" holds for this benchmark rather than across the board.

Independent evaluations should show more clearly where the model stands once developers have had time to run it.
