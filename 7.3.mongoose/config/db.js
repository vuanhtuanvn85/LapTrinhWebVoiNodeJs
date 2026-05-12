import mongoose, { connect } from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Kết nối MongoDB thành công.');

    } catch (error) {
        console.log('Lỗi kết nối Mongodb', error.message);

    }
}

export default connectDB