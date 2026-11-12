---
title: Google DeepMind releases AlphaGenome 2, predicting DNA variant effects cell by cell
description: AlphaGenome 2 predicts how DNA variants act in specific cell types and finds nearly twice as many expression-changing variants, DeepMind says.
date: '2026-11-12T12:55:00.000Z'
updated: '2026-11-12T12:55:00.000Z'
category: models-research
tags:
  - google-deepmind
  - deepmind
  - research
  - genomics
author: AI Headline Hub
draft: false
image:
  src: /images/stories/alphagenome-2-cell-type-dna-variant-model.webp
  alt: Scientist seen from behind at a microscope beside a molecular structure on a monitor, no logos or readable text
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/alphagenome-2-cell-type-dna-variant-model.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: 'AlphaGenome 2: Deciphering how cells read DNA to better understand disease'
    url: https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/
    publisher: Google DeepMind
    date: '2026-11-11'
  - title: Google's AlphaGenome 2 zooms in on the cellular roots of disease
    url: https://www.theverge.com/ai-artificial-intelligence/1031524/google-deepmind-alphagenome-2-genetic-ai-model
    publisher: The Verge
    date: '2026-11-11'
  - title: 'Demis Hassabis on X: AlphaGenome 2'
    url: https://x.com/demishassabis/status/2120565316619284734
    publisher: X
    date: '2026-11-11'
---

Google DeepMind on 11 November announced AlphaGenome 2, a new version of its DNA sequence model that predicts how genetic variants change activity inside specific human cell types. In a [DeepMind blog post](https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/), the team said the model is available that day for non-commercial research through the AlphaGenome API, with commercial research in private preview. DeepMind chief executive Demis Hassabis [shared the release on X](https://x.com/demishassabis/status/2120565316619284734), describing it as available for academic research via the API.

The first AlphaGenome worked from broad tissue averages. DeepMind says the new model is conditional: alongside a stretch of DNA up to a million letters long, it takes the target tissue, cell type or cell state as an input at every stage, so it can learn how the same sequence is read differently in, for example, heart muscle cells and immune cells. That design also lets it fill gaps in experimental data. Given one measurement such as single cell gene activity, the model can predict an unmeasured one such as chromatin accessibility.

According to DeepMind, AlphaGenome 2 was trained on bulk and single cell data from human and mouse samples, including more than 107 million individual cell profiles across 68 tissues. It predicts the same readouts as the original, including gene expression, histone modifications and chromatin accessibility, and adds DNA methylation. The company says it identifies nearly twice as many variants that change gene expression in cells as its previous model; on the TenK10K immune cell dataset it cites 30% of causal variants found versus 16% before.

[The Verge reported](https://www.theverge.com/ai-artificial-intelligence/1031524/google-deepmind-alphagenome-2-genetic-ai-model) that the new model will not replace the original soon. DeepMind genomics lead Žiga Avsec told the outlet its finer predictions are more expensive to compute, which is why the genome-wide AlphaGenome Atlas released in September was built with the earlier model.

DeepMind states that AlphaGenome and AlphaGenome 2 are for research use only and have not been validated or approved for clinical or diagnostic purposes. The results described here are the company's own and have not been independently replicated by AI Headline Hub.
