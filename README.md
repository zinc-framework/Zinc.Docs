# zinc docs

WIP - do not use yet. docs are incomplete and not hosted anywhere yet.

built in 11ty + tailwind css

everthing lives in `src/`

`_includes` contains js utilities and shortcodes  
`_layouts` contains the layouts for the primary page types

doc sections are sorted by the folder they are in, not in any declared front matter.

section ordering is defined in `sectionOrder.js` in `_includes`

to build:
```
npm run build
```

to dev:
```
npm run start
```

THINGS:
* heirarchy.js produces a json object as _data that represents a folder structure of content from the src/ directory as well as a mapping of input file to what it's parent/subdir are.
* note: we only support collections two levels deep right now.
* a nested collection is generated at the start from that data
* color theme is declared in /_data/colors.js. this is imported in the tailwind config to set the bg section colors.
* the section color mappings are used renderNestedContent.js to pick the bg color style for the section background.
* colors are also directly mimicked in the css for anchor link hover access
* by default posts get the pages template (via src/src.json)

anchors + toc
* anchor links are generated automatically from markdown headings via the built-in IdAttributePlugin and the <headingAnchor> tag.
* the toc is automatically built as part of a transform step that post-processes the rendered html. this happens here so we get the proper id tags inheirted from <headingAnchor> component


style:
* when linking to other content, link relative to the markdown file directly (aka `[/foo/bar.md]` instead of `[foo/bar]`) 