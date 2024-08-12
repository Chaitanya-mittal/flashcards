const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Update the path as needed
const { getHashedPassword, checkPassword } = require("../helpers/bcrypt");
const jwt = require("jsonwebtoken");
// Route to get a user by ID
require("dotenv").config();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(Number(id));
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve user" });
  }
});

// login user
router.post("/login", async (req, res) => {
  try {
    const checkUser = await User.findByEmail(req.body.email);
    if (!checkUser) {
      return res.status(404).json({ error: "User not found" });
    }
    const isValid = await checkPassword({
      password: req.body.password,
      passwordHash: checkUser.password,
    });
    if (isValid) {
      const token = jwt.sign(
        {
          email: checkUser.email,
          type: checkUser.type,
          _id: checkUser._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      return res.status(200).json({
        success: "true",
        message: "Logged in",
        token,
      });
    } else {
      return res.status(404).json({ message: "Not valid" });
    }
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
});

// Route to create a new user
router.post("/", async (req, res) => {
  const userData = req.body;
  try {
    userData.password = await getHashedPassword(userData.password);
    const user = await User.create(userData);
    const token = jwt.sign(
      {
        email: user.email,
        type: user.type,
        _id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

module.exports = router;
