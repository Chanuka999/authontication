import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import User from "../models/User.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }

    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashpassword });
    await newUser.save();
    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
