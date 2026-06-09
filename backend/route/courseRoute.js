import express from "express";
import { 
  createCourse, 
  editCourse, 
  getCourseById, 
  getCreatorCourses, 
  getPublishedCourses, 
  removeCourse
} from "../controller/courseController.js";
import isAuth from "../middleware/isAuth.js";

const courseRouter = express.Router();

courseRouter.post("/create", isAuth, createCourse );

courseRouter.get("/get-published", getPublishedCourses );

courseRouter.get("/get-creator", isAuth, getCreatorCourses );

courseRouter
  .put(
    "/edit-course/:courseId", 
    isAuth, 
    upload.single("thumbnail"), 
    editCourse 
  );

courseRouter.get("/get-course/:courseId", isAuth, getCourseById );

courseRouter.delete("/remove/:courseId", isAuth, removeCourse );



