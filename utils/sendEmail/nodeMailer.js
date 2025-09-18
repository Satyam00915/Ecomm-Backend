import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const transporter = nodemailer.createTransport({
  service: "gmail",

  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmail = async ({ to, html }) => {
  try {
    await transporter.sendMail({
      from: `"Piotext Ecommerce" <${process.env.EMAIL_USER}>`,
      to,
      subject: "Verify Your OTP",
      html,
    });
    return true;
  } catch (err) {
    console.error("Error sending email:", err);
    return false;
  }
};