const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const blogRoutes = require("./routes/blogRoutes");
const app = express();
const useRoutes = require("./routes/userRoutes");
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

// Serve static files from uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose
  .connect("mongodb://localhost:27017/blog_1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Blog API",
    endpoints: {
      blogs: "/api/blogs",
    },
  });
});

// Blog routes
app.use("/api/blogs", blogRoutes);
// User Routes
app.use("/api/auth", useRoutes);

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
