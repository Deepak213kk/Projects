const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: String, // razorpay order id
  amount: Number, // 22000 (in paise)
  currency: { type: String, default: "INR" },
  status: { type: String, default: "created" },

  items: [
    {
      name: String,
      qty: Number,
      price: Number,
    },
  ],

  user: {
    name: String,
    contact: String,
    address: String,
  },

}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
