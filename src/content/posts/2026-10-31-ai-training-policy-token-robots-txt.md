---
title: "AI firms back one robots.txt opt-out for AI training"
description: "OpenAI, Google, Microsoft and Anthropic say they will honour a shared robots.txt policy token so sites can set AI-training preferences once."
date: 2026-10-31T08:30:00.000Z
updated: "2026-10-31T08:30:00.000Z"
category: policy-regulation
tags:
  - publishers
  - web-standards
  - training-data
  - openai
  - google
author: AI Headline Hub
draft: false
image:
  src: /images/stories/ai-training-policy-token-robots-txt.webp
  alt: A rack-mounted server in a dim data centre with blue status lights and a blank paper note taped to its front, with no people, logos, or readable text.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/ai-training-policy-token-robots-txt.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "Making it easier for websites to express AI training preferences"
    url: https://openai.com/index/helping-websites-express-ai-training-preferences
    publisher: OpenAI
  - title: "Supporting a shared AI training control for websites"
    url: https://developers.google.com/search/blog/2026/10/ai-training-control
    publisher: Google Search Central Blog
  - title: "The biggest names in AI are backing a new way to opt out of scraping"
    url: https://www.theverge.com/tech/1023763/openai-google-microsoft-ai-scraping-standard-opt-out
    publisher: The Verge
  - title: "AI Preferences (aipref) working group"
    url: https://datatracker.ietf.org/wg/aipref/about/
    publisher: IETF
---

Website owners may soon be able to opt out of AI training at several companies with a single line in robots.txt. On October 30, 2026, [OpenAI](https://openai.com/index/helping-websites-express-ai-training-preferences) and [Google](https://developers.google.com/search/blog/2026/10/ai-training-control) each said they will honour a shared "policy token" for AI-training preferences, based on work in the IETF's [AI Preferences working group](https://datatracker.ietf.org/wg/aipref/about/). [The Verge reports](https://www.theverge.com/tech/1023763/openai-google-microsoft-ai-scraping-standard-opt-out) that Microsoft and Anthropic are backing it too.

## What changes for site owners

Today, a site that wants to keep its pages out of AI training has to name each company's crawler separately in robots.txt. The shared token is meant to replace that list with one broad signal that every participating provider reads. Google says that when a site uses the token to opt out of training, and does not mention Google-Extended separately, it plans to treat that as if the site had blocked Google-Extended, its own AI-training control since 2023.

Both companies say their existing controls stay in place. OpenAI says the new signal "will not replace" its current crawler rules, and Google says company-specific instructions will keep working alongside the shared one, so a site can opt out broadly and still make exceptions for individual providers.

## When it takes effect

The timing differs by company. OpenAI says it aims to implement the signal "in the coming months". Google says it aims to support it, along with other providers, in 2027. According to The Verge, Anthropic has already adopted the signal, Microsoft plans to support it next year, and the proposal came from an Anthropic standards lead within the IETF process. The Verge also reports that Meta voiced support without saying whether it will honour the token.

Google notes that the proposal is a draft and that the IETF group is still working on the rest of its vocabulary. It also says the approach is consistent with the EU's code of practice for general-purpose AI providers, which treats robots.txt as a main way for publishers to state machine-readable preferences.

## Why it matters (analysis)

For small publishers, one shared switch is simpler than tracking a growing list of crawler names. It is still voluntary: the token only binds providers that choose to honour it, and none of the announcements describe enforcement. Search visibility is a separate question: The Verge reports that Microsoft says sites will still appear in Bing results whatever their training preference. More on [policy and regulation](/category/policy-regulation/).
