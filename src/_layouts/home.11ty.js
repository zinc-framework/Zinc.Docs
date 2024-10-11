import { renderNestedContent } from '../_includes/renderNestedContent.js';

export default class {
  data() {
    return {
      layout: "base.11ty.js",
      title: "Home"
    };
  }

  render(data) {
    return `
      <div class="container mx-auto home">
        <div>
          <img src="/images/logo.png" style="width:200px"></img>
        </div>
        <div>
          <p>the cross-platform 2D C# game framework you’ve been waiting for</p>
          <div id="tagline-spacer" class="h-4"></div>
          ${data.content}
        </div>
        <div id="title-spacer" class="h-16"></div>
        <div class="grid grid-cols-5 gap-4">
          ${renderNestedContent(data.collections.nestedContent)}
        </div>
      </div>
    `;
  }
}