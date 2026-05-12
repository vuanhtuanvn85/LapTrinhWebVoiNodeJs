import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Đã kết nối Mongodb');

    } catch (error) {
        console.error('Lỗi kết nối Mongodb: ', error.message);

    }
}

export default connectDB