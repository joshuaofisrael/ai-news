---
title: Anthropic opens a US waitlist for Claude Duet, a proactive work agent
description: Anthropic is previewing Claude Duet for US Pro and Max subscribers. The agent sends a morning brief, works in the background, and asks before it sends, pays, signs, or deletes.
date: 2026-10-21T22:00:00.000Z
updated: 2026-10-21T22:00:00.000Z
category: tools-products
tags:
  - anthropic
  - claude
  - agents
image:
  src: /images/stories/claude-duet.webp
  alt: A laptop on a wooden desk displays a glowing node diagram, with a small blue robot figurine beside it.
  credit: AI-generated image, AI Headline Hub
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/claude-duet.jpg
  licence: Generated for AI Headline Hub
  width: 1280
  height: 720
sources:
  - title: Introducing Claude Duet
    url: https://claude.com/resources/articles/claude-duet
    publisher: Anthropic
  - title: Get started with Claude Duet
    url: https://support.claude.com/en/articles/17631495-get-started-with-claude-duet
    publisher: Anthropic Help Center
---

Anthropic opened a research preview of Claude Duet on October 21, 2026. The company describes it as a separate app in which Claude works as a proactive agent for professionals and small-business owners: it brings items that need attention, finishes tasks it is given, keeps working when the person steps away, and checks before it acts on their behalf.

The preview starts with Pro and Max subscribers in the United States, through a waitlist. Anthropic said Duet is available as a standalone app on iOS and Android and on claude.ai. During the preview it is included in Pro and Max at no extra charge and uses the same usage limits as the rest of Claude. The [help center](https://support.claude.com/en/articles/17631495-get-started-with-claude-duet) says Team and Enterprise plans are not included yet, and that invitations go out in waves, so a waitlist signup does not come with a date.

Access also depends on the email address. The help center says the waitlist email has to match the Claude account, and on a phone it has to match the Apple or Google account, because access is tied to that address.

## What the agent is built to do

Anthropic said each morning Duet sends a short brief on the important items across connected apps, watches those apps through the day, and messages the user only when something needs them. People can type or send a voice message in one ongoing thread. The help center adds that separate channels can be opened for different topics and that they share memory.

{% figure "/images/inline/claude-duet-1.webp", "A glass-walled server room with a single empty desk and an open laptop in the foreground, and no people or logos.", "Anthropic says Duet keeps working on a computer in the cloud after the app is closed." %}

The work is not tied to an open laptop. Both documents say Duet has its own computer in the cloud, with a browser, so a task can continue after the app is closed. Larger jobs can come back as files to review, such as a research brief, a financial model, a slide deck, or a dashboard. The help center says finished work shows up in a Make tab, and that a Tasks tab shows work in progress. A person can be told a task looks finished, but only that person can mark it complete.

The announcement says Duet was designed around Claude Opus 5.5. The help center is more specific about choice: during the preview, users cannot pick a model. Duet runs on Claude Opus 5.5 and decides how much effort a job needs.

Checks are periodic, not continuous. The announcement says connected accounts are checked every few hours, because checking nonstop would burn through plan limits faster. The help center says background work, including the morning brief and check-ins, counts against the five-hour session limit and the weekly limit at the same rate as ordinary Claude chats, so a person can hit those limits sooner than with chat alone. People admitted to the preview get one full reset of both limits. That reset is available until November 30, 2026.

## Approval, and what stays off limits

Anthropic said Duet can read, draft, and prepare work on its own. Before it sends a message, makes a payment, signs a document, or deletes anything, it is supposed to show the action and wait. The help center says that if the person cannot approve immediately, Duet finishes the rest of the task and brings the approval back later.

Some actions stay blocked even with approval. The announcement names trading securities and moving money between accounts. The help center adds accessing someone else’s account. Duet does not make phone calls or send text messages to other people. With approval, it can send email from accounts the user has connected.

The announcement says credential handling follows the design used for Claude Managed Agents, so Duet does not directly see passwords or sign-in tokens. A new classifier and safety prompt check messages and are meant to reject requests to share the strictest tier of information, including credit card numbers and government identification. Health information and personal finances are let through only when the user has explicitly told Duet to send them. Anthropic said red teams and an external firm penetration-tested the security infrastructure, and that the app is covered by its public bug bounty. It said more safety detail would follow in the coming days.

The help center describes prompt injection directly: mail and web pages can contain instructions meant to mislead the agent. Duet is built to treat what it reads as information and to act on what the user asked, and Anthropic says no defense is perfect, which is one reason consequential actions need approval. When a site asks for a password, the person types it into a separate form on their device. That form is designed to send the password to the browser and keep it out of the chat.

## Connectors and payments

The announcement says Duet can use the more than 6,000 connectors and plugins in the Claude Marketplace. The examples it lists include finding missed Gmail and Slack messages, checking Intuit QuickBooks or Stripe for unpaid invoices, preparing payroll in Gusto, posting a job to LinkedIn after the user edits and approves it, sending agreements through Docusign, drafting follow-ups from HubSpot, building a Canva campaign, and managing a Shopify store. A richer visual editor for Shopify is described as coming soon.

The help center narrows some of that. Connectors the user has already set up in Claude can be reused, including Gmail, Google Calendar, Google Drive, Slack, QuickBooks, HubSpot, Docusign, and Calendly. The user starts each connection and can disconnect an app. Disconnecting stops further access, but memory of earlier conversations is kept. Slack works with limits, and Microsoft 365 is not available yet. For a site without a connector, Duet uses its cloud browser.

{% figure "/images/inline/claude-duet-2.webp", "A close view of a laptop on a wooden desk showing a blurred approval dialog, with a phone face-down beside it and no readable brands.", "Anthropic says consequential actions, including a purchase, wait for the user to approve them." %}

Purchases are a separate path. Anthropic said Duet can buy things for a business with Link, Stripe’s digital wallet: Duet confirms the item, Link asks the user to approve the spend, and payment uses a virtual card so the real card number is not shared. Shop Pay from Shopify can be used at online stores. The help center says each purchase uses a one-time card, that Duet is designed to ask before each purchase, and that Link and Shop Pay are connected inside Duet rather than in the usual connectors directory. The Stripe connector used for invoices is separate from Link. Signing in to sites with logins saved in 1Password is described as coming soon, and only with permission.

## Limits the company is already stating

Anthropic’s announcement calls this an early version that might misread a thread or misjudge what is urgent. Work tasks are the core; personal errands such as booking tickets are weaker. Users cannot yet watch Duet work in its browser or take the browser over. The app is separate from the main Claude app. The help center adds that Duet cannot see every project or the files on a person’s computer, that it can read work in Claude but cannot change it, and that something urgent can arrive between scheduled checks. Drafts and approval requests should be reviewed before they are confirmed.

The posts do not give a date for general availability, a price after the preview, or a date for Team and Enterprise access. Anthropic also published comments from people it said had early access. Those remarks are in the company’s announcement; this desk did not interview them.
