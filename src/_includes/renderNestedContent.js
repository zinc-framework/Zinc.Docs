import sectionColors from "../_data/sectionColors.js";
import heirarchy from "../_data/heirarchy.js";

export default function renderNestedContent(content, depth = 1) {
    let sections = [];
    for (const [key, value] of Object.entries(content)) {
        if(!Array.isArray(value)) {
            //this is a folder, push it as a new section
            sections.push(`<div>${renderSection(key,value)}</div>`);
        }
    }

    return sections.join('');

    function renderSection(sectionTitle, sectionContent, depth = 1, html = '')
    {
        var depthClass = depth === 1 ? "text-2xl" : "text-1xl";
        if(depth === 1) {
            html += `<div class="${depthClass} ${sectionColors[sectionTitle]} max-w-48 px-3 py-1 -mx-3">${sectionTitle}</div>`;
            html += `<div class="p-1"></div>`;
        }
        else {
            html += `<div class="${depthClass} max-w-32 underline pt-2">${sectionTitle}</div>`;
        }

        for (let [nestedKey, nestedValue] of Object.entries(sectionContent)) {
            if(Array.isArray(nestedValue)) { //this is a file
                html += `<p><a href="${nestedValue[0].url}">${nestedValue[0].data.title ?? nestedKey}</a></p>`;
            }
            else {
                return renderSection(nestedKey, nestedValue, depth + 1,html);
            }
        }
        return html;
    }
}