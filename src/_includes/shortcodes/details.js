/** An accessible emoji shortcode */
export default function details(heading, content) {
    let html = ``;
    html += `<details>`
    html += `<summary>${heading}</summary>`
    html += `<p>${content}</p>`
    html += `</details>`
    html += `<br>`
    return html;
  }