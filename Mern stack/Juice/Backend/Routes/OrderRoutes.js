const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// GET /api/orders - fetch all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find(); // fetch all orders from MongoDB
    res.json(orders); // send as JSON to frontend
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;