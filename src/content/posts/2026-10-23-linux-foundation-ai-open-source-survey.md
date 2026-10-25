---
title: "Survey: AI sped coding and added low-quality pull requests"
description: "LF Research’s survey of 234 open-source developers, released October 20, 2026, says code writing got faster while maintainers flag many weak pull requests."
date: 2026-10-23T09:20:00.000Z
updated: "2026-10-25T20:30:00.000Z"
category: industry-business
tags:
  - open-source
  - survey
  - maintainers
author: AI Headline Hub
draft: false
image:
  src: /images/stories/linux-foundation-ai-survey.webp
  alt: A wooden desk with two monitors showing blurred code, a stack of sticky notes, and an empty chair.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/linux-foundation-ai-survey.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: New LF Research survey on generative AI and open source
    url: https://www.linuxfoundation.org/press/new-lf-research-survey-shows-generative-ai-cuts-open-source-coding-time-in-half-but-25-of-incoming-pull-requests-are-considered-ai-slop
    publisher: The Linux Foundation
  - title: Navigating Open Source Software Development in the Generative AI Era
    url: https://www.linuxfoundation.org/hubfs/Research%20Reports/Navigating-Open-Source-Software-Development-in-the-Generative-AI-Era.pdf
    publisher: Linux Foundation Research
---

Linux Foundation Research said on October 20, 2026 that generative AI is saving open-source developers time and, in the same projects, filling review queues with work maintainers consider low quality. The [press release](https://www.linuxfoundation.org/press/new-lf-research-survey-shows-generative-ai-cuts-open-source-coding-time-in-half-but-25-of-incoming-pull-requests-are-considered-ai-slop) and the [report](https://www.linuxfoundation.org/hubfs/Research%20Reports/Navigating-Open-Source-Software-Development-in-the-Generative-AI-Era.pdf) are the source of every figure below. The announcement came during All Things Open in Raleigh, on October 19 and 20.

The study is a web survey of 234 contributors and maintainers, fielded from April through June 2026. It is not a clocked measurement of coding speed. People estimated their own time. The report states a margin of plus or minus 6.41 percentage points at a 95% confidence level. Respondents were reached through Linux Foundation newsletters and social channels and through partners including Red Hat, OpenSSF, Kaiyuanshe, GOSIM, and LF AI & Data. That is a survey of people those channels reached. The press release says the work was sponsored by Red Hat, with further support from Futurewei, OpenSSF, and LF AI & Data.

{% figure "/images/inline/linux-foundation-ai-survey-1.webp", "A conference badge and a closed laptop on a cafe table, with a blurred stage screen in the background and no readable names.", "The foundation presented the findings at All Things Open on October 20." %}

## Time saved, and pull requests maintainers do not want

The press release says 59% of maintainers report more contributions since generative AI spread, rising to 69% on large projects. It says 25% of incoming pull requests are estimated to be low-quality work, which the foundation calls “AI slop,” and 31% on large projects. The report’s executive summary uses the same 31% figure for large projects and says 64% of maintainers on those projects report longer reviews and name burnout as their main concern.

Average estimated time cuts, the press release says, run across the tasks measured, from 19% on proposal discussions to 52% on writing code. The report’s summary puts the range at 19% to 52% depending on the task. For high-complexity tasks, 21% of respondents said generative AI made the work take longer. The headline phrase “cuts open source coding time in half” tracks the 52% code-writing estimate, not every task.

Respondents said they put the saved time back into the project: 66% into technical debt, 63% into new features, and 58% into learning. The press release’s list is the one used here. The report’s executive summary ties a 66% reinvestment figure, for maintainers, to technical debt specifically.

{% figure "/images/inline/linux-foundation-ai-survey-2.webp", "A maintainer’s desk with a pull-request list blurred on a screen, a red pen, and a mug, and no person in the frame.", "Maintainers estimated that about a quarter of incoming pull requests were low quality." %}

## Policy is still missing in most projects

Seventy-one percent of maintainers agree that generative AI lowers the barrier to contributing. Fifty-three percent disagree that it has improved trust in the community. Forty-six percent say it increases the need to mentor new contributors, and 32% say it decreases that need.

Only 35% of projects have a formal policy that permits generative AI. Thirty-two percent have no policy and no plan to write one. The report adds that 10% explicitly prohibit it, and that 23% plan a policy later. Among contributors, 61% said they do a detailed review and full functional testing of AI-generated code before submitting it. The report says disclosure is less consistent: 52% mark AI-assisted work most of the time or always, and 19% never do.

Hilary Carter, the foundation’s senior vice president of research, said projects should “design for a growing AI-generated contributor base, not simply react to it,” and put testing and disclosure on the contributor. The report’s own recommendations match that: a written policy, required testing, and a standard way to attribute AI help, with the Linux kernel’s “Assisted-by” commit trailer offered as one format.

The foundation also discloses that its research team uses generative AI for tasks such as gathering sources, drafting, copyediting, and translation, and that people review that output. The survey findings are the respondents’ estimates, with the limits of a 234-person opt-in sample.

Related reporting: [a Harvard working paper comparing AI reviews with paid human reviews](/2026/10/24/harvard-ai-peer-review-study/) and [Torsten Slok’s note on revenue per worker](/2026/10/25/slok-ai-payoff-outside-tech/).
