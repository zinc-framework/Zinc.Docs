Zinc is _magic_.

I know this may scare some developers a bit, so let me explain.

Zinc tries to provide, as much as possible, for the 99% case. The "very likely" path most users will take. You are obviously free to diverge from there, but, in the spirit of making games quickly and efficiently, it makes sense to provide some useful constructs on top of commonly needed functionality.

## Res Folder

BEGONE to needing to hard code paths to things and also writing boilerplate conversion code. Zinc populates a `Res` class with statically-typed references to all the files you place in the `Res` folder. It also provides easy ways to modify those files to do common things (like slicing a spritesheet, converting it to Sprite, etc.).

Read more on [the res folder](../concepts/res-folder.md)

## Depot

Zinc ships with Depot support, meaning you get type-safe data access out of the box. Don't worry about needing to write a JSON/CSV loader or anything like that. Depot can do likely 99% of what you need.

## Aesprite

You're making a 2D game, so you've probably got sprite art, so you're probably using Aesprite. Zinc auto recgonizes Aesprite files placed in `Res` and will provide you directly with both primitives and spritesheets of your Aesprite data.

## LDTk

LDTk is a best in class, engine-agnostic level editor tool (and much more!). Zinc has first-class support for importing LDTk files and automtically creates primitives you can instantiate in your scene using your level data. We also provide ways for you to bind your LDtk data to your Aesprite and Depot data!

## Components/Entites

This is maybe the most "magic" bit of Zinc. Entites tagged with component attributes have the values from the component "put on" to the entity, with no effort required by you. For now, don't worry about it.