const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  recipients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  }],
  isRead: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
}, { timestamps: true });

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
