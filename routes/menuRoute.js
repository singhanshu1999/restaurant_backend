const express = require("express");

const {
  getMenu,
  createMenu,
  getMenuById,
  updateMenu,
  deleteMenu,
} = require("../controller/menuController");

const router = express.Router();

router.get("/", getMenu);
router.post("/", createMenu);
router.get("/:id", getMenuById);
router.put("/:id", updateMenu);
router.delete("/:id", deleteMenu);

module.exports = router;
