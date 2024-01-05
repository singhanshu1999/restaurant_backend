const asyncHandler = require("express-async-handler");

const menu = require("../models/menuModel");

const getMenu = asyncHandler(async (req, res) => {
  const fetchMenu = await menu.find();
  res.status(200).json(fetchMenu);
});

const createMenu = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);
  const { name, price, description } = req.body;
  if (!name || !price || !description) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const newContact = await menu.create({ name, price, description });
  res.status(200).json(newContact);
});

const getMenuById = asyncHandler(async (req, res) => {
  const fetchMenuById = await menu.findById(req.params.id);
  if (!fetchMenuById) {
    res.status(404);
    throw new Error("Menu not found");
  }
  res.status(200).json(fetchMenuById);
});

const updateMenu = asyncHandler(async (req, res) => {
  const fetchMenuById = await menu.findById(req.params.id);
  if (!fetchMenuById) {
    res.status(404);
    throw new Error("Menu not found");
  }
  const modifyMenu = await menu.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(modifyMenu);
});

const deleteMenu = asyncHandler(async (req, res) => {
  const fetchMenuById = await menu.findById(req.params.id);
  if (!fetchMenuById) {
    res.status(404);
    throw new Error("Menu not found");
  }
  const removeMenu = await menu.findByIdAndDelete(req.params.id);
  res.status(200).json(removeMenu);
});

module.exports = {
  getMenu,
  createMenu,
  getMenuById,
  updateMenu,
  deleteMenu,
};
