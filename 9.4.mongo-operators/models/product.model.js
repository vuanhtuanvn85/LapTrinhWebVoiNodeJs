import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, index: true },
        price: { type: Number, min: 0 },
        category: { type: String },
        inStock: { type: Boolean, default: true },
        address: {
            city: { type: String },
            country: { type: String }
        },
        tags: [{ type: String }]
    }
)

productSchema.index({ inStock: 1, name: -1 })

const Product = mongoose.model('Product', productSchema)

export default Product