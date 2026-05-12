import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(express.json())

app.use(morgan('dev'))

app.get('/sinhvien/', (req, res) => {
    res.send('Danh sách sinh viên là: ...')

})

app.post('/sinhvien/', (req, res) => {
    res.json(req.body);
})

app.get('/sinhvien/:id', (req, res) => {
    res.send('Thông tin sinh viên có mã ' + req.params.id)
})

app.put('/sinhvien/:id', (req, res) => {
    res.send('Đã sửa thông tin sinh viên có mã ' + req.params.id + ' với chi tiết: ' + JSON.stringify(req.body))
})

app.delete('/sinhvien/:id', (req, res) => {
    // kiểm tra có sinh viên :id không
    // nếu có thì xoá
    res.send('Đã xoá sinh viên ' + req.params.id)
})

app.listen(3000, () => {
    console.log('server is running ...');

})