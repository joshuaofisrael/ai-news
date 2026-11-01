---
title: "Pika H3 Flex: open weights for a video model with sound"
description: "Pika has published open weights for Pika H3 Flex, a video-and-audio model built on MiniMax-H3 that it says generates clips in six sampling steps."
date: 2026-11-01T11:00:00.000Z
updated: "2026-11-01T11:00:00.000Z"
category: models-research
tags:
  - pika
  - open-models
  - video-generation
author: AI Headline Hub
draft: false
image:
  src: /images/stories/mistral-large-4-open-weights.webp
  alt: Dense GPU server racks glowing with blue and amber lights in a dark, hazy compute hall, with no people, logos, or readable labels.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/mistral-large-4-open-weights.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "Pika-Labs/Pika-H3-Flex model card"
    url: https://huggingface.co/Pika-Labs/Pika-H3-Flex
    publisher: Hugging Face
  - title: "Pika H3 Flex"
    url: https://pika.art/pika-h3-flex
    publisher: Pika
---

Video startup Pika has put the weights of Pika H3 Flex on Hugging Face, letting developers run a model that makes short video clips with matching sound on their own hardware. The [model card](https://huggingface.co/Pika-Labs/Pika-H3-Flex) describes it as a post-trained version of MiniMax-H3 that generates video with synchronised stereo audio in six sampling steps. The speed and quality claims are Pika's own. This desk did not run the model.

## What is in the release

According to the model card, H3 Flex is one model family with two adapters. One, called FL2VA, handles text prompts and optional first or last frames. The other, Ref2VA, takes up to 12 reference files, including up to 9 images, 3 videos and 3 audio clips, to keep characters, objects and style consistent.

Run locally, the model outputs 480p or 768p video at 24 frames per second, in clips of 5 to 15 seconds and 11 aspect ratios, with 32 kHz stereo audio mixed in. Higher resolutions of 1080p, 2K and 4K, separate audio stems and prompt enhancement are offered only through Pika's paid hosted API, the card says. Pika also describes the model on [its own site](https://pika.art/pika-h3-flex).

## Hardware and licence

This is not a laptop model. The card says the base components take about 210 GB of storage and that representative 480p and 768p requests were tested on a single Nvidia H100 with 80 GB of memory, with CPU offload needed for large jobs. Hugging Face lists the model at 33 billion parameters.

The adapters are distributed under the MiniMax H3 Community License Agreement, because they are derivatives of MiniMax's model, while the example code is under Apache 2.0. Anyone planning commercial use should read that licence rather than assume it is fully open source.

## Why it matters (analysis)

Most high-end video generators are only available through paid apps. An open-weight model with built-in sound lets studios and researchers test it privately, though the hardware bill keeps it with well-funded teams for now. For background, see [what an open-weight model is](/explainers/what-is-an-open-weight-model/), and more under [open models](/topics/open-models/).
