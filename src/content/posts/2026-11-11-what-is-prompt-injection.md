---
title: What Is Prompt Injection?
description: Prompt injection is when text fed to an AI model overrides its intended instructions. Direct and indirect attacks, real examples, and the defences security agencies recommend.
date: '2026-11-11T13:40:00.000Z'
updated: '2026-11-11T13:40:00.000Z'
category: models-research
tags:
  - prompt injection
  - ai security
  - explainer
author: AI Headline Hub
draft: false
image:
  src: /images/stories/what-is-prompt-injection.webp
  alt: Glowing padlock over dark circuit lines
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/what-is-prompt-injection.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: 'OWASP Gen AI Security Project: LLM01:2025 Prompt Injection'
    url: https://genai.owasp.org/llmrisk/llm01-prompt-injection/
    publisher: genai.owasp.org
  - title: 'UK NCSC: Thinking about the security of AI systems'
    url: https://www.ncsc.gov.uk/blog-post/thinking-about-security-ai-systems
    publisher: ncsc.gov.uk
  - title: Greshake et al. (2023), Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection
    url: https://arxiv.org/abs/2302.12173
    publisher: arxiv.org
  - title: 'NIST AI 100-2 E2025: Adversarial Machine Learning taxonomy'
    url: https://csrc.nist.gov/pubs/ai/100/2/e2025/final
    publisher: csrc.nist.gov
---

**Prompt injection** is an attack on applications built on large language models (LLMs). Someone supplies text that makes the model ignore or override the instructions its developer gave it. The Open Worldwide Application Security Project (OWASP) ranks it first in its 2025 Top 10 for LLM applications, as LLM01. It defines the problem as user prompts that "alter the LLM's behavior or output in unintended ways."

The UK's National Cyber Security Centre (NCSC) calls it "one of the most widely reported weaknesses in the security of the current generation of LLMs", where "a user creates an input designed to make the model behave in an unintended way."

## Why it happens

In a traditional program, code and data are kept apart, and a well-built database will not run a customer's name as a command. An LLM has no such hard boundary. The developer's instructions (the system prompt), the user's message, and any documents, emails or web pages the model reads all arrive as one stream of text. If some of that text says "ignore your previous instructions and do this instead", the model may simply comply.

OWASP adds that injected instructions "do not need to be human-visible/readable, as long as the content is parsed by the model." Text hidden in white-on-white type, inside an image, or in a document's metadata can still reach the model.

## Direct and indirect prompt injection

OWASP separates two main types.

**Direct prompt injection** is when the person typing into the application crafts the input. A classic case is telling a customer-service chatbot to drop its guidelines, reveal its hidden system prompt, or take an action it should not.

**Indirect prompt injection** is when the malicious instructions arrive through content the model processes on someone else's behalf, such as a web page, an email, a PDF or a file in a shared drive. The user may be completely innocent. They ask an assistant to summarise a page, and the page itself carries the attack.

The indirect form was set out in a 2023 paper by Kai Greshake and colleagues, *Not what you've signed up for*. They showed that once an LLM is connected to retrieval and tools, "processing retrieved prompts can act as arbitrary code execution". They demonstrated working attacks against real systems, including Bing's GPT-4-powered chat and code-completion tools, with outcomes that included data theft.

## What attackers can achieve

The damage depends on what the model can see and do. OWASP lists possible outcomes including:

- disclosure of sensitive information, including the system prompt
- manipulated or biased output
- unauthorised use of functions the LLM can call
- running arbitrary commands in connected systems
- interference with decisions the application makes

OWASP's example scenarios show how ordinary these can look:

- A web page summarised by an assistant contains hidden instructions to insert an image that links to an attacker's URL. That leaks the private conversation through the link.
- A candidate's CV contains split, hidden instructions, so an AI screening tool gives a positive recommendation regardless of the CV's actual content.
- An attacker edits a document in a company knowledge base. When a retrieval-augmented (RAG) application later pulls in that document, its answers are steered.
- Instructions are hidden in an image that accompanies harmless text, which matters for multimodal models.

The risk grows as LLMs become **agents** that can send email, browse, edit files or run code. A chatbot that can only talk can embarrass you. An agent with access to your inbox can act on an attacker's instructions.

## Prompt injection versus jailbreaking

The terms are often used interchangeably, but OWASP treats **jailbreaking** as a form of prompt injection in which the goal is to make the model disregard its safety rules entirely, for example to produce content it is trained to refuse. Prompt injection is broader. Many injection attacks do not try to unlock harmful content at all. They try to hijack what an application does with data and tools.

## Can it be fixed?

Not completely, with current techniques. OWASP says that given how generative models work, "it is unclear if there are fool-proof methods of prevention". It also notes that RAG and fine-tuning do not fully remove the problem. The US National Institute of Standards and Technology (NIST) covers prompt injection in its taxonomy of adversarial machine-learning attacks (NIST AI 100-2), alongside attacks such as data poisoning.

The recommended approach is to reduce the damage a successful injection can cause, rather than trusting the model to resist every attack. OWASP's mitigations include:

1. **Constrain the model's role** in the system prompt and limit it to specific tasks.
2. **Define and check output formats** with ordinary, deterministic code.
3. **Filter inputs and outputs** for sensitive categories and disallowed content.
4. **Apply least privilege.** Give the application its own credentials, handle sensitive functions in code rather than leaving them to the model, and restrict what the model can reach.
5. **Require human approval** for high-risk actions such as payments, deletions or outbound messages.
6. **Separate and label untrusted content**, so external text is clearly marked as data rather than instructions.
7. **Test adversarially**, treating the model as an untrusted user when checking trust boundaries.

The NCSC makes the same point. It notes that "no model exists in isolation", so the answer is to "design the whole system with security in mind". It gives the example of MathGPT, a tool that turned plain-language maths questions into code and ran it. A researcher used prompt injection to get access to the system hosting it. The model was not the only flaw: the application ran whatever the model produced without checking it.

## What it means for everyday users

If you use AI assistants connected to email, documents or browsing, a few habits help. Be cautious about letting an assistant act automatically on content from strangers. Review actions such as sending messages or making purchases before confirming them. Be wary when a summary of a web page or document contains unexpected links or instructions.

## The short version

Prompt injection exploits the fact that LLMs cannot reliably tell instructions from data. It can come directly from a user or indirectly from content the model reads, and it becomes more serious as models gain tools and access. There is no complete fix yet. The defences that work best limit what a compromised model is able to do.

[Source](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
