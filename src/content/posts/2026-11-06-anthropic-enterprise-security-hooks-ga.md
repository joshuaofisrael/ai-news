---
title: "Anthropic makes inference hooks generally available for Claude Enterprise"
description: "Anthropic says Claude Enterprise now offers generally available inference hooks alongside new security and administration controls for enterprise customers."
date: 2026-11-06T12:00:00.000Z
updated: "2026-11-06T12:00:00.000Z"
category: tools-products
tags:
  - anthropic
  - claude
  - enterprise
  - security
author: AI Headline Hub
draft: false
image:
  src: /images/stories/anthropic-enterprise-security-hooks-ga.webp
  alt: "Rows of unmarked data centre server racks with blue status lights in a cool aisle"
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/anthropic-enterprise-security-hooks-ga.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "More visibility and control over Claude Enterprise for security teams"
    url: https://claude.com/resources/articles/claude-enterprise-security-updates
    publisher: Anthropic, 5 Nov 2026
  - title: "Inference hooks overview"
    url: https://support.claude.com/en/articles/16059458-inference-hooks-overview
    publisher: Anthropic Help Centre
---

Anthropic has expanded its Claude Enterprise security and administration features, including making inference hooks generally available for enterprise customers.

In a [product update dated 5 November](https://claude.com/resources/articles/claude-enterprise-security-updates), Anthropic described a security centre, centralised management and additional access controls. The security centre is intended to show administrators how an organisation's Claude configuration compares with Anthropic's recommended settings.

## What inference hooks do

Inference hooks provide a way for an organisation to inspect prompts and tool calls before they proceed. Anthropic's [Help Centre](https://support.claude.com/en/articles/16059458-inference-hooks-overview) says the feature can send prompts, tool call responses and uploaded file text to a server controlled by the customer's organisation, where policy checks can allow or deny the activity.

The company says inference hooks are generally available to Enterprise plans. They cover Claude, Claude Code, Cowork and other Claude Enterprise products. Owners and primary owners can enable and manage the feature.

## What is still in beta

The security centre and centralised management are described as being in beta, while inference hooks are generally available. Anthropic also lists further controls that remain in beta, including self service IP allowlisting and signing members out through the Admin API.

The distinction between generally available and beta matters for enterprise administrators assessing which controls can be deployed as standard features. Inference hooks are designed to give organisations a point of policy enforcement outside an employee's device, with the organisation's own server checking activity before Claude continues.

Anthropic identifies data loss prevention, real time transcript archiving and enforcement of internal policies as possible uses. Those are examples supplied by the company, rather than evidence that every enterprise customer has implemented them.

## Why it matters

The update reflects the growing emphasis on governance around AI systems used inside organisations. The new controls give enterprise administrators more ways to manage access and apply their own policies, while some of the wider security management features remain in testing.
