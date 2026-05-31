import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Router import
import authRouter from './route/authRoute.js';
import userRouter from './route/userRoute.js';

dotenv.config();

const port = process.env.PORT || 8000;
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))


app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(port, ()=> {
  console.log("Server started on port: ", port);
  connectDB();
})