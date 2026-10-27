---
title: "OpenAI posts three claimed proofs and asks outsiders to check them"
description: "On October 26 OpenAI said internal models produced results in mathematics, complexity, and physics. It calls the manuscripts raw research data. Two are on GitHub."
date: 2026-10-27T08:30:00.000Z
updated: "2026-10-27T08:30:00.000Z"
category: models-research
tags:
  - openai
  - research
  - mathematics
author: AI Headline Hub
draft: true
image:
  src: /images/stories/openai-science-claims.webp
  alt: An empty chalkboard in a quiet office, the board wiped clean, with a closed notebook on the ledge and no people or writing.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/openai-science-claims.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "Working with academic communities to build scientific understanding"
    url: https://openai.com/index/building-scientific-understanding-with-academic-communities
    publisher: OpenAI
  - title: "Repository history, October 26, 2026 entry"
    url: https://github.com/openai/math/blob/main/history.md
    publisher: OpenAI
  - title: "Lean scope note for the Exponential Time Hypothesis manuscript"
    url: https://github.com/openai/math/blob/main/lean/docs/378.md
    publisher: OpenAI
  - title: "README, The Exponential Time Hypothesis is False"
    url: https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/README.md
    publisher: OpenAI
  - title: "README, Local smoothing for the Euclidean wave equation"
    url: https://github.com/openai/math/blob/main/preprints/Local-smoothing-for-the-Euclidean-wave-equation-October-25-2026/README.md
    publisher: OpenAI
  - title: "OpenAI announces three big science discoveries and a new way to work with academics"
    url: https://www.theverge.com/ai-artificial-intelligence/1019143/openai-eth-kaseya-science-math-physics
    publisher: The Verge
---

OpenAI said on October 26, 2026 that internal models produced three research results, in harmonic analysis, computational complexity, and quantum field theory. The [company post](https://openai.com/index/building-scientific-understanding-with-academic-communities) calls the manuscripts “a form of raw research data” and says outside specialists will try to turn that data into scientific understanding. The status of each result, on OpenAI’s own account, is a claim awaiting that work. This desk has not checked the arguments.

## Three ways of releasing the material

OpenAI says it asked external experts to act as shepherds and that those experts recommended three different releases. For the mathematics result, publish the model output and leave researchers free to organize their own explanations. For the complexity result, form an outside group to explain it and make the model output public. For the physics result, form an outside group and leave the release of materials to that group. OpenAI says it does not yet know which approach will be most useful.

The post lists four rules for the collaborations: the existence of each group is public, and participants will not be asked to sign nondisclosure agreements; OpenAI does not seek academic credit for discoveries it attributes to its internal models; the groups should be recognized for the explanations and other materials they produce; and participation is voluntary and unpaid, with conclusions that are the participants’ own. OpenAI says the groups do not speak for the company, and the company does not speak for them.

{% figure "/images/inline/openai-science-claims-1.webp", "A closed laptop and a blank notepad on a library table, with shelves soft in the background and no readable titles or people.", "OpenAI says the mathematics and complexity manuscripts are public. The physics materials are not." %}

## Mathematics and the Exponential Time Hypothesis

On mathematics, OpenAI says its models produced a proof of Christopher Sogge’s local smoothing conjecture in every dimension, and that this would also resolve the Kakeya conjecture and Stein’s restriction conjecture in all dimensions. It dates the model output to October 18, 2026 and a Lean formalization to the next day. The [GitHub history for October 26](https://github.com/openai/math/blob/main/history.md) describes the manuscript *Local smoothing for the Euclidean wave equation* as establishing Sogge’s local smoothing for waves in every spatial dimension of at least two, and as yielding the Kakeya maximal and dimension conjectures and Stein’s spherical restriction estimates through the interior of the conjectured range. The [preprint README](https://github.com/openai/math/blob/main/preprints/Local-smoothing-for-the-Euclidean-wave-equation-October-25-2026/README.md) dates that manuscript October 25, 2026 and names the author as OpenAI.

On complexity, OpenAI says a system proved the Exponential Time Hypothesis false and that the result was then checked in Lean. It dates the natural-language argument to October 16 and the Lean formalization to October 17. The repository history says the paper gives a deterministic algorithm that exactly counts satisfying assignments of fixed-width CNF formulas in subexponential time and polynomial space, and that the case of 3-SAT refutes the hypothesis. A [scope note](https://github.com/openai/math/blob/main/lean/docs/378.md) separates two bounds. It says Lean proves a stated subexponential counting bound for canonically encoded formulas of fixed width, with a polynomial space limit. It then says the October 25 manuscript gives a sharper time bound. The [manuscript README](https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/README.md) dates that file October 25.

OpenAI says the complexity work will be examined by a group led by Russell Impagliazzo and Ramamohan Paturi of UC San Diego and Ryan Williams of MIT. The history file says that group asked for the materials to be public immediately. [The Verge](https://www.theverge.com/ai-artificial-intelligence/1019143/openai-eth-kaseya-science-math-physics), in a story published October 26, reports that the group released an open letter. As The Verge describes it, the letter asks how early access to AI-generated results should work, how credit should cover checking and explaining as well as discovery, and how to support students as methods change.

## Physics materials stay with the shepherd group

OpenAI says the physics result is a mathematically rigorous existence argument for certain interacting quantum field theories in four dimensions that contain gauge fields and fermions, including quantum chromodynamics and a unified completion of the Standard Model. It says a subproblem is an existence proof for pure Yang–Mills theory, which it describes as part of the Clay Mathematics Institute’s Quantum Yang–Mills Millennium Prize problem. The post does not say the prize has been claimed. It dates a Yang–Mills argument to September 9, 2026, a quantum-chromodynamics argument to September 18, and a Yang–Mills Lean formalization to October 16. The shepherd group, OpenAI says, has decided to hold the AI-produced artifacts and write the work up itself. OpenAI names David Gross as the lead, with Michael Douglas, Arthur Jaffe, Igor Klebanov, and Nikita Nekrasov.

{% figure "/images/inline/openai-science-claims-2.webp", "An empty seminar room with a blank projector screen and chairs in rows, and no people, logos, or readable slides.", "OpenAI says the physics group will write its own account before the model output is released." %}

OpenAI also says the collaborations sit alongside a recently announced $5 million contribution to the Simons Foundation. It says the foundation will manage and award that money for workshops, conferences, and special programs on results produced by AI.

## Why it matters (analysis)

The release rules are part of the story. OpenAI is trying a different path for each claim, and it says choosing the first shepherds creates an asymmetry of information. Until the named groups, or other specialists working from the public files, publish their own conclusions, the accurate description is the one OpenAI uses for the files: raw output, with outside examination still to come. Readers following [OpenAI](/topics/openai/) can set this beside the company’s [account of frontier training without a live internet connection](/2026/10/25/openai-frontier-training-offline/).

Related reporting: [GPT-6.1 Terra](/2026/10/27/gpt-6-1-terra/)
