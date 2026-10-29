---
title: "DeepMind previews Genie 4, a world model with its own sound"
description: "DeepMind’s October 27 post says Genie 4 generates a scene and its audio together. A research preview is open to trusted testers first."
date: 2026-10-29T15:00:00.000Z
updated: "2026-10-29T15:00:00.000Z"
category: models-research
tags:
  - google
  - deepmind
  - models
  - research
author: AI Headline Hub
draft: false
image:
  src: /images/stories/genie-4-world-model.webp
  alt: An empty sound stage with a blank dark screen, a camera on a tripod, and headphones on a stool, and no people, logos, or readable text.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/genie-4-world-model.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
sources:
  - title: "Genie 4: A new generation of world simulation"
    url: https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/
    publisher: Google DeepMind
  - title: "We’re announcing Genie 4, our new world model for real-time interactive simulation"
    url: https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-genie-4/
    publisher: Google
---

DeepMind said on October 27, 2026 that Genie 4 is a world model that generates a scene and its sound at the same time. The [DeepMind post](https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/), credited to Raia Hadsell, Diego Rivas, and Hang Qi, calls the model natively multimodal: music, ambient noise, and spoken dialogue are produced with the picture, not added afterward. A [shorter Google post](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-genie-4/) the same day describes the same preview. This desk did not run the model.

## What the posts say a person can steer

DeepMind says Gemini Omni anchors how a scene looks and behaves, and that other Gemini models supply reasoning so a simulation stays continuous. A person can set an event going, it says, and Genie 4 plays out what happens next, including how the people in the scene move, react, and speak. While it runs, natural language can change the weather, move the camera, or introduce a person or an object. Between those prompts, DeepMind says Gemini keeps the scene moving as one place.

The post says the model simulates physical cases such as airflow and collisions, and that the larger change is how people in the scene move and how they can be steered. It calls Genie 4 its first real-time world model that generates audio itself. Ambient sound follows the setting. Dialogue, it says, can answer the user or an event in the world as the scene continues.

DeepMind says a smaller model, Gemini 3.8 Flash, sits in the loop as a guide. As Genie 4 draws the world, Flash watches, breaks a goal into steps, and checks incoming frames to see whether a step worked. If the world changes or the user interrupts, the plan changes. DeepMind also says it has been trying Gemini 4 Argon together with Genie 4 in robotics research. One example it describes is Argon splitting a checkers task into steps that Genie renders, with Apptronik’s Apollo humanoid in the simulation. That is DeepMind’s account of a demo. It is not a trial this desk ran, and the post does not give a score for it.

{% figure "/images/inline/genie-4-world-model-1.webp", "Closed headphones and a plain gray speaker on a wood table, with no people, logos, or readable marks.", "DeepMind says Genie 4 is its first real-time world model that generates audio itself." %}

## Who has it, and what DeepMind says still slips

The preview is with trusted testers. DeepMind says a wider release comes later, first for Google AI Ultra subscribers inside Project Genie and for early-access partners on the Gemini API and in Google AI Studio. A waitlist is open for Project Genie. Neither post lists a price.

DeepMind says the tester groups span creative work, journalism, education, gaming, and engineering. It says people in those groups are trying the model as a draft of a filmed scene, as a way to turn one still photograph into a short moving simulation, as a game prototype before engine code, and as a sketch of a scenario. Those are the company’s categories of use. They are not outcomes this desk checked.

The limits are stated in the post. DeepMind says a short session can hold together, and that detail and object permanence can drift as a run gets longer, after several prompt edits, or as the view moves through the scene. It names complex physical interactions, real-time audio accuracy, readable text, spatial accuracy, and long-run consistency as open research. It says every video and audio clip from Genie 4 carries SynthID, Google’s watermark for generated picture and sound. It says the preview was checked inside the company against its safety policies, and that trusted testers see it before a broader release.

{% figure "/images/inline/genie-4-world-model-2.webp", "A small unbranded robot arm folded on a steel bench in an empty lab, with no people, logos, or readable screens.", "DeepMind describes one robotics demo. It does not publish a score for it." %}

## Why it matters (analysis)

Genie 4 is a research preview with a waitlist, not a tool a reader can open from these posts. DeepMind says simulating the world matters to its work toward AGI. [What does AGI mean?](/explainers/what-agi-means/) lines up published definitions and does not treat a product announcement as one of them. The same week, Google described a different system, [Gemini 4 Carbon](/2026/10/29/gemini-4-carbon/), as a frontier model held for cyber defenders and scored, on Google’s account, at 59 on an outside index. Genie 4’s post is about simulated scenes and sound, not that index. Both files sit under [Google and DeepMind](/topics/google-deepmind/).
