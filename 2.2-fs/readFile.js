import fs from 'fs'

try {
    console.log('Đang đọc file bất đồng bộ ...');

    fs.readFile('file1.txt', 'utf-8', (err, data) => {
        console.log('Data: ', data);
    }
    );
} catch (error) {
    console.log('Loi doc file: ', error.message)
}

console.log('=========');
