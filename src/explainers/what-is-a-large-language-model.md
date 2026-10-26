---
layout: layouts/page.njk
title: "What is a large language model?"
description: "What a large language model is in an EU-U.S. terminology report, plus NIST’s note on GPT architecture. The 2020 GPT-3 paper is linked here too."
permalink: /explainers/what-is-a-large-language-model/
schemaKind: Article
tags:
  - page
date: 2026-10-26T14:30:00.000Z
updated: 2026-10-26T14:30:00.000Z
dek: A definition page. The documents below do not share one sentence, and a product name is not the definition.
breadcrumbs:
  - name: Home
    url: /
  - name: Explainers
    url: /explainers/
  - name: What is a large language model?
    url: /explainers/what-is-a-large-language-model/
sources:
  - title: "EU-U.S. Terminology and Taxonomy for Artificial Intelligence, second edition"
    url: https://www.nist.gov/system/files/documents/2025/01/24/TTC6_Technical_Report__WG1_Second_Edition_AI_Taxonomy_and_Terminology__final_Tx8hLyobgFEyCE7LKXxI75shERI_104120.pdf
    publisher: EU-U.S. Trade and Technology Council, hosted by NIST
  - title: "Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations (NIST AI 100-2e2025)"
    url: https://doi.org/10.6028/NIST.AI.100-2e2025
    publisher: National Institute of Standards and Technology
  - title: generative pre-trained transformer
    url: https://csrc.nist.gov/glossary/term/generative_pre_trained_transformer
    publisher: NIST Computer Security Resource Center
  - title: Language Models are Few-Shot Learners
    url: https://arxiv.org/abs/2005.14165
    publisher: arXiv
  - title: "Dessa — the conversation model trained only on speech"
    url: https://block.xyz/dessa
    publisher: Block
  - title: Predicting protein electrostatics with protein language models
    url: https://www.nature.com/articles/s41467-026-78406-y
    publisher: Nature Communications
---

“Large language model” is a label for a way of training a model on text, not a product grade and not a legal category. The documents below do not use one sentence. This page lines up a joint terminology entry, a NIST security report, and a 2020 research paper, then shows two 2026 uses of the nearby words. It does not rank labs.

{% figure "/images/stories/openai-training-offline.webp", "An empty compute aisle with dense servers, dark status lamps, and no people, logos, or readable asset tags.", "An empty server aisle. The picture illustrates computing for this page. It does not show a lab, a training run, or a real event." %}

## One terminology entry: text, scale, and two jobs

The second edition of the [EU-U.S. Terminology and Taxonomy for Artificial Intelligence](https://www.nist.gov/system/files/documents/2025/01/24/TTC6_Technical_Report__WG1_Second_Edition_AI_Taxonomy_and_Terminology__final_Tx8hLyobgFEyCE7LKXxI75shERI_104120.pdf) was prepared for the Trade and Technology Council. The working-group note names experts from NIST and from the European Commission. NIST hosts the PDF. It is a glossary for a policy conversation. It is not a statute, and it is not a product specification.

The entry for “large language model (LLM)” puts the phrase on a class of language models. Two conditions are in that entry. The models use deep learning. The text they train on is extremely large, and the entry’s size example is “multiple terabytes.” On what such a model then does, the entry splits the class. It says most of them can produce text. It also says some of them only form what it calls “a compressed representation of an input,” and it names classification and question answering as uses for that representation.

That is the entry’s scope. A reader who needs a single official meaning will not find one elsewhere on this page. The value of the entry is that it says what the authors were willing to write down: text, a very large collection of it, and either generated text or a compressed stand-in for the input.

## NIST, in 2025, on a design and on uses

[NIST AI 100-2e2025](https://doi.org/10.6028/NIST.AI.100-2e2025), *Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations* (March 2025), uses “large language model” while discussing attacks. It does not give the phrase its own glossary sentence. In the body, the authors say these models are being built into search, into tools that help people write code, and into chatbots. They say those chatbots are used by millions of people every day. That scale claim is the report’s, attached to a citation in the paper. This page does not recheck it.

The same passage says the models are being extended. One extension, which the report calls retrieval-augmented generation, connects a model to documents. Another uses training-time or inference-time techniques so a model can take actions, and the examples the report gives are browsing the web and using a terminal. The report calls that second pattern an LLM-based agent. [What is an AI agent?](/explainers/what-is-an-ai-agent/) is the page for the word “agent.” This page only notes that NIST’s 2025 report treats the agent pattern as something done with a language model, not as a rival definition of one.

The report’s glossary does define a neighboring term. The [NIST Computer Security Resource Center](https://csrc.nist.gov/glossary/term/generative_pre_trained_transformer) prints the same wording and cites NIST AI 100-2e2025:

> A family of machine learning models based on the transformer architecture that are pre-trained through self-supervised learning on large data sets of unlabelled text. This is the current predominant architecture for large language models.

The sentence is about a design, as of that March 2025 report. It is not a catalogue of products. It does not say that every system marketed as a large language model uses that design.

## What “large” meant in one 2020 paper

In 2020, Tom B. Brown and OpenAI colleagues published [“Language Models are Few-Shot Learners.”](https://arxiv.org/abs/2005.14165) The abstract says they trained GPT-3, “an autoregressive language model with 175 billion parameters, 10x more than any previous non-sparse language model.” They say the tests used no gradient updates and no fine-tuning, and that the task was specified as text.

Those numbers are the paper’s account of one model in 2020. They are not a 2026 ranking of whose system is largest, and this page does not update the “10x” comparison. The useful point for a definition is narrower. In that paper, “large” is a parameter count the authors state, and the model is a text predictor they chose not to retrain for each task.

## Two 2026 uses that are not this definition

Block’s [Dessa page](https://block.xyz/dessa) uses “LLMs” as a comparison. It says Dessa was trained from scratch on human conversation, with no text and no pretrained models, and that it “learned language from hundreds of times fewer words” than large language models need. The page does not give the word count behind that comparison. This desk’s [story](/2026/10/26/block-dessa-speech-model/) stays inside the page and a TechCrunch report. A speech-only system can mention large language models without meeting the terminology entry above, which is about text.

A [Nature Communications paper](https://www.nature.com/articles/s41467-026-78406-y) by Mingzhe Shen, Guy W. Dayhoff II, Daniel Kortzak, and Jana Shen, published October 24, 2026, uses “protein language models” for sequence models that estimate a chemical property of amino acids. The [story](/2026/10/26/kaml-protein-electrostatics/) reports the abstract. The EU-U.S. entry on this page is about text. The protein paper does not claim to be an example of that entry, and this page does not treat it as one.

## This desk’s reading

Opinion: the label, in the documents above, describes training on a very large amount of text and, in the NIST glossary sentence, a transformer design that learns from unlabeled text. It does not say the system chooses its own steps, and it does not say the system meets a published test for AGI. [What is an AI agent?](/explainers/what-is-an-ai-agent/) is about who picks the next step. [What does AGI mean?](/explainers/what-agi-means/) lines up three definitions of general intelligence. A product name can sit on top of a language model and still leave both questions open.

Related pages: [OpenAI reporting](/topics/openai/), [Anthropic reporting](/topics/anthropic/), the [Dessa story](/2026/10/26/block-dessa-speech-model/), and the [protein-model story](/2026/10/26/kaml-protein-electrostatics/).

This page is general information, not engineering, purchasing, or research advice. See the [disclaimer](/disclaimer/).

## Sources

1. EU-U.S. Trade and Technology Council Working Group 1, [EU-U.S. Terminology and Taxonomy for Artificial Intelligence, second edition](https://www.nist.gov/system/files/documents/2025/01/24/TTC6_Technical_Report__WG1_Second_Edition_AI_Taxonomy_and_Terminology__final_Tx8hLyobgFEyCE7LKXxI75shERI_104120.pdf), PDF hosted by NIST.
2. Apostol Vassilev and colleagues, [Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations](https://doi.org/10.6028/NIST.AI.100-2e2025), NIST AI 100-2e2025, March 2025, and the [glossary entry for generative pre-trained transformer](https://csrc.nist.gov/glossary/term/generative_pre_trained_transformer).
3. Tom B. Brown and colleagues, [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165), arXiv, 2020.
4. Block, [Dessa](https://block.xyz/dessa).
5. Mingzhe Shen, Guy W. Dayhoff II, Daniel Kortzak, and Jana Shen, [Predicting protein electrostatics with protein language models](https://www.nature.com/articles/s41467-026-78406-y), Nature Communications, October 24, 2026.
