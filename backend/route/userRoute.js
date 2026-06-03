import express from "express";
import isAuth from "../middleware/isAuth.js";
import { getCurrentUser, updateProfile } from "../controller/userController.js";
import upload from "../middleware/multer.js";

const userRouter = express.Router();

userRouter.get("/current-user", isAuth, getCurrentUser);

userRouter
  .put("/update-profile", 
    isAuth, 
    upload.single("photoUrl"), 
    updateProfile
  );

export default userRouter;