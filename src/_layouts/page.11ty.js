export default class Page {
  data() {
    return {
      layout: "base.11ty.js",
    };
  }

  render(data) {
    let section = data.heirarchy.metadata[data.page.fileSlug].section;
    var sectionColor = data.sectionColors[section];
    return `
      <div class="${section} ${data.page.fileSlug}">
      <script type="module" src="/js/heading-anchors.js"></script>
      <div class="${sectionColor} h-80">
      
      <div class="container mx-auto max-w-4xl h-full flex flex-col">
          <div class="absolute">
            <div>
              <a href="/"><img src="/images/logo.png" style="width:100px"></img></a>
            </div>
          </div>

          <div class="text-1xl mt-auto">${section}</div>
          <div class="text-5xl">${data.title}</div>
          <div class="h-6"></div>
        </div>
      </div>
      <div class="container mx-auto max-w-4xl h-full">
        <div class="h-12"></div>
        <article class="prose max-w-2xl prose-p:text-white prose-code:text-white prose-code:before:hidden prose-code:after:hidden prose-headings:text-white">
          <heading-anchors>
          ${data.content}
          </heading-anchors>
          ${this.emoji("👋", "Waving hand")} Thanks for visiting!
        </article>
      </div>
      </div>
    `;
  }
}