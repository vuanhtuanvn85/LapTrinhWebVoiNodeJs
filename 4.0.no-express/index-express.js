import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world from express!')
})
app.get('/sinhvien', (req, res) => {
    res.send('Hello from Sinh vien Express!')
})

app.listen(3000, () => {
    console.log('Server is running with express ...');

})