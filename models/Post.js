const mongoose = require('mongoose');

// Define Post Schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  // Add more fields as needed for your post model
});

// Create and export Post model
const Post = mongoose.model('Post', postSchema);
module.exports = Post;
