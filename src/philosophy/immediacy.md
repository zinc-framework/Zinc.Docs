Getting something on screen should be easy. 

Zinc makes this trivial:

```csharp
new Shape(); 
```

Calling that will put a square in the center of your screen. You can also do more of course, like setting the position:

```csharp
new Shape(){ X = 100, Y = 200 }
```

Zinc usually favors trim constrcutors with optional parameters, and exposes entity-relevant variables through properties. Which is to say that in Zinc, [the object-initializer syntax](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/object-and-collection-initializers) is your friend. This dovetails a bit with Zinc's philosophy of [locality](./locality.md), but the idea is to try to give you everything you need at the moment you need it.

Dovetailing with [magic](./magic.md) as well, we give you typesafe access to anything you put in [the res folder](../concepts/res-folder.md). Want to see what files you've got in your code editor? Try `Res.` and see what code autocomplete shows you.

Your whole game should feel addressable at any point of when you're writing code.