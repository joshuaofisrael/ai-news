---
title: NVIDIA, Rebellions and SK Telecom team up on Korean sovereign AI inference racks
description: Rebellions will connect its R200 NPUs to NVIDIA's platform through NVLink Fusion, and SK Telecom plans to deploy the systems in its AI data center, with R200 systems expected in 2028.
date: '2026-11-09T12:00:00.000Z'
updated: '2026-11-11T19:15:00.000Z'
category: industry-business
tags:
  - nvidia
  - rebellions
  - sk-telecom
  - sovereign-ai
  - nvlink-fusion
  - inference
author: AI Headline Hub
draft: false
image:
  src: /images/stories/nvidia-rebellions-sk-telecom-sovereign-ai.webp
  alt: Long corridor of server racks glowing blue in a dark data center
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/nvidia-rebellions-sk-telecom-sovereign-ai.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: NVIDIA, Rebellions and SK Telecom Announce Collaboration to Advance Sovereign AI Infrastructure With NVIDIA NVLink Fusion
    url: https://nvidianews.nvidia.com/news/nvidia-rebellions-and-sk-telecom-announce-collaboration-to-advance-sovereign-ai-infrastructure-with-nvidia-nvlink-fusion
    publisher: NVIDIA Newsroom
---

NVIDIA, Korean chip startup Rebellions and SK Telecom announced a collaboration on November 8 to build sovereign AI infrastructure for South Korea, according to [NVIDIA's newsroom](https://nvidianews.nvidia.com/news/nvidia-rebellions-and-sk-telecom-announce-collaboration-to-advance-sovereign-ai-infrastructure-with-nvidia-nvlink-fusion). The plan pairs Korean-designed inference chips with NVIDIA's rack-scale networking, and it is backed by Korea's Ministry of Science and ICT (MSIT).

## Who does what

Rebellions will use NVIDIA NVLink Fusion to connect its next-generation Rebel R200 neural processing units (NPUs) to the NVIDIA platform. It will also use the NVIDIA MGX rack architecture to develop rack-scale systems. NVIDIA says the MGX ecosystem gives Rebellions access to an existing supply chain of original design manufacturers and component suppliers.

SK Telecom plans to deploy the systems in its AI data center. It will link them to its own foundation models, including A.X K2, and to public-facing services built under the government's "AI for All" project.

## Splitting inference between GPUs and NPUs

The companies plan to work on disaggregated inference, which means giving different stages of answer generation to the processor best suited to each one. Their planned approach uses NVIDIA GPUs for prefill and Rebellions NPUs for decode, with the stated aim of improving inference throughput and power efficiency.

Rebellions says the R200 is designed for low-latency, energy-efficient inference on frontier models, including multitrillion-parameter mixture-of-experts models. Inside a rack, R200 chips will connect through NVIDIA's NVLink scale-up networking. Because GPU and NPU systems built on MGX share rack footprint, power delivery and cooling designs, the companies say this can make data center planning easier.

## What the executives said

"With NVLink Fusion, Korea's chipmakers can connect their custom ASICs to NVIDIA's AI factory platform, tightly coupling their processors with NVIDIA compute to run AI workloads," said NVIDIA founder and CEO Jensen Huang.

Rebellions cofounder and CEO Sunghyun Park said the partners "will deliver low-latency and energy-efficient inference for frontier models at scale." SK Telecom president and CEO Jung Jai-hun said the collaboration "validates the potential of next-generation sovereign AI infrastructure by combining global AI infrastructure technology with Korean AI semiconductors."

Bae Kyung-hoon, Korea's Deputy Prime Minister and Minister of Science and ICT, said the government "will actively support this collaboration" and pursue further cooperation with NVIDIA, including on physical AI and securing GPU supply. MSIT says the program starts with Rebellions and SK Telecom.

## Timing

According to the release, Rebellions' R200 systems are expected to be ready for deployment in 2028. The companies did not give deployment volumes or performance figures.

NVIDIA has also described a separate open-source project: it is [contributing OpenShell to the CNCF as a Sandbox project](/2026/11/11/nvidia-openshell-cncf-sandbox/) to help govern autonomous agents.
