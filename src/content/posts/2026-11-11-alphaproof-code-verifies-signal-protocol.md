---
title: DeepMind's AlphaProof Code formally verifies the Signal protocol's code
description: Google DeepMind says its AlphaProof Code agents proved key security properties of Signal's cryptographic implementation in four weeks, a first at this depth.
date: '2026-11-11T14:45:00.000Z'
updated: '2026-11-11T14:45:00.000Z'
category: models-research
tags:
  - google-deepmind
  - alphaproof
  - signal
  - formal-verification
author: AI Headline Hub
draft: false
image:
  src: /images/stories/alphaproof-code-verifies-signal-protocol.webp
  alt: Glowing purple and cyan fiber-optic strands in close-up, no logos or text
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/alphaproof-code-verifies-signal-protocol.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: 'Introducing AlphaProof Code: a breakthrough in verifying complex software at depth'
    url: https://deepmind.google/blog/introducing-alphaproof-code/
    publisher: Google DeepMind
  - title: Google DeepMind on X
    url: https://x.com/GoogleDeepMind/status/2120484246401777737
    publisher: X
---

Google DeepMind said on 10 November that researchers used a new agentic framework, AlphaProof Code, to mathematically prove key security properties of the actual code behind the Signal protocol, the cryptography that protects conversations in apps such as Signal and Google Messages.

In a post on X the following morning, the lab wrote: "For the first time, AI has mathematically proven @signalapp’s protocol is secure down to the code level. Using our breakthrough AlphaProof Code framework, we verified the messaging app’s cryptographic system - which protects billions of private messages every day."

The [DeepMind blog](https://deepmind.google/blog/introducing-alphaproof-code/), by Pushmeet Kohli and Swarat Chaudhuri, goes further than the post. It says the work is the first time AI has been used to formally verify a widely deployed cryptographic protocol at this depth, and also "the first time the implementation of a widely deployed protocol like this has been formally verified by any method, with or without AI."

Formal verification means proving, in mathematics, that code meets stated properties, rather than relying only on tests or review. DeepMind says most protocol verification has historically stopped at the design level. AlphaProof Code aimed at the compiled implementation, including properties such as keeping messages protected before and after a device is temporarily compromised.

The framework splits the work the way a research team might. Human experts worked with models to translate Signal's security goals into formal specifications, and experts reviewed every specification. Agents powered by Gemini Carbon then produced the proofs, generating more than six million lines of Lean, a language used to check mathematical proofs about programs. The agents flagged about one percent of the codebase for a second human look; Lean automatically checked the rest, DeepMind says.

The lab says the verification took four weeks, "a task that historically takes expert teams years." To test whether the system can distinguish correct code from buggy code, researchers reintroduced two real, previously fixed bugs into an isolated version of Signal's code. In both cases, DeepMind says, the system produced a machine-checked proof that the buggy version was insecure.

Ehren Kret, Signal's chief technology officer, is quoted in the DeepMind post: "While prior formal verification focused on smaller portions of the code, Google DeepMind's approach enables significant expansion. Using AI agents to translate live code into valid Lean theorems is a major breakthrough. As AI-driven security threats grow, rigorously verifying the Signal protocol implementation gives us even greater confidence in our code's privacy guarantees."

DeepMind says it is open-sourcing the formal verification artifacts and a technical paper. The blog presents the result as groundwork for verifying other critical software, and mentions pairing the techniques with automated defense agents such as CodeMender. Those are stated research aims, not independent tests of other systems.

The announcement landed the same week Google made [Gemini 4 Carbon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/) widely available. That product post also describes AlphaProof Code as a Carbon-assisted formal verification project on Signal's protocol.
