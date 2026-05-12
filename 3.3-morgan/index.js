import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(express.json())
app.use(morgan('common'))

// params

// 1. query params
// http://localhost:3000?search=test
app.get('/', (req, res) => {
    res.end('Hello ' + req.query.search);
})

// 2. route params
// http://localhost:3000/test
app.get('/:search', (req, res) => {
    res.end('Hello ' + req.params.search + ' with name: ' + req.query.search);
})

// body
app.post('/', (req, res) => {
    const header_info = req.headers['my-header']
    console.log('my-header: ', header_info);

    res.json(req.body.university)
})

app.listen(3000, () => {
    console.log('Server is running ...');

})