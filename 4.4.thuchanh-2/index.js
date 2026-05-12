import express from 'express'
import productRouter from './routes/product.route.js'
import custommerRouter from './routes/customer.route.js'

const app = express();
app.use(express.json())

app.use('/products', productRouter)
app.use('/customers', custommerRouter)

app.listen(3000, () => {
    console.log('Server is running ...');

})