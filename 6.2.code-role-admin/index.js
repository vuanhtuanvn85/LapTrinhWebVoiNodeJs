import express from 'express'

const app = express()

const checkAdmin = (req, res, next) => {
    const role = req.query.role;
    if (role === 'admin') {
        next()
    }
    res.status(401).json({ error: 'Unauthorized' })
}

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/dashboard', checkAdmin, (req, res) => {
    res.send('Welcome!')
})

app.listen(3000, () => {
    console.log('Server is running ...');

})