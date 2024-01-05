const asyncHandler = require("express-async-handler");
const user = require("../models/userModel");

const getUser = asyncHandler(async (req, res) => {
  const fetchUser = await user.find();
  res.status(200).json(fetchUser);
});

const createUser = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);
  const { username, password, role } = req.body;
  if (!username || !password || !role) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const newUser = await user.create({ username, password, role });
  res.status(200).json(newUser);
});

const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "update user" });
});

module.exports = { getUser, createUser, updateUser };
