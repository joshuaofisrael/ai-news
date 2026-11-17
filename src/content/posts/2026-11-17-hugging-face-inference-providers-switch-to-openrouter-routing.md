---
title: Hugging Face hands language-model routing for its Inference Providers to OpenRouter
description: Chat-model requests made with a Hugging Face token now go through OpenRouter, which picks a provider on price, speed and reliability and retries on failure. Own provider keys no longer work for these models.
date: '2026-11-17T14:10:00.000Z'
updated: '2026-11-17T14:10:00.000Z'
category: tools-products
tags:
  - hugging-face
  - openrouter
  - open-weight-models
  - inference
author: AI Headline Hub
draft: false
image:
  src: /images/stories/hugging-face-inference-providers-switch-to-openrouter-routing.webp
  alt: Colourful network patch cables plugged into a switch, macro, no logos or readable text
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/hugging-face-inference-providers-switch-to-openrouter-routing.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: Hugging Face and OpenRouter join forces to make open-weight models easy to run
    url: https://huggingface.co/blog/openrouter
    publisher: Hugging Face
    date: '2026-11-16'
  - title: OpenRouter now powers inference on Hugging Face
    url: https://openrouter.ai/blog/announcements/hugging-face-inference-providers/
    publisher: OpenRouter
    date: '2026-11-16'
---

Hugging Face has replaced its own request router for language models with OpenRouter's. In a [blog post](https://huggingface.co/blog/openrouter) on Monday, the company said requests to chat models through its Inference Providers service now go through OpenRouter, which picks a provider for each call "based on live price, speed and reliability" and retries on another provider if the first one fails. Existing code does not need to change.

## What developers get

The router supports OpenAI's Chat Completions and Responses APIs and Anthropic's Messages API for every chat model, Hugging Face says. Model pages gain two new tabs: Providers, which lists each provider OpenRouter can route to with its price, speed and uptime over the past 24 hours, and Metrics. Users and organisations can switch off any provider they do not want.

Routing is cache-aware, so a conversation stays with the provider holding its prompt cache. [OpenRouter says](https://openrouter.ai/blog/announcements/hugging-face-inference-providers/) it can also send request traces to Hugging Face Storage Buckets.

## Pricing and the breaking change

Hugging Face says pricing does not change: users pay the provider's price on their Hugging Face bill, with no markup. The catch is that language-model requests are now billed through Hugging Face, so users can no longer plug in their own API key for a provider with these models. Custom keys for image and video providers keep working, and image, video and audio generation still run directly through Hugging Face.

## The numbers behind it

Hugging Face cites OpenRouter data showing open-weight models rose from 26.8% of tokens served on OpenRouter in October 2025 to 71.7% at the end of September 2026. It says OpenRouter serves more than 800 trillion tokens a month to over 10 million users across 600+ models from 80+ providers. Both are the companies' own figures.

Analysis: for developers already on Hugging Face, the main gain is automatic failover. Teams that relied on their own provider contracts should check the key change before their next deployment.
