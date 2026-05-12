import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Kết nối Mongodb thành công');

    } catch (error) {
        console.error('Kết nối mongodb lỗi: ', error.message);

    }
}

export default connectDB