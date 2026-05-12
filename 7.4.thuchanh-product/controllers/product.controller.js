import Product from "../models/product.model.js";

export const getAll = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getOne = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ error: 'Not found' })
        }
        res.json(product)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const create = async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.save()
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const update = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )
        if (!product) {
            return res.status(404).json({ error: error.message })
        }
        res.json(product)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const remove = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(
            req.params.id
        )
        if (!product) {
            return res.status(404).json({ error: error.message })
        }
        res.json(product)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}