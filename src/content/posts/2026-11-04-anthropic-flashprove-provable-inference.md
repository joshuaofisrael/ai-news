---
title: "Anthropic's FlashProve aims to prove which AI model answered"
description: "Anthropic has released FlashProve, an open-source prototype that uses zero-knowledge proofs to show a reply came from a committed model without revealing its weights."
date: 2026-11-04T08:45:00.000Z
updated: "2026-11-04T08:45:00.000Z"
category: models-research
tags:
  - anthropic
  - security
  - open-source
author: AI Headline Hub
draft: false
image:
  src: /images/stories/anthropic-flashprove-provable-inference.webp
  alt: A heavy steel vault door standing ajar inside a server room, with no people, logos, or readable text.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/anthropic-flashprove-provable-inference.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "Post announcing FlashProve"
    url: https://x.com/AnthropicAI/status/2117710942826123294
    publisher: Anthropic on X, 3 Nov 2026
  - title: "Progress on provable inference for large language models"
    url: https://www.anthropic.com/research/provable-inference
    publisher: Anthropic
  - title: "anthropics/FlashProve"
    url: https://github.com/anthropics/FlashProve/
    publisher: GitHub
---

Anthropic has released FlashProve, an open-source prototype meant to let anyone check that a reply really came from the AI model a provider says it used. The company [announced it on X on 3 November](https://x.com/AnthropicAI/status/2117710942826123294): "New Anthropic research: progress on provable inference for large language models. Here, we introduce FlashProve. Building on established cryptographic techniques, FlashProve allows developers to verify whether a given response came from a given AI model."

The problem it targets is simple to state. When someone sends a prompt to an AI service, they only see the answer. They have no way to confirm the provider ran the model it advertised, rather than a smaller or cheaper one, or that it did not switch models between requests.

## How it works

According to [Anthropic's research post](https://www.anthropic.com/research/provable-inference), FlashProve works in two phases. First, the provider publishes a commitment to its model weights, a short fingerprint that pins down one exact set of weights while keeping them secret. Then, for each request, the provider produces a proof file showing that the committed model produces the claimed output tokens for that prompt.

The proofs are a type of zero-knowledge proof known as a zkSNARK. Anthropic says a proof reveals nothing about the weights or which parts of the model ran, although the model's architecture is not hidden. Anyone with the commitment, the prompt and the reply can check a proof on an ordinary CPU in seconds, [according to the project's GitHub page](https://github.com/anthropics/FlashProve/).

## The numbers, and the limits

Anthropic tested FlashProve on Llama 4 Maverick, a publicly available 400-billion-parameter mixture-of-experts model, using 4-bit quantised weights. On a single Nvidia H100 GPU, it says the system generates proofs at around 110 tokens per second, with a proof of about 19 MB per 1,024-token request. That is roughly 70 to 95 times the GPU time of simply running the model on vLLM, a common open-source serving library.

That overhead is the main caveat. FlashProve is described as a prototype, not a product, and its documentation says the guarantees cover a specific setup: an integer, greedy-decoding version of the model, so outputs produced with floating-point maths or random sampling may not match. The project's guide also says weight hiding is expected but has been tested rather than formally verified.

Anthropic has not said it is using FlashProve on Claude. For now, the release gives researchers and auditors a working tool to test whether checkable AI answers can become practical.
