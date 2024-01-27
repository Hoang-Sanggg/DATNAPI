const messageModel = require('../models/messagesModel')

const getMessage = async (senderId, receiverId) => {
    try {
        console.log(senderId, receiverId)
        const message = await messageModel.find({ senderId, receiverId });

        return message;
    } catch (error) {
        return false
    }
}

const newMessage = async (messageData) => {
    try {
        const message = await messageModel.create(messageData);
        // console.log("check data message : ", message)
        return true;
    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports = {
    getMessage, newMessage
}