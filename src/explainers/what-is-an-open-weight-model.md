---
layout: layouts/page.njk
title: "What is an open-weight model?"
description: "What open-weight means in a 2024 NTIA report, and why the Open Source Initiative says weights alone are not open-source AI. Both documents are linked."
permalink: /explainers/what-is-an-open-weight-model/
schemaKind: Article
tags:
  - page
date: 2026-10-27T14:15:00.000Z
updated: 2026-10-27T14:15:00.000Z
dek: Two published meanings. Widely available weights are not the same checklist as the Open Source Initiative’s definition of open-source AI.
breadcrumbs:
  - name: Home
    url: /
  - name: Explainers
    url: /explainers/
  - name: What is an open-weight model?
    url: /explainers/what-is-an-open-weight-model/
sources:
  - title: "Dual-Use Foundation Models with Widely Available Model Weights Report"
    url: https://www.ntia.gov/programs-and-initiatives/artificial-intelligence/open-model-weights-report
    publisher: National Telecommunications and Information Administration
  - title: Glossary
    url: https://www.ntia.gov/programs-and-initiatives/artificial-intelligence/open-model-weights-report/glossary
    publisher: National Telecommunications and Information Administration
  - title: Background
    url: https://www.ntia.gov/programs-and-initiatives/artificial-intelligence/open-model-weights-report/background
    publisher: National Telecommunications and Information Administration
  - title: The Open Source AI Definition 1.0
    url: https://opensource.org/ai/open-source-ai-definition
    publisher: Open Source Initiative
  - title: "Concerning behavior from a popular open-weight AI model"
    url: https://cohere.com/blog/concerning-behaviour-popular-open-weight-ai-model
    publisher: Cohere
  - title: New LF Research survey on generative AI and open source
    url: https://www.linuxfoundation.org/press/new-lf-research-survey-shows-generative-ai-cuts-open-source-coding-time-in-half-but-25-of-incoming-pull-requests-are-considered-ai-slop
    publisher: The Linux Foundation
---

“Open-weight” and “open source” are not interchangeable labels for an AI model. One is about whether the public can obtain the numbers the model learned. The other, in the Open Source Initiative’s definition, is a longer checklist. This page lines up a 2024 U.S. Commerce Department report and that definition, then shows how two recent stories on this site use the nearby words. It does not grade a named product.

{% figure "/images/stories/linux-foundation-ai-survey.webp", "A wooden desk with two monitors showing blurred code, a stack of sticky notes, and an empty chair.", "A desk with blurred code. The picture illustrates this page. It does not show a model release, a lab, or a real event." %}

## What the NTIA report means by weights

On July 30, 2024, the National Telecommunications and Information Administration published [Dual-Use Foundation Models with Widely Available Model Weights](https://www.ntia.gov/programs-and-initiatives/artificial-intelligence/open-model-weights-report). The report says it was written for the Secretary of Commerce under Executive Order 14110, and its glossary cites that order for several definitions. It is a policy report. It is not a product review, and it is not itself a statute.

The [glossary](https://www.ntia.gov/programs-and-initiatives/artificial-intelligence/open-model-weights-report/glossary) describes model weights as numerical parameters inside an AI model that help determine the model’s output in response to inputs. It says there is more than one kind, including weights from pre-training, from intermediate checkpoints, and from later fine-tuning. The same glossary uses “open foundation model” as its short name for a dual-use foundation model whose weights have been released to the public, either as a download or by some other means.

That short name is narrower than everyday speech. In this report, “foundation model” is used as a synonym for the executive order’s “dual-use foundation model.” The glossary says that category includes a size floor, at least tens of billions of parameters, and a capability bar tied to serious risks. It also says other people use “foundation model” more broadly, without that size floor, and that not every foundation model has the dual-use capabilities the order describes. A reader who hears “open-weight” about a small or narrow model is hearing a wider use than the glossary’s “open foundation model.”

The report’s [background section](https://www.ntia.gov/programs-and-initiatives/artificial-intelligence/open-model-weights-report/background) says the weights are what training sets. An input goes in, and those numbers shape the output. It then contrasts a public weight release with a system that people can use only through a website or an API. In the API case, the report says, the user sends an input and receives an output and does not hold the weights.

The same section states three consequences of a wide release, as the authors see them. People can change the weights outside the developer’s original plan, including by fine-tuning, and the report says that can include removing safeguards and passing the result on. The developer, the report says, gives up the ability to take the weights back from someone who already has a copy, and gives up a direct view of what that copy is used for. People can also run the model on computers they control, so a prompt need not be sent to the company that trained it. The report treats that last point as both a confidentiality benefit and a limit on monitoring. This page does not add a risk finding of its own. The report’s conclusion, on the summary page, is that the evidence it had in July 2024 was not enough to say that restrictions on such releases were warranted, and not enough to say restrictions would never be appropriate.

The background section also says openness is not one switch. Weights, code, training data, and documentation can each be shared or withheld, and a license can add rules that are hard to enforce. It names model cards as one way to describe a model even when the weights stay closed. A downloadable weight file is one point on that range. It is not, in the report’s own telling, the whole range.

## What the Open Source Initiative requires

The Open Source Initiative’s [Open Source AI Definition, version 1.0](https://opensource.org/ai/open-source-ai-definition), uses a different test. It says an Open Source AI system is one offered under terms that grant four freedoms: to use it for any purpose without asking permission, to study how it works and inspect its components, to modify it for any purpose, including its output, and to share it, with or without changes, for any purpose. The definition says those freedoms apply to a whole system and to pieces of one, and that using them depends on having what it calls the preferred form for making modifications.

For a machine-learning system, that preferred form has three parts on the OSI page. One is data information: detail on the training data sufficient for a skilled person to build what OSI calls a substantially equivalent system, including where public data and third-party data can be obtained. OSI does not require the training data itself when it cannot be shared. It requires that information. The second part is the code used to train and run the system, including how data were processed and how training was done. The third is the parameters, such as weights. OSI says each of those parts should be available under terms it approves.

The same page then speaks directly to the phrase people mix up with “open-weight.” It says an AI model, in its usage, is the architecture, the parameters including weights, and the inference code. It says the weights are the learned parameters that sit on that architecture and turn an input into an output. And it says that “Open Source models” and “Open Source weights,” under this definition, must include the data information and the code used to derive those parameters. Weights by themselves do not meet the definition.

OSI also says it is not dictating one legal instrument for the parameters. They might be free because of what they are, or a license might be needed. That is OSI’s account of the legal uncertainty. This page is not legal advice, and it does not say which license would satisfy the definition.

The two documents can both be true of the same release, or only one of them, or neither. NTIA’s “widely available model weights” asks whether the public can obtain the parameters. OSI’s “open source” label, in version 1.0, also asks for data information and code, and for the four freedoms. A company can publish a weight file and still fail OSI’s checklist. A company can also refuse to publish weights at all. Neither document is a review of a 2026 product.

## How the words show up in two 2026 files

Cohere’s post of October 26, 2026, [“Concerning behavior from a popular open-weight AI model,”](https://cohere.com/blog/concerning-behaviour-popular-open-weight-ai-model) uses “open-weight” in the headline for a model it names as Alibaba’s Qwen3.8-Flash-Next. The post is Cohere’s account of a sandbox test. This desk’s [story](/2026/10/27/cohere-qwen-sandbox-report/) stays inside that post, a Register article, and the traces Cohere linked. The explainer does not re-try the test and does not decide whether the weights meet OSI’s checklist. Cohere’s own argument, in that post, is that a buyer who hosts an open-weight model can still be unable to see the training. That argument is Cohere’s.

The Linux Foundation’s survey, announced in an [October 20, 2026 press release](https://www.linuxfoundation.org/press/new-lf-research-survey-shows-generative-ai-cuts-open-source-coding-time-in-half-but-25-of-incoming-pull-requests-are-considered-ai-slop), is about a different object. It asks open-source software developers how generative AI has changed coding and pull requests. The [story](/2026/10/23/linux-foundation-ai-open-source-survey/) reports that survey. “Open source” there means the software projects, not a set of model weights. A reader who treats the survey as a definition of an open-weight model is mixing the two files.

[What is a large language model?](/explainers/what-is-a-large-language-model/) is the training description those product names often sit on. Releasing, or withholding, the weights does not change that description.

## This desk’s reading

Opinion: in the NTIA report, the open-weight question is whether the parameters are public. In OSI’s version 1.0, “open source” is a further list: freedoms to use, study, modify, and share, plus data information and code as well as weights. A headline can use one phrase and satisfy neither document. This page does not score Qwen, or any other named model, against either checklist.

Related pages: the [open-weight and open-source hub](/topics/open-models/), the [AI safety hub](/topics/ai-safety/), the [Cohere story](/2026/10/27/cohere-qwen-sandbox-report/), the [Linux Foundation story](/2026/10/23/linux-foundation-ai-open-source-survey/), and [What is a large language model?](/explainers/what-is-a-large-language-model/).

This page is general information, not legal, purchasing, or security advice. See the [disclaimer](/disclaimer/).

## Sources

1. National Telecommunications and Information Administration, [Dual-Use Foundation Models with Widely Available Model Weights](https://www.ntia.gov/programs-and-initiatives/artificial-intelligence/open-model-weights-report), July 30, 2024, including the [glossary](https://www.ntia.gov/programs-and-initiatives/artificial-intelligence/open-model-weights-report/glossary) and the [background](https://www.ntia.gov/programs-and-initiatives/artificial-intelligence/open-model-weights-report/background).
2. Open Source Initiative, [The Open Source AI Definition 1.0](https://opensource.org/ai/open-source-ai-definition).
3. Cohere, [Concerning behavior from a popular open-weight AI model](https://cohere.com/blog/concerning-behaviour-popular-open-weight-ai-model), October 26, 2026.
4. The Linux Foundation, [New LF Research survey on generative AI and open source](https://www.linuxfoundation.org/press/new-lf-research-survey-shows-generative-ai-cuts-open-source-coding-time-in-half-but-25-of-incoming-pull-requests-are-considered-ai-slop), October 20, 2026.
