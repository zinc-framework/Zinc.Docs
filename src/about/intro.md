---
layout: page.11ty.js
title: intro
metaDescription: The homepage of my site
---

# heading 1 test

Zinc is meant to be very simple to use and an easy way to make games quickly. It’s also backed by a performant backend that does a lot of work. 

## heading 2 test

A key part of Zincs approach is how it assumes most everything can be “baked” at edit time, which means you mostly don’t want to be adding/removing functionally from things at runtime.

This means in Zinc it would be more idiomatic to make two separate types that represent the changed state and convert data between them.

If this sounds weird, it’s also because it is. A better way here to have that functionality already built into your object and just toggle it on/off.

Said differently, if you’re coming from an engine like Unity, in Zinc you basically never really want to have to call Add/Get/Remove component. We have better tools.

Zinc uses something closer to an Actor model where, when making something, you probably just want to extend either Sprite (static art) or AnimatedSprite (animated art). These two classes can do 99% of what you want and give you access to an expressive way of declaring their behavior.

Specifically, Zinc has a special ability to sort of “forward” component values onto “owning” types directly, meaning that if an object has some component like a Collider, you can access the fields of that component type directly on the object itself. This then means that objects can declare most all of their functionality inside the line of code that initializes the object in the first place.

For example, here’s a sprite that defines a moving platform:

Code example

Notice how I don’t need to call any additional methods to set this up or attach any additional scripts to the object. It “just works”.

Zinc is very fast on the backend, so you can create large numbers of Sprite-derived objects and not really need to worry about performance (like, thousands). You could build a custom particle system using sprites and the engine probably wouldn’t flinch (but we also have a particle system!)

However, if these tools aren’t enough for you, you have a few ways of doing “more” at varying degrees of complexity (while also hopefully still being relatively simple).

The first is that you can extend a different, more fundamental type. This gets rid of some of the “stuff” that exists on types like Sprite and gives you a more clean starting point. Anchor is probably the closest to this and represents “a point in a scene” and not much else. SceneObject is more fundamental than that and just represents “something in a scene”. Beyond that is just “Entity” which represents, simply, “something”.

You can extend these and do what you’d like, but how would you build your own type like Sprite or something similarly “complex”?

Up to now I’ve tried to now use the term ECS as it’s a bit of buzzword in game engines, but at this point we need to talk about it. Zinc uses an ECS backend for the actual game engine to operate, and making more robust primitives for your own game will likely require you to work with it (it’s not that bad though I promise).

If you want to have specific behavior per object, you can do that with the mechanisms of Update/Hover, etc.

However if you want specific behavior per type, you’ll need to use the ECS.


