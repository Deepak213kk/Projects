const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const { OAuth2Client } = require("google-auth-library");

const googleClient = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);

exports.signup = async (req, res) => {
  try {
    const { name, email, password, contact, address, role } = req.body;
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
      contact,
      address,
      role
    });

    await user.save();

    res.status(201).json({
      message: "Signup successful",
      user
    });
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

    return res.status(200).json({
      message: "Login successful",
      token,
      role: exist.role,
      userId: exist._id
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);
    res.status(500).json({ message: "Login mistake" });
  }
};
exports.updateProfile = async (req, res) => {
  try {
    const { contact, address } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { contact, address },
      { new: true }
    );

    res.json({
      message: "Profile updated successfully",
      user,
    });
  } catch (err) {
    console.error("UPDATE PROFILE ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};


exports.googleLogin = async (req, res) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({
        message: "Google credential is required"
      });
    }

    if (!process.env.GOOGLE_CLIENT_ID) {
      console.error("GOOGLE_CLIENT_ID is missing");
      return res.status(500).json({
        message: "Google login is not configured"
      });
    }

    // Verify the credential with Google
    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();

    if (!payload || !payload.sub || !payload.email ||
        payload.email_verified !== true) {
      return res.status(401).json({
        message: "Google account verification failed"
      });
    }

    const email = payload.email.toLowerCase().trim();

    // Find an account already linked to this Google ID
    let user = await User.findOne({
      googleId: payload.sub
    });

    if (!user) {
      // Do not automatically link an existing password account
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(409).json({
          message:
            "An account with this email already exists. Please log in using your existing method first."
        });
      }

      // Create a new regular user account
      user = new User({
        name: payload.name || email.split("@")[0],
        email,
        googleId: payload.sub,
        password: null,
        role: "user"
      });

      await user.save();
    }

    // Issue the same kind of JWT used by normal login
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Google login successful",
      token,
      role: user.role,
      userId: user._id
    });

  } catch (error) {
    console.error("GOOGLE LOGIN ERROR:", error.message);

    return res.status(401).json({
      message: "Google login failed. Please try again."
    });
  }
};

