---
layout: page.11ty.js
title: Creating Entities
metaDescription: The homepage of my site
---

One thing to try and do with Zinc is to not create custom types for everything as soon as you start.

## Getting Started

Try to sketch out basic behavior with the primitves (Sprite, Shape, etc.) and their built in functions (Update, Collider_OnStart, etc.).

Those functions often pass in a reference to `self` that you can cast to the type itself and perform operations on:

```cs
(self as Shape).X = newX;
```

If you need some state handled between functions, it's easy to want to reach for a custom type, but you can get really far with Zinc's tagging system.

Functions can add and remove tags at will, and inside your behavior functions you can switch based on tags. The "Cards" demo shows an example of this.

```cs
on collide - add tag
```

Tags are a great way to scaffold and _test out_ behavior before committing to needing to create a new type that you can define those fields on.

For example, imagine you want to test some sort of animation timing function where, after a certain point, a ship shows a little animation of a rocket plume when it moves. You _could_ create a Ship type and add in a member variable like "IsMoving", and in some update loop check that to spawn the animation:

```cs
Ship class with IsMoving variable
```

However, doing this requires you committing to the idea of a ship and the idea of animation timed movement. Imagine you decide to no longer use animation timings for this or want to get rid of the idea of a "ship". Now you need to delete the whole ship class and any code that references it.

Instead consider a similar system with tags:

```cs
Shape class with IsMoving tag
```

Here, we never actually "committed" to the idea of a ship — we've just got a sprite and some loosely defined state via tags. Adding the the behavior in the first place (and removing it later) is all done in the exact same spot. We aren't spreading our object definition around.

Tags can be defined in place and as such allow you to rapidly add on "loose functionality" to objects without needing to edit parent objects directly. This is a _great_ tool for prototyping because you don't break your "flow" state when defining an object. You can work fulling inside he object definition itself and dont need to keep jumping back and forth between a class and disparate behavior functions. Everything is right there.

That said, once you've got your object functionality locked in, making a class is totally fine! You can convert your most used object tags to fields on a type, and also keep tags where it makes sense (I like tags for "local" functionality that represent object state I don't want to "bleed" to the object itself).