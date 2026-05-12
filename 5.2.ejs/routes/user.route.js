import { Router } from 'express'
import { getAll, getOne } from '../controllers/user.controller.js'

const router = Router();

router.get('/', getAll)
router.get('/:id', getOne)

export default router
