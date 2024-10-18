import emojiShortcode from "./src/_includes/shortcodes/emoji.js";
import relatedShortcode from "./src/_includes/shortcodes/related.js";
import detailsShortcode from "./src/_includes/shortcodes/details.js";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginTOC from "eleventy-plugin-nesting-toc";
import { IdAttributePlugin } from "@11ty/eleventy";
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
// import { isGlobMatch } from "@11ty/eleventy/Util/GlobMatcher.js";

export default function (eleventyConfig) {
    //https://www.11ty.dev/docs/plugins/syntaxhighlight/
    eleventyConfig.addPlugin(syntaxHighlight);
    //https://www.11ty.dev/docs/plugins/id-attribute/
    eleventyConfig.addPlugin(IdAttributePlugin);
    eleventyConfig.addPlugin(pluginTOC, {
      tags: ['h2', 'h3', 'h4'], // which heading tags to include in the TOC
      wrapper: 'nav',           // element to wrap the TOC in
      headingText: 'On This Page',
      wrapperClass: 'toc underline'       // class for the wrapper element
    });
    //https://www.11ty.dev/docs/plugins/inputpath-to-url/
    eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

    eleventyConfig.addTransform("add-toc", async function (content) {
      // console.log(this.page.inputPath);
      // console.log(this.page.outputPath);
      // console.log(eleventyConfig.getFilter("toc")(content));
      content = content.replace('{TOC_PLACEHOLDER}', eleventyConfig.getFilter("toc")(content));
      // pluginTOC.buildTOC(content, pluginTOC.parseOptions({},{}));
      // console.log(toc(content));
      return content; // no changes made.
    });

    eleventyConfig.addPassthroughCopy({ public: "/" });
    // Copy the heading-anchors.js file to the output
    eleventyConfig.addPassthroughCopy({
      'node_modules/@zachleat/heading-anchors/heading-anchors.js': 'js/heading-anchors.js'
    });

    eleventyConfig.addShortcode("emoji", emojiShortcode);
    eleventyConfig.addShortcode("related", relatedShortcode);
    eleventyConfig.addShortcode("details", detailsShortcode);


    eleventyConfig.addCollection("nestedContent", function(collectionApi) {
      console.log("collection api dirty: " + collectionApi._dirty);
      const nestedStructure = {};
      
      // let globs = collectionApi.getGlobs("src/**/*.md");
      // collectionApi.getAllSorted().filter((item) => {
      //   console.log(item.inputPath + " matches: " + isGlobMatch(item.inputPath, globs));
      // });
      
      collectionApi._filteredByGlobsCache = new Map();
      const content = collectionApi.getFilteredByGlob("src/**/*.md");
      
        content.forEach(item => {
          const parts = item.filePathStem.split('/').slice(1);
          let current = nestedStructure;

          // console.log(parts); 
          
          parts.forEach((part, index) => {
            if (index === parts.length - 1) {
              if (!current[part]) current[part] = [];
              current[part].push(item);
              console.log("pushing " + item.filePathStem );
            } else {
              if (!current[part]) current[part] = {};
              current = current[part];
            }
          });
        });
        console.log(nestedStructure);
        return nestedStructure;
      });

    //   function buildNestedStructure(items, depth = 0) {
    //     const structure = {};
        
    //     items.forEach(item => {
    //       const parts = item.filePathStem.split('/').slice(1);
    //       const currentPart = parts[depth];
          
    //       if (depth === parts.length - 1) {
    //         if (!structure[currentPart]) structure[currentPart] = [];
    //         structure[currentPart].push(item);
    //         console.log("pushing " + item.filePathStem);
    //       } else {
    //         if (!structure[currentPart]) structure[currentPart] = {};
    //         structure[currentPart] = {
    //           ...structure[currentPart],
    //           ...buildNestedStructure([item], depth + 1)
    //         };
    //       }
    //     });
        
    //     return structure;
    //   }
      
    //   const nestedStructure = buildNestedStructure(content);
    //   console.log(nestedStructure);
    // });

    return {
      dir: {
        input: "src",
        layouts: "_layouts",
        includes: "_includes",
        output: "dist", // Or whatever build directory you prefer
      },
    };
  }