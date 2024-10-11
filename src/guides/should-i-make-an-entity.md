Short answer — probably not.

You want to reach for Zinc's ECS when you have some _component_ data that needs to be handled every frame and are ideally core engine-level type operations.

Examples of this are things like Sprite — the `Sprite` component defines Sprite data, but the component itself doesn't handle the rendering. A _System_ (in the ECS sense) handles the rendering, and gathers `Sprite` components from any tagged Anchor-derrived class with `Sprite` attached to it.

Zinc goes out of its own way to try and make it so you don't really need to work with the ECS that powers the engine. Zinc "shadows" the ECS world with its own managed object system, so you shouldn't really ever need to think about it or even directly engage with it.

Custom Entites/Components however _can_ still be created if you deem it necessary, and can also be generally useful for doing performance-critical operations. For example, if a core part of your game has 10,000 entites that all move in specfic paths every frame, doing that as a System in the ECS would be more performant than have 10,000 entities that perform that action in Update.

So in short, probably don't worry about ECS. However, if you're trying to perform _the same operation on a large number of entites_, ECS is a tool you can definitely reach for.