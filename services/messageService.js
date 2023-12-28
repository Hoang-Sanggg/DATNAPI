const messageModel = require('../models/messagesModel')

const getMessage = async (conversationId) => {
    try {
        console.log(conversationId)
        const message = await messageModel.find({ conversationId: conversationId });

        return message;
    } catch (error) {
        return false
    }
}

const addMessage = async (messageData) => {

    try {
        const message = await messageModel.create(messageData);

        return true;
    } catch (error) {
        return false
    }
}

module.exports = {
    addMessage, getMessage
}