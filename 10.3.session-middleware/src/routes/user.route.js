import {Router} from 'express';
import { getProfile, loginUser, logout, registerUser } from '../controllers/user.controller.js';
import requireLogin from '../middlewares/requireLogin.js';

const router = Router();

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', requireLogin, getProfile)
router.post('/logout', requireLogin, logout)

export default router;