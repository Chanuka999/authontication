import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserRoutes from "./routes/user.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

app.use("/auth", UserRoutes);

const PORT = process.env.PORT;

const connectDb = async () => {
  try {
    const MONGOURL = process.env.MONGOURL;
    await mongoose.connect(MONGOURL);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log("Mongodb failed");
  }
};

app.listen(PORT, () => {
  connectDb();
  console.log(`server running on ${PORT}`);
});
