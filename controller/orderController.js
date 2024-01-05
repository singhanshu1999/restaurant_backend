const asyncHandler = require("express-async-handler");

const order = require("../models/orderModel");

const getOrder = asyncHandler(async (req, res) => {
  const fetchOrder = await order.find();
  res.status(200).json(fetchOrder);
});

const createOrder = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);
  const { items, total } = req.body;
  if (!items || !total) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const newOrder = await order.create({
    items,
    total,
  });
  res.status(200).json(newOrder);
});

const getOrderById = asyncHandler(async (req, res) => {
  const fetchOrderById = await order.findById(req.params.id);
  if (!fetchOrderById) {
    res.status(404);
    throw new Error("Order not found");
  }
  res.status(200).json(fetchOrderById);
});

const updateOrder = asyncHandler(async (req, res) => {
  const fetchOrderById = await order.findById(req.params.id);
  if (!fetchOrderById) {
    res.status(404);
    throw new Error("Order not found");
  }
  const modifyOrder = await order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(modifyOrder);
});

const deleteOrder = asyncHandler(async (req, res) => {
  const fetchOrderById = await order.findById(req.params.id);
  if (!fetchOrderById) {
    res.status(404);
    throw new Error("Order not found");
  }
  const removeOrder = await order.findByIdAndDelete(req.params.id);
  res.status(200).json(removeOrder);
});

module.exports = {
  getOrder,
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
};
