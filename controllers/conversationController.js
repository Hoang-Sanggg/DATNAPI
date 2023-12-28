const conversationService = require('../services/conversationService')

const getConversation = async (req, res) => {
    try {

        const conversation = await conversationService.getConversation();
        if (conversation) {
            return res.status(200).json({ result: true, message: 'getConversation Succesful', conversation: conversation })
        }
        return res.status(400).json({ result: false, message: 'getConversation null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getConversation' })
    }
}

const getConversationByMembers = async (req, res) => {
    try {
        const { members } = req.body
        const conversation = await conversationService.getConversationByMembers(members);
        if (conversation) {
            return res.status(200).json({ result: true, message: 'getConversation Succesful', conversation: conversation })
        }
        return res.status(400).json({ result: false, message: 'getConversation null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getConversation' })
    }
}

const addConversation = async (req, res) => {
    try {
        const conversationData = req.body;

        const conversation = await conversationService.addConversation(conversationData);
        if (conversation) {
            return res.status(200).json({ result: true, message: 'addConversation Succesful' })
        }
        return res.status(400).json({ result: false, message: 'addConversation null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error addConversation' })
    }
}

module.exports = {
    addConversation, getConversation, getConversationByMembers
}