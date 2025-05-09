const express = require("express");
const router = express.Router();
const {
  likePost,
  favouritePost,
  getLikesAndFavourites,
} = require("../controllers/LikeFacController");
const auth = require("../middleware/authMiddleware");

router.post("/likes/:id", auth, likePost);
// router.post("/favourits/:id", auth, favouritePost);
// router.get("/likes-favourit/:id", getLikesAndFavourites);

module.exports = router;
