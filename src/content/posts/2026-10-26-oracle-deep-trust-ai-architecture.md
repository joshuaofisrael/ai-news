---
title: "Oracle pitches a 'Deep Trust' security stack for database AI agents"
description: "At Oracle AI World, Oracle unveiled a four-layer Deep Trust AI Architecture meant to stop AI agents from seeing data they should not, with some tools free or discounted until February 2027."
date: 2026-10-26T18:00:00.000Z
updated: "2026-10-26T18:00:00.000Z"
category: tools-products
tags:
  - enterprise
  - security
  - agents
  - oracle
author: AI Headline Hub
draft: false
image:
  src: /images/stories/oracle-deep-trust-ai-architecture.webp
  alt: A heavy steel vault door standing ajar inside a server room, with no people, logos, or readable text.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/oracle-deep-trust-ai-architecture.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "Oracle announces Deep Trust AI Architecture to help enterprises innovate with confidence"
    url: https://www.oracle.com/news/announcement/ai-world-oracle-announces-deep-trust-ai-architecture-to-help-enterprises-innovate-with-confidence-2026-10-26/
    publisher: Oracle
---

Oracle used its AI World conference in Las Vegas on October 26 to [announce](https://www.oracle.com/news/announcement/ai-world-oracle-announces-deep-trust-ai-architecture-to-help-enterprises-innovate-with-confidence-2026-10-26/) what it calls the Deep Trust AI Architecture. It is a set of database and development features meant to let companies connect [AI agents](/topics/ai-agents/) to business data without exposing records the agent, or the user behind it, should not see.

## Four layers

Oracle describes four layers: platform, data, data access and application development.

- **Platform:** Autonomous AI Database automatically applies security patches.
- **Data:** SQL Assertions let developers write rules across tables that the database enforces, so bad data is rejected even when an agent writes it.
- **Data access:** Deep Data Security uses signed directory tokens to identify the end user and applies access rules on every SQL request, including those an agent creates. Deep Trust Data APIs give agents a governed path to the data.
- **Application development:** Deep NL2SQL turns plain-language questions into SQL, with what Oracle calls Continuous Feedback Learning and Knowledge Change Verification. The APEX AI Application Generator produces apps in a format Oracle calls APEXlang.

{% figure "/images/inline/oracle-deep-trust-ai-architecture-1.webp", "A dark, empty office at night with a desk lamp, a closed laptop and a hardware security key, with no people or readable screens.", "Oracle says access rules are checked on every SQL request, including those an agent writes." %}

Oracle says some of the security and patching tools will be free or discounted until February 2027. "AI trust is the biggest challenge we face today," Juan Loaiza, Oracle's executive vice president for mission-critical database technologies, said in the release.

{% figure "/images/inline/oracle-deep-trust-ai-architecture-2.webp", "Bundled network cables plugged into a patch panel with glowing indicator lights, with no people, logos, or readable labels.", "The architecture covers four layers: platform, data, data access and application development." %}

## Why it matters (analysis)

Most agent security work focuses on prompts and models. Oracle's bet is that enforcement belongs in the database, where permissions already exist. That approach suits companies already running Oracle, and the free and discounted period is clearly designed to encourage adoption. The announcement does not include independent tests. Buyers will want to see how token-based checks perform under real agent workloads. For context on agent risk, see our [AI safety](/topics/ai-safety/) coverage and the [UK test of Mythos's cyber abilities](/2026/10/25/aisi-mythos-cyber-test/).

Related reporting: [Google Cloud's agent compute engine](/2026/10/23/google-cloud-agent-compute-engine/) · [OpenAI's Decisions API](/2026/10/23/openai-decisions-api-generally-available/)
