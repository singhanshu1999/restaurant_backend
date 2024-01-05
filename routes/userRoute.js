const express = require("express");

const {
  getUser,
  createUser,
  updateUser,
} = require("../controller/userController");

const router = express.Router();

router.get("/", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);

module.exports = router;
