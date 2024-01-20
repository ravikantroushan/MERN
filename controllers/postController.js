// Post-related logic
const Post = require('../models/Post');

// Controller for post-related operations

// Example: Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Example: Create a new post
exports.createPost = async (req, res) => {
  const { title, content, userId } = req.body;

  try {
    const post = new Post({ title, content, userId });
    await post.save();

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Example: Get post by ID
exports.getPostById = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add more controllers based on your project's requirements
