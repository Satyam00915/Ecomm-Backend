import express from "express";
import { addCategory } from "../../controller/Admin/Product/addcategory.js";
const router = express.Router();

router.post('/addCategory', addCategory);


export default router;