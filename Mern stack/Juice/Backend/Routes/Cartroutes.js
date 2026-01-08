const express = require("express");
const router = express.Router();
const authMiddleware = require("../Controller/authmiddleware/authmiddleware");
const User = require("../models/User");

router.post("/cart/add", authMiddleware, async (req, res) => {
  const { productId } = req.body;
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  const existingItem = user.cart.find(item => item.productId.toString() === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    user.cart.push({ productId, quantity: 1 });
  }

  await user.save();
  res.json({ message: "Added to cart", cart: user.cart });
});

router.post("/cart/remove", authMiddleware, async (req, res) => {
  const { productId } = req.body;
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.cart = user.cart.filter(item => item.productId.toString() !== productId);

  await user.save();
  res.json({ message: "Removed from cart", cart: user.cart });
});

// router.get("/cart", authMiddleware, async (req, res) => {
//   const user = await User.findById(req.user.id).populate("cart.productId");
//   if (!user) return res.status(404).json({ message: "User not found" });

//   res.json(user.cart);
// });
// router.get("/cart", authMiddleware, async (req, res) => {
//   const cart = await User.findOne({ userId: req.user.id }).populate("cart.productId");
//   if (!cart) return res.status(404).json({ message: "Cart not found" });
//   res.json(cart.items);
// });

router.get("/cart", authMiddleware, async (req, res) => {
  try {
    console.log("GET /cart user id:", req.user?.id);

    const user = await User.findById(req.user.id).populate("cart.productId");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User cart:", user.cart);
    res.json(user.cart); // send cart array
  } catch (err) {
    console.error("GET /cart error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});



router.post("/cart/increase", authMiddleware, async (req, res) => {
  const { productId } = req.body;
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  const item = user.cart.find(i => i.productId.toString() === productId);
  if (!item) return res.status(404).json({ message: "Item not in cart" });

  item.quantity += 1;
  await user.save();
  res.json(user.cart);
});

router.post("/cart/decrease", authMiddleware, async (req, res) => {
  const { productId } = req.body;
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  const item = user.cart.find(i => i.productId.toString() === productId);
  if (!item) return res.status(404).json({ message: "Item not in cart" });

  if (item.quantity > 1) item.quantity -= 1;
  await user.save();
  res.json(user.cart);
});

module.exports = router;
