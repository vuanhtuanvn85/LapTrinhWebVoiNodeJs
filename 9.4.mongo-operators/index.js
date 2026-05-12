import express from 'express'
import dotenv from 'dotenv'
import productRouter from './routes/product.route.js'
import connectDB from './config/db.js'
import mongoose from 'mongoose'

dotenv.config()
await connectDB()

const app = express()
app.use(express.json())

app.use('/api/products', productRouter)

app.listen(3000, () => {
    console.log('Server is running ...');

})