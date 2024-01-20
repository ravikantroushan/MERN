const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes for user-related operations
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/:id', userController.getUserById);

// Add more routes as needed for your user-related operations

module.exports = router;
