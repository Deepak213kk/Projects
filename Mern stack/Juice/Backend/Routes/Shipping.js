const express = require("express");
const router = express.Router();
const Userdetail = require("../models/Userdetail");

router.get("/shipping", async (req, res) => {
  try {
    const userId = req.user.id; // from auth middleware

    const user = await Userdetail.findById(userId).select("contact address");

    res.json({
      contact: user?.contact || "",
      address: user?.address || "",
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/shipping", async (req, res) => {
  try {
    const userId = req.user.id;
    const { contact, address } = req.body;

    const user = await Userdetail.findByIdAndUpdate(
      userId,
      { contact, address },
      { new: true }
    );

    res.json({
      message: "Shipping details updated",
      contact: user.contact,
      address: user.address,
    });
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
});

module.exports = router; // ✅ THIS WAS MISSING
