import Product from '../models/product.model.js';

export const seed = async (req, res) => {
    try {
        await Product.deleteMany()
        await Product.collection.dropIndexes()

        const bulk = []
        for (let i = 0; i < 100000; i++) {
            const category = i % 2 === 0 ? 'Electronics' : 'Accessories';
            const name = `Product ${i}`
            bulk.push({
                name,
                category,
                name2: name,
                category2: category,
                price: Math.floor(Math.random() * 100000),
                inStock: i % 3 === 0
            })
        }
        await Product.insertMany(bulk)

        res.json({ message: 'Đã thực hiện seed 100000 documents xong' })
    } catch (error) {

    }
}

export const explainQuery = async (req, res) => {
    try {
        await Product.collection.dropIndexes()
        await Product.collection.createIndex({ name: 1, category: -1 })

        const before = await Product
            .find({ category2: 'Electronics', name2: /^Product/ })
            .explain('executionStats')

        const after = await Product
            .find({ category: 'Electronics', name: /^Product/ })
            .explain('executionStats')

        res.json({
            without_index: {
                stage: before.executionStats.executionStages.stage,
                docsExamined: before.executionStats.totalDocsExamined,
                docsReturned: before.executionStats.totalDocsReturned,
                executionTimeMillis: before.executionStats.executionTImeMillis,
            },
            with_index: {
                stage: after.executionStats.executionStages.stage,
                docsExamined: after.executionStats.totalDocsExamined,
                docsReturned: after.executionStats.totalDocsReturned,
                executionTimeMillis: after.executionStats.executionTImeMillis,
            }
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const paginate = async (req, res) => {
    try {
        const page = Math.max(1, parseInt(req.query.page) || 1)
        const limit = Math.max(1, parseInt(req.query.limit) || 10)
        const skip = (page - 1) * limit

        const sortField = req.query.sort || 'createdAt'
        const sortOrder = req.query.order === 'asc' ? 1 : -1
        const sort = { [sortField]: sortOrder }

        const filter = req.query.name ? { name: { $regex: req.query.name, $options: 'i' } } : {}

        const explained = await Product.find(filter)
            .sort(sort)
            .skip(skip)
            .limit(limit)
            .explain('executionStats')

        const [products, total] = await Promise.all([
            Product.find(filter).sort(sort).skip(skip).limit(limit),
            Product.countDocuments(filter)
        ])

        res.json({
            explain: {
                stage: explained.executionStats.executionStages.stage,
                docsExamined: explained.executionStats.totalDocsExamined,
                docsReturned: explained.executionStats.totalDocsReturned,
                executionTimeMillis: explained.executionStats.executionTimeMillis,
            },
            data: products,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
                hasNext: page < Math.ceil(total / limit),
                hasPrev: page > 1,
            }
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}