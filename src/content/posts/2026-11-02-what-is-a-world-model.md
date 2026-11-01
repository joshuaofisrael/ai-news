---
title: "What is a world model? A plain guide to the idea behind Genie"
description: "A world model is an AI system that learns how an environment changes and predicts what comes next. Here is where the idea came from and what it can and cannot do."
date: 2026-11-02T11:00:00.000Z
updated: "2026-11-02T11:00:00.000Z"
category: models-research
tags:
  - explainer
  - world-models
  - research
  - deepmind
author: AI Headline Hub
draft: false
image:
  src: /images/stories/genie-4-world-model.webp
  alt: An empty sound stage with a blank dark screen, a camera on a tripod, and headphones on a stool, and no people, logos, or readable text.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/genie-4-world-model.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "World Models"
    url: https://arxiv.org/abs/1803.10122
    publisher: arXiv (Ha and Schmidhuber, 2018)
  - title: "Genie 3: A new frontier for world models"
    url: https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/
    publisher: Google DeepMind
  - title: "A Path Towards Autonomous Machine Intelligence"
    url: https://openreview.net/forum?id=BZ5a1r-kVsf
    publisher: OpenReview (LeCun, 2022)
---

A world model is an AI system that learns how an environment behaves, so it can predict what happens next when something changes. Give it the current state of a scene and an action, and it outputs its best guess at the next state. The term shows up in robotics, game research and video generation, and it is the label DeepMind uses for its [Genie 4 preview](/2026/10/29/genie-4-world-model/). This explainer sets out what the phrase means and where its limits are.

## Where the idea comes from

The modern use traces to a 2018 paper by David Ha and Jürgen Schmidhuber titled [World Models](https://arxiv.org/abs/1803.10122). Their system had three parts: a vision model that squeezed each video frame into a compact code, a memory model that predicted the next code, and a small controller that chose actions. The striking result was that an agent could be trained partly inside its own learned simulation, a "dream", and still perform in the real game environment.

The intuition is older than machine learning. People carry rough internal models of the world, which is why you can predict that a glass pushed off a table will fall.

## What a world model actually predicts

A language model predicts the next word. A world model predicts the next state of an environment. Depending on the system, that state might be:

- a compressed internal code, as in the 2018 paper
- the next video frame, as in interactive generators such as Genie
- an abstract representation that skips pixel detail, as Yann LeCun argues for in his [2022 position paper](https://openreview.net/forum?id=BZ5a1r-kVsf)

LeCun's argument is that predicting every pixel wastes effort on details that do not matter, such as leaf movement, and that a useful model should predict in a simpler learned space. Video generators take the opposite bet and render the full scene.

## Why labs care

There are three common reasons. First, training robots in the physical world is slow and can break hardware, so a learned simulator lets an agent practise cheaply. Second, a model that can predict consequences can plan by trying actions in its head before acting. Third, interactive generated worlds are a product in their own right, for games, film previsualisation and teaching. DeepMind's [Genie 3 post](https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/) frames its work around training agents in generated environments.

## The known weak spots

Every lab that ships one lists similar limits. Consistency drifts over long sessions, so an object that leaves the frame may come back changed. Physics is learned from data rather than written as equations, so unusual collisions and fluids can look wrong. Readable text inside scenes is unreliable. And a world model is only as good as what it has seen: it can be confidently wrong about situations far from its training data.

## How to read world model announcements

A useful checklist when a new system is announced:

1. Does it accept actions, or does it only generate video? Without actions it is closer to a video model.
2. How long does a session stay consistent, and does the company say?
3. Is there a public demo, a paper, or only a blog post?
4. Is any agent or robot result measured, or only described?

Those four questions separate a research milestone from a polished clip. For related terms, see [what is a large language model](/explainers/what-is-a-large-language-model/) and [what is an AI agent](/explainers/what-is-an-ai-agent/).
