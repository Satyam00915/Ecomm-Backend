import express from "express";
import adminProductRoutes from "../routes/admin/products.js";
const router = express.Router();

router.use('/products', adminProductRoutes);

export default router;