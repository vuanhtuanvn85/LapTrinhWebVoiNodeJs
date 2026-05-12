import { Router } from 'express';
import { seed, test } from '../controllers/product.controllers.js';

const router = Router()

router.post('/seed', seed)
router.get('/test', test)

export default router