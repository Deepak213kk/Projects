const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // email: {
  //   type: String,
  //   required: true,
  // },
  contact: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Userdetail", userSchema);
