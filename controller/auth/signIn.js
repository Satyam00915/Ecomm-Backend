import User from "../../models/auth/userModel.js";
import { signAccessToken, validEmail }  from "../../utils/function.js";
import bcrypt from "bcrypt";
 const SignIn = async (req, res) => {
   const { email, password } = req.body;
   console.log(req.body,"req.body");
   try {
    if(!email || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    
    if(!validEmail(email)){
        return res.status(400).json({message:"Invalid email format"});
    }

    const userExists = await User.findOne({where:{email}})
    if(!userExists){
        return res.status(400).json({message:"User does not exist"});
    }
    // check password
    const isMatch = await bcrypt.compare(password, userExists.password);
    if(!isMatch){
        return res.status(400).json({message:"Invalid credentials"});
    }
    
    const token = signAccessToken(userExists);
    // strip password before sending
    const { password: _, ...userData } = userExists.toJSON();
    return res.status(200).json({message:"Login successful", user:userData, token});
   } catch (error) {
       console.error("🔥 Error in Login:", error);
       return res.status(500).json({message:error.message});
   }

}
export default SignIn;