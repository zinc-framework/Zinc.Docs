When you program a game with Zinc, it should never feel like you need to venture too far outside of your comfort zone. The API surface tries to be small enough to mostly hold in your head, and Zinc favors giving you control over what gets exposed to you instead of trying to let us declare it.

A simple example here is something like constrcutors. Anything that can be constructed will often have just a single constrctuor, and options will be provided through optional parameters with sensible default values.

Programming a game itself can also easily be done in a single file. You don't even necesarily need to use classes (see [Workflow](../guides/workflow.md)). The idea is to get out of your way as much as possible and let you just focus on writing your game. You don't even really need to use Zinc APIs — you get lots of common functionality in for free with the built in entites and from there can form a lot of the basics of a game.

When you write a game in Zinc, the idea is that most of the code you write is _your_ code, not code you have to scaffold to get you to work with Zinc, but instead that you are able to feel immediatly in control of what Zinc can do.