---
title: What Is a Token in Large Language Models?
description: Tokens are the chunks of text a language model reads and writes. How tokenisers split text, why token counts differ from word counts, and how tokens drive limits and cost.
date: '2026-11-11T14:10:00.000Z'
updated: '2026-11-11T14:10:00.000Z'
category: models-research
tags:
  - tokens
  - large language models
  - explainer
author: AI Headline Hub
draft: false
image:
  src: /images/stories/what-is-a-token-in-llms.webp
  alt: Person seen from behind using a chatbot on a laptop at night
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/what-is-a-token-in-llms.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: 'OpenAI Help Center: Understanding and counting tokens'
    url: https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them
    publisher: help.openai.com
  - title: 'Hugging Face Transformers docs: Tokenization algorithms'
    url: https://huggingface.co/docs/transformers/tokenizer_summary
    publisher: huggingface.co
  - title: Sennrich, Haddow and Birch (2015), Neural Machine Translation of Rare Words with Subword Units
    url: https://arxiv.org/abs/1508.07909
    publisher: arxiv.org
  - title: OpenAI tiktoken on GitHub
    url: https://github.com/openai/tiktoken
    publisher: github.com
---

When you type a question into a chatbot, the model never sees your words as words. It sees a sequence of numbers, and each number stands for a **token**: a chunk of text that might be a whole word, part of a word, a single character or a piece of punctuation. Almost everything practical about using a large language model (LLM), from how much text fits in a prompt to what an API call costs, is measured in tokens rather than words.

## A token is a unit of text, not a word

OpenAI's help centre describes tokens as "the units that OpenAI models use to process text" and notes that a token "can represent a character, part of a word, a whole word, or punctuation." Spaces matter too. The same word can be split differently depending on capitalisation and whether a space comes before it, so "red", "Red" and " red" (with a leading space) are not guaranteed to be the same token.

For English text, OpenAI gives three rules of thumb:

- 1 token is roughly 4 characters.
- 1 token is roughly three-quarters of a word.
- 100 tokens is roughly 75 words.

These are estimates. Other languages, code, numbers and unusual spellings can produce very different ratios, and two models can turn the same sentence into a different number of tokens because they use different tokenisers.

## Where tokens come from: subword tokenisation

Early language systems used a fixed list of whole words. That breaks down quickly: names, typos, new slang and long compound words fall outside any fixed list. The fix that became standard is **subword tokenisation**.

In a widely cited 2015 paper, Rico Sennrich and colleagues pointed out that translation "is an open-vocabulary problem" and proposed encoding "rare and unknown words as sequences of subword units", using an adaptation of a compression method called **byte pair encoding (BPE)**. BPE starts from individual characters and repeatedly merges the most frequent adjacent pairs into new symbols until it reaches a target vocabulary size. Common words end up as single tokens; rare words are spelled out from smaller pieces.

Hugging Face's Transformers documentation describes three main subword algorithms in use today:

- **BPE**, which it calls the most popular algorithm in the library, used by model families such as Llama, Gemma and Qwen2.
- **WordPiece**, used by BERT-family models. It also merges pairs bottom-up but chooses which pairs to merge differently.
- **Unigram**, a probabilistic method that can sample different splits of the same text during training.

A related tool, **SentencePiece**, applies BPE or Unigram directly to raw text. That matters for languages such as Chinese and Japanese, which do not use spaces between words.

A concrete example from the same documentation: GPT-2 uses **byte-level BPE** with a vocabulary of 50,257 entries, made up of 256 byte values, 50,000 learned merges and one special end-of-text token. Because the base vocabulary is raw bytes, any string can be encoded without an "unknown" token.

## Why tokenisation is designed this way

OpenAI's open-source tokeniser library, **tiktoken**, lists the properties that make BPE attractive:

- It is **reversible and lossless**, so tokens can be converted back into exactly the original text.
- It works on **arbitrary text**, even text that never appeared in the tokeniser's training data.
- It **compresses** text, so the token sequence is shorter than the raw bytes.
- It tends to let the model see common subwords, such as "ing", which helps it generalise across related words.

The trade-off is that the model's view of text can be odd. A word it has rarely seen may be split into several fragments, and numbers can be chopped into uneven chunks. That is one reason models sometimes stumble on tasks like counting letters in a word: the model never saw individual letters, only the tokens they were grouped into.

## Tokens set the limits

Every model has a **context window**, a maximum number of tokens it can handle in one request, covering your input plus its output. Models also have a separate cap on output length. OpenAI's guidance is to check a model's documentation for both and, if an input is too large, to shorten it, remove repeated context, split it into parts, or summarise it first.

Because limits are counted in tokens, a document that "looks" short can still be too long if it is full of code, tables, URLs or non-English text, all of which tend to use more tokens per word.

## Tokens set the price

API pricing for most text models is per token, and it is usually split into categories. OpenAI's documentation separates **input tokens** (what you send), **output tokens** (what the model generates), **cached input tokens** (input reused through prompt caching, which can be priced differently) and **reasoning tokens**.

Reasoning tokens are a recent wrinkle. Reasoning models do internal work before producing a visible answer. OpenAI notes that those tokens are not shown as answer text but are counted and billed as output tokens. So a short answer can cost more than its visible length suggests.

That also means a lower price per million tokens does not guarantee a cheaper job. Models tokenise the same text differently and produce different amounts of output. OpenAI's own advice is to test representative tasks rather than compare list prices alone.

## How to count tokens yourself

- **Interactive tokeniser pages.** Several providers offer web tools that show how a sample sentence is split.
- **tiktoken** for OpenAI encodings. Choose the encoding for your target model with `tiktoken.encoding_for_model(...)`. The project says it is three to six times faster than a comparable open-source tokeniser in its benchmark.
- **Provider-side counting.** For a full request that includes messages, images, files and tool definitions, a plain-text count is not enough. OpenAI's Responses API offers an input-token counting endpoint for this.
- **Usage fields after the fact.** Responses report `input_tokens` and `output_tokens`; Chat Completions reports `prompt_tokens` and `completion_tokens`.

## The short version

A token is the unit a language model actually works in. It is usually a fragment of a word produced by a learned subword algorithm such as BPE. Token counts decide how much fits in a prompt, how long an answer can be, and what you pay. They also vary by model, by language and by the kind of text you send.

[Source](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them)
