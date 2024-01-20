const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Define routes for post-related operations
router.post('/create', postController.createPost);
router.get('/:id', postController.getPostById);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

// Add more routes as needed for your post-related operations

module.exports = router;
