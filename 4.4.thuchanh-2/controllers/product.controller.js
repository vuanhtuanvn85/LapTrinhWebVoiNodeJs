import products from "../models/product.model.js";

export const getAll = (req, res) => {
    res.json(products)
}

export const create = (req, res) => {
    const newProduct = {
        id: products.length + 1,
        ...req.body
    }
    products.push(newProduct)
    res.json(newProduct)
}

export const getOne = (req, res) => {
    const product = products.find(p => p.id === Number(req.params.id))
    if (!product) {
        return res.status(404).json({ error: 'Not found' })
    }
    res.json(product)
}

export const update = (req, res) => {
    const index = products.findIndex(p => p.id === Number(req.params.id))
    if (index === -1) {
        return res.status(404).json({ error: 'Not found' })
    }
    products[index] = {
        ...products[index],
        ...req.body
    }
    res.json(products[index])
}

export const remove = (req, res) => {
    const index = products.findIndex(p => p.id === Number(req.params.id))
    if (index === -1) {
        return res.status(404).json({ error: 'Not found' })
    }
    products.splice(index, 1)
    res.status(204).end()
}