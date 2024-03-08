import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRouter from "./routes/user.route.js";
const app = express();
dotenv.config();

app.use(express.json());

app.use("/api", userRouter);
// app.get("/test");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to mongoDB"))
  .catch((error) => console.log(error.message));

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
