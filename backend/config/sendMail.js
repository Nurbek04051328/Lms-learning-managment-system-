import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});

const sendMail = async (to, otp) => {
  try {
    console.log("Sending email to:", to, "with OTP:", otp);
    console.log("process.env.USER_EMAIL:", process.env.USER_EMAIL);
    console.log("Using transporter with config:", transporter.options);
   
    const info = await transporter.sendMail({
      from: process.env.USER_EMAIL,
      to: to, 
      subject: "Reset Your Password",
      html: `<p>Your OTP for Password Reset is: <b>${otp}</b>.
        It expires in 5 minutes. </p>`, 
    });
  
    console.log("Email sent: %s", info.messageId);
    
  } catch (error) {
    console.error("MAIL ERROR:");
    console.error(error);
    throw error;
  }
}

export default sendMail;