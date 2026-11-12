---
title: MiniMax publishes H3-Image weights, a six-step model for 16-megapixel images
description: MiniMax's 33.1B-parameter H3-Image generates and edits images up to 4096 by 4096 in six steps; its community licence restricts some territories.
date: '2026-11-12T12:00:00.000Z'
updated: '2026-11-12T12:00:00.000Z'
category: models-research
tags:
  - minimax
  - open-models
  - image-generation
  - models
author: AI Headline Hub
draft: false
image:
  src: /images/stories/minimax-h3-image-open-weights.webp
  alt: Hands with a stylus on a drawing tablet showing abstract colour swirls, no logos or readable text
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/minimax-h3-image-open-weights.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: MiniMaxAI/MiniMax-H3-Image
    url: https://huggingface.co/MiniMaxAI/MiniMax-H3-Image
    publisher: Hugging Face
    date: '2026-11-11'
  - title: MiniMax Releases Open-Weight Image Model H3-Image
    url: https://www.techtimes.com/articles/330529/20261112/minimax-releases-open-weight-image-model-h3-image-only-pricier-highspeed-tier-nears-10-second-4k.htm
    publisher: Tech Times
    date: '2026-11-12'
---

MiniMax has published the weights of H3-Image, an image generation and editing model from its H3 family. The [model card on Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) says one checkpoint handles both text-to-image generation and editing of one or more reference images, and produces images of about 16 megapixels at every aspect ratio, from 4096 by 4096 to 6272 by 2688, without a separate upscaler.

The model card describes a 33.1 billion parameter dense, single-stream diffusion transformer with 50 layers, using the H3 architecture with its audio layers removed and the Qwen3-VL text encoder from H3 unchanged. The checkpoint is distilled to six sampling steps and uses no classifier-free guidance, and MiniMax says it supports up to 16 reference images. The model is released under a MiniMax-H3-Image Community License Agreement rather than a standard open source licence.

[Tech Times reported](https://www.techtimes.com/articles/330529/20261112/minimax-releases-open-weight-image-model-h3-image-only-pricier-highspeed-tier-nears-10-second-4k.htm) on 12 November that the weights reached Hugging Face on 10 November and that the licence excludes four territories, the US, EU, UK and South Korea, and requires approval above $1 million in revenue. The outlet said MiniMax advertises 4K images in under 10 seconds, but the only published median timings it found put the faster Highspeed tier at 10.3 seconds and Standard at 16.0 seconds.

Tech Times also noted that the fixed design locks in one operating point: the repository accepts only six steps and a guidance scale of 1, and neither MiniMax's launch materials nor the README publish a technical report or benchmark scores. Speed and quality claims therefore rest on MiniMax's own statements and early third-party timing.
