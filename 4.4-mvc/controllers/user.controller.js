import users from '../models/user.models.js'

export const getAll = (req, res) => {
    res.json(users)
}

export const create = (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name
    }
    users.push(user)
    res.json(user)
}