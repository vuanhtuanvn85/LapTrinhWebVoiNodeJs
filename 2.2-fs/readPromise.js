import fs from 'node:fs/promises'

async function docFile(fileName) {
    const data = await fs.readFile(fileName, 'utf-8');
    console.log(`Data of ${fileName}: `, data);
}

(async () => {
    await docFile('file1.txt');
})();
