import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String },
    price: { type: String, min: 0 },
    inStock: { type: Boolean },

    name2: { type: String, required: true },
    category2: { type: String },
}, { timestamps: true })

productSchema.index({ name: 1, category: -1 })

const Product = mongoose.model('Product', productSchema)

export default Product