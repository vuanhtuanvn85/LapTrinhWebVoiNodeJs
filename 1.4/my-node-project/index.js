// const http = require('http')
import http from 'node:http'

const server = http.createServer((req, res) => {
    res.end('Hello world from Node.js!')
})

server.listen(3000, () => {
    console.log('Server is running ...')
})

// console.log(__dirname)
// console.log(__filename)