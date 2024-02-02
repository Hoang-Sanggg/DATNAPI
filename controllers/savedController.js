const savedService = require('../services/savedService');

const createSaved = async (req, res, next) => {
    try {
        const { postId, userId } = req.query;
        if (postId == "" || userId == "") return res.status(400).json({ result: false, message: 'postid and userid not null' });
        const requestDataSaved = { postId, userId }

        const createSaved = await savedService.createSaved(requestDataSaved);

        if (createSaved) {
            return res.status(200).json({ result: true, message: 'create saved Succesful' });
        } else {
            return res.status(400).json({ result: false, message: 'addNotification null' });
        }
    } catch (error) {
        console.log("error create saved", error);
        return res.status(500).json({ result: false, message: 'Error create saved' });
    }
}

const getAllSaved = async (req, res, next) => {
    try {
        const { userId } = req.query;
        if (userId == "") return res.status(400).json({ result: false, message: 'postid and userid not null' });
        const requestDataSaved = { userId }

        const dataSaved = await savedService.getAllSaved(requestDataSaved);

        if (dataSaved) {
            return res.status(200).json({ result: true, message: 'create saved Succesful', data: dataSaved });
        } else {
            return res.status(400).json({ result: false, message: 'addNotification null' });
        }
    } catch (error) {
        console.log("error create saved", error);
        return res.status(500).json({ result: false, message: 'Error create saved' });
    }
}


module.exports = {
    createSaved, getAllSaved
}
