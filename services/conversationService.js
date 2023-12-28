const conversationModel = require('../models/conversationsModel')

const getConversation = async () => {
    try {

        const conversation = await conversationModel.find();

        return conversation;
    } catch (error) {
        return false
    }
}

const getConversationByMembers = async (members) => {
    try {

        const conversation = await conversationModel.find({ members: members });

        return conversation;
    } catch (error) {
        return false
    }
}
const addConversation = async (conversationData) => {
    try {
        console.log(conversationData)
        const conversation = await conversationModel.create(conversationData);

        return true;
    } catch (error) {
        return false
    }
}

module.exports = {
    addConversation, getConversation, getConversationByMembers
}