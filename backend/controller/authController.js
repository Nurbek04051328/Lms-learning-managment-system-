import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import generateToken from "../config/token.js";
import sendMail from "../config/sendMail.js";

export const signUp = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    let existUser = await User.findOne({ email });
    if(existUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    if(!validator.isEmail(email)) {
      return  res.status(400).json({ message: "Invalid email format" });
    }
    if(password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }
    let hashedpassword = await bcrypt.hash(password, 10);
    const user =await User.create({
      name,
      email,
      password: hashedpassword,
      role,
      authProvider: "local",
    })
    let token = await generateToken(user._id)
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: "SignUp error: " + error.message });
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let findUser = await User.findOne({ email });
    if(!findUser) {
      return res.status(400).json({ message: "User not found" });
    }
    if (findUser.authProvider === "google") {
      return res.status(400).json({
        message: "Please login using Google"
      });
    }
    let isMatch = await bcrypt.compare(password, findUser.password);
    if(!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }
    
    let token = await generateToken(findUser._id)
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })
    return res.status(201).json(findUser);
  } catch (error) {
    return res.status(500).json({ message: "Login error: " + error.message });
  }
}


export const logOut = async (req, res) => {
  try {
    await res.clearCookie("token")
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    return res.status(500).json({ message: "Logout error: " + error.message });
  }
}

export const sendOtp = async (req, res) => {
  try {
    console.log(req.body);
    const { email } = req.body;
    
    const user = await User.findOne({ email });
    console.log("user", user);
    if(!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if(user.authProvider === "google") {
      return res.status(400).json({
        message: "Google account password cannot be reset here"
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.resetOtp = otp;
    user.otpExpires = Date.now() + 5 * 60 * 1000;
    user.isOtpVerifed = false;

    await user.save();
    await sendMail(email, otp);
    return res.status(200).json({ message: "OTP sent to email" });

  } catch (error) {
    return res.status(500).json({ message: "Error sending OTP: " + error.message });
  }
}

export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });
    if(!user) {
      return res.status(404).json({ message: "User not found" });
    } 
    if(user.resetOtp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    } 
    if(user.otpExpires < Date.now()) {
      return res.status(400).json({ message: "OTP expired" });
    } 
    
    user.isOtpVerifed = true;
    user.resetOtp = null;
    user.otpExpires = null;

    await user.save();
    return res.status(200).json({ message: "OTP verified" });
    
  } catch (error) {
    return res.status(500).json({ message: "Error verifying OTP: " + error.message });
  }
}

export const resetPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if(!user.isOtpVerifed) {
      return res.status(400).json({ message: "OTP not verified" });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    user.password = hashedpassword;
    user.isOtpVerifed = false;
    await user.save();
    return res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    return res.status(500).json({ message: "Error resetting password: " + error.message });
  }
}

export const googleAuth = async (req, res) => {
  try {
    const { name, email, role } = req.body;
    console.log("Google Auth Payload:", req.body);
    let user = await User.findOne({ email });
    if(!user) {
      user = await User.create({
        name,
        email,
        role,
        authProvider: "google"
      });
    };
    console.log("user:", user);
    let token = await generateToken(user._id)
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Google Auth error: " + error.message });
  }
}