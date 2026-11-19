---
title: Perplexity's agent now writes its own skills by watching how you work, and it has already written 80,000 of them
description: Perplexity says Brain, the personalisation system in its Computer agent, now creates and updates reusable skills from your past sessions. It reports 80,000+ personal skills written for 20,000+ users since August.
date: '2026-11-19T17:20:00.000Z'
updated: '2026-11-19T17:20:00.000Z'
category: tools-products
tags:
  - perplexity
  - ai-agents
  - agent-skills
  - personalization
author: AI Headline Hub
draft: false
image:
  src: /images/stories/perplexity-brain-writes-its-own-agent-skills-80000-personal-skills.webp
  alt: Desk with an empty headset and abstract chat bubble graphics on a monitor, no people, logos or readable text
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/perplexity-brain-writes-its-own-agent-skills-80000-personal-skills.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: 'Perplexity on X: Brain now automatically creates self-improving agent skills for you'
    url: https://x.com/perplexity_ai/status/2123449395882701224
    publisher: Perplexity on X
    date: '2026-11-19'
  - title: Self-improving skills
    url: https://www.perplexity.ai/hub/blog/self-improving-skills
    publisher: Perplexity
    date: '2026-11-18'
  - title: Perplexity Brain creates and updates agent skills from experience
    url: https://www.unite.ai/perplexity-brain-creates-and-updates-agent-skills-from-experience/
    publisher: Unite.AI
    date: '2026-11-18'
---

Perplexity wants its agent to stop asking you the same questions twice. "Computer's personalized self-improvement agent, Brain, now automatically creates self-improving agent skills for you," the company [posted on X](https://x.com/perplexity_ai/status/2123449395882701224) on Thursday. "Brain learns how you work from past sessions and memory, then writes and updates personalized skills for future tasks."

## What a skill is here

In Perplexity's [write-up](https://www.perplexity.ai/hub/blog/self-improving-skills), as summarised by [Unite.AI](https://www.unite.ai/perplexity-brain-creates-and-updates-agent-skills-from-experience/), a skill packages reusable instructions and supporting resources, sometimes including scripts, that the Computer agent can load when a task needs them. Brain changes the agent's context and instructions, not the underlying model's weights.

## Perplexity's numbers

Perplexity says Brain wrote more than 80,000 personal skills for over 20,000 users between 1 August and 14 November 2026, and made more than 100,000 automatic updates to over 30,000 existing skills from September.

In an eight-week randomised production test, it says 72.9% of users with automatic improvement switched on received at least one new skill, against 6.5% of a control group who added one by hand. It reports an 11% drop in tool-call failures across Computer activity, about 7% when background runs are excluded, with no measurable change in cost or response time. These are the company's own figures.

## The guard rails

A new personal skill needs two separate occurrences of the same behaviour; one grounded occurrence can support an update. Automatically created skills are capped at 10 per user, so the agent has to retire one and justify the swap before adding another. Changes to built-in skills, which every user gets, must pass paired replay tests and are only applied after an engineer approves them.

## Who gets it

The feature is available to US Max subscribers, switched on by default for eligible users, and can be turned off. A Plugins tab shows which skills Brain wrote and lets users choose which are enabled.

## Our read

Analysis: agents that learn your habits are only as good as their brakes. The cap of 10 skills and the human sign-off on shared skills are the right instincts; the open question is how this works once skills are shared across whole teams, which Perplexity says comes next.
