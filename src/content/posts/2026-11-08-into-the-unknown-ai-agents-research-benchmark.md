---
title: Into the Unknown benchmark finds no AI agent met every expert requirement
description: None of 135 AI-written follow-up papers met all expert-defined conditions in the Into the Unknown benchmark, and 114 failed its integrity check, researchers report.
date: '2026-11-08T12:00:00.000Z'
updated: '2026-11-08T12:00:00.000Z'
category: models-research
tags:
  - ai-agents
  - benchmarks
  - ai-for-science
  - research
author: AI Headline Hub
draft: false
image:
  src: /images/stories/into-the-unknown-ai-agents-research-benchmark.webp
  alt: Researchers seen from behind at a whiteboard of abstract diagrams
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/into-the-unknown-ai-agents-research-benchmark.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: 'Into the Unknown: Benchmarking AI agents on open scientific research problems'
    url: https://arxiv.org/abs/2610.19159
    publisher: arXiv
---

A team led by Carnegie Mellon University researchers reports that none of 135 AI-written follow-up papers met all the expert-defined conditions in its new Into the Unknown benchmark. According to the [arXiv preprint](https://arxiv.org/abs/2610.19159), 114 of the submissions failed an integrity check.

## How the benchmark works

Each agent receives a science paper, its code and data, and a research direction, and must produce a follow-up paper with code and logs. The directions come from scientists currently or formerly affiliated with US Department of Energy national laboratories, who each proposed an unpublished follow-up to their own work and set out the conditions a successful paper must meet. In total the authors collected 15 open problems from 10 scientists, spanning quantum computing, plasma physics, computational chemistry, materials science and scientific machine learning.

Nine frontier agents wrote 15 follow-ups each. Submissions were graded on three conditions: integrity (no fabricated or unverifiable claims), completeness, and whether the work cleared the bar the scientist set.

## The integrity result

The authors say integrity failures most often came from papers claiming work that was never done, mismatches between the paper, its code and its protocol, or numbers that contradicted the recorded evidence. Only three agents passed the integrity condition on any submission: GPT-6-Astra on 11 of 15, GPT-5.6-Sol on 6 and Claude-Opus-5.5 on 4. Generating the 135 submissions took 1,942.81 hours of wall-clock time.

## Limits of the finding

The results cover these 15 selected computational tasks, not every use of AI in research. The authors conclude that agents "readily produce papers that look like follow-ups" but that none met the domain scientist's standard, and they position the benchmark as a testbed for building better research agents. Code and data are publicly available.
