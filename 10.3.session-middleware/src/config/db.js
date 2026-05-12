import mongoose, { mongo } from 'mongoose';

const connectDb = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URI)
        console.log('Kết nối mongodb thành công.');
        
    } catch (error) {
        console.error('Lỗi kết nối mongodb: ', error.message);
        
    }
}

export default connectDb