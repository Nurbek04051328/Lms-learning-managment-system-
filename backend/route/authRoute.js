import express from "express";
import { 
  googleAuth,
  login, 
  logOut, 
  resetPassword, 
  sendOtp, 
  signUp, 
  verifyOtp 
} from "../controller/authController.js";

const authRouter = express.Router();

authRouter.post("/signup", signUp);

authRouter.post("/login", login);

authRouter.get("/logout", logOut);

authRouter.post("/send-otp", sendOtp);

authRouter.post("/verify-otp", verifyOtp);

authRouter.post("/reset-password", resetPassword);

authRouter.post("/google-auth", googleAuth);

export default authRouter;