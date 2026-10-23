---
title: OPAL lets a coding agent rewrite the optimizer while a model trains
description: A new PyTorch package, OPAL, lets Claude Code edit optimizer code during a training run. The authors’ blog says most of the reported runs were done once.
date: 2026-10-23T09:40:00.000Z
updated: 2026-10-23T09:40:00.000Z
category: models-research
tags:
  - research
  - training
  - agents
author: AI Headline Hub
draft: true
image:
  src: /images/stories/opal-optimizer.webp
  alt: A GPU workstation on a lab bench with its side panel off, cables visible, and a dark monitor showing a loss curve too blurred to read.
  credit: AI-generated image, AI Headline Hub
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/opal-optimizer.jpg
  licence: Generated for AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: Reactive Optimizers
    url: https://xingjianbai.com/reactive-optimizers/
    publisher: Xingjian Bai, Jia-Hao Liang, Jayden Teoh, and Vincent Sitzmann
  - title: OPAL repository README
    url: https://github.com/xingjian-bai/opal
    publisher: xingjian-bai/opal
  - title: Vincent Sitzmann faculty page
    url: https://www.csail.mit.edu/person/vincent-sitzmann
    publisher: MIT CSAIL
---

Four researchers have released OPAL, a PyTorch wrapper that lets a coding agent change how a neural network’s weights are updated while training is underway. The write-up is a [blog post, “Reactive Optimizers,”](https://xingjianbai.com/reactive-optimizers/) by Xingjian Bai, Jia-Hao Liang, Jayden Teoh, and Vincent Sitzmann, dated October 2026. The code is in a public [GitHub repository](https://github.com/xingjian-bai/opal) under the MIT license, imported as `opal` and published on PyPI as `opal-optimizer`.

This is the authors’ report of their own runs. It is not a peer-reviewed paper. They say most experiments were run once, and a few three times. A result in the post can move if the agent chooses a different edit on a second run.

Sitzmann is an associate professor at MIT’s Computer Science and Artificial Intelligence Laboratory, according to his [faculty page](https://www.csail.mit.edu/person/vincent-sitzmann). The blog does not present OPAL as an official MIT release. The post thanks Phillip Isola and the Isola lab for comments on an earlier draft.

{% figure "/images/inline/opal-optimizer-1.webp", "A printed training log beside a keyboard, with a graph line trending down and no readable project name.", "The authors say the agent watches training statistics and may rewrite the update rule mid-run." %}

## What the agent is allowed to change

OPAL stands for “OPtimizer with an Agent in the Loop.” The README says the default agent is Claude Code. Every so often it reads a report from the run and may rewrite two small programs: `updater.py`, which turns gradients into weight updates, and `analysis.py`, which measures whatever the agent decides to watch. Until it edits something, the authors say the wrapped run matches the plain optimizer bit for bit.

The agent is asked not to touch the model, the data, the loss, the batch size, the number of steps, or the evaluation. The README is explicit that this is an instruction, not a sandbox: the programs run inside the training process. A new updater is tried for 20 steps. If it errors on the first step, and a snapshot of the parameters fits in a default 2 gigabyte limit, the step is undone. A later failure is not rolled back. The agent cannot restart the run.

Training waits for the agent unless `blocking` is set to false. The README says a decision took about 40 seconds on average in the authors’ runs. There is no spend cap unless the caller sets `max_cost_usd`. An experimental Codex backend is documented; the authors say the dollar cap does not apply to it.

{% figure "/images/inline/opal-optimizer-2.webp", "Two small code windows on a monitor, out of focus, above a GPU with its fans visible in a quiet lab.", "The interface is two files the agent can edit: one for measurements, one for the weight update." %}

## The numbers they report, and the limits they state

The blog’s claim is narrow: when nobody has tuned a recipe for a setting, a reactive optimizer matched or beat the off-the-shelf alternative in the runs they show.

On a Goldfish language-model setup, a 125 million parameter GPT trained on Amharic, they say the official recipe ended at 83.48 bits per sentence on held-out FLORES-200 text, and OPAL, started from that recipe, ended at 81.11. A learning-rate sweep of the static recipe reached 80.89. OPAL started from that swept point reached 80.73. Lower is better. They report a similar gain on Swahili. The README’s table lists the Swahili official recipe at 79.37 bits and the reactive run at 77.25.

On image generation, they say LightningDiT-XL/1 finished at an FID-50K of 1.83 with guidance against 2.18 for the official recipe, and 4.33 against 5.15 without guidance. RAEv2-B finished at 3.19 against 3.39. The README adds a SiT-B/2 run at 23.6 against 35.7 on the authors’ evaluator, and a LightningDiT-B/1 run at 2.31 against 3.22 with guidance. Each README row is labeled as one run.

They also describe a ResNet-18 trained on CIFAR-10 with 10% of the training labels flipped. OPAL’s final weights, an average chosen on a development set, reached test loss 0.685 and accuracy 78.6%. The AdamW run they started from ended at loss 2.493 and accuracy 73.5%, and assigned the wrong training label to every mislabeled image. OPAL assigned that wrong label 3.7% of the time and the true label 77.5% of the time. That comparison is one setting, described in the post.

{% figure "/images/inline/opal-optimizer-3.webp", "A single graphics card on a lab bench next to a notebook with handwritten loss figures, and no people.", "The authors say the token bill was small next to GPU time on the runs they priced, and impractical if counted in raw compute." %}

The cost example they give is one LightningDiT run: about 100 decisions, $6.42 at Claude Opus 5.5 list price, on top of about 74 hours of H100 time, which they price at about $510 at AWS’s on-demand rate. They say that, counted in floating-point operations, a reactive optimizer is impractical because frontier agents are so large. Gains shrink, they write, when the run is short and the recipe is already heavily tuned. The README records a modded-nanogpt run on version 0.2.0 that finished at validation loss 3.2878, worse than the record it started near. Multi-node training, FSDP, and DeepSpeed are not supported. The package version in the README read for this story was 0.3.7.

The useful reading is the one the authors put on the page: OPAL is a bet that an agent can spend tokens in place of a hyperparameter sweep, on tasks where no sweep exists yet. The evidence they published is mostly a single pass through each task.
