---
layout: page.11ty.js
title: getting started
metaDescription: The homepage of my site
---

Getting started in Zinc is easy. I promise. The hardest part is cloning the repo, but after that it's simple.

## Get the code

### Start with the Template

### Engine Only

1. Clone Template Repo

2. Run the application (Program.cs)

## Get Something On Screen

### Simplest Start

### Make Things Move

#### Subsection




The best place to start is how Zinc thinks about "stuff" in a game.

Unlike in other engines where you have objects that can have loosely attached or detached components, Zinc instead favors a system where objects have "fixed" functionality over time.

Instead of having some loose object (GameObject in Unity, Node in Godot) who's functionality isn't actually definied except via the _components_ that are added to that object, Zinc favors a system where instead there are a handful of useful primitive objects that you can easily extend to add additional functionality or also define your own that are a combination of the features of others.

These objects themselves can be parented to other objects to create trees of objects, but notably are not "atomic" units like Godot nodes or Unity Monobehaviors.

While this may seem limiting at first, you