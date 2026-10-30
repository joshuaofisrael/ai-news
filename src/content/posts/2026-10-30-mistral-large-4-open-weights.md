---
title: "Mistral releases the weights of Mistral Large 4"
description: "Mistral has published open weights for Mistral Large 4, a 1-trillion-parameter model it says leads open models on coding, with a licence condition for model-hosting firms."
date: 2026-10-30T08:40:00.000Z
updated: "2026-10-30T08:40:00.000Z"
category: models-research
tags:
  - mistral
  - open-models
  - coding
  - cybersecurity
author: AI Headline Hub
draft: false
image:
  src: /images/stories/openai-training-offline.webp
  alt: An empty compute aisle with dense servers, dark status lamps, and no people, logos, or readable asset tags.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/openai-training-offline.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "Mistral Large 4 (Le Chonk) is now open weight"
    url: https://mistral.ai/news/mistral-large-4-oss/
    publisher: Mistral AI
  - title: "Mistral Large 4"
    url: https://docs.mistral.ai/models/mistral-large-4
    publisher: Mistral AI
  - title: "Welcome Le Chonk: Mistral Large 4 on Hugging Face"
    url: https://huggingface.co/blog/mistral-large4
    publisher: Hugging Face
---

Mistral said on October 29, 2026 that anyone can now download the weights of Mistral Large 4, the 1-trillion-parameter model it nicknames "Le Chonk." The [announcement](https://mistral.ai/news/mistral-large-4-oss/) says the released version had about three more weeks of reinforcement learning after a public preview earlier this month, and that it is now the strongest open-weight model for coding. Those rankings are Mistral's own, based on benchmarks it chose. This desk did not run the model.

## What Mistral released

Mistral's [model documentation](https://docs.mistral.ai/models/mistral-large-4) describes a mixture-of-experts model with about 1.05 trillion parameters in total, of which roughly 52 billion are active for each token, plus a vision encoder for image input. It lists a context window of up to 1 million tokens. [Hugging Face's launch post](https://huggingface.co/blog/mistral-large4) says the weights are hosted there, with lower-precision versions for cheaper serving.

The model now has three reasoning settings: low for simple tasks, medium for everyday work, and high, the default, for the hardest jobs. Mistral says the trade-off is cost against accuracy.

## The numbers Mistral reports

On the Artificial Analysis Coding Agent Index, Mistral reports a score of 48%, which it calls effectively tied with GLM-5.3, the top open-weight model on that index, while using 47% fewer tokens per task on average. It reports 41% on Terminal-Bench 4.0, 13 points higher than the preview, and 19.7% on Cognition's private FrontierCode 2.0 test. It also lists 84.5% on BrowseComp for web browsing and 73.3% on a finance-workflow test called Finch.

For security, Mistral reports 51% on the Artificial Analysis Cyber Index, which tests finding, reproducing, and patching software flaws. It says the model refused malicious cyber requests 96.6% of the time on average across three public refusal tests. These are vendor-reported results; independent runs may differ.

## Licence, price, and a guardrail change

The weights come under what Mistral calls the Mistral Ecosystem Open-Weight licence, a modified MIT licence. Mistral says the model is free to use, change, and sell, with one condition: companies that run a model-as-a-service business need a separate commercial licence first. Through Mistral's own API the price is $0.70 per million input tokens, $0.07 per million cached input tokens, and $2.10 per million output tokens. Mistral says the model is also offered through Microsoft Foundry and as an NVIDIA NIM container.

One passage is unusually direct. Mistral says that while watching security-related use since the preview, it saw the model refuse attacks on live targets, but also "a potential for uplift to conduct real attacks." It says it is changing its guardrails and will keep updating them. A separate cyber-focused variant is going only to vetted enterprise partners such as Orange Cyberdefense, the company says, under contracts that limit testing to systems they own or are authorised to test.

## Why it matters (analysis)

A trillion-parameter model with downloadable weights shifts what a company can run on its own hardware, though few will have the servers for the full version. Mistral's own note about possible attack uplift is a reminder that once weights are public, guardrail updates on Mistral's API do not reach copies running elsewhere. For background, see [what an open-weight model is](/explainers/what-is-an-open-weight-model/), and more under [open models](/topics/open-models/).
