const express = require('express')
const router = express.Router();
const messageController = require('../controllers/messageController')

router.get('/get-messages-receiver/:receiverId', messageController.getMessageByReceiver)
router.get('/get-messages', messageController.getMessage)
router.post('/new-message', messageController.newMessage)
router.post('/seen-message', messageController.seenMessage)



module.exports = router;


