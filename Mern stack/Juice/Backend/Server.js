const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./Config/Db");

dotenv.config();

const app = express();

// Middleware
console.log(process.env.CLOUD_NAME);

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

// Routes
app.use("/api/auth", require("./Routes/auth"));
app.use("/api/cart", require("./Routes/Cartroutes"));
app.use("/api/products", require("./Routes/Productroutes"));

// Test protected route
const authMiddleware = require("./Controller/authmiddleware/authmiddleware");

app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({ message: "Protected route accessed", userId: req.user.id });
});

const PORT = process.env.PORT || 5000;

db().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
