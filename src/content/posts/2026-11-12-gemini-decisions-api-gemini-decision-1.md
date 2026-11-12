---
title: Google launches Gemini Decisions API, scoring up to 1,000 questions in one call
description: Google's new Gemini Decision 1 model answers yes/no, choice and rubric questions in one pass, at $0.10 per million input tokens and no output charge.
date: '2026-11-12T13:10:00.000Z'
updated: '2026-11-12T13:10:00.000Z'
category: tools-products
tags:
  - google
  - gemini
  - developers
  - api
author: AI Headline Hub
draft: false
image:
  src: /images/stories/gemini-decisions-api-gemini-decision-1.webp
  alt: Developer seen from behind at several monitors at night, no logos or readable text
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/gemini-decisions-api-gemini-decision-1.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: 'Gemini Decisions API: Fast, calibrated multimodal decisions'
    url: https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/
    publisher: Google
    date: '2026-11-11'
  - title: Decisions API documentation
    url: https://aistudio.google.com/docs/decisions-api
    publisher: Google AI Studio
    date: '2026-11-11'
  - title: Google's Gemini Decision 1 model scores up to 1,000 questions in one API call
    url: https://venturebeat.com/technology/googles-gemini-decision-1-model-scores-up-to-1-000-questions-in-one-api-call
    publisher: VentureBeat
    date: '2026-11-11'
  - title: 'Sundar Pichai on X: Gemini Decisions API launch'
    url: https://x.com/sundarpichai/status/2120581155078729728
    publisher: X
    date: '2026-11-11'
---

Google on 11 November released the Gemini Decisions API, a new endpoint that returns judgments instead of written answers. According to [Google's announcement](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/), the endpoint runs on a new model called Gemini Decision 1 (`gemini-decision-1`) and is available through the Gemini API in Google AI Studio. Alphabet chief executive Sundar Pichai [announced the launch on X](https://x.com/sundarpichai/status/2120581155078729728) the same day.

Google pitches the API at bounded choices that software makes many times a second: picking a tool, checking a policy, routing a request to a model or grading a piece of context. A developer sends one shared input, which can combine text, images, audio, video and PDFs up to 256K tokens, plus as many as 1,000 separate questions. Google says the model scores the candidate options in a single forward pass rather than generating text token by token, and returns probabilities with a confidence score from 0 to 1 for each answer.

There are three question types. A yes or no check (Google calls it `noul`) estimates the probability that a condition holds, a choice question picks from 2 to 255 options, and a score question grades the input against an ordered rubric. The [Decisions API documentation](https://aistudio.google.com/docs/decisions-api) says the endpoint generates zero text tokens, so output token usage is always 0, and that each question is evaluated in isolation from the others.

On price, Google lists $0.10 per million input tokens with nothing billed for output, plus a no-cost tier in AI Studio for prototyping. The shared input is billed once per request however many questions are asked. Google reports 150 to 250 milliseconds end to end for inputs up to 16K tokens, staying almost flat from 1 to 100 questions, and says the setup is nearly five times cheaper on its benchmark suite than Gemini 3.5 Flash-Lite through the Interactions API. These are Google's own measurements.

Independent results are more mixed. [VentureBeat reported](https://venturebeat.com/technology/googles-gemini-decision-1-model-scores-up-to-1-000-questions-in-one-api-call) that Google enters a field that already includes OpenAI's Decisions API on GPT-6 Luna and TypeSafe's Jev, and that the Artificial Analysis Decision Index v2.1 placed Gemini Decision 1 ninth of 18 models at launch. The same report noted that Gemini Decision 1 had the lowest calibration error in Google's comparison.

Google says its own products already use the endpoint. Gemini Notebook routes incoming queries with it, which the company says cuts latency for everyday queries by up to 40%, and the Stitch design tool and Google Search also use it. Integrations are rolling out on OpenRouter, LangChain, Vercel, LiteLLM and other frameworks, with support for Gemini in Google Cloud described as coming soon.
