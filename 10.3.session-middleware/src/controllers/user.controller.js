import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

export const registerUser = async (req, res) => {
    try {
        const {username, password} = req.body

        // kiểm tra username đã tồn tại chưa?
        const existingUser = await User.findOne({username})
        if (existingUser) {
            return res.status(409).json({error: "Username đã tồn tại"})
        }
        
        // lưu vào mongodb
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({username, hashedPassword})
        res.status(201).json({
            message: "Đăng kí thành công",
            userId: newUser._id
        })

    } catch (error) {
        console.error('Lỗi đăng ký user: ', error.message);
        res.status(500).json({error: 'Lỗi hệ thống đăng kí user'})
    }
}

export const loginUser = async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await User.findOne({username})
        const storedHash = user.hashedPassword
        if (!storedHash) {
            return res.status(401).json({message: 'Sai thông tin đăng nhập'})
        }
        console.log(`password: ${password} - storedHash: ${storedHash}`);
        
        const isMatch = await bcrypt.compare(password, storedHash)
        if (isMatch) {
            req.session.user = {
                userId: user._id,
                username: user.username
            }
            res.status(200).json({message: 'Đăng nhập thành công', user: req.session.user, sessionId: req.sessionID})
        }
        else {
            res.status(401).json({message: "Sai thông tin đăng nhạp"})
        }
    } catch (error) {
        console.error('Lỗi đăng nhập');
        res.status(500).json({error: 'Lỗi hệ thống đăng nhập'})
    }
}

export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId)

        res.json({
            message: "Lấy profile thành công",
            sessionID: req.sessionID,
            user
        })
    } catch (error) {
        res.status(500).json({error: "Lỗi hệ thống"})
    }
}

export const logout = async (req, res) => {
    const username = req.session.user?.username;
    req.session.destroy((err) => {
        if (err) {
            return status(500).json({message: "Lỗi đăng xuất"})
        }
        res.clearCookie('connect.sid')
        res.json({message: `${username} đã đăng xuất!`})
    })
}