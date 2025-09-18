import express from "express"
import Signup from "../../controller/auth/signUp.js"
import SignIn from "../../controller/auth/signIn.js"
import VerifyOTP from "../../controller/auth/verifyOtp.js"
import { AuthUserMiddleware } from "../../middleware/UserMiddleware.js"

const router = express.Router()

router.post('/signup',AuthUserMiddleware, Signup)
router.post('/signin',AuthUserMiddleware, SignIn)
router.post('/verify-otp',AuthUserMiddleware, VerifyOTP)

export default router