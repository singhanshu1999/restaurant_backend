const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: Number, required: true },
  role: { type: String, enum: ["customer", "staff"], default: "customer" },
});

module.exports = mongoose.model("User", userSchema);
