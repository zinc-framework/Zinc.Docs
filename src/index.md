---
layout: home.11ty.js
title: Home
metadata: 
  title: Zinc
  desc: C# Game Framework for rapid prototyping
#   url: https://tannerdolby.com
#   img: https://tannerdolby.com/images/arch-spiral-large.jpg
#   img_alt: Archimedean Spiral
#   twitter_card_type: summary_large_image
#   twitter_handle: tannerdolby
---
{% metagen metadata %}

```cs
// render a shape on screen in a single line:
Zinc.Engine.Boot(() => new Square());
```

[<u>get started</u>](./guides/getting-started.md)

<!-- {% emoji "👋" "Waving hand" %} Hi there! -->