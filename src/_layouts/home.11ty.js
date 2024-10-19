import renderNestedContent from '../_includes/renderNestedContent.js';

export default class {
  data() {
    return {
      layout: "base.11ty.js",
      title: "Home"
    };
  }

  render(data) {
    return `
      <div class="container mx-auto home px-4 pb-24 sm:pb-0 sm:px-0">
        <div>
          <img src="/images/logo.png" style="width:200px"></img>
        </div>
        <div>
          <p>the code-only C# game framework for rapidly creating cross-platform 2D games.</p>
          ${data.content}
          <br>
          <details>
          <summary>is zinc for you?</summary>
          <p>you’ve made some games in other popular engines before. you’ve got experience and you know what you need to get the job done.</p>
          <p>turns out, you don’t need a lot. bells and whistles are starting to feel like a distraction. you want something simpler. more "pure". something that gets out of the way.</p>
          <p>you don’t even need an editor, you're making 2D games and can build your own tools.</p>
          <br>
          <p>all you want a laser-focused 2D API with a few smart design decisions.</p>
          <p>the framework should do the the hard stuff — you can do everything else.</p>
          <br>
          <p>sound like you? you want zinc.</p>
          </details>
        </div>
        <div id="title-spacer" class="h-8"></div>
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-4">
          ${renderNestedContent(data.collections.nestedContent)}
        </div>
      </div>
    `;
  }
}