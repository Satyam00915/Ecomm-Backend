import User from "../../models/auth/userModel.js";

const VerifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  try {
    if(!email || !otp){
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ where: { email } });
    if(!user){
        return res.status(400).json({ message: "User not found" });
    }
    if(user.isVerified){
        return res.status(400).json({ message: "User already verified" });
    }
    if(user.otp !== otp){
        return res.status(400).json({ message: "Invalid OTP" });
    }
    if(user.otpExpiry < new Date()){
        return res.status(400).json({ message: "OTP expired" });
    }
    user.isVerified = true;
    user.otp = null;
    user.otpExpiry = null;
    await user.save();
    return res.status(200).json({ message: "User verified successfully" });
    

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export default VerifyOTP;