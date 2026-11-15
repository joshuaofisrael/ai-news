---
title: Anthropic publishes its playbook for building AI safety evaluations
description: A 13 November research post sets out how Anthropic designs, sandboxes, grades and reports safety evals, from multi-turn simulated users to checking LLM graders against human experts.
date: '2026-11-15T13:30:00.000Z'
updated: '2026-11-15T13:30:00.000Z'
category: models-research
tags:
  - anthropic
  - ai-safety
  - evaluations
  - research
author: AI Headline Hub
draft: false
image:
  src: /images/stories/anthropic-safety-evaluation-design-recommendations.webp
  alt: Digital head made of blue particles in profile, no logos or readable text
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/anthropic-safety-evaluation-design-recommendations.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: Building strong safety evaluations
    url: https://www.anthropic.com/research/building-strong-safety-evaluations
    publisher: Anthropic
    date: '2026-11-13'
  - title: Anthropic publishes 10 safety evaluation design recommendations
    url: https://ashutoshai.com/ai-compass/2026/11/13/anthropic-safety-evaluation-design-guide/
    publisher: AI Compass
    date: '2026-11-13'
---

Anthropic has published a detailed guide to how it builds the tests behind claims that one model is "safer" than another. The [research post](https://www.anthropic.com/research/building-strong-safety-evaluations), dated 13 November, argues that a safety claim is only as sound as the evaluation behind it, and borrows from the reforms psychology adopted after its replication crisis, such as writing down hypotheses and analysis plans before collecting data.

## Run risky evals offline

Safety evals are often run with normal safeguards switched off to measure a model's baseline behaviour. Anthropic says they should run in a sandbox with no internet access and be monitored in real time so a run can be stopped, noting that it has hardened its own evaluation environments in response to past incidents.

## Measure the right thing

The post says refusal rate is often the wrong measure. In conversations about suicide or self-harm, a flat refusal is itself a failure; the right response engages with empathy and points the person to human support. In dual-use areas such as biology and cybersecurity, Anthropic says a good answer helps with the legitimate version of a request while holding back operational detail. It pairs harmful and benign prompts in the same domain so a test catches both unsafe compliance and over-refusal.

## Multi-turn simulations

Because harmful requests often escalate gradually, Anthropic builds multi-turn tests. A domain expert writes a specification for a simulated user, the first turn is fixed, and a separate Claude model plays the user while the model under test responds. One unsafe turn fails the whole conversation.

## Check the grader

Most evals use another model to grade answers, and the guide says those graders can fail silently. Its advice includes atomic yes-or-no criteria, telling the grader that disclaimers do not make harmful content harmless, using a different model from the one being tested, and validating the grader against blind human labels.

The independent [AI Compass digest](https://ashutoshai.com/ai-compass/2026/11/13/anthropic-safety-evaluation-design-guide/) summarises the post as 10 recommendations and reports that it suggests minimum sample sizes of 100 items for multi-turn simulations and 1,000 for single-turn evals.

## Our read

Analysis: much of this is methodology rather than news, but publishing it gives outside researchers a yardstick for reading Anthropic's own system cards, including how much of a gap between two models' scores could simply be noise.
