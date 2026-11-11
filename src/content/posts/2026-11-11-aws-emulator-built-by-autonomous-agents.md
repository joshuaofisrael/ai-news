---
title: AWS says autonomous AI agents wrote every line of its new local AWS Emulator
description: In a 11 November post, AWS senior principal engineer Matthew Goldberg said AWS Emulator, a local emulator of AWS services now available to download, was written entirely by autonomous agents and released on GitHub under a CC0 licence.
date: '2026-11-11T18:00:00.000Z'
updated: '2026-11-11T18:00:00.000Z'
category: industry-business
tags:
  - aws
  - amazon
  - ai-agents
  - developer-tools
author: AI Headline Hub
draft: false
image:
  src: /images/stories/aws-emulator-built-by-autonomous-agents.webp
  alt: Engineer seen from behind inspecting server racks with a flashlight, no logos or faces
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/aws-emulator-built-by-autonomous-agents.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: How we built the agents that built AWS Emulator
    url: https://www.aboutamazon.com/news/aws/how-autonomous-ai-agents-built-aws-emulator
    publisher: About Amazon / AWS
---

Amazon Web Services released AWS Emulator on 11 November, describing it as a local emulator of AWS services that developers can run on their own machines to build and test applications. In a [post on About Amazon](https://www.aboutamazon.com/news/aws/how-autonomous-ai-agents-built-aws-emulator), Matthew Goldberg, a senior principal engineer at AWS, said the emulator "was written entirely by autonomous agents" and that "our team hasn't written or reviewed any of the code." Those are AWS's own account of how the software was produced; they have not been independently audited here.

Goldberg said the project began as a weekend experiment after researchers at Anthropic showed that AI agents could autonomously build a C compiler. He wrote that he gave Amazon's Kiro coding agent a short prompt: write tests based on the AWS Command Line Interface, iterate until those tests passed against real AWS, then build an in-memory implementation that the same tests would pass against. According to the post, Kiro returned a first version of Amazon Simple Queue Service in about 15 minutes, and he then had it build "the rest of AWS over the weekend," with gaps that were still useful enough for his team to start using the result the following Monday.

Turning that experiment into a product, he wrote, meant putting guardrails around the agents. AWS Emulator is built by three teams of agents: one maintains a fidelity test suite against the real AWS cloud, one replays those tests to find where the emulator diverges, and one fixes individual issues. Goldberg said agents invent the tests from publicly released AWS API Models and verify each one against real AWS before submitting it. The post says the company now has tens of thousands of fidelity tests, and that when the repository was first created it was an empty web server that could handle requests for 438 AWS API Models but did nothing.

Each proposed fix, he said, has to pass a merge gate that blocks changes that do not compile, reviews coding standards, checks security, and tests that fidelity has not regressed. Goldberg wrote that thousands of issues are fixed every day as hundreds of agents work on the codebase concurrently. Changes are built and retested with AWS Developer Tools before a release branch is packaged as a downloadable binary. Only at the end of that process, the post says, is the code also published to GitHub.

AWS said it is releasing the source under a Creative Commons CC0 public-dedication licence so that people can inspect the agents' work, including a directory of issues the agents have fixed and a backlog of things that still do not work. Goldberg wrote that an earlier version of the system had the agents build their own Python interpreter to support AWS Lambda, and that the team has since told them to reuse existing libraries. The post is the first in a planned series on the multi-agent workflow, fidelity measurement, and quality and security checks. The availability, licence and internal process described above are as stated by AWS on 11 November.
