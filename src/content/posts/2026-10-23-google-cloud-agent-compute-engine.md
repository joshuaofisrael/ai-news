---
title: Google Cloud previews Agent Compute Engine, a microVM built for agents
description: Google Cloud says Agent Compute Engine will give agents hardware-isolated microVMs. The service is a preview planned for the coming months, not a launch today.
date: 2026-10-23T10:40:00.000Z
updated: 2026-10-23T10:40:00.000Z
category: tools-products
tags:
  - google-cloud
  - agents
  - infrastructure
author: AI Headline Hub
draft: true
image:
  src: /images/stories/agent-compute-engine.webp
  alt: A rack of compact servers in a dim data hall, each with a small status light, and an empty aisle in front.
  credit: AI-generated image, AI Headline Hub
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/agent-compute-engine.jpg
  licence: Generated for AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: Introducing Agent Compute Engine and expanding agent governance
    url: https://cloud.google.com/blog/topics/ai-infrastructure/introducing-agent-compute-engine-and-expanded-agent-governance
    publisher: Google Cloud
---

Google Cloud said on October 22, 2026 that it is launching Agent Compute Engine, a compute service it built for AI agents, and that it is stretching Gemini’s agent-governance tools beyond Google’s own runtimes. The [blog post](https://cloud.google.com/blog/topics/ai-infrastructure/introducing-agent-compute-engine-and-expanded-agent-governance) says the engine already runs Gemini when it acts as an agent for work tasks. For other customers, it “will be available in preview in the coming months.” It is not generally available.

The authors are Nirav Mehta, Michael Bachman, and Kevin Hutchins, all vice presidents of product or general managers. They said the announcement was made at an event they call AGNTCon + MCPCon. They argue that moving from a single prompt to a long-running agent is an infrastructure problem: agents start, pause, and resume, and they execute code that the operator may not trust.

{% figure "/images/inline/agent-compute-engine-1.webp", "A technician’s empty workbench with a single server tray pulled out, cables coiled, and no faces or badges visible.", "Google says each agent session gets its own microVM, paused while the agent is waiting." %}

## What Google says the microVM does

Agent Compute Engine gives each Gemini agent its own computer, Google says. The microVMs boot quickly. Idle ones are paused with a checkpoint and restored when the agent has something to do again, including while it waits on a person or an outside system. Several agents can share one operating-system template through copy-on-write memory.

On security, the post says the service uses Titanium, which Google calls an offload infrastructure processing unit, and a hardware-isolated Cloud Hypervisor boundary with its own guest kernel. Each microVM has its own identity and short-lived credentials. Service credentials are injected on the way out, outside the microVM. A cryptographically verified ID is assigned to each one. Storage is a Hyperdisk so a workspace can persist. Google says enterprise connections use the same identity model as the microVM.

Those are design claims in a product blog. Google did not publish an outside security review with the post. Gautham Thambidorai, a Google fellow who works on Gemini, is quoted saying the microVMs supply the responsiveness, hardware isolation, and density needed to offer interactive sandboxes worldwide. That sentence describes Google’s own use.

{% figure "/images/inline/agent-compute-engine-2.webp", "A Kubernetes-style cluster diagram drawn on a glass wall in a real office, photographed so the writing is out of focus.", "A separate open-source runtime, Agent Substrate, is aimed at teams that already run Kubernetes." %}

## A Kubernetes path, with Google’s own benchmark

For teams that want Kubernetes, Google is offering Agent Substrate on Google Kubernetes Engine. It describes the project as open source and able to run on any Kubernetes cluster, with any agent framework, and it names Claude Code, OpenClaw, and Hermes as examples. When an agent goes idle, the runtime snapshots memory and returns the machine to a pool.

Google’s benchmark, as stated in the post: in a validation run of 200,000 agents, Agent Substrate sustained 500 activations per second with suspend-and-resume latency under 500 milliseconds. It also says the runtime can reach as much as 10 times the compute density of “traditional compute” while keeping kernel isolation. Those figures are Google’s. The post does not describe the hardware, the comparison system, or an independent rerun.

Hervé Bizira, chief business officer of Nous Research, is quoted saying Hermes Enterprise uses Agent Substrate for per-agent isolation inside customer infrastructure. That is a customer statement in Google’s post.

## Governance, still mostly preview

Google says organizations moving agents into production have to control non-deterministic paths, keep a default-deny posture, and audit actions that happen asynchronously. The tools it already lists are an Agent Gateway for traffic and policy, an Agent Registry of approved agents and tools, an Agent Identity based on SPIFFE, and OpenTelemetry-style traces.

The new reach is the part that is not finished. Google says governance is extending across Agent Runtime, Cloud Run, Gemini sandboxes, GKE, and Agent Compute Engine. Cross-cloud enforcement, using Envoy proxies, is “in preview soon.” So is governance for local coding agents such as Claude Code and the Antigravity CLI on managed devices. Features due this quarter, also in preview, include token budgets, model-routing policies, and service-extension hooks. Delegated authorization is named for Ping Identity, SailPoint, and Saviynt.

{% figure "/images/inline/agent-compute-engine-3.webp", "A badge reader and a closed server-cage door in a data-center lobby, with nobody walking through.", "Google says identity and policy are meant to follow an agent off a single cloud. Much of that reach is still a preview." %}

Alexandre Frizzo, an AI lead engineer at L’Oréal, is quoted saying Google’s governance lets the company’s Beauty Tech Agentic Platform keep a common identity and policy across runtimes such as Cloud Run. As with the other quotations, that is the customer’s statement in Google’s blog, not a test this desk ran.

The practical line for a buyer: Agent Compute Engine is a preview scheduled for the coming months, Agent Substrate is the piece Google says can be tried on GKE now, and several governance extensions are explicitly not available yet.
