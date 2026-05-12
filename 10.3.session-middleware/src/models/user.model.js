import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {type: String, require: true, unique: true, trim: true, minlength: [3, "username phải có ít nhất 3 kí tự"]},
    hashedPassword: {type: String, require: true}
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

export default User