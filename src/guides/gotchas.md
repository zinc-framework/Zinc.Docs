Zinc strives to be as simple and expressive as possible, but there are still things to be aware of when working with the engine. This is a general list of things to look out for as well as ways to get around them.

1) Don't initiate Scene fields that have `Anchor` derrived objects with default field values.

Don't do this:
```
Scene with memebe anhor def
```

Do this instead:
```
inside create()
```

Scenes are _not_ singletons and as such can be created/destroyed at will with many instances of them. When a scene is created, your fields will also get initied (per C#), but the objects you init wil get added to the Scene that is already loaded and set as your [Engine.TargetScene](../concepts/target-scene), _not_ the scene that they are a part of.

This is likely not what your intention is when defining fields on a scenes, so the proper pattern here is to instead defer initializion until the Create() function of a scene ([See more on Scene Lifecycle here](../concepts/scene-lifecycle)).
