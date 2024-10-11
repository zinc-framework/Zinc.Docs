# zinc docs

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