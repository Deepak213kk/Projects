const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("SIGNUP BODY:", req.body);

    // 1️⃣ Check existing user
    const exist = await User.findOne({ email: email.toLowerCase().trim() });
    if (exist) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 2️⃣ HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3️⃣ Save user
    const user = new User({
      name,
      email: email.toLowerCase().trim(),
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    console.error("SIGNUP ERROR:", error);
    res.status(500).json({ message: "Signup failed" });
  }
};
exports.login = async (req, res) => {
  try {
    const email = req.body.email.toLowerCase().trim();
    const { password } = req.body;

    const exist = await User.findOne({ email });
    if (!exist) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const ispasswordCorrect = await bcrypt.compare(password, exist.password);
    if (!ispasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: exist._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful", token });
    

  } catch (error) {
    console.error("LOGIN ERROR:", error);
    res.status(500).json({ message: "Login mistake" });
  }
};

