One of Zinc's core (but not explictily stated) operating principles is something called "locality of behavior".

I'm borrowing the term from where I first saw it defined in the [HTMX documentaion](https://htmx.org/essays/locality-of-behaviour/):

> The behaviour of a unit of code should be as obvious as possible by looking only at that unit of code

That whole article is a great read and easily applicable to game development more generally.

The idea here is that you can encapsulate an objects whole purpose at the point of definition of the object itself.

An easy way to understand this is to consider what is _not_ this. Specficially, imagine a definition of a Ship class with an OnCollide method:

```
class
OnCollide(other) function
```

Elsewhere we create an instance of that class, add it to a list of objects, and then run some collision detection against them:

```
instance
collistionTest(objects)
```

This is pretty standard code. However, imagine you are just looking at the Ship class. When does OnCollide get called? Can anyone call it? What's a valid collision that can result in OnCollide?

This is far from "as obvious as possible". Let's instead approach our object construction from Zinc's perspective:

``
Zinc ship oncollide
``

Here we can see the "full" behavior of a ship. Not only that, but we don't even need to use a Ship type, we can simply use the Sprite primitive Zinc gives us access to.

By defining the behaior of the ship in a single location, it's much easier to reason about and refactor our behavior when things need to change. It's also easier to author in the first place, and lets us maintain velocity when putting together games so we don't need to think about types as much until necessary.

---

As a side note, Zinc is definitely not the first engine to forward this idea of working!

[Kaplay/Kaboom.js](https://kaplayjs.com/guides/creating_your_first_game/) use this extensively as does the C++ engine [Amulet](https://www.amulet.xyz/doc/#running-a-script). a327ex also talks about the same idea and inspirations [here](https://github.com/a327ex/emoji-merge?tab=readme-ov-file#anchor-class) for their game Emoji  Merge.

