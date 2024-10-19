export default class Page {
  data() {
    return {
      layout: "base.11ty.js",
    };
  }

  render(data) {
    let section = data.heirarchy.metadata[data.page.fileSlug].section;
    let subsection = data.heirarchy.metadata[data.page.fileSlug].subSection;
    subsection = subsection == "" ? "" : `/${subsection}`;
    var sectionColor = data.sectionColors[section];

    let sections = Object.keys(data.heirarchy.structure);
    let navHTML = "";
    for (const section of sections.slice(1)) {
      navHTML += `<div class="content-center px-4 h-8 my-auto ${data.sectionColors[section]}"><a href="/${section}">${section}</a></div>`;
    }

    return `
      <div class="${section} ${data.page.fileSlug}">
      <script type="module" src="/js/heading-anchors.js"></script>
      <div class="${sectionColor} h-80">
      
      <div class="container mx-auto max-w-4xl h-full flex flex-col">
          <div class="px-4 lg:px-0">
            <a href="/"><img src="/images/logo.png" style="width:100px"></img></a>
          </div>
          <div class="grid auto-cols-max grid-flow-col gap-8 px-4 lg:px-0 max-sm:hidden">
            ${navHTML}
          </div>


          <div class="text-1xl mt-auto px-4 lg:px-0">${section}${subsection}</div>
          <div class="text-5xl px-4 lg:px-0">${data.title ?? data.page.fileSlug}</div>
          <div class="h-6"></div>
        </div>
      </div>
      <div class="container mx-auto max-w-4xl h-full">
        <div class="block xl:sticky xl:top-0 px-4 xl:px-0">
          <div class="block xl:absolute xl:-left-64 pt-8 xl:pt-0 xl:top-20">
            {TOC_PLACEHOLDER}
          </div>
        </div>
        <div class="xl:h-6"></div>
        <article class="prose prose-zinc px-4 lg:px-0 prose-invert max-w-2xl prose-h2:text-3xl prose-code:before:hidden prose-code:after:hidden ">
        <heading-anchors>
        ${data.content}
        </heading-anchors>
          ${this.emoji("👋", "Waving hand")} Thanks for visiting!
        </article>
      </div>
      </div>
      <div class="h-32"></div>
    `;
  }
}