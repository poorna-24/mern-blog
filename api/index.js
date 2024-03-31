import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

import cookieParser from "cookie-parser";

import path from "path";
const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
const __dirname = path.resolve();

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to mongoDB"))
  .catch((error) => console.log(error.message));

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

app.use(express.static(path.join(__dirname, "client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
