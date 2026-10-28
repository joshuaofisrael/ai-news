---
title: "Axiom says agents produced a Lean proof of an enormous theorem"
description: "Axiom’s October 26 post says a 24-day project with AI agents formalized the classification of finite simple groups in about 43.1 million lines of Lean."
date: 2026-10-28T18:00:00.000Z
updated: "2026-10-28T18:10:00.000Z"
category: models-research
tags:
  - research
  - agents
  - mathematics
author: AI Headline Hub
draft: false
image:
  src: /images/stories/axiom-formalizes-enormous-theorem.webp
  alt: An empty reading room with a wiped chalkboard, closed books stacked spine-out of focus, and no people, logos, or readable titles.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/axiom-formalizes-enormous-theorem.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "Formalizing the Enormous Theorem"
    url: https://axiommath.ai/research/the-enormous-theorem-formalized/
    publisher: Axiom
  - title: "CFSG in Lean"
    url: https://cfsg.axiommath.ai/
    publisher: Axiom
  - title: "Classification of Finite Simple Groups in Lean"
    url: https://github.com/AxiomMath/CFSG/blob/main/README.md
    publisher: Axiom Math
---

Axiom says it has released a computer-checked proof of the classification of finite simple groups, a result mathematicians call the enormous theorem. The [research post](https://axiommath.ai/research/the-enormous-theorem-formalized/), dated October 26, 2026, says engineers and mathematicians at Axiom Math spent 24 days directing swarms of dozens of AI agents, and that the project produced about 43.1 million lines of code in the Lean proof assistant. The [project site](https://cfsg.axiommath.ai/) lists the same 43.1 million lines, along with 2.05 million declarations, 100 milestones, and 715 papers and books. This desk did not rebuild the development. The claims below are Axiom’s.

## What Axiom says was formalized

The classification says every finite simple group is one of a known list: cyclic groups of prime order, alternating groups on at least five symbols, groups of Lie type in sixteen infinite families, and 26 sporadic groups. Axiom’s post says the original argument runs about 15,000 pages across more than 500 articles by about 100 mathematicians. The [repository readme](https://github.com/AxiomMath/CFSG/blob/main/README.md) says the Lean 4 development, version 4.35.0-rc3, is sorry-free, which means it does not leave holes marked with Lean’s `sorry` placeholder. It says the proof uses Mathlib and TauCeti and the standard axioms `Classical.choice`, `propext`, and `Quot.sound`, and that it does not use `native_decide`. It follows the first-generation proof. The license line is Apache-2.0.

The readme prints the statement it says it took from the TauCeti project: every finite simple group is isomorphic to one of the explicitly constructed groups on the classification list. It says `lake build` builds the project, and that a few unreleased changes to Lake, which the authors plan to upstream, brought the build under 24 hours.

Axiom’s post says Lean checks each formal step, and that people still have to read the statement and its definitions to see that they express the intended theorem. A formalization can also take a different route from a historical paper and still reach the same claim. The post says that is what happened with one part of the argument.

{% figure "/images/inline/axiom-formalizes-enormous-theorem-1.webp", "A powered-off workstation in an empty office, a blank notebook beside the keyboard, with no people, logos, or readable screens.", "Axiom says the Lean development is sorry-free and uses three standard axioms." %}

## What the post says the agents found

The post says translation into Lean turned up problems in the published arguments. Most, it says, were small: typos, table errors, dropped hypotheses. It counts 34 noteworthy deviations. The largest, it says, concerned the Unbalanced Group Theorem.

Axiom says its agents found counterexamples to a closure step in John Walter’s 1986 memoir. The post says those counterexamples left a step unjustified and did not refute the theorem the argument was aiming at. Completing the formalization meant another justification. The post says the replacement uses ideas from Ronald Solomon’s 1976 theory of maximal 2-components, and that Richard Lyons and Ronald Solomon, group theorists who worked on the classification, were consulted. It calls the key new step Theorem 2.3, “Preservation of simple tops,” and says that result is a new theorem in group theory, proved by Axiom’s agent system and stated in an accompanying paper.

The same post says mathematicians at Axiom later found a shorter route, recorded as Remark 9.5, that reaches the needed conclusion without Theorem 2.3. The paper keeps the longer argument, Axiom says, because that is the route the agents formalized, and because it includes the extra theorem. The project site describes the same obstruction and the same theorem number.

The post says the work started from a proof map and from Lean already written, including about 1.2 million lines from a project it calls Qiuzhen-CFSG, on top of Mathlib. A Slack channel opened on October 1. The first swarm ran on October 2. The map, it says, split the job into 108 milestones and about 380 smaller tasks. The site’s public counter of milestones is 100. The post also says early work built on assumptions that had not been proved, and that tens of thousands of those lines were deleted.

{% figure "/images/inline/axiom-formalizes-enormous-theorem-2.webp", "Stacks of closed journals on a metal library cart, spines out of focus, in an empty aisle, with no readable titles or people.", "Axiom says the original classification runs about 15,000 pages." %}

## Why it matters (analysis)

Axiom’s account is a scale claim and a repair claim together: a first-generation proof, long enough that specialists have spent decades checking it, now has a Lean development Axiom says a machine can check, plus a list of places the published route needed a patch. The check the machine performs is the check Lean performs on the files Axiom published. Whether the formal statement is the theorem mathematicians mean, and whether a fresh build matches the readme, are questions this desk did not run. The post’s own sentence is the useful split: people inspect the statement, and Lean inspects the deductions.

[OpenAI’s October 26 manuscripts](/2026/10/27/openai-science-claims/) are a different kind of claim, proofs the company asked outsiders to review, not a Lean library of a known classification. [What is an AI agent?](/explainers/what-is-an-ai-agent/) is the term for the workers Axiom says it directed. The agent files are grouped on the [AI agent](/topics/ai-agents/) page.
