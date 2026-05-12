import Product from "../models/product.model.js";

export const seed = async (req, res) => {
    try {
        await Product.deleteMany()
        await Product.insertMany([
            { name: "iPHone 15", price: 999, category: "Electronics", inStock: true, address: { city: "hanoi", country: "vietnam" }, tags: ["sale", "new"] },
            { name: "iPHone 14", price: 799, category: "Electronics", inStock: false, address: { city: "hanoi", country: "vietnam" }, tags: ["sale"] },
            { name: "Laptop pro", price: 1500, category: "Electronics", inStock: true, address: { city: "hcm", country: "vietnam" }, tags: ["sale", "new"] },
            { name: "Keyboard", price: 100, category: "Accessories", inStock: true, tags: ["sale"] },
            { name: "Mouse", price: 50, category: "Accessories", inStock: false },
        ])
        res.json({ message: 'Seed data xong' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const test = async (req, res) => {
    try {
        const products = await Product.find(
            // { price: { $gt: 799 } }
            // { category: { $in: ['Electronics', 'Accessories'] } }
            // {
            //     $and: [
            //         { price: { $gt: 100 } },
            //         { inStock: true }
            //     ]
            // }
            { name: { $regex: "iPHone", $options: 'i' } }
        )
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}