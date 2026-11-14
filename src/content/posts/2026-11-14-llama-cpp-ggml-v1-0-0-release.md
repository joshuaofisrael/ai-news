---
title: llama.cpp and ggml reach version 1.0.0, pruning deprecated APIs
description: The open source local inference projects shipped 1.0.0 releases on 13 November, removing deprecated public APIs, adding FP8 support and hardening llama-server.
date: '2026-11-14T13:45:00.000Z'
updated: '2026-11-14T13:45:00.000Z'
category: tools-products
tags:
  - llama-cpp
  - ggml
  - open-source
  - local-ai
author: AI Headline Hub
draft: false
image:
  src: /images/stories/llama-cpp-ggml-v1-0-0-release.webp
  alt: Developer seen from behind at several monitors at night, no logos or readable text
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/llama-cpp-ggml-v1-0-0-release.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: llama.cpp release v1.0.0
    url: https://github.com/ggml-org/llama.cpp/releases/tag/v1.0.0
    publisher: GitHub (ggml-org)
    date: '2026-11-13'
  - title: ggml release v1.0.0
    url: https://github.com/ggml-org/ggml/releases/tag/v1.0.0
    publisher: GitHub (ggml-org)
    date: '2026-11-13'
  - title: AI Compass, Friday 13 November 2026
    url: https://ashutoshai.com/ai-compass/2026/11/13/
    publisher: AI Compass
    date: '2026-11-13'
---

llama.cpp, the open source engine that many desktop and mobile apps use to run language models locally, has reached version 1.0.0. The [v1.0.0 release on GitHub](https://github.com/ggml-org/llama.cpp/releases/tag/v1.0.0) was published on 13 November alongside a matching [ggml v1.0.0 release](https://github.com/ggml-org/ggml/releases/tag/v1.0.0) for the tensor library underneath it.

## What changes for developers

The llama.cpp release notes say v1.0.0 removes the deprecated public API and promotes the NextN, or speculative decoding, API into the main `llama.h` header. It adds OCP FP8 KV caches, a host-memory cache for mixture-of-experts weights with a configurable CPU share, and loading of external PLE shards.

On the server side, the notes list fixes for CORS origin handling, DNS rebinding and a CORS proxy SSRF issue, plus an OpenAI-compatible `/v1/audio/speech` endpoint. The bundled web UI has been redesigned with chat groups and a markdown editor.

The [ggml 1.0.0 notes](https://github.com/ggml-org/ggml/releases/tag/v1.0.0) say the library prunes its deprecated API and the legacy DIAG_MASK operations, bumps its RPC protocol so incompatible peers are rejected, and adds configurable YaRN truncation and FP8 support, with performance work across CUDA, Metal, Vulkan, SYCL, OpenCL, WebGPU and Hexagon backends.

## Why the version number matters

The [AI Compass digest](https://ashutoshai.com/ai-compass/2026/11/13/) reports that from 1.0.0 both projects follow strict semantic versioning for their public C headers, so breaking API or ABI changes will require a major version bump. We could not load the project's Hugging Face blog post about the release, so that versioning detail comes from AI Compass's summary rather than a page we read directly.

Analysis: for apps that wrap libllama, a stable header contract is the headline. Removing the deprecated API means some older integrations will need code changes to move to 1.0.0.
