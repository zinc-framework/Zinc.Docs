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
          <div class="absolute grid auto-cols-max grid-flow-col gap-8">
            <div>
              <a href="/"><img src="/images/logo.png" style="width:100px"></img></a>
            </div>
            ${navHTML}
          </div>


          <div class="text-1xl mt-auto">${section}${subsection}</div>
          <div class="text-5xl">${data.title}</div>
          <div class="h-6"></div>
        </div>
      </div>
      <div class="container mx-auto max-w-4xl h-full">
        <div class="sticky top-0">
          <div class="absolute -left-64 top-20">
            {TOC_PLACEHOLDER}
          </div>
        </div>
        <div class="h-6"></div>
        <article class="prose prose-zinc prose-invert max-w-2xl prose-h2:text-3xl prose-code:before:hidden prose-code:after:hidden ">
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