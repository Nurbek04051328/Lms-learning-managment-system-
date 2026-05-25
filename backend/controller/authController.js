import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import generateToken from "../config/token.js";

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
    })
    let token = await generateToken(user._id)
    res.cookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
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
    let isMatch = await bcrypt.compare(password, findUser.password);
    if(!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }
    let token = await generateToken(findUser._id)
    res.cookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
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