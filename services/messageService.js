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
        return message;
    } catch (error) {
        console.log(error)
        return false
    }
}

const getMessageByReceiver = async (receiverId) => {
    try {
        const messageReceiver = await messageModel.find({ receiverId });
        const messageSender = await messageModel.find({ senderId: receiverId });
        const messages = messageSender.concat(messageReceiver);
        messages.sort(function (a, b) {
            return new Date(a.createAt) - new Date(b.createAt);
        });
        return messages;
    } catch (error) {
        console.log("error get message by userId service: ", error)
        return false
    }
}

module.exports = {
    getMessage, newMessage, getMessageByReceiver
}