import express from 'express';
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import userRoute from './routes/user.route.js'
import sessionConfig from './config/session.js';

dotenv.config()
await connectDb()

const app = express()
app.use(express.json())
app.use(sessionConfig)

app.use('/users', userRoute)


app.listen(3000, () => {
    console.log('Server is running ...');
    
})