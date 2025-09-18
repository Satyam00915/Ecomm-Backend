import User from "../../models/auth/userModel.js";
import bcrypt from "bcrypt";
import { expiryOTP, generateOTP, validEmail } from "../../utils/function.js";
import { sendEmail } from "../../utils/sendEmail/nodeMailer.js";
const Signup = async (req, res) => {
  const { name, email, number, alternatenumber, password } = req.body;

  try {
    if (!name || !email || !number || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!validEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const otp = generateOTP();
    const otpExpiry = expiryOTP();
  //   // send email
  //  const sentEmail = await sendEmail({
  //     to: email,
  //     html: `<p>Your OTP for email verification is <b>${otp}</b>. It is valid for 10 minutes.</p>`,
  //   })

    await User.create({
      name,
      email,
      password: hashedPassword,
      number,
      alternatenumber: alternatenumber || null, // ✅ optional
      otp,
      otpExpiry
    });

    // if (!sentEmail) {
    //   return res.status(500).json({ message: "Failed to send OTP email" });
    // }

    return res
      .status(201)
      .json({ message: "OTP Send successfully"  });
  } catch (error) {
    console.error("🔥 Error in Signup:", error);
    return res.status(500).json({ message: error.message });
  }
 };

export default Signup;
