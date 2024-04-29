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

const seenMessage = async (senderId, receiverId) => {
    try {

        await messageModel.updateMany(
            {
                senderId: senderId,
                receiverId: receiverId,
                seen: false
            },
            { $set: { seen: true } }
        );
    } catch (error) {
        return false
    }
}

const messageCommunicateUser = async (userId) => {
    try {
        const messages = await messageModel.find({
            $or: [
                { senderId: userId },
                { receiverId: userId }
            ]
        }).sort({ createAt: -1 }).populate(["senderId", "receiverId"]);
        const latestMessages = {};

        messages.forEach(message => {
            const counterpartId = (message.senderId._id == userId) ? message.receiverId._id : message.senderId._id;
            if (!latestMessages[counterpartId] || message.createAt > latestMessages[counterpartId].createAt) {
                latestMessages[counterpartId] = message;
            }
        });


        // Chuyển đổi object latestMessages thành mảng để trả về dưới dạng JSON
        const result = Object.values(latestMessages);
        console.log("check sl message: ", result.length)
        return result
    } catch (error) {
        console.log("error message communicate user services: ", error)
        return false
    }
}
module.exports = {
    getMessage, newMessage, getMessageByReceiver, seenMessage, messageCommunicateUser
}