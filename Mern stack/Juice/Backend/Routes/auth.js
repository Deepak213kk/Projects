const express = require("express");
const router = express.Router();
//const authMiddleware = require("../Controller/authmiddleware/authmiddleware.js");
const { signup, login } = require("../Controller/authController.js");

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
