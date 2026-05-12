import fs from 'node:fs/promises'

try {
    console.log('Đang đọc file với fs/promises ...');

    const startTime = performance.now();
    const [data, data2, data3] = await Promise.all([
        fs.readFile('./file1.txt', 'utf-8'),
        fs.readFile('./file2.txt', 'utf-8'),
        fs.readFile('./file3.txt', 'utf-8')
    ])

    console.log('Data: ', data);
    console.log('Data file 2: ', data2);
    console.log('Data file 3: ', data3);
    const endTime = performance.now();
    const duration = (endTime - startTime).toFixed(3);
    console.log('Execution time: ', duration);

} catch (error) {
    console.log('Lỗi đọc file: ', error.message);
}


console.log('=======');