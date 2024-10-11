import emojiShortcode from "./src/_includes/shortcodes/emoji.js";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { IdAttributePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
    //https://www.11ty.dev/docs/plugins/syntaxhighlight/
    eleventyConfig.addPlugin(syntaxHighlight);
    //https://www.11ty.dev/docs/plugins/id-attribute/
    eleventyConfig.addPlugin(IdAttributePlugin);

    eleventyConfig.addPassthroughCopy({ public: "/" });
    // Copy the heading-anchors.js file to the output
    eleventyConfig.addPassthroughCopy({
      'node_modules/@zachleat/heading-anchors/heading-anchors.js': 'js/heading-anchors.js'
    });
    eleventyConfig.addShortcode("emoji", emojiShortcode);


    eleventyConfig.addCollection("nestedContent", function(collectionApi) {
        const content = collectionApi.getFilteredByGlob("src/**/*.md");
        const nestedStructure = {};
    
        content.forEach(item => {
          const parts = item.filePathStem.split('/').slice(1);
          let current = nestedStructure;
          
          parts.forEach((part, index) => {
            if (index === parts.length - 1) {
              if (!current[part]) current[part] = [];
              current[part].push(item);
            } else {
              if (!current[part]) current[part] = {};
              current = current[part];
            }
          });
        });
    
        return nestedStructure;
      });

    return {
      dir: {
        input: "src",
        layouts: "_layouts",
        includes: "_includes",
        output: "dist", // Or whatever build directory you prefer
      },
    };
  }