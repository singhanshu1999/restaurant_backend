const express = require("express");

const { registerUser, getUser } = require("../controller/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/", getUser);

module.exports = router;
