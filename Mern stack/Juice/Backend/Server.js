const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./Config/Db");

dotenv.config();

const app = express();

// Middleware
//console.log(process.env.CLOUD_NAME);
app.use(express.json());
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (
      origin.includes("vercel.app") ||
      origin.includes("localhost")
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));


// Routes
app.use("/api/auth", require("./Routes/auth"));
app.use("/api/cart", require("./Routes/Cartroutes"));
app.use("/api/products", require("./Routes/Productroutes"));

// Razorpay1
app.post("/create-order", async (req, res) => {
  const { amount, items, user } = req.body;

  const options = {
    amount: amount * 100, // ₹220 → 22000
    currency: "INR",
    receipt: "receipt_123",
  };

  const order = await razorpay.orders.create(options);

  // save in DB
  const newOrder = await Order.create({
    orderId: order.id,
    amount: options.amount,
    items,
    user,
  });

  res.json(order);
});


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
