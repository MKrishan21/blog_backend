const express = require("express");
const router = express.Router();
const {
  likePost,
  favouritePost,
  getUserInteraction,
} = require("../controllers/LikeFacController");
const auth = require("../middleware/authMiddleware");

router.post("/likes/:id", auth, likePost);
// router.post("/favourits/:id", auth, favouritePost);
router.get("/likes-favourit/:postId", auth, getUserInteraction);

module.exports = router;
