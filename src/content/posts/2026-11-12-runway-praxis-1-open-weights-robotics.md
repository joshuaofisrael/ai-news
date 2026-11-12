---
title: Runway releases Praxis-1 robot model with open weights under Apache 2.0
description: Runway's 27B-parameter Praxis-1, which predicts video and robot actions together, is now downloadable for commercial use under Apache 2.0.
date: '2026-11-12T12:10:00.000Z'
updated: '2026-11-12T12:10:00.000Z'
category: models-research
tags:
  - runway
  - robotics
  - open-models
  - open-source
author: AI Headline Hub
draft: false
image:
  src: /images/stories/runway-praxis-1-open-weights-robotics.webp
  alt: White robotic arm handling a vial in a bright research lab, no logos or readable text
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/runway-praxis-1-open-weights-robotics.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: Praxis-1 Is Now Available
    url: https://runway.com/news/company-news/praxis-1-is-now-available
    publisher: Runway
    date: '2026-11-11'
  - title: 'Praxis-1: From Video Pretraining to Robot Control'
    url: https://runway.com/research/praxis-1-video-pretraining-to-robot-control
    publisher: Runway Research
    date: '2026-11-11'
  - title: Praxis-1 collection
    url: https://huggingface.co/collections/runwayml/praxis-1
    publisher: Hugging Face
    date: '2026-11-11'
---

Runway on 11 November made Praxis-1, its model for controlling robots, available to everyone with open weights. In its [launch post](https://runway.com/news/company-news/praxis-1-is-now-available), the company said the weights and the inference and fine-tuning code are released under the Apache 2.0 licence, including for commercial use. Runway first introduced Praxis-1 in September and says launch partners have been running it on a legged humanoid, a six-axis industrial arm and a dual-arm warehouse robot.

Runway calls Praxis-1 a world action model: it predicts what a scene will look like next and the motion needed to get there at the same time. The [Runway research write-up](https://runway.com/research/praxis-1-video-pretraining-to-robot-control) says it is built on the company's video foundation model, a mixture-of-experts diffusion transformer with about 27 billion parameters, of which roughly 2.8 billion are active per token, plus a separate action expert of about 314 million parameters. Each call returns a chunk of predicted video and 1.6 seconds of actions.

On performance, Runway says Praxis-1 tops NVIDIA's RoboLab-120 leaderboard among world action models, reaching 46.2% success over 1,200 episodes against 42.9% for FLUX 3 Action and 28.0% for π0.5. It also reports 80.0% success on SimplerEnv after fine-tuning on Google's RT-1 robot, which was not in its training data, compared with 52.4% for the original RT-1 policy. These are Runway's figures.

The checkpoints are published in a [Hugging Face collection](https://huggingface.co/collections/runwayml/praxis-1) that includes a base model plus versions for single-arm DROID and bimanual YAM rigs, LeRobot layouts and 4-bit NVFP4 variants. Runway says the model supports full fine-tuning and LoRA and runs on NVIDIA hardware from data centre GPUs down to Jetson Thor on the robot itself, with hosted inference also offered.
