import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to mongoDB"))
  .catch((error) => console.log(error.message));

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
