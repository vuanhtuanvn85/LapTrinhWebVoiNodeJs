import http from 'http'

const server = http.createServer((req, res) => {
    if (req.url === '/sinhvien') {
        res.end('Hello from Sinhvien!');
    }
    else if (req.url === '/') {
        res.end('Hello world!');
    }
})

server.listen(3000, () => {
    console.log('Server is running ...');

})