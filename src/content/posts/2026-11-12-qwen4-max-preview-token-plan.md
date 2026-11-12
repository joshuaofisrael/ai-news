---
title: Alibaba opens a two-week Qwen4-Max preview on its Token Plan
description: Qwen4-Max-Preview, Alibaba's next flagship multimodal model, is available on Token Plan only from 11 to 25 November, after which the preview is retired.
date: '2026-11-12T12:40:00.000Z'
updated: '2026-11-12T12:40:00.000Z'
category: models-research
tags:
  - alibaba
  - qwen
  - models
  - open-models
author: AI Headline Hub
draft: false
image:
  src: /images/stories/qwen4-max-preview-token-plan.webp
  alt: Long data centre aisle of server racks under blue lighting, no logos or readable text
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/qwen4-max-preview-token-plan.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: qwen4-max-preview
    url: https://www.alibabacloud.com/help/en/model-studio/qwen4-max-preview
    publisher: Alibaba Cloud Model Studio
    date: '2026-11-11'
  - title: Qwen4-Max Opens Preview as qwen4-max-preview on Alibaba's Token Plan
    url: https://digintoai.com/en/articles/qwen4-max-preview
    publisher: DigIntoAI
    date: '2026-11-11'
---

Alibaba has opened a time-limited preview of Qwen4-Max, the next flagship model in its Qwen family. The [Alibaba Cloud Model Studio documentation](https://www.alibabacloud.com/help/en/model-studio/qwen4-max-preview), last updated 11 November, lists the model as `qwen4-max-preview` and describes it as a multimodal model that combines text generation, image and video understanding and deep reasoning, aimed at coding, office work, front-end design and complex agent tasks.

The preview is narrow by design. The documentation says access is through Token Plan only, with no pay-as-you-go option, and that the preview runs from 10:00 on 11 November to 24:00 on 25 November 2026 (UTC+8). Alibaba says the model will not be changed during that window and will be retired once the preview ends.

The listed specifications include a context length of 1 million tokens and a maximum output of 393,216 tokens, shared between thinking and the final answer. Thinking is on by default, with low, medium and xhigh effort settings. The model supports function calling, web search and built-in tools, JSON structured outputs, and compatibility with the OpenAI Chat Completions, Responses and Anthropic Messages APIs. Alibaba also notes a behaviour change: starting with this model, `max_tokens` covers thinking plus the answer, so limits sized for the answer alone may cut output short.

[DigIntoAI reported](https://digintoai.com/en/articles/qwen4-max-preview) that the official Qwen account announced the preview on 11 November and pointed users to early access in QwenWork, Qoder, the Qwen app and QwenStudio. The outlet said the official materials for this preview include no benchmark chart or evaluation table and do not announce open weights, so claims of stronger coding and agent skills remain Alibaba's own description for now.
