const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: {
    type: String,   // Cloudinary UR
  },
  description: String,
  category: String,
  ingredients: {
    type: [String],
    default: [],
  },

  nutrition: {
    calories: Number,
    sugar: String,
    vitaminC: String,
    carbs: String,
  },
});

module.exports = mongoose.model("productmodels", productSchema);
