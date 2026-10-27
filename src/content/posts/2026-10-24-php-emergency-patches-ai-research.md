---
title: "PHP patches two critical flaws as AI-assisted reports rise"
description: "PHP shipped patches on October 21 for two critical remote-code flaws. CISA said on October 23 it had not seen successful attacks on those flaws in the wild."
date: 2026-10-24T12:00:00.000Z
updated: "2026-10-25T20:30:00.000Z"
category: policy-regulation
tags:
  - security
  - php
  - infrastructure
author: AI Headline Hub
draft: false
status: HOLD_REVIEW
image:
  src: /images/stories/php-security-release.webp
  alt: A dim server room with racks and a blank maintenance terminal, and no people, logos, or readable screens.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/php-security-release.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "Today's PHP Security Release, and How We're Strengthening PHP Security"
    url: https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/
    publisher: The PHP Foundation
  - title: "PHP news archive, 2026"
    url: https://www.php.net/archive/2026.php
    publisher: PHP
  - title: "Critical Vulnerabilities in PHP Require Immediate Patching"
    url: https://www.cisa.gov/news-events/alerts/2026/10/21/critical-vulnerabilities-php-require-immediate-patching
    publisher: CISA
  - title: "Patch the Planet: global response coordination as agents uncover critical vulnerabilities"
    url: https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/
    publisher: OpenAI
---

The PHP project on October 21, 2026 released PHP 8.5.12, 8.4.27, 8.3.36, and 8.2.35 to fix two critical vulnerabilities. The [PHP Foundation](https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/) says that, under the right conditions, an unauthenticated attacker can use them to run code on servers that are running PHP. The project’s own [news archive](https://www.php.net/archive/2026.php) tells users to update. This article does not repeat exploit steps, proof-of-concept code, or temporary configuration workarounds. Those belong in the official advisories, and operators should follow those pages rather than this one.

The foundation identifies the issues as CVE-2026-109618 and CVE-2026-109619. In its account, the first can occur when an out-of-memory failure leaves internal request data only partly set up, so later cleanup treats invalid data as valid. The second can occur when state from an earlier request survives and a later request on the same worker uses it. The foundation says both sit in memory handling and error handling, paths it describes as touched by nearly every request. It says remote code execution was demonstrated against Apache with the module it considers the highest-risk case, including with default settings for the first issue, and that code execution was also confirmed on PHP-FPM through application-level paths for that issue. It says a reporter demonstrated remote code execution for the second issue against a real application on Apache with that module.

[CISA’s alert](https://www.cisa.gov/news-events/alerts/2026/10/21/critical-vulnerabilities-php-require-immediate-patching), revised October 23, uses the nickname “php2shell” and lists the same two CVE numbers. CISA says the flaws affect PHP installations that serve web requests, including that Apache module, PHP-FPM, php-cgi, FrankenPHP, and LiteSpeed, and that PHP considers the Apache module the highest risk. CISA urges an immediate update to the four versions named above. It also says that, as of publication, it had not observed successful exploitation in the wild. The October 23 revision, CISA says, adds a detection rule, points to partner alerts, and restates the mitigation guidance. This story does not reproduce the detection rule.

{% figure "/images/inline/php-security-release-1.webp", "A close photograph of unlabeled server drive bays and a status LED, with no readable asset tags and no people.", "The October 21 releases are PHP 8.5.12, 8.4.27, 8.3.36, and 8.2.35." %}

## What the maintainers say about how the flaws surfaced

The foundation’s timeline does not start in October. It says a PHP core developer, working under foundation funding while fixes from a 2024 Quarkslab audit were underway, found the first signs of the out-of-memory problem behind CVE-2026-109618. In 2024, it says, a possible exploit was theorized, no concrete path was found, and other bugs with clearer impact took priority. It also says the security team stalled on a fix because the options it considered carried compatibility, denial-of-service, or extension costs, and because the team was small. The foundation calls that delay a structural failure of process and resources.

On the 2026 reports, the foundation says security firm Calif began an audit on July 30 under a program it calls Patch the Planet. On August 11, researcher Ryan A at Calif reported unconditional remote code execution with the same root cause as the 2024 out-of-memory problem. The foundation says OpenAI independently reported that root cause, with further attack paths from OpenAI on September 18 and from Wiz on August 24. It says those reports made the full impact clear, and that from August 11 the fix was the security team’s top priority.

[OpenAI’s October 21 post](https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/) describes the same episode differently at the point of discovery. It says Calif identified a critical flaw using GPT-5.6 Sol, and that Wiz independently discovered and reported both vulnerabilities. It also says, “To our knowledge, frontier AI found these vulnerabilities before attackers did.” That sentence is OpenAI’s knowledge claim. It sits next to the foundation’s statement that a PHP developer saw the first signs of the out-of-memory problem in 2024. This desk is not choosing between those accounts.

{% figure "/images/inline/php-security-release-2.webp", "An empty operations desk at night with a headset, a dark keyboard, and monitors showing only blurred status lights.", "The foundation says a person still makes every severity call and reviews every patch." %}

## More reports, a moved release, and a subsidy OpenAI announced

The foundation says AI-assisted research has brought the security team far more reports than before. Citing its own engineer Alexandre Daubois, it says the team has published 15 CVEs since July 1 and worked through more than 100 reports that were invalid, duplicates, or not reproducible. It says AI helps validate reports and group ones that share a root cause, and that a person still sets severity and writes or reviews every patch.

The foundation also describes a broken embargo, in its words. On October 20, around 15:00 UTC, it says the two CVE numbers began circulating with a wrong release time and a CVSS score of 10.0. It says the actual score is 9.2 and that no technical details were in that circulation. The project moved a pre-announcement up to 19:30 UTC that day and moved the release from October 22 at 14:00 UTC to October 21 at 14:00 UTC. The foundation says Calif then mistakenly published a video of a proof of concept, that copies circulated after the video was deleted, and that the security team had not identified a functional exploit among the proofs of concept it inspected at the time of the public release. It also says that on October 21 at 07:41 UTC, more than six hours before the coordinated release, Chainguard published built images that contained the fix. The foundation’s post says Chainguard “unilaterally broke the embargo.” That is the foundation’s characterization of a company that had received the patch early, not a finding by this desk.

Separately, OpenAI says it has committed $1 billion in subsidized access to its Daybreak tool for what it calls frontline defenders, aimed at organizations with limited security resources. That figure is OpenAI’s statement of a subsidy commitment. It is not a valuation, and it is not a claim that the money has been spent.

PHP 8.1 and older no longer receive updates from the PHP project, the project’s news post says. CISA’s alert says organizations that cannot update immediately, or that still run those older versions, should take the PHP systems offline until they are patched or updated. This story is not a set of instructions for doing that work.

## Why it matters (analysis)

Two claims are easy to mash together, and the sources do not. The patches are real, the versions are named, and a U.S. cyber agency said on October 23 that it had not seen successful exploitation in the wild. The discovery story is messier: the foundation traces the underlying out-of-memory problem to 2024 work by its own developer, and OpenAI credits a 2026 AI-assisted report from Calif, plus an independent report from Wiz, with finding the flaws before attackers did. The volume point that is actually quantified is the foundation’s own: 15 published CVEs since July 1, and more than 100 reports that did not hold up. That is not a global count of every CVE in every product.

This report is not security advice and not a guide to testing the flaws. Patch decisions belong with the operator and the official notices linked above.

Related reporting: [OpenAI’s account of frontier training](/2026/10/25/openai-frontier-training-offline/), which describes a disclosure effort the company calls Patch the Planet.
