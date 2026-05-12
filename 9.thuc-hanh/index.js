import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import productRouter from './routes/product.route.js';

dotenv.config()
await connectDB()
const app = express()
app.use(express.json())

app.use('/api/products', productRouter)


app.listen(3000, () => {
    console.log('Server is running ...');

})