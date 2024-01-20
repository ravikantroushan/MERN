const express = require('express');
const notificationController = require('../controllers/notificationController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/notification', authMiddleware.authenticateUser, notificationController.createNotification);
router.delete('/notification/:id', authMiddleware.authenticateUser, notificationController.deleteNotification);
router.get('/notifications', authMiddleware.authenticateUser, notificationController.getNotifications);

// Additional routes for notifications

module.exports = router;
