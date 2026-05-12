import express from 'express'

const app = express()

app.use((req, res, next) => {
    console.log(`Method: ${req.method} - URL: ${req.url}`);

    next();
})

app.get('/', (req, res) => {
    res.send('Hello world!');

})

app.get('/users', (req, res) => {
    res.send('Lấy thông tin khách hàng.')
})

app.listen(3000, () => {
    console.log('Server is running ...');

})