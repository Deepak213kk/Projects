const Cart = require("../models/Cart");

// GET CART
exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id })
    .populate("items.productId");

  res.json(cart ? cart.items : []);
};

// ADD TO CART
exports.addToCart = async (req, res) => {
  const { productId } = req.body;

  let cart = await Cart.findOne({ userId: req.user.id });

  if (!cart) {
    cart = await Cart.create({
      userId: req.user.id,
      items: [{ productId, quantity: 1 }]
    });
  } else {
    const item = cart.items.find(
      i => i.productId.toString() === productId
    );

    if (item) {
      item.quantity += 1;
    } else {
      cart.items.push({ productId, quantity: 1 });
    }
  }

  await cart.save();
  res.json(cart.items);
};

// INCREASE QTY
exports.increaseQty = async (req, res) => {
  const { productId } = req.body;

  const cart = await Cart.findOne({ userId: req.user.id });
  const item = cart.items.find(i => i.productId.toString() === productId);

  if (item) item.quantity += 1;

  await cart.save();
  res.json(cart.items);
};

// DECREASE QTY
exports.decreaseQty = async (req, res) => {
  const { productId } = req.body;

  const cart = await Cart.findOne({ userId: req.user.id });
  const item = cart.items.find(i => i.productId.toString() === productId);

  if (item) {
    item.quantity -= 1;
    if (item.quantity <= 0) {
      cart.items = cart.items.filter(
        i => i.productId.toString() !== productId
      );
    }
  }

  await cart.save();
  res.json(cart.items);
};

// REMOVE ITEM
exports.removeItem = async (req, res) => {
  const { productId } = req.body;

  const cart = await Cart.findOne({ userId: req.user.id });

  cart.items = cart.items.filter(
    i => i.productId.toString() !== productId
  );

  await cart.save();
  res.json(cart.items);
};
