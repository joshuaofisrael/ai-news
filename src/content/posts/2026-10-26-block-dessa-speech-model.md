---
title: "Block says Dessa learned conversation from speech alone"
description: "Block says Dessa was trained only on human speech and can run on a high-end laptop. TechCrunch reported the company’s page on October 24."
date: 2026-10-26T09:00:00.000Z
updated: "2026-10-26T09:30:00.000Z"
category: tools-products
tags:
  - speech
  - models
  - block
author: AI Headline Hub
draft: false
image:
  src: /images/stories/block-dessa-speech.webp
  alt: A wooden desk with a microphone, closed headphones, and a shut laptop, and no people, logos, or readable screens.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/block-dessa-speech.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "Dessa — the conversation model trained only on speech"
    url: https://block.xyz/dessa
    publisher: Block
  - title: "Block’s new voice model sounds eerily human"
    url: https://techcrunch.com/2026/10/24/blocks-new-voice-model-sounds-eerily-human/
    publisher: TechCrunch
---

Block has published a page for Dessa, a speech-to-speech model it says was trained from scratch on human conversation, with no text and no pretrained models. The [page](https://block.xyz/dessa) does not print a publication date. [TechCrunch](https://techcrunch.com/2026/10/24/blocks-new-voice-model-sounds-eerily-human/) reported it at 9:00 a.m. PDT on October 24, 2026, and said posts on X from Jack Dorsey, from Dessa lead Ragavan Thurairatnam, and from Block’s account appeared on October 23. TechCrunch says there is no public access. The page itself asks safety researchers to write in, at an address it prints, and does not offer a download.

Block’s description, in its words: audio in, audio out. It says Dessa is full-duplex, so it listens and talks at the same time, and that inference runs faster than real time. It says the model runs locally on a MacBook Pro M4 Max or better. It says the team trained it on one NVIDIA GB200 NVL72. It says, “As far as we know, Dessa is the world’s first AI you can have a realistic live conversation with that was trained only from human speech.” The “as far as we know” is Block’s. The page also calls Dessa “the most authentic full-duplex speech model ever built.” That superlative is the company’s.

{% figure "/images/inline/block-dessa-speech-1.webp", "A coil of microphone cable and a closed pair of headphones on a bare table, with no logos, labels, or people.", "Block says Dessa takes audio in and sends audio out, and that the training used no text." %}

## What the page claims the model learned, and what it does not measure

Block says current voice systems turn speech into text and drop information text cannot carry, including emotion. It says Dessa hears and speaks emotion, sarcasm, laughter, and timing because those were in the training sound. It says a spoken word takes thousands of times more bytes than the same word in text, and that Dessa “learned language from hundreds of times fewer words” than large language models need. The page does not give the word count, the hours of audio, the parameter count, or a benchmark table. The “hundreds of times” line is Block’s comparison, and the page notes, in a parenthetical, that language models also learn to handle programming languages.

The page says the clips are live recordings of a person talking to Dessa, that nobody steers the model, and that subtitles were added afterward. This desk is not scoring those clips. One section says Dessa is talking with GPT-Live-1, “a third-party AI model,” that both voices are AI-generated, and that the developer of GPT-Live-1 is not affiliated with Block and has not reviewed or endorsed Dessa.

On safety, the page says a model that learned to talk from sound alone is new territory, and that Block wants outside eyes on it. It says a small group of AI safety researchers will get early access “to find the risks we haven’t anticipated.” The sign-off is Ragavan Thurairatnam, Dessa lead. The lab line says the group reports directly to Jack Dorsey, Block’s cofounder, chairman, and Block Head, and that it was founded by former members of Dessa, a Toronto deep-learning startup. The page lists researchers and interns by name. It does not say the model is part of Square, Cash App, or any other Block product, and it does not give a price.

{% figure "/images/inline/block-dessa-speech-2.webp", "An empty equipment bench with a powered-off audio interface, coiled cable, and no readable display or logos.", "The page asks safety researchers to request early access. TechCrunch says there is no public download." %}

## Why it matters (analysis)

The document is a company demonstration page plus a news report that dates when the page drew coverage. The technical claims that can be repeated without adding any are the ones the page states in prose: speech only, full-duplex, one GB200 NVL72 for training, local inference on a specified laptop class, and no public download. The claim to be first, and the claim to be the most authentic, are Block’s, with the first one already qualified by “as far as we know.” A reader cannot check the training mix, the latency, or the “hundreds of times” comparison from the page, because those inputs are not listed. TechCrunch’s article is a report of the page and of the October 23 posts. It is not an independent listening test with published scores.

This report is not a product review, a security audit, or a recommendation to use the model.

Related reporting: [OpenAI’s Decisions API, priced for bounded answers](/2026/10/23/openai-decisions-api-generally-available/) and [Anthropic’s research preview of Claude Duet](/2026/10/21/anthropic-opens-claude-duet-research-preview/).
