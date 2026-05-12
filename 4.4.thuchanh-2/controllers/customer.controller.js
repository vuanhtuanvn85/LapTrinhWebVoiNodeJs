import customers from "../models/customer.model.js"

export const getAll = (req, res) => {
    res.json(customers)
}

export const create = (req, res) => {
    const newCustomer = {
        id: customers.length + 1,
        ...req.body
    }
    customers.push(newCustomer)
    res.json(newCustomer)
}

export const getOne = (req, res) => {
    const customer = customers.find(c => c.id === Number(req.params.id))
    if (!customer) {
        return res.status(404).json({ error: 'Not found' })
    }
    res.json(customer)
}

export const update = (req, res) => {
    const index = customers.findIndex(c => c.id === Number(req.params.id))
    if (index === -1) {
        return res.status(404).json({ error: 'Not found' })
    }
    customers[index] = {
        ...customers[index],
        ...req.body
    }
    res.json(customers[index])
}

export const remove = (req, res) => {
    const index = customers.findIndex(c => c.id === Number(req.params.id))
    if (index === -1) {
        return res.status(404).json({ error: 'Not found' })
    }
    customers.splice(index, 1)
    res.status(204).end()
}