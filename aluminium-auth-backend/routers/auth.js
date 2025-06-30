

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// SIGN UP
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ msg: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashed }); // ← FIXED: capital User
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
    res.json({ token, user: { name: newUser.name, email: newUser.email } });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: err.message });
  }
});

// SIGN IN
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) return res.status(400).json({ msg: 'Invalid credentials' });

    const match = await bcrypt.compare(password, existingUser.password);
    if (!match) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '2h' });

    res.json({
      token,
      user: {
        name: existingUser.name,
        email: existingUser.email
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
