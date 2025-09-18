import AdminModel from "../../models/auth/adminModel.js"
import { signAccessToken } from "../../utils/function.js";
const AdminSignIn = async (req,res)=>{

    const {email,password} = req.body;

    try {
        if(!email || !password){
            return res.status(400).json({message:"All fields are required"})
        }
        // Check if the user is admin
        const admin = await AdminModel.findOne({email:email});
        if(!admin){
            return res.status(401).json({message:"Unauthorized"})
        }
        // Check if the password is correct
        if(admin.password !== password){
            return res.status(401).json({message:"Unauthorized"})
        }
        // Generate JWT token
        const token = signAccessToken(admin)

        if(!token){
            return res.status(500).json({message:"Internal server error"})
        }

        const { password: _, ...userData } = admin.toJSON();

        return res.status(200).json({message:"Admin signed in successfully", data: { ...userData, token }})
        

    } catch (error) {

        return res.status(500).json({message:"Internal server error"})
        
    }



}

export default AdminSignIn;