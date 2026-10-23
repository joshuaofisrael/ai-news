---
title: OpenAI makes the Decisions API generally available for bounded, fast choices
description: OpenAI’s Decisions API is generally available with GPT-6 Luna. The company prices it at $0.10 per million input tokens and charges no output tokens.
date: 2026-10-23T11:00:00.000Z
updated: 2026-10-23T11:00:00.000Z
category: tools-products
tags:
  - openai
  - apis
  - gpt
author: AI Headline Hub
draft: false
image:
  src: /images/stories/decisions-api.webp
  alt: A close view of a laptop screen showing a blurred decision tree of three unlabeled branches, on a dark desk.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/decisions-api.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: Build more responsive apps with the Decisions API
    url: https://openai.com/index/decisions-api/
    publisher: OpenAI
---

OpenAI made its Decisions API generally available on October 22, 2026. The [announcement](https://openai.com/index/decisions-api/) says the endpoint uses GPT-6 Luna to answer questions that already have a limited set of answers, and that it can do that up to 10 times faster than the same model through the Responses API.

The product is aimed at the small choices inside an application: classifying an input, routing a request, or picking the next action. OpenAI’s argument is that those calls are simple one by one and expensive in bulk. This desk has not timed the API. The speed claim is the company’s.

## What a request returns

A developer writes a question, the allowed answers, and context as text, images, or JSON. The API then returns one of three shapes, in OpenAI’s terms:

- A predicate estimates the probability, from 0 to 1, that a condition is true.
- A choice picks one of the options the developer supplied, and also returns probabilities and a confidence.
- A score rates an input against ordered levels and returns a probability-weighted average of the level indexes.

Since the public beta, OpenAI says it has added a native GPT-Live integration, prompt caching for repeated context, and inference residency in the United States and the European Union. A request can now include up to 400 questions, which the post says is twice the previous cap. Images can sit inside the question instructions. The company also says it added capacity in several Asian regions to cut latency. It does not name those regions.

{% figure "/images/inline/decisions-api-1.webp", "A server room aisle with blue status lights and an empty rolling chair, shot with a wide lens.", "OpenAI says the endpoint is generally available, with processing residency in the US and the EU." %}

## The price on the announcement

OpenAI states the rate in the same post: $0.10 per million input tokens, and $0.01 per million for cached input. It says customers pay only for input tokens. There is no output-token charge. The post points to a pricing guide for 30-minute and 12-hour cached writes, and it says Zero Data Retention is available to eligible customers. Those rates are what the company published on October 22. They can change, and this is not a recommendation to buy the product.

{% figure "/images/inline/decisions-api-2.webp", "A printed invoice and a calculator on a glass desk beside a dark monitor, with no readable company names.", "The listed price is input tokens only, including a lower rate for cached input." %}

## What customers said in OpenAI’s post

OpenAI quotes five customers. Those sentences are the customers’ accounts, published by the vendor. They are not an independent benchmark.

Box’s Biswaroop Palit, a vice president of product management, said that in an evaluation of 30 certificates of insurance, the Decisions API selected a route about five times faster than the Responses API at the same accuracy. Datadog staff engineer AJ Stuyvenberg said it scored the risk of agent-generated shell commands before they ran, with a 40 times faster 95th-percentile latency than available frontier models and comparable accuracy. Ramp research engineer René Sultan said attributing AI costs was four times faster and 30% cheaper than with GPT-6 Luna, without a loss of accuracy. Sierra engineer Ajeet Grewal said a live-conversation step ran at under 280 milliseconds at the 95th percentile, about three times faster and 90% cheaper per call than Sierra’s previous approach. Speak chief technology officer Andrew Hsu said a GPT-Live test cut time to the next action by more than 90%, from 1.4 seconds to 0.13 seconds.

Inside OpenAI, the post says the dots team uses the API to shorten response times, a personal-finance team uses it to categorize transaction descriptions, and a communications team uses it to classify coverage. No metrics are attached to those internal examples.


The voice path is the other product change. Decisions can be attached to a GPT-Live session so an application picks a next step while someone is speaking: a clarifying question, a route, or an escalation. OpenAI’s example has the session choose an avatar expression from the transcript. The post does not say that feature is a separate product or a separate price.
