const express = require("express");

const {
  getOrder,
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require("../controller/orderController");

const router = express.Router();

router.get("/", getOrder);
router.post("/", createOrder);
router.get("/:id", getOrderById);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

module.exports = router;
