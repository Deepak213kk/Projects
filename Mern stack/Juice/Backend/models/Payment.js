const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({  
  paymentId: String,
  orderId: String,
  signature: String,

  amount: Number,
  status: String, // success / failed
  method: String, // UPI / card

}, { timestamps: true });

module.exports = mongoose.model("Payment", paymentSchema);
