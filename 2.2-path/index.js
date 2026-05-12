// console.log(__filename);

import { fileURLToPath } from 'url';
import path from 'path';

const filePath = fileURLToPath(import.meta.url);
console.log(filePath);
const dirPath = path.dirname(filePath)
console.log(dirPath)

const filePath_2 = path.join(dirPath, "index.js");
console.log(filePath_2);
console.log(path.extname(filePath_2));

const testFolderPath = 'test-folder';
const testFilePath = path.join(testFolderPath, "test.txt");
const absolutePath = path.resolve(testFilePath);
console.log(absolutePath)