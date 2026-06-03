import uploadToCloudinary from "../config/cloudinary.js";
import User from "../model/userModel.js"

export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if(!user) {
      return res.status(404).json({message: "User nor found"})
    };

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({message: `GetCurrentUSer error ${error}`})
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const { name, description } = req.body;
    let photoUrl
    if (req.file) {
      photoUrl = await uploadToCloudinary(req.file.path);
    }
    const user = await User.findByIdAndUpdate(userId, { name, description, photoUrl }, { new: true });
    if(!user) {
      return res.status(404).json({message: "User nor found"})
    }
    return res.status(200).json(user);

  } catch (error) {
    return res.status(500).json({message: `UpdateProfile error ${error}`})
  }
}