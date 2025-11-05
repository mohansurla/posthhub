import express from "express";
import Post from "../models/Post.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Route to create a new post
router.post("/", verifyToken, async (req, res) => {
  try {
    const { content } = req.body;
    const { id, username } = req.user;

    if (!content) {
      return res.status(400).json({ message: "Content is required" });
    }

    const newPost = new Post({
      userId: id,
      username,
      content,
    });

    await newPost.save();
    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    console.error("Create Post Error:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Route to get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    console.error("Fetch Posts Error:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
