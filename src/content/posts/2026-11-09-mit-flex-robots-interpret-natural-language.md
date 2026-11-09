---
title: MIT's FLEX uses an LLM to help robots read intent into spoken corrections
description: MIT and NYU researchers built FLEX, a three-step Add, Generalize and Mask pipeline that lets a robot arm generalize from commands like "Don't spill on the laptop" to avoiding all electronics.
date: '2026-11-09T13:00:00.000Z'
updated: '2026-11-09T13:00:00.000Z'
category: models-research
tags:
  - mit
  - robotics
  - llm
  - gpt-4o
  - motion-planning
  - corl
author: AI Headline Hub
draft: false
image:
  src: /images/stories/mit-flex-robots-interpret-natural-language.webp
  alt: White robotic arm working at a bright laboratory bench
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/mit-flex-robots-interpret-natural-language.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ''
sources:
  - title: AI-assisted learning platform helps robots reason beyond literal commands
    url: https://news.mit.edu/2026/ai-assisted-learning-platform-helps-robots-reason-beyond-literal-commands-1109
    publisher: MIT News
---

Researchers from MIT and New York University have built FLEX, a system that lets a robot take a plain-language correction and work out the wider rule behind it, [MIT News reported](https://news.mit.edu/2026/ai-assisted-learning-platform-helps-robots-reason-beyond-literal-commands-1109) on November 9. The work will be presented at the Conference on Robot Learning this month.

FLEX, a "flexible feature-editing pipeline" for robot motion planning, has so far been tested only in simulation.

## From one warning to a general rule

In one demo, a robot arm carries a cup of coffee across a cluttered table and a person types "Don't spill on the laptop!" FLEX uses a large language model to reason about why the laptop matters. The robot then changes its path to avoid both the laptop and a nearby phone, even though nobody mentioned the phone.

"The idea is that there is some higher-level intention behind the words that you say," said study author Nathan Dennler, a postdoc at MIT's Computer Science and Artificial Intelligence Laboratory (CSAIL). "FLEX gives you an interface of communication with a robot to say, 'When people say this, they mean that.'"

## Add, Generalize, Mask

The pipeline has three steps:

- **Add:** the robot adds the object named in the command, such as a mug, to its list of features that matter for the task. Earlier methods stopped here.
- **Generalize:** an LLM (GPT-4o in this work) looks at everything the person has flagged so far and infers a broader category, such as fragile objects.
- **Mask:** the robot's vision system removes objects that are no longer in the scene from the feature list.

According to MIT, the whole process takes about five seconds.

## Tested in three simulated tasks

The team tested FLEX on a simulated robot arm doing three jobs: serving coffee, moving a candle and carrying a bowling ball. Volunteers typed commands such as "Stay away from the stack of paper" and "Don't drop on the mug." The robot followed each command literally. It also generalized to avoid spilling on electronics, keep away from flammable objects and avoid dropping its load on fragile things.

The study was led by Andreea Bobu, an assistant professor of aeronautics and astronautics who heads MIT's CLEAR Lab. Co-authors include Audrey Lee and NYU's Ilia Sucholutsky. "What excites me about FLEX is that it can pick that up from a sentence or two instead of asking you to spell out every rule," Bobu said.

The paper is titled "Flexible Language-Guided Representation Editing for Adaptive Robot Behavior." The work was partly supported by the MIT Generative AI Impact Consortium and the MIT Schwarzman College of Computing.
