import express from "express";
import { addCategory, getAllCategories, removeCategory } from "../../controller/Admin/Product/category.js";
const router = express.Router();

router.post('/addCategory', addCategory);
router.get('/getAllCategories', getAllCategories);

router.post('/removeCategory', removeCategory)


export default router;