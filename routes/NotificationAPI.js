const express = require('express')
const router = express.Router();
const Notification = require('../controllers/NotificationController');

router.get('/', Notification.getNotification);

module.exports = router
