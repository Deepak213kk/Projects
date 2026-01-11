const router = require("express").Router();
const auth = require("../Controller/authmiddleware/authmiddleware");
const cart = require("../Controller/Cartcontroller");
require("../models/Productmodel");
router.get("/", auth, cart.getCart);
router.post("/add", auth, cart.addToCart);
router.post("/increase", auth, cart.increaseQty);
router.post("/decrease", auth, cart.decreaseQty);
router.post("/remove", auth, cart.removeItem);

module.exports = router;
