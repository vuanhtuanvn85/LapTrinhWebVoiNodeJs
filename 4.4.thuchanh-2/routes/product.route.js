import { Router } from "express";
import { create, getAll, getOne, remove, update } from "../controllers/product.controller.js";

const router = Router()

router.get('/', getAll)
router.get('/:id', getOne)
router.put('/:id', update)
router.delete('/:id', remove)
router.post('/', create)

export default router