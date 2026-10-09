const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./Config/Db");
const crypto = require("crypto");
const Order = require("./models/Order");
const Payment = require("./models/Payment");
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
// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Routes
app.use("/api/auth", require("./Routes/auth"));
app.use("/api/cart", require("./Routes/Cartroutes"));
app.use("/api/products", require("./Routes/Productroutes"));
app.use("/api/orders", require("./Routes/OrderRoutes"));
// Razorpay1
app.post("/create-order", async (req, res) => {
  try {
    const { amount, items, user } = req.body;

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);


    const Order = require("./models/Order");
    const User = require("./models/User");

    // Inside your existing /create-order route,
    // after creating the Razorpay order:

    const orderUser = {
      name: user?.name || "",
      contact: user?.contact || "",
      address: user?.address || "",
    };

    await Order.create({
      orderId: order.id,
      amount: options.amount,
      currency: "INR",
      items,
      user: {
        name: user?.name || "",
        contact: user?.contact || "",
        address: user?.address || "",
      },
    });


    res.json(order);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/verify-payment", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {

      // ✅ Save payment
      await Payment.create({
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        signature: razorpay_signature,
        status: "success",
      });

      // ✅ Update order
      await Order.findOneAndUpdate(
        { orderId: razorpay_order_id },
        { status: "paid" }
      );

      res.json({ success: true });

    } else {
      res.status(400).json({ success: false });
    }

  } catch (err) {
    res.status(500).send(err);
  }
});
// Create Cash on Delivery order
app.post("/create-cod-order", async (req, res) => {
  try {
    const { amount, items, user } = req.body;

    if (
      !Number.isFinite(Number(amount)) ||
      Number(amount) <= 0 ||
      !Array.isArray(items) ||
      items.length === 0 ||
      !user?.name ||
      !user?.contact ||
      !user?.address
    ) {
      return res.status(400).json({
        message: "Valid order items and customer details are required.",
      });
    }

    const order = await Order.create({
      orderId: `COD_${Date.now()}`,
      amount: Math.round(Number(amount) * 100),
      currency: "INR",
      status: "Pending",
      paymentMethod: "COD",
      items,
      user: {
        name: user.name,
        contact: user.contact,
        address: user.address,
      },
    });

    res.status(201).json({
      success: true,
      message: "Cash on Delivery order placed successfully!",
      order,
    });
  } catch (err) {
    console.error("COD order error:", err);
    res.status(500).json({
      message: "Unable to place COD order.",
    });
  }
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
