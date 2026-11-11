---
title: NVIDIA contributes OpenShell to the CNCF to govern autonomous AI agents
description: On 10 November, NVIDIA said it is contributing OpenShell, an open-source runtime for securing and governing autonomous agents, to the Cloud Native Computing Foundation as a CNCF Sandbox project.
date: '2026-11-11T18:40:00.000Z'
updated: '2026-11-11T18:40:00.000Z'
category: industry-business
tags:
  - nvidia
  - kubernetes
  - open-source
  - ai-agents
author: AI Headline Hub
draft: false
image:
  src: /images/stories/nvidia-openshell-cncf-sandbox.webp
  alt: Aerial view of a data centre campus with a power substation, no logos or faces
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/nvidia-openshell-cncf-sandbox.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: NVIDIA Expands Open Source Commitment With OpenShell Donation and New AI Infrastructure
    url: https://blogs.nvidia.com/blog/open-source-openshell-infrastructure/
    publisher: NVIDIA Blog
---

NVIDIA said on 10 November that it is contributing NVIDIA OpenShell, an open-source runtime for securing and governing autonomous agents, to the Cloud Native Computing Foundation, the Linux Foundation project that hosts KubeCon. In a [post on the NVIDIA Blog](https://blogs.nvidia.com/blog/open-source-openshell-infrastructure/) by Warren Barkley, the company said OpenShell is entering the CNCF as a Sandbox project, so it will be governed by the organizations building it into their products.

According to the post, OpenShell applies deterministic controls to what agents can do as they use tools, reach inference services and run workloads. NVIDIA said its architecture is extensible, so teams can connect their own compute, inference providers, credential storage and monitoring tools. The company also said hundreds of organizations have used OpenShell and that the project has received tens of thousands of contributions in less than a year since launch. Those figures are NVIDIA's account and have not been independently audited here.

Jim Zemlin, chief executive of the Linux Foundation, is quoted in the post saying the cloud-native community has a new infrastructure challenge: giving agents secure environments in which to operate, and that NVIDIA's contribution gives developers a shared foundation to build on.

NVIDIA said it is also contributing to Agent Substrate, an open-source framework originated by Google for running long-running agent workloads on Kubernetes, which has also been accepted into the CNCF Sandbox. The post says Agent Substrate can preserve agent environments between tasks while releasing compute when agents are idle, and that NVIDIA is working to make it work with NVIDIA Dynamo for model inference and KAI Scheduler for shared cluster resource allocation. NVIDIA and Google are also collaborating, the post says, on an integration of OpenShell and Agent Substrate.

The same announcement covers three new components of what NVIDIA calls the DSX AI Factory Platform: NVIDIA Kubernetes Engine (NVKE) and NVIDIA Kubernetes Recipes (NVKR), which the company said are now in public preview, and NVIDIA Snapshot, an open-source component that the post says can restore checkpointed replicas in seconds without reloading a model. NVIDIA said design partners Crusoe and Saturn Cloud evaluated Snapshot on NVIDIA HGX B300 systems. According to the post, Crusoe tested GLM-5.3 on Crusoe Cloud and reduced the time for the workload to become ready from roughly eight minutes to 31 seconds, and Saturn Cloud reduced vLLM startup times from between two and 8.5 minutes to between six and 34 seconds. Those timings are as reported by NVIDIA from the partners' tests.
