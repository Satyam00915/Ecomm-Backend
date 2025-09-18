import express from "express"
import AdminSignIn from "../../controller/auth/admin.js"
import { AuthAdminMiddleware } from "../../middleware/AdminMiddleware.js"
const router = express.Router()

router.post("/admin/signin",AuthAdminMiddleware, AdminSignIn)


export default router;