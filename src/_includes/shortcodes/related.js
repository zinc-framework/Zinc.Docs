/** An accessible emoji shortcode */
import heirarchy from "../../_data/heirarchy.js";
import sectionColors from "../../_data/sectionColors.js";

export default function related(pageLink) {
    let resolved = heirarchy();
    console.log("logging resolved");
    console.log(resolved.metadata);
    pageLink = pageLink.replace('.md', '');
    console.log(pageLink);
    let section = resolved.metadata[pageLink].section;
    let subsection = resolved.metadata[pageLink].subSection;
    subsection = subsection == "" ? "" : `/${subsection}`;
    var sectionColor = sectionColors[section];

    console.log(pageLink);
    console.log(section);
    console.log(subsection);

    return `
      <a href="/${section}${subsection}/${pageLink}.md" class="block no-underline">
      <div class="p-4 border-2 border-grey rounded-lg hover:bg-hover">
        <div class="flex flex-row flex-distribute">
          <div class="basis-3/4">
            <div class="text-1xl mt-auto px-0">${section}${subsection}</div>
            <div class="text-3xl px-0">${pageLink}</div>
          </div>
          <div class="basis-1/4">
            <p class="text-center font-size:2rem">↗</p>
          </div>
        </div>
        <div class="${sectionColor} h-1 mt-4"></div>
      </div></a>`;
  }