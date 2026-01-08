const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');  // Make sure bcrypt is required
const User = require('../models/user');


//sign in


router.post('/register', async (req, res) => {
  const { email, username, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with a salt of 10

    // Create a new user instance with the hashed password
    const newUser = new User({
      email,
      username,
      password: hashedPassword // Save the hashed password
    });

    // Save the user to the database
    await newUser.save();

    // Send a success response
    return res.status(201).json({ msg: 'User registered successfully!' });
  } catch (error) {
    console.error('Error during registration:', error); // Log the error details
    return res.status(500).json({ msg: 'Error registering user', error: error.message });
  }
});

module.exports = router;



  


router.post("/signin", async (req, res) => {
  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      // If the user does not exist, send a 400 status code with a message
      return res.status(400).json({ message: "Please sign in first" });
    }

    // Compare the password entered by the user with the password stored in the database
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isPasswordCorrect) {
      // If the password is incorrect, send a 401 status code (Unauthorized)
      return res.status(401).json({ message: "Please enter a valid password" });
    }

    // Extract the password from the user object and send the rest of the user object
    const { password, ...others } = user._doc;
    
    // Send the success message and other user details (if needed)
    return res.status(200).json({ message: "Login Successful", user: { id: user._id, ...others } });

  } catch (error) {
    // Log the error for debugging
    console.error("Error during sign-in:", error);

    // Send a 500 status code for server-side error
    return res.status(500).json({ message: "Server error during sign-in", error: error.message });
  }
});



module.exports = router;
