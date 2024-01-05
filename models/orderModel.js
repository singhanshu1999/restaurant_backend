const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu" },
      quantity: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
});

module.exports = mongoose.model("Order", orderSchema);
