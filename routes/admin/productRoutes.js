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
const router = express.Router();

//Category
router.post("/addCategory", addCategory);
router.get("/getAllCategories", getAllCategories);
router.post("/removeCategory", removeCategory);

//SubCategory
router.post("/addSubCategory", addSubCategory);
router.post("/deleteSubCategory", deleteSubCategory);
router.get("/getAllSubCategory", getAllSubCategory);

export default router;
