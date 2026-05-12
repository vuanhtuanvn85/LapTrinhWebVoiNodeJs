import fs from 'fs'

console.log('Đang đọc file đồng bộ ...');

const data = fs.readFileSync('file1.txt', 'utf-8');
console.log('Data: ', data);

console.log('=========');
