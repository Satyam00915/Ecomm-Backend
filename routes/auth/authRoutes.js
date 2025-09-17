import express from "express"
import Signup from "../../controller/auth/signUp.js"
import SignIn from "../../controller/auth/signIn.js"
import VerifyOTP from "../../controller/auth/verifyOtp.js"
import {AuthAdminMiddleware} from "../../middleware/AdminMiddleware.js"

const router = express.Router()

router.post('/signup',AuthAdminMiddleware, Signup)
router.post('/signin',AuthAdminMiddleware, SignIn)
router.post('/verify-otp',AuthAdminMiddleware, VerifyOTP)

export default router