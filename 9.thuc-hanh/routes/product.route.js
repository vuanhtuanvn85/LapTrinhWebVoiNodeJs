import { Router } from "express";
import { explainQuery, paginate, seed } from "../controllers/product.controller.js";

const router = new Router();

router.post('/seed', seed)
router.get('/explain', explainQuery)
router.get('/paginate', paginate)

export default router