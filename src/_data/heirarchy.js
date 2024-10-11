import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getPageStructure(dir) {
    let structure = {};
    let metadata = {};

    function processDirectory(currentDir) {
        const items = fs.readdirSync(currentDir, { withFileTypes: true });
        const dirContent = [];
        
        for (const item of items) {
            const fullPath = path.join(currentDir, item.name);
            const relativePath = path.relative(inputDir, fullPath);
            
            if (item.isDirectory()) {
                const subDir = processDirectory(fullPath);
                if (subDir.length > 0) {
                    dirContent[item.name] = subDir;
                }
            } else if (path.extname(item.name) === '.md') {
                item.name = item.name.replace('.md', ''); //remove md extension
                dirContent.push(item.name);
                const parts = relativePath.split(path.sep);
                metadata[item.name] = {
                    section: parts[0],
                    subSection: parts.length > 2 ? parts.slice(1, -1).join('/') : ''
                };
            }
        }

        return dirContent;
    }

    structure = processDirectory(dir);
    return { structure, metadata };
}

const inputDir = path.join(__dirname, '..'); // this is implicilty "src", the parent dir of _data/pageMeta.js

// console.log(getPageStructure(inputDir).structure);
export default function()
{
    return getPageStructure(inputDir);
}