const asyncHandler = require("express-async-handler");
const user = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, role } = req.body;
  if (!username || !email || !password || !role) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvailable = await user.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("Already registered email!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed password", hashedPassword);

  const newUser = await user.create({
    username,
    email,
    password: hashedPassword,
    role,
  });
  console.log(`user created ${newUser}`);
  if (newUser) {
    res.status(201).json({ _id: newUser.id, email: newUser.email });
  } else {
    res.status(400);
    throw new Error("user data is not valid");
  }
});

const getUser = asyncHandler(async (req, res) => {
  const fetchUser = await user.find();
  res.status(200).json(fetchUser);
});

module.exports = { registerUser, getUser };
