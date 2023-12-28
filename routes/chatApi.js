const express = require('express')
const router = express.Router();

const conversationController = require('../controllers/conversationController');
const messageController = require('../controllers/messageController');
const chatsController = require('../controllers/chatController');

//conversationApi
router.get('/get-conversation', conversationController.getConversation);
router.post('/get-conversation-by-members', conversationController.getConversationByMembers);
router.post('/add-conversation', conversationController.addConversation);


//messageApi
router.get('/get-message', messageController.getMessage);
router.post('/add-message', messageController.addMessage);

module.exports = router;