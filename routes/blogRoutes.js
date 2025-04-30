const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const { storage } = require("../config/cloudinary");
const multer = require("multer");
const auth = require("../middleware/authMiddleware");

const upload = multer({ storage });
// Get all blogs
router.get("/", blogController.getAllBlogs);

//  Get Blogs By User-id
router.get("/user-blogs/:userId", blogController.getBlogsByUserId);

// Get blog by ID
router.get("/:id", blogController.getBlogById);

router.post("/", auth, upload.single("image"), blogController.createBlog);

router.put("/:id", auth, upload.single("image"), blogController.updateBlog);

// Delete blog
router.delete("/:id", auth, blogController.deleteBlog);

module.exports = router;
