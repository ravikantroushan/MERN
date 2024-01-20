// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add more fields as needed for your user model
  // Example: name, bio, profile picture URL, etc.
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;
