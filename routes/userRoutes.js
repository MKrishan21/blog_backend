const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getAllUser,
  getUserById,
} = require("../controllers/UserController");

router.post("/register", register);
router.post("/login", login);
router.get("/getAllUser", getAllUser);
router.get("/get-user/:id", getUserById);

module.exports = router;
