import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    studentId: { type: String, required: true, unique: true },
    major: { type: String, default: 'Công nghệ thông tin' },
    gpa: { type: Number, min: 0, max: 10 }
})

const Student = mongoose.model('Student', studentSchema)

export default Student