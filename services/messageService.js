const messageModel = require('../models/messagesModel')

const getMessage = async (senderId, receiverId) => {
    try {
        const messageSender = await messageModel.find({ senderId, receiverId });
        const messageReceiver = await messageModel.find({ senderId: receiverId, receiverId: senderId });

        const message = messageSender.concat(messageReceiver);
        message.sort(function (a, b) {
            return new Date(a.createAt) - new Date(b.createAt);
        });
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