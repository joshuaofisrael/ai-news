---
title: Google launches Gemini 4 Hydrogen, a faster everyday model that it says beats Argon on one index
description: Google's new Gemini 4 Hydrogen costs $1.50 per million input tokens, has four thinking levels and is rolling out across AI Studio, the Gemini app and Search.
date: '2026-11-13T13:50:00.000Z'
updated: '2026-11-13T13:50:00.000Z'
category: models-research
tags:
  - google
  - gemini
  - models
  - developers
author: AI Headline Hub
draft: false
image:
  src: /images/stories/gemini-4-hydrogen-fast-model-launch.webp
  alt: Abstract glowing network of light nodes in dark space, no logos or readable text
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/gemini-4-hydrogen-fast-model-launch.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: Introducing Gemini 4 Hydrogen
    url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/
    publisher: Google
    date: '2026-11-12'
  - title: 'Gemini 4 Hydrogen: everyday coding and agentic workflows for developers'
    url: https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-4-hydrogen/
    publisher: Google
    date: '2026-11-12'
  - title: Google announces Gemini 4 Hydrogen with 'significant leaps' in speed, intelligence
    url: https://9to5google.com/2026/11/12/gemini-4-hydrogen-launch/
    publisher: 9to5Google
    date: '2026-11-12'
  - title: 'Sundar Pichai on X: Gemini 4 Hydrogen rolling out today'
    url: https://x.com/sundarpichai/status/2120940236805169182
    publisher: X
    date: '2026-11-12'
---

Google on 12 November released Gemini 4 Hydrogen, the fast, lower-cost member of its Gemini 4 family. Alphabet chief executive Sundar Pichai [announced it on X](https://x.com/sundarpichai/status/2120940236805169182), saying that compared with Gemini 3.8 Flash it finishes tasks 2.5 times faster and that it has four thinking levels, so users only wait and pay for the reasoning depth a task needs.

Hydrogen follows Gemini 4 Carbon and Gemini 4 Argon, which Google positions as its frontier models for long, hard reasoning. In its [launch post](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/), Google describes Hydrogen as built for rapid execution in everyday coding and agentic work, either on its own or as the execution engine alongside Carbon and Argon.

## Price and availability

Google lists a flat price across the full 1 million-token context window of $1.50 per million input tokens and $7.50 per million output tokens, [according to the announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/). The model is rolling out globally on all tiers of Google AI Studio and the Gemini API, in Android Studio, in Gemini for business, in the Gemini app and in Google Search, and to paid Google AI Pro and Ultra subscribers in Google Antigravity. Free Gemini app users get it through automatic model selection when Google judges it the right model for a prompt.

The four thinking levels are low, medium, high (the default) and a new xhigh tier, [Google's developer post](https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-4-hydrogen/) says. It also says Hydrogen accepts up to 1 million input tokens and can produce up to 1 million output tokens.

## Google's benchmark claims

The headline numbers are Google's own. The company says Hydrogen scores 51 on the Artificial Analysis Intelligence Index at its default setting against 50 for Argon, rising to 54 at xhigh, and that it scores 57% on Terminal-Bench 4.1 against 18.2% for Gemini 3.8 Flash. [9to5Google](https://9to5google.com/2026/11/12/gemini-4-hydrogen-launch/) also reports Google's claim that the model cuts fabricated claims by more than five times compared with 3.8 Flash. We have not independently tested any of these figures.

Google also introduced Orchestrator in Antigravity, which switches between Carbon and Hydrogen within one session. Google says that on Terminal-Bench, Orchestrator came close to Carbon's success rate while using 24% less quota and finishing 19% faster on average.

## What it means for developers

For teams already on 3.8 Flash, the practical change is a new model ID with a higher ceiling and a choice of thinking depth per request. Google says partners saw Hydrogen run 2 to 2.8 times faster than 3.8 Flash in early tests while using 12% to 23% fewer tokens, figures that come from Google's own write-up rather than published third-party evaluations.
