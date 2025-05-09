const LikeFavourite = require("../models/LikeFav");
const Blog = require("../models/Blog");

exports.likePost = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id; // From JWT token

  try {
    let record = await LikeFavourite.findOne({ userId, id });

    if (record) {
      record.liked = !record.liked;
      await record.save();

      const increment = record.liked ? 1 : -1;
      await Blog.findByIdAndUpdate(id, { $inc: { likesCount: increment } });

      return res.status(200).json({
        message: record.liked ? "Post liked" : "Post unliked",
      });
    } else {
      record = new LikeFavourite({ userId, id, liked: true });
      await record.save();
      await Blog.findByIdAndUpdate(id, { $inc: { likesCount: 1 } });

      return res.status(200).json({ message: "Post liked" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.favouritePost = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    let record = await LikeFavourite.findOne({ userId, id });

    if (record) {
      if (record.favourited) {
        return res.status(400).json({ message: "Already favourited" });
      }
      record.favourited = true;
    } else {
      record = new LikeFavourite({ userId, id, favourited: true });
    }

    await record.save();
    await Blog.findByIdAndUpdate(id, { $inc: { favouritesCount: 1 } });

    res.status(200).json({ message: "Post favourited" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserInteraction = async (req, res) => {
  const { postId } = req.params;
  const userId = req.user.id;

  try {
    const record = await LikeFavourite.findOne({ userId, postId });
    res.status(200).json({
      success: true,
      liked: record?.liked || false,
      favourited: record?.favourited || false,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
