---
layout: page.11ty.js
title: getting started
metaDescription: The homepage of my site
---

## Download Dotnet

Zinc uses C#, and as such requires dotnet in order for it to be used. You can download the latest dotnet version from Microsoft's website here:

[https://dotnet.microsoft.com/en-us/download](https://dotnet.microsoft.com/en-us/download)

Once downloaded and installed, verify it's working by running the following from the command line:

```base
dotnet --info
```

If dotnet is installed, you should see some information output to the console regarding your dotnet installation.

## Setup Zinc

Zinc is an open source engine, so to get started you just need to clone down the code from Github.

There are a few ways to do this:

1. (Simple) [Start with a template](/#start-with-the-template)
    This option gets you the code for the engine as well as a directory and project structure for you to start working on your game.
2. (Advanced) [Start with the only the engine source](/#start-with-engine-code-only)
    This option lets you clone the engine source and setup your own directory and project structure for your game,

### Start with the Template

The template repository provides you a good starting point for a new Zinc project. Specifically, it provides you with both the engine code _and_ a seperate [project](/src/concepts/project-file.md) where you can work on your game to allow you to keep the engine code seeparte from your game code.

[https://github.com/zinc-framework/Zinc.Template](https://github.com/zinc-framework/Zinc.Template)

You can make a copy of the repo to your own Github account by clicking the "Use this template" button on the top right of the page. This will create a copy of the repo for your own Github account. [Read more about template repositories here](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

After duplicating the template, navigate to the duplicated template on your own Github profile and then clone down that repo to your own local machine.

Next, see [init the submodules](#init-the-submodules) below.

### Start with Engine Code Only

If you don't want to use the template and want _only_ the engine code, you can also directly clone down only the engine source by cloning the repo here:

[https://github.com/zinc-framework/Zinc](https://github.com/zinc-framework/Zinc)

This will give you _only_ the engine code. You can work with your game and engine as the _same_ `.csproj` file, or you can include Zinc in a different project in the same solution (this is what the template does). See [the template repo's .csproj](https://github.com/zinc-framework/Zinc.Template/blob/main/src/Game/Game.csproj) for an example of how to do this.

Next, see [init the submodules](#init-the-submodules) below.

### Init the submodules

Once you've got the code cloned, you'll need to perform a final step before actually being able to run Zinc.

Inside the directory where you cloned either the template repo or the engine code directly, run the following command in a terminal:

```bash
git submodule update --init --recursive
```

This will clone and init all the dependent submodules that make Zinc run.

Note that you only need to do this once, and once run you're good to go!

## Get Something On Screen

### Populate Program.cs

The entry point for your game will be your `Program.cs` file. If you are working with only the engine code, you'll need to make your own. If you're using the template, you can find your `Program.cs` at `src/Game/Program.cs`.

The template has some pre-filled out code in `Program.cs`. If you opted to clone down only the engine code, you can replicate the template's `Program.cs` by putting this in your `Program.cs` file:

```cs
using Zinc;
Engine.Run(() => { new Shape() });
```

### Run the engine!

To run the engine, you need to specify the project to run.

If you are using the template, you can run the following command in your root directory:

```bash
dotnet build && dotnet run --project .\src\Game\Game.csproj
```

If you cloned down the engine only, you'll need to either run the `Zinc.csproj` project directly (with your own `Program.cs`) or change the command to point to wherever you chose to create and link a project.

After running, you should see something like this on your screen:


{% details "what about mono?" "zinc is a modern interpretation of a C#-centric game engine, and as such doesn't use mono/monogame. instead it has a its own cross-platform backend powered by sokol." %}


{% related "/src/guides/working-with-csharp.md" %}






The best place to start is how Zinc thinks about "stuff" in a game.

Unlike in other engines where you have objects that can have loosely attached or detached components, Zinc instead favors a system where objects have "fixed" functionality over time.

Instead of having some loose object (GameObject in Unity, Node in Godot) who's functionality isn't actually definied except via the _components_ that are added to that object, Zinc favors a system where instead there are a handful of useful primitive objects that you can easily extend to add additional functionality or also define your own that are a combination of the features of others.

These objects themselves can be parented to other objects to create trees of objects, but notably are not "atomic" units like Godot nodes or Unity Monobehaviors.

While this may seem limiting at first, you