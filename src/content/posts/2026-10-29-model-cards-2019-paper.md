---
title: "Model cards: the short record a 2019 paper asked labs to ship"
description: "Mitchell and coauthors proposed one- to two-page model cards in 2019. A Google course and Hugging Face’s Hub docs still point to that kind of record."
date: 2026-10-29T19:00:00.000Z
updated: "2026-10-29T19:00:00.000Z"
category: models-research
tags:
  - models
  - research
  - documentation
author: AI Headline Hub
draft: false
image:
  src: /images/stories/model-cards-2019-paper.webp
  alt: A closed folder, a stack of blank cards, and a closed notebook on a wood desk, with no people, logos, or readable writing.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/model-cards-2019-paper.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "Model Cards for Model Reporting"
    url: https://arxiv.org/abs/1810.03993
    publisher: arXiv
  - title: "Model Cards"
    url: https://huggingface.co/docs/hub/model-cards
    publisher: Hugging Face
  - title: "ML pipelines"
    url: https://developers.google.com/machine-learning/managing-ml-projects/pipelines
    publisher: Google for Developers
---

A model card, in the paper that named it, is a short document that travels with a trained model and says what the model is for, who it is for, and how it behaved on the tests the authors chose to show. [“Model Cards for Model Reporting”](https://arxiv.org/abs/1810.03993) was presented at the FAT* conference in Atlanta from January 29 to 31, 2019. The authors are Margaret Mitchell, Simone Wu, Andrew Zaldivar, Parker Barnes, Lucy Vasserman, Ben Hutchinson, Elena Spitzer, Inioluwa Deborah Raji, and Timnit Gebru. The arXiv identifier is 1810.03993. The paper says the card should run about one to two pages.

## What the paper says belongs on the card

The authors write that trained models were going into use without a standard way to report performance, and that the gap shows up when a system is used in settings with serious effects on people’s lives, including health care, employment, and education. A card, they say, should make the intended context clear, describe how the evaluation was done, and report results under more than one condition, including groups that matter for the use. They describe model cards as a complement to dataset write-ups such as Datasheets for Datasets. They say the framework was written with human-centered vision and language models in mind, and that it can document any trained model.

Section 4 lists the parts they want a reader to be able to find. Model details cover who developed it, the date, the version, the model type, whatever training information the developer can share, a paper or other citation, the license, and where questions should go. The paper says this section is not a demand to publish private or proprietary training methods. Intended use covers the primary uses, the primary users, and uses that are out of scope. Factors cover the groups or conditions where results may differ. Metrics cover the performance measures, decision thresholds, and how variation is shown. Evaluation data covers the sets behind the numbers. Training data is the matching section when the developer can provide it, and a shorter note when they cannot. Quantitative analyses cover results for one group at a time and for combinations of groups. Ethical considerations, then caveats and recommendations, close the list. The paper says the list is a set of prompts, not a form every model has to fill in the same way. It includes two filled-in examples: a smile detector trained on the CelebA image set, and a public toxicity model associated with Jigsaw. This desk is not restating the charts in those examples.

{% figure "/images/inline/model-cards-2019-paper-1.webp", "An open filing drawer of plain folders with the tabs turned away, in an empty archive room, with no people or readable labels.", "The 2019 paper lists nine sections and calls them prompts, not a single required form." %}

## Where two later guides point

Hugging Face’s [model-card guide](https://huggingface.co/docs/hub/model-cards) treats a card on the Hub as the `README.md` in a model repository: Markdown, with a YAML block at the top for metadata. The guide says the card should describe the model, its intended uses and limits, training parameters, the datasets used, and evaluation results. It points to Mitchell and coauthors for the discussion of limits and ethical considerations. The YAML can name a license, datasets, a base model, a task, and structured scores. That is a way to file the document next to the weights. It is not the 2019 paper’s one-to-two-page layout, and the guide does not require every section Section 4 names. A Hub card can be longer, shorter, or mostly metadata.

Google’s [machine-learning course](https://developers.google.com/machine-learning/managing-ml-projects/pipelines), on the page about production pipelines, tells the reader to use model cards to share a model’s purpose, architecture, hardware needs, and evaluation metrics. That sentence is narrower than Section 4. It does not mention results split by group, or uses that are out of scope. The page is about replacing a production model as data goes stale. The model-card line is one item in that chapter. It is not a template, and it does not cite the 2019 paper on that page.

{% figure "/images/inline/model-cards-2019-paper-2.webp", "A blank index card and a plain wooden pencil on an oak table, with no writing, people, or logos.", "Hugging Face files the card as README.md. The paper asked for about one to two pages." %}

## Why it matters (analysis)

A company post that lists a few scores is not, by itself, the record the 2019 paper described. This week’s [Gemini 4 Carbon](/2026/10/29/gemini-4-carbon/) note and [Genie 4](/2026/10/29/genie-4-world-model/) note say what Google and DeepMind chose to publish about access, limits, and selected results. Neither post calls itself a model card, and this desk is not scoring them against the nine sections. The paper’s request is about documentation that lets someone compare a model with the job they have in mind. It is not legal, medical, or employment advice, and neither is this file. [What is a large language model?](/explainers/what-is-a-large-language-model/) is the neighboring definition for the systems those posts name.
