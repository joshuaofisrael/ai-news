---
title: "King and Worthington say AI reviews beat paid human reviews of 124 papers"
description: "A Harvard working paper dated October 22 says Claude reviews outranked paid human reviews of 124 rapidPeer drafts, including in a small test by former editors."
date: 2026-10-24T09:00:00.000Z
updated: 2026-10-24T09:00:00.000Z
category: models-research
tags:
  - research
  - peer-review
  - harvard
author: AI Headline Hub
draft: true
image:
  src: /images/stories/harvard-ai-peer-review.webp
  alt: An empty library carrel with a printed manuscript, a closed laptop, and a pencil, and no people in the frame.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/harvard-ai-peer-review.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "AI Article Reviews Dominate Human Peer Reviews at Their Best: Evidence and Policy Choices"
    url: https://gking.harvard.edu/files/peerless.pdf
    publisher: Gary King and Steven Worthington
  - title: "AI Article Reviews Dominate Human Peer Reviews at Their Best: Evidence and Policy Choices"
    url: https://gking.harvard.edu/peerless/
    publisher: Gary King
---

Gary King and Steven Worthington, both at Harvard’s Institute for Quantitative Social Science, posted a working paper on October 22, 2026 arguing that reviews written by a current Claude model beat an unusually strong set of paid human peer reviews. The paper, [“AI Article Reviews Dominate Human Peer Reviews at Their Best: Evidence and Policy Choices”](https://gking.harvard.edu/files/peerless.pdf), is on King’s Harvard site. The [landing page](https://gking.harvard.edu/peerless/) lists the same title and says it was last updated that day. It is not a journal article.

The corpus is every eligible submission to rapidPeer, a pre-journal review service the paper says Harvard’s institute built and later extended to other institutions. That is 124 scholarly drafts and 134 human reviews, because 10 drafts received two reviews, collected from 2019 through 2026. The paper describes the set as a mix of statistical, mathematical, and qualitative work. Reviewers were paid, manuscripts were de-identified, and reviewers were asked to write a long, constructive review rather than a journal accept-or-reject note.

The authors treat those human reviews as a high bar, not a typical journal review. Of 74 authors who answered a survey a week after delivery, 88% rated the review they received as high or very high quality, and the median willingness to recommend the service to other faculty was 10 out of 10. The authors also say former editors they consulted informally called the reviews among the best they had seen. That second point is their account of conversations, not a blinded survey. They add a caveat on authorship of the human reviews: “Near as we can tell, all reviews were written by humans.”

{% figure "/images/inline/harvard-ai-peer-review-1.webp", "Two stacks of unmarked manuscript pages on a wooden desk beside a dark laptop, with no readable title page and no person present.", "The comparison used 134 paid human reviews of 124 drafts submitted from 2019 through 2026." %}

## How the comparison was run

For each submission the authors generated a review with Claude Opus 4.8 at its maximum reasoning setting, under two setups. In the matched setup the model received the anonymized manuscript, including figures and tables, plus the rapidPeer reviewer instructions, and no outside tools. In the tuned setup it received a purpose-built prompt and could search the web. The paper says every tuned review used web retrieval, with a mean of 12.4 searches, and that the prompt was written before any judging and was not adjusted against the judges’ scores.

A model from another family, GPT-5.5, judged the reviews, so the writer and the judge were not the same product line. The paper says the judge scored only topics it had already marked as relevant to that paper. The seven areas came from the rapidPeer instructions: theory and idea, methods, weaknesses, framing, communication, figures and tables, and sources.

On the headline comparison, the paper’s text says the AI review won 100% of decided pairs when the other model judged them, which it states as 132 of 132. A summary box in the paper’s figure labels the overall AI-judge result 134 of 134, also 100%. This desk is not reconciling those two labels; both appear in the October 22 paper. The same figure labels the human-editor result 26 of 30, which the text calls 87%.

Those editor judgments are a separate check. Three former editors of leading journals each ranked 10 randomly chosen pairs. The pairs were blinded and ordered at random. The editors were not told they were comparing an AI review with a human review until a debrief. The paper says the editors agreed with one another 80% of the time and with the AI judge 87% of the time on average.

The authors also say the AI reviews had no fabricated sources and about a third the rate of incorrect claims of the human reviews. Those rates are their measurement, described in the paper, not a recount by this desk.

{% figure "/images/inline/harvard-ai-peer-review-2.webp", "A seminar table with empty chairs, a closed notebook, and a wall screen showing an out-of-focus chart with no readable words.", "Three former editors preferred the AI review in 26 of 30 blinded judgments, the paper says." %}

## Checks the authors report, and what they did not measure

The paper says the result is not just a longer review. On 44 pairs whose AI and human reviews were similar in length, the AI review was still preferred in all 44. When the AI judge was also given the manuscript and told to check claims against it, the AI review was preferred in 133 of 134 matched pairs and 132 of 134 tuned pairs. In the other three, the paper says the judge’s choice flipped with the order of presentation, so the human review was never preferred in both orders.

The authors say they did not measure whether later revisions made the paper better, and they did not measure what would happen to a field if journals switched to AI reviewing. They write that the results speak to advice an author could use while revising, and that they do not by themselves answer how an editor should decide what to publish. The rest of the paper is their discussion of dangers and of policy options journals might consider.

## Why it matters (analysis)

The useful line in the paper is the limit the authors put on it. A model preferred one review over another, and three former editors, on 30 judgments, mostly agreed. That is evidence about review text. It is not a trial of whether the science got better, and it is not a journal’s decision to drop human reviewers. The paper is also new: it is a working paper dated the day it was posted, not a replicated study in a journal. Anyone using it to set a review policy is going past what the authors say they measured.

This report is not advice to an editor, a university, or an author on how to run peer review.
