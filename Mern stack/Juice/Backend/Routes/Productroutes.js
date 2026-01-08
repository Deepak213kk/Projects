// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Productmodel');

// GET /api/products - fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // fetch all products from MongoDB
    res.json(products); // send as JSON to frontend
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
