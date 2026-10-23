---
title: Anthropic opens a US waitlist for Claude Duet, a proactive work agent
description: Anthropic is previewing Claude Duet for US Pro and Max subscribers. The agent sends a morning brief, works in the background, and asks before it sends, pays, signs, or deletes.
date: 2026-10-21T22:00:00.000Z
updated: 2026-10-23T16:00:00.000Z
category: tools-products
tags:
  - anthropic
  - claude
  - agents
image:
  src: /images/stories/claude-duet.webp
  alt: A laptop on a wooden desk displays a glowing node diagram, with a small blue robot figurine beside it.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/claude-duet.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: An earlier version treated “take over the browser” as part of the announcement. That limit is in the help center. The announcement says Duet cannot yet show its browser.
sources:
  - title: Introducing Claude Duet
    url: https://claude.com/resources/articles/claude-duet
    publisher: Anthropic
  - title: Get started with Claude Duet
    url: https://support.claude.com/en/articles/17631495-get-started-with-claude-duet
    publisher: Anthropic Help Center
---

Anthropic’s [announcement](https://claude.com/resources/articles/claude-duet), dated October 21, 2026, says a research preview of Claude Duet is open by waitlist, starting with Pro and Max subscribers in the United States. The company calls it a separate app in which Claude works as a proactive agent for professionals and small-business owners: it brings forward what needs attention, carries out tasks it is given, continues when the person is away, and checks before it acts for them.

The announcement says the preview is a standalone app on iOS and Android and on claude.ai, included in Pro and Max, and that it uses the same usage limits as the rest of Claude. The [help center](https://support.claude.com/en/articles/17631495-get-started-with-claude-duet) adds that Team and Enterprise plans are not included yet, that invitations go out in waves, and that a waitlist signup does not come with a date. It also says the waitlist email has to match the Claude account, and on a phone the Apple or Google account, because access is tied to that address.

## What Anthropic says the agent does

Both pages describe a short morning brief and later messages when something needs the user. The announcement says a person can type or speak in one ongoing thread. The help center says separate channels can be opened for different topics and that those channels share memory.

The announcement says Duet has a virtual machine with its own browser, so the work does not depend on an open laptop. The help center describes a computer in the cloud that keeps going after the app is closed. It says larger jobs can come back as files to review, and it names a research brief, a financial model, a slide deck, and a dashboard as examples. Finished work appears in a Make tab. A Tasks tab shows work in progress. Duet may suggest that a task looks finished, but the help center says only the user can mark it complete.

{% figure "/images/inline/claude-duet-1.webp", "A glass-walled server room with a single empty desk and an open laptop in the foreground, and no people or logos.", "Anthropic says Duet keeps working on a computer in the cloud after the app is closed." %}

The announcement says Duet was designed around Claude Opus 5.5. The help center is stricter about choice: during the preview, users cannot pick a model. Duet runs on Claude Opus 5.5 and decides how much effort a job needs.

The announcement says connected accounts are checked every few hours, because checking nonstop would use plan limits faster. The help center says background work, including the morning brief and check-ins, counts against the five-hour session limit and the weekly limit at the same rate as ordinary Claude chats, so those limits can arrive sooner than with chat alone. People admitted to the preview get one full reset of both limits. That reset is available until November 30, 2026.

## Approval, as the two pages describe it

Anthropic says Duet can read, draft, and prepare work on its own. Both pages say that before it sends a message, makes a payment, signs a document, or deletes anything, it is built to show the action and wait. The help center says that if the person cannot approve immediately, Duet finishes the rest of the task and brings the approval back later.

The announcement says a few actions stay blocked even with approval. It names trading securities and moving money between accounts. The help center adds accessing someone else’s account. It also says Duet does not make phone calls or send text messages to other people. With approval, it can send email from accounts the user has connected.

The announcement says credential handling follows the design used for Claude Managed Agents, so Duet does not directly see passwords or sign-in tokens. It describes a new classifier and safety prompt meant to reject requests to share the strictest tier of information, including credit card numbers and government identification. Health information and personal finances, it says, are let through only when the user has explicitly told Duet to send them. Anthropic says red teams and an external firm penetration-tested the security infrastructure, that the app is covered by its public bug bounty, and that more safety detail would follow in the coming days.

The help center describes prompt injection on its own: mail and web pages can contain instructions meant to mislead the agent. It says Duet is built to treat what it reads as information and to act on what the user asked, and that no defense is perfect, which is one reason consequential actions need approval. When a site asks for a password, the person types it into a separate form on their device. That form is designed to send the password to the browser and keep it out of the chat.

## Connectors and payments

The announcement says Duet can use the connectors and plugins in the Claude Marketplace, which it counts at over 6,000. The examples it gives include missed Gmail and Slack messages, unpaid invoices in QuickBooks or Stripe, payroll in Gusto, a LinkedIn job post after the user edits and approves it, agreements through Docusign, follow-ups from HubSpot, a Canva campaign, and a Shopify store. A richer visual editor for Shopify is described as coming soon. This desk is not repeating that list as its own test of those products.

The help center names a shorter set that can be reused if the user already connected them in Claude: Gmail, Google Calendar, Google Drive, Slack, QuickBooks, HubSpot, Docusign, and Calendly. The user starts each connection and can disconnect an app. Disconnecting stops further access, but memory of earlier conversations is kept. Slack works with limits, and Microsoft 365 is not available yet. For a site without a connector, Duet uses its cloud browser.

{% figure "/images/inline/claude-duet-2.webp", "A close view of a laptop on a wooden desk showing a blurred approval dialog, with a phone face-down beside it and no readable brands.", "Anthropic says consequential actions, including a purchase, wait for the user to approve them." %}

On purchases, the announcement says Duet can buy things for a business with Link, Stripe’s digital wallet. Duet confirms the item, Link asks the user to approve the spend, and payment uses a virtual card so the real card number is not shared. Shop Pay from Shopify can be used at online stores. The help center says each purchase uses a one-time card, that Duet is designed to ask before each purchase, and that Link and Shop Pay are connected inside Duet rather than in the usual connectors directory. The Stripe connector used for invoices is separate from Link. The announcement says signing in with logins saved in 1Password is coming later, and only with permission.

## Limits the company is already stating

The announcement calls this an early version that might “misread a thread or miscalibrate what’s urgent.” It says the core is work tasks, and that personal errands such as booking tickets are not as strong. It says users cannot yet see Duet’s browser, and that the app is separate from the main Claude app. The help center adds that users cannot watch that browser or take it over, that Duet cannot see every project or the files on a person’s computer, that it can read work in Claude but cannot change it, and that something urgent can arrive between scheduled checks. It says drafts and approval requests should be reviewed before they are confirmed.

Neither post gives a date for general availability, a price after the preview, or a date for Team and Enterprise access. The announcement also prints comments from people Anthropic says had early access, including named customers. This desk did not interview them, and those comments are not repeated here.
