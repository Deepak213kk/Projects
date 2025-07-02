const express = require("express");
// const mongoose = require("mongoose");
const cors = require("cors");
const User = require('./models/user')
const connectDB = require("./config/db");
// require("dotenv").config();

const app = express();
const PORT =  5000;
const router = express.Router();
// Middleware
app.use(express.json());
app.use(cors());
// Login Route

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });
        res.json({ token, user });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});
// MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));
connectDB();
// Routes
app.get("/", (req, res) => {
  res.status(200).send("API is running...");
});
app.post('/signup', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const newUser = new User({ fullName, email, password });
    console.log("Login request received:", req.body);
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Example route
// const productRoutes = require("./routes/productRoutes");
// app.use("/api/products", productRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

