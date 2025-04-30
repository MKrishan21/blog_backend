const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String, // This will store the path to the image
    default: "",
  },
  tags: {
    type: [String],
    default: [],
  },
  category: {
    type: String,
    required: false,
    enum: [
      "technology",
      "health",
      "education",
      "business",
      "entertainment",
      "finance",
      "sports",
      "other",
    ],
    default: "Other",
  },
  status: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
