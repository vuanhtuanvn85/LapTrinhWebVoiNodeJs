import fs from 'fs/promises'


console.log('Đang đọc file bất đồng bộ ...');

fs.readFile('file1.txt', 'utf-8')
    .then((data) => {
        console.log('Data: ', data);
        return fs.readFile('./file2.txt', 'utf-8');
    })
    .then((data2) => {
        console.log('Data file 2: ', data2);
        return fs.readFile('./file3.txt', 'utf-8');
    })
    .then((data3) => {
        console.log('Data file 3: ', data3);
    })
    .catch((error) => {
        console.error('Loi: ', error.message);
    })
    .finally(() => {
        console.log('=========');

    })

