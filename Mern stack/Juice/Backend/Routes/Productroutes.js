// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Productmodel');
const upload = require('../Controller/uploadmiddleware/uploadmiddleware');

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


router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: req.file.path, // Cloudinary URL
      ingredients: req.body.ingredients
        ? req.body.ingredients.split(",").map(i => i.trim())
        : [],

      nutrition: {
        calories: req.body.nutrition?.calories,
        sugar: req.body.nutrition?.sugar,
        carbs: req.body.nutrition?.carbs,
        vitaminC: req.body.nutrition?.vitaminC,
      }
    });

    res.status(201).json(product);

  } catch (error) {
    console.error("Product upload error:", error);
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;
