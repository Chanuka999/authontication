import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import User from "../models/User.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, email, passsword } = req.body;

  const user = User.findOne({ email });
  if (user) {
    return res.status(404).json({ success: false, message: "sad" });
  }

  const hashpassword = await bcrypt.hash(passsword, 10);
  const newUser = new User({ username, email, passsword: hashpassword });

  try {
    await newUser.save();
    res.status(200).json({ success: true, data: newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
});

export default router;
