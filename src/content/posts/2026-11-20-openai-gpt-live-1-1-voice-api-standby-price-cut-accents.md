---
title: OpenAI’s new voice model can listen while it talks, and now it costs less to keep it waiting
description: OpenAI released GPT-Live-1.1 in its API. The full-duplex voice model has steadier accents across languages and a new standby rate of $0.02 a minute when a WebRTC session is paused, against $0.05 a minute when active.
date: '2026-11-20T13:55:00.000Z'
updated: '2026-11-20T13:55:00.000Z'
category: tools-products
tags:
  - openai
  - gpt-live
  - voice-ai
  - realtime-api
  - developers
author: AI Headline Hub
draft: false
image:
  src: /images/stories/openai-gpt-live-1-1-voice-api-standby-price-cut-accents.webp
  alt: Studio microphone in front of a screen showing an abstract audio waveform, no people, logos or readable text
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/openai-gpt-live-1-1-voice-api-standby-price-cut-accents.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: 'OpenAI Developers on X: GPT-Live-1.1 is now available in the API'
    url: https://x.com/OpenAIDevs/status/2123506733524136446
    publisher: OpenAI Developers on X
    date: '2026-11-19'
  - title: GPT-Live-1.1 model page
    url: https://developers.openai.com/api/docs/models/gpt-live-1.1
    publisher: OpenAI
    date: '2026-11-19'
  - title: Managing GPT-Live sessions
    url: https://developers.openai.com/api/docs/guides/live-conversations
    publisher: OpenAI
    date: '2026-11-19'
---

OpenAI has updated the voice model that developers use to build talking apps. "GPT-Live-1.1 is now available in the API," [OpenAI Developers posted on X](https://x.com/OpenAIDevs/status/2123506733524136446) on Thursday. "It speaks with more natural and consistent accents across languages, supports lower idle costs with a new standby option, and completes tasks even more reliably."

## What changed

OpenAI's [model page](https://developers.openai.com/api/docs/models/gpt-live-1.1) describes GPT-Live-1.1 as a "full-duplex voice model for multilingual conversations", meaning it "can listen while it speaks". Compared with GPT-Live-1, OpenAI says it transcribes speech more accurately and keeps a more consistent accent and voice across languages. It takes audio and text in and gives audio and text out. Images and video are not supported.

The model can also hand work off. OpenAI says developers can "describe in plain language when the model should hand a task to your backend for reasoning or tool use", so the voice layer stays quick while a larger model or a tool does the heavy lifting. The [session guide](https://developers.openai.com/api/docs/guides/live-conversations) lists voices with regional influences, including Australian, British and Irish English.

## The price change

Voice sessions are billed by the minute. The model page lists $0.05 a minute while a session is active and $0.02 a minute on standby. The lower rate applies to WebRTC sessions "while inference is paused". Backend model and tool use are billed separately.

For customer-service lines or voice assistants that spend much of a call waiting, that cut can matter more than the headline rate. A session that sits idle for half its length now costs noticeably less than it would have at the full rate.

## Why it matters

Voice is becoming a main way people use AI agents, and the companies building them care about two things: whether the bot sounds natural and what a long call costs. GPT-Live-1.1 targets both. It joins a busy month for OpenAI, covered in our story on [the GPT-6.2 launch](/2026/11/18/openai-gpt-6-2-astra-sol-launch-altman-ultrafast/).

OpenAI did not publish benchmark numbers for the "more reliably" claim on the model page, which lists performance as "not specified".
