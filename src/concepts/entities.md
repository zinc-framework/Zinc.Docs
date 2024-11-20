
Entites dont have "components" in the same way they do in Unity.

Instead, Entites are more or less _the thing_, and from them you have access to various properties and components that exist as _part_ of that entity itself.


--
Coming from Gamemaker?

If the above sounds familiar to you and you've worked in GameMaker — Zinc is very similar! Like Zinc, GameMaker has no concept of "components" — instead entities just have variables and events.

You could even recreate the concept of a GameMaker entity itself via Zinc!

Zinc's entites are a bit more "trim" be default than GameMaker's, but you could very easily make a single entity type in Zinc that does everything, similar to GameMaker.

--

Entites can be parented/childed to each other, but unlike in GameMaker, doing that doesn't inherit variables/events from parents.

However, you _can_ extend Entity classes to make new child entity classes that _do_ inherit parent properites (and is indeed how things like Sprite/Shape/Anchor/etc. work!).