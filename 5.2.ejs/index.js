import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'
import userRouter from './routes/user.route.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/users', userRouter)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.listen(3000, () => {
    console.log('Server is running ...');

})