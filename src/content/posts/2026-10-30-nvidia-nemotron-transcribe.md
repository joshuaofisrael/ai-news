---
title: "NVIDIA opens a speech model that names who spoke"
description: "NVIDIA's Nemotron 3.5 Transcribe is an open-weight model for recorded audio in 40 languages, released with a larger Granary v2 speech dataset."
date: 2026-10-30T08:30:00.000Z
updated: "2026-10-30T08:30:00.000Z"
category: models-research
tags:
  - nvidia
  - open-models
  - speech
  - datasets
author: AI Headline Hub
draft: false
image:
  src: /images/stories/nvidia-nemotron-transcribe.webp
  alt: A studio microphone beside a laptop showing two coloured audio waveforms on a wooden desk, with no people, logos, or readable text.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/nvidia-nemotron-transcribe.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "NVIDIA Nemotron 3.5 Transcribe and Granary v2: Intelligent Multilingual Transcription You Can Prompt and Adapt"
    url: https://huggingface.co/blog/nvidia/nemotron-transcribe-granary
    publisher: NVIDIA on Hugging Face
  - title: "NVIDIA Nemotron 3.5 Transcribe: Intelligent Transcription with a Speech LLM"
    url: https://research.nvidia.com/labs/nemotron/NVIDIA-Nemotron-3.5-Transcribe/
    publisher: NVIDIA Research
  - title: "Granary-v2: Scalable Multilingual Speech Data Curation for Predictable and Controllable Model Outputs"
    url: https://research.nvidia.com/labs/nemotron/Granary-v2/
    publisher: NVIDIA Research
---

NVIDIA released Nemotron 3.5 Transcribe on October 28, 2026, an open-weight speech model that turns recorded audio into text and labels which speaker said what. The [launch post](https://huggingface.co/blog/nvidia/nemotron-transcribe-granary) says it transcribes 40 languages, translates 31 of them to or from English, and attributes speakers in 13. It works on recordings, not live audio, and NVIDIA lists a limit of about an hour per file and up to eight speakers. This desk did not run the model.

## How the model is built

NVIDIA's [research page](https://research.nvidia.com/labs/nemotron/NVIDIA-Nemotron-3.5-Transcribe/) describes a hybrid design that mixes Mamba layers with Transformer layers in a mixture-of-experts setup: about 30 billion parameters in total, with roughly 4 billion active at a time. That split is meant to keep it fast. NVIDIA says a forthcoming lower-precision version processed 100 hours of audio in under three minutes on a single RTX PRO 6000 card, measured on 30-second clips run many at a time. That is NVIDIA's figure on its own hardware.

## The scores NVIDIA reports

On the Open ASR leaderboard for English, NVIDIA reports a word error rate of 5.33%, which it says ranks first among open-weight models. On Artificial Analysis's word-error test it reports 2.8%, tied for first among open models. For telling speakers apart, it reports a diarization error rate of 18.26% across 21 languages on a David AI test set. A lower number is better on each. These are the company's numbers; results on other recordings, accents, or noisy rooms may be different.

## Granary v2, the dataset released with it

NVIDIA also published Granary v2, a speech dataset manifest. Its [dataset page](https://research.nvidia.com/labs/nemotron/Granary-v2/) lists 463,062 hours of audio across 48 languages, drawn from 16 corpora. The first Granary covered 25 languages. NVIDIA notes that these figures describe the dataset release, not the full mix of data used to train Transcribe. NVIDIA presents the release as material others can use to train or adapt their own speech models.

The launch post includes one adaptation example. NVIDIA says that fine-tuning the model on medical speech cut the word error rate on held-out medical audio from 22.44% to 12.17%, a relative drop of 45.8%, using about 14 GPU-hours on a GB300 system. That is a demonstration of training cost, not a clinical tool, and NVIDIA does not present it as one.

## Why it matters (analysis)

Most open speech models do one job: write down the words. A model that also separates speakers and translates, with weights anyone can download, could suit meeting notes, interviews, or archives where audio cannot leave a company's own servers. The limits matter too: recorded audio only, an hour at a time, and speaker labels in 13 of the 40 languages. More on [open models](/topics/open-models/) and [what an open-weight model is](/explainers/what-is-an-open-weight-model/).
