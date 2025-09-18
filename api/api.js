import express from "express";
import adminProductRoutes from "../routes/admin/productRoutes.js";
import AuthRoutes from "../routes/auth/authRoutes.js"
import AdminRoutes from "../routes/auth/adminRoutes.js"
const router = express.Router();

router.use('/products', adminProductRoutes);
// user auth routes
router.use('/auth', AuthRoutes);
router.use('/auth', AdminRoutes);

export default router;