import express from "express";
import {
  addCategory,
  getAllCategories,
  removeCategory,
} from "../../controller/Admin/Product/category.js";
import {
  addSubCategory,
  deleteSubCategory,
  getAllSubCategory,
} from "../../controller/Admin/Product/subCategory.js";
import { AdminMiddleware } from "../../middleware/AdminMiddleware.js";
const router = express.Router();

//Category
router.post("/addCategory",AdminMiddleware, addCategory);
router.get("/getAllCategories",AdminMiddleware,getAllCategories);
router.post("/removeCategory",AdminMiddleware, removeCategory);

//SubCategory
router.post("/addSubCategory",AdminMiddleware, addSubCategory);
router.post("/deleteSubCategory",AdminMiddleware, deleteSubCategory);
router.get("/getAllSubCategory",AdminMiddleware, getAllSubCategory);

export default router;
