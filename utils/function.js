import jwt from "jsonwebtoken";
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;


export const signAccessToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
};


export const validEmail = (email)=>{
   const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}


export const generateOTP =()=>{
   return Math.floor(100000 + Math.random() * 900000).toString();
}

export const expiryOTP= ()=>{
  return new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now
}
