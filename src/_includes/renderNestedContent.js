import sectionColors from "../_data/sectionColors.js";

export function renderNestedContent(content, depth = 1) {
    let html = '';
    for (const [key, value] of Object.entries(content)) {

        //render the md files
        if(Array.isArray(value) && value.length === 1) {
            let item = value[0];
            if(item.data.title === 'Home') {
                continue;
            }
            html += `<p><a href="${item.url}">${item.data.title ?? key}</a></p>`;
            //this is a terminal node, make it the link
            continue;
        }

        var depthClass = depth === 1 ? "text-2xl" : "text-1xl";

        html += `<div>`;
        if(depth === 1) {
            html += `<div class="${depthClass} ${sectionColors[key]} max-w-48 px-3 py-1 -mx-3">${key}</div>`;
            html += `<div class="p-1"></div>`;
        }
        else {
            html += `<div class="${depthClass} max-w-32 underline pt-2">${key}</div>`;
        }
        html += renderNestedContent(value, depth + 1);
        html += `</div>`;
    }
    return html;
}