import fs from 'node:fs/promises'

console.log("Đọc file ...");

try {
    // const dulieuLopA = await fs.readFile('./lopA.json', 'utf-8');
    // const sinhvienLopA = JSON.parse(dulieuLopA);

    // const dulieuLopB = await fs.readFile('./lopB.json', 'utf-8');
    // const sinhvienLopB = JSON.parse(dulieuLopB);

    // const dulieuLopC = await fs.readFile('./lopC.json', 'utf-8');
    // const sinhvienLopC = JSON.parse(dulieuLopC);

    const [dulieuLopA, dulieuLopB, dulieuLopC] = await Promise.all([
        fs.readFile('./lopA.json', 'utf-8'),
        fs.readFile('./lopB.json', 'utf-8'),
        fs.readFile('./lopC.json', 'utf-8'),
    ]);

    const sinhvienLopA = JSON.parse(dulieuLopA);
    const sinhvienLopB = JSON.parse(dulieuLopB);
    const sinhvienLopC = JSON.parse(dulieuLopC);

    // const ketqua = "Có tất cả " + sinhvien.students.length + " sinh viên";
    const ketqua = `Có tất cả ${sinhvienLopA.students.length + sinhvienLopB.students.length + sinhvienLopC.students.length} sinh viên`
    await fs.writeFile("baocao.txt", ketqua, "utf-8");
    console.log("Đã lưu kết quả vào file baocao.txt");
} catch (error) {
    console.log("Lỗi: ", error.message);
}