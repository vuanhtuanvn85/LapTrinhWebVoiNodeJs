import express from 'express'

const app = express()
app.use(express.json())

let users = [
    {
        id: 1,
        name: "tuan"
    },
    {
        id: 2,
        name: "vu"
    }
]

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name
    }
    users.push(user)
    res.json(user)
})

app.listen(3000, () => {
    console.log('Server is running');

})