---
layout: page.11ty.js
title: target scene
metaDescription: The homepage of my site
---

The target scene is the [Scene](/src/guides/primitives/scene.md) that new entites will be added to when created (if no other scene is explcitly specified in the constuctor of the entity).

## The "Global" Scene

Zinc has a "global scene" that is the implicit target scene when Zinc first starts up and is created automatically. This gives you the ability to immediatly start creating in Zinc without needing to worry about Scene architecture.

## Changing the Target Scene

When you `Start()` a scene, the started scene is implicitly set as the Target, so any new entities will get added to that scene. You can alternatively pass a boolean parameter `Start(false)` to prevent the newly started scene from becoming the target.

You may not want to have started scenes automatically set as the target scenes if you are loading multiple scenes at the same time and want to make sure "gameplay scenes" don't bleed entities to "ui scenes" or otherwise.

{% related "/src/guides/primitives/scene.md" %}