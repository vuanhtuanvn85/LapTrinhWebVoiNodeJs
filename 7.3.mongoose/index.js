import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import mongoose from 'mongoose'
import Student from './models/student.model.js'

dotenv.config()

connectDB()

const app = express()
app.use(express.json())

app.get('/status', (req, res) => {
    const state = mongoose.connection.readyState
    const map = {
        0: 'Disconnected',
        1: 'Connected',
        2: 'Connectiong',
        3: 'Disconnecting',
        99: 'Uninitialized'
    }
    res.json({ db: map[state] })
})

app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find()
        res.json(students)
    } catch (error) {
        console.log('Lỗi lấy danh sách sinh viên: ', error.message);
        res.json({ error: error.message })
    }
})

app.post('/api/students', async (req, res) => {
    try {
        const student = new Student(req.body)
        await student.save()
        res.status(201).json(student)
    } catch (error) {
        console.log('Lỗi thêm sinh viên: ', error.message);
        res.json({ error: error.message })
    }
})

app.listen(3000, () => {
    console.log('Server is running ...');

})