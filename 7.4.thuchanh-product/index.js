import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import connectDB from './config/db.js'
import productRouter from './routes/product.route.js'

dotenv.config()

const app = express()
app.use(express.json())

await connectDB()

app.use('/api/products', productRouter)

app.get('/status', (req, res) => {
    const state = mongoose.connection.readyState
    const map = {
        0: 'Disconnected',
        1: 'Connected',
        2: 'Connecting',
        3: 'Disconnecting',
        99: 'uninitialized'
    }
    res.json({ db: map[state] })
})

app.listen(3000, () => {
    console.log('Server is running ...');

})