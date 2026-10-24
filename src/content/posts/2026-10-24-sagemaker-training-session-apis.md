---
title: "SageMaker AI lets customers write the training loop without managing GPUs"
description: "AWS said on October 22 that SageMaker AI training-session APIs are generally available in three regions for custom post-training, billed per token processed."
date: 2026-10-24T14:00:00.000Z
updated: 2026-10-24T14:00:00.000Z
category: tools-products
tags:
  - aws
  - sagemaker
  - training
author: AI Headline Hub
draft: true
image:
  src: /images/stories/sagemaker-training-sessions.webp
  alt: A developer desk with two monitors showing blurred code and a training curve, and no readable text or logos.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/sagemaker-training-sessions.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "Amazon SageMaker AI announces training session APIs for serverless model customization"
    url: https://aws.amazon.com/about-aws/whats-new/2026/10/training-session-apis-on-sagemaker-ai/
    publisher: Amazon Web Services
---

Amazon Web Services said on October 22, 2026 that SageMaker AI now offers training-session APIs for customers who want to write their own post-training procedure without standing up GPU machines. The [announcement](https://aws.amazon.com/about-aws/whats-new/2026/10/training-session-apis-on-sagemaker-ai/) says the APIs are generally available in US East (N. Virginia), US West (Oregon), and Asia Pacific (Mumbai).

SageMaker already lets a customer pick a managed technique, including supervised fine-tuning, direct preference optimization, and other reinforcement-learning methods, choose a model, and have the service run the job. The new APIs are the other path. AWS says a team can write the training loop itself: reproduce those same techniques on its own terms, or implement a custom loss, a new reward signal, a data curriculum, or an algorithm taken from recent research.

{% figure "/images/inline/sagemaker-training-sessions-1.webp", "An empty GPU server row with amber status lights and coiled power cables, photographed down the aisle with no people and no logos.", "AWS says SageMaker still allocates the GPUs. The customer code drives the training steps." %}

## What AWS says the customer calls, and what it says it still runs

AWS says operations it names as `forward_backward()`, `optim_step()`, and `sample()` become calls against a live session that keeps state. The customer composes the procedure. SageMaker, in the announcement’s account, handles GPU allocation, loading the model and any LoRA adapters, distributed execution, fault recovery, checkpoint storage, and security. Customers can make the calls from their own Python. Checkpointing and resume are included. AWS also says it is releasing a training-sessions cookbook of ready-to-run supervised-fine-tuning and reinforcement-learning recipes.

The billing line is specific and incomplete. AWS says customers are billed per token processed, and that local work such as scoring a reward is not billed as GPU time. The announcement does not publish a price per token, a region-by-region rate, or a comparison with the managed techniques. This desk has not called the API.

To start, AWS says, install the SageMaker Python SDK and clone the cookbook, or open a notebook in SageMaker Studio and connect a coding agent. It points readers to the service documentation for the rest.

{% figure "/images/inline/sagemaker-training-sessions-2.webp", "A printed notebook page with a blurred line chart and a pencil, on a desk beside a dark laptop, with no readable words.", "The announcement bills the session per token processed and does not list a rate." %}

## Why it matters (analysis)

The product claim is a split of labor, not a benchmark. AWS is saying the research team can own the training step while the cloud service still owns the machines, the adapters, the checkpoints, and the recovery. That is useful to a lab that already knows which loss it wants and does not want a cluster to administer. It is not, on this page, evidence that a custom loop trains a better model than the managed SFT or DPO jobs sitting next to it. The page also leaves the price as a unit, tokens processed, without a number.

This report is not purchasing advice and not a guide to choosing a training method.
