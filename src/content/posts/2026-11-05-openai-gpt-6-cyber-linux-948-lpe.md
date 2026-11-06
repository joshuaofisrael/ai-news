---
title: "OpenAI launches GPT-6 Cyber after Linux run finds 948 privilege-escalation paths"
description: "OpenAI announced GPT-6 Cyber on 5 Nov 2026, saying the model powered a mid-October Linux pipeline that reproduced 1,724 vulnerabilities and produced 948 distinct LPE exploits and patches for about $1.2M in API cost."
date: 2026-11-05T23:20:00.000Z
updated: "2026-11-05T23:20:00.000Z"
category: models-research
tags:
  - openai
  - security
  - cyber
  - gpt-6
author: AI Headline Hub
draft: false
image:
  src: /images/stories/openai-gpt-6-cyber-linux-948-lpe.webp
  alt: Glowing padlock resting on a circuit board under cool lab lighting, with no faces logos or readable text.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/openai-gpt-6-cyber-linux-948-lpe.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "OpenAI on X: Introducing GPT-6 Cyber"
    url: https://x.com/OpenAI/status/2118390190246879554
    publisher: OpenAI on X, 5 Nov 2026
  - title: "OpenAI on X: 948 Linux LPE pipeline"
    url: https://x.com/OpenAI/status/2118119451401048497
    publisher: OpenAI on X, 4 Nov 2026
  - title: "GPT-6 Cyber: Advancing the frontier of aligned cybersecurity agents"
    url: https://openai.com/index/introducing-gpt-6-cyber/
    publisher: OpenAI, 5 Nov 2026
  - title: "A thousand fewer paths to root"
    url: https://openai.com/index/a-thousand-fewer-paths-to-root/
    publisher: OpenAI, 4 Nov 2026
  - title: "New OpenAI model targets 948 Linux security flaws"
    url: https://www.axios.com/2026/11/05/openai-linux-cyber-model
    publisher: Axios, 5 Nov 2026
  - title: "AI Agents Got Root on Linux via 948 Kernel Flaws in OpenAI Research"
    url: https://www.securityweek.com/ai-agents-got-root-on-linux-via-948-kernel-flaws-in-openai-research/
    publisher: SecurityWeek, 5 Nov 2026
  - title: "Cyber at the Frontier livestream"
    url: https://openai.com/cyber-at-the-frontier/
    publisher: OpenAI event page
---

OpenAI [announced GPT-6 Cyber on X](https://x.com/OpenAI/status/2118390190246879554) on 5 November 2026, saying the model is a major advance in security research that pairs stronger capabilities with better alignment. A [company blog the same day](https://openai.com/index/introducing-gpt-6-cyber/) said GPT-6 Cyber powered recent Linux and Firefox research and is initially available through the API and Codex to select Daybreak Red customers, with access expanding over time.

OpenAI’s launch post said:

> “Introducing GPT-6 Cyber: a major advance in security research that pairs stronger capabilities with better model alignment.”

## The Linux pipeline numbers OpenAI reported

A day earlier, OpenAI [posted](https://x.com/OpenAI/status/2118119451401048497) that its security researchers built an autonomous vulnerability discovery, exploitation and patching pipeline. In a single run with an upcoming cyber model, the company said the system validated and generated patches for 948 local privilege escalation (LPE) vulnerabilities in the Linux kernel at a total API cost of about $1.2 million.

The longer [research write-up](https://openai.com/index/a-thousand-fewer-paths-to-root/) dated 4 November 2026 puts the mid-October run’s end-to-end API cost at $1,213,430, or about $1,279 per LPE. OpenAI said the pipeline dynamically reproduced 1,724 vulnerabilities and produced 948 distinct LPE exploits and patches for a commonly used Linux distribution. Human researchers reviewed outputs before reporting findings and candidate patches, the company said, and hundreds of critical reports have already gone to maintainers under Patch the Planet guidance.

OpenAI also said the same model family work identified 81 previously unknown high-severity Firefox vulnerabilities, with Mozilla releasing fixes for many of them. Axios and SecurityWeek summarised the Linux and Firefox claims against OpenAI’s posts on 5 November 2026.

## Daybreak access and a 12 November livestream

OpenAI said GPT-6 Cyber is aimed at verified defenders through Daybreak Red, with Daybreak Blue positioned for vulnerability validation and fewer unnecessary refusals on mainline models. The company separately lists a [Cyber at the Frontier](https://openai.com/cyber-at-the-frontier/) live keynote for 12 November 2026 at 10:00 AM PT for further cyber product announcements.

## Caveats

Exploit counts, API costs, novel-technique claims, Firefox totals and access windows are OpenAI’s stated results from controlled research runs and product pages dated 4 to 5 November 2026. Independent reproduction of the full 948-LPE set was not reviewed for this piece. Treat the figures as company-reported research outcomes pending maintainer and third-party verification of individual patches.
