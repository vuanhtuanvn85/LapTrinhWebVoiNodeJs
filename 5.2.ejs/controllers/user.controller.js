import users from "../models/user.model.js";

export const getAll = (req, res) => {
    res.render('users/index', { users })
}

export const getOne = (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id))
    res.render('users/detail', { user })
}