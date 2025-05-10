const mongoose = require("mongoose");

const LikeFavouriteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blogs",
      required: true,
    },
    liked: { type: Boolean, default: false },
    favourited: { type: Boolean, default: false },
  },
  { timestamps: true }
);

LikeFavouriteSchema.index({ userId: 1, postId: 1 }, { unique: true });

module.exports = mongoose.model("likefavourites", LikeFavouriteSchema);
