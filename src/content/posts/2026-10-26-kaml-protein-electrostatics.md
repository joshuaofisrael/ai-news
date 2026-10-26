---
title: "Protein language models estimate native pKa within about 0.5"
description: "University of Maryland researchers report in Nature Communications that protein language models estimated native-protein pKa with an error of about 0.5 units."
date: 2026-10-26T09:00:00.000Z
updated: "2026-10-26T14:30:00.000Z"
category: models-research
tags:
  - research
  - biology
  - proteins
  - models
author: AI Headline Hub
draft: false
image:
  src: /images/stories/kaml-protein-electrostatics.webp
  alt: An empty biochemistry bench with glassware, a closed notebook, and no people, labels, or readable screens.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/kaml-protein-electrostatics.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "Predicting protein electrostatics with protein language models"
    url: https://www.nature.com/articles/s41467-026-78406-y
    publisher: Nature Communications
---

A paper published in Nature Communications on October 24, 2026 says sequence-based networks built on protein language models can estimate the ionization constants of amino acids in native proteins with a root-mean-square error of about 0.5 units. The paper is [“Predicting protein electrostatics with protein language models,”](https://www.nature.com/articles/s41467-026-78406-y) by Mingzhe Shen, Guy W. Dayhoff II, Daniel Kortzak, and Jana Shen. Shen and Dayhoff are marked as equal contributors. All four list the Department of Pharmaceutical Sciences at the University of Maryland School of Pharmacy. The public article page carries the abstract, the affiliations, the funding note, and a competing-interests line. This account uses that page. It does not read values off figures, and it does not reconstruct methods from anywhere else.

The abstract’s models are called KaML-ESMs. They are trained on a dataset the authors call GAINES-augmented PKAD-3r. The abstract says KaML-ESM2 and KaML-ESMC outperform alternative approaches across four benchmarks, and that the error of about 0.5 units is for aspartic acid, glutamic acid, histidine, cysteine, tyrosine, and lysine residues in native proteins. The abstract does not name the four benchmarks or print a second error for a named baseline. “About 0.5” is the abstract’s rounding.

{% figure "/images/inline/kaml-protein-electrostatics-1.webp", "A rack of unlabeled sample vials beside a closed laptop on a lab bench, with no readable markings or people.", "The abstract’s error figure is about 0.5 pKa units for six residue types in native proteins." %}

## Where the abstract says the method weakens

The same paragraph reports a limit. Performance degrades on 89 buried engineered mutations that lack evolutionary support. The authors write that this reveals a limitation supervised training may help overcome. They then draw a broader inference: the results suggest that a protein sequence, through its evolutionary context, encodes not only structure and function but also, indirectly, electrostatic characteristics. That inference is their reading of the result. The 89 mutations are the failure case they chose to state in the abstract.

They say they applied KaML-ESM2 to the entire human proteome and that the predicted pKa values can identify functional sites and infer catalytic mechanisms. “We show” is their claim about that application. The abstract does not say every human protein was checked in a wet lab, and it does not give a count of sites flagged. They offer KaML as a sequence-based pKa prediction platform for biological exploration, protein engineering, and biomolecular simulation. The page does not print a web address for the platform.

A last sentence looks forward: with further development, GAINES could provide a general framework for data scarcity in machine learning. That is a possibility they name. It is not a result they say is finished.

{% figure "/images/inline/kaml-protein-electrostatics-2.webp", "An empty computer desk in a lab office, the monitor dark, a notebook shut, and no people or readable screens.", "The abstract says accuracy falls on 89 buried engineered mutations that lack evolutionary support." %}

## Who paid for the work, and what the page declares

The funding note says financial support came from the National Institutes of Health, grants R35GM148261 and R01CA256557. The acknowledgements thank Marius Wiggert, affiliated there with Biohub and formerly with EvolutionaryScale, for advice and for facilitating use of ESM3 and ESMC, and they thank Biohub for computational credits to run the ESMC forge. The competing-interests line says the authors declare none. A publisher’s note says Springer Nature remains neutral on jurisdictional claims.

## Why it matters (analysis)

The result, as the abstract states it, is a sequence-only estimate of a physical quantity that is usually tied to structure, with a stated error on native proteins and a stated miss on a set of engineered mutations. The evolutionary-context sentence is the authors’ interpretation of why the native cases work and the unsupported mutations do not. The human-proteome application is also theirs: the abstract says the predictions can identify functional sites and infer mechanisms. It does not, on this page, show the list of sites or a clinical test. Four unnamed benchmarks and a rounded error are enough to know what they claim, and not enough to re-rank the method against a table this page does not print.

This report is not medical, pharmacology, or laboratory advice. A predicted pKa is not a diagnosis or a protocol.

Related reporting: [what this desk means by a large language model](/explainers/what-is-a-large-language-model/), [a Nature comment arguing that current AI is not conscious](/2026/10/23/nature-comment-ai-not-conscious/), and [a Harvard Business School study of AI peer review](/2026/10/24/harvard-ai-peer-review-study/).
