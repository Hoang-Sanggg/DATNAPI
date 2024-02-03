const savedModel = require('../models/savedModel');

const createSaved = async (data) => {
    try {
        const saved = new savedModel(data);
        saved.save();
        return true
    } catch (error) {
        console.log("DB: error new create saved", error)
        return false;
    }

};

const getAllSaved = async (data) => {
    try {
        const dataSaved = await savedModel.find(data);
        let postIdList = dataSaved.map(record => record.postId);
        const dataPostNews = await savedModel.find({ postId: { $in: postIdList } }).populate('postId');
        return dataPostNews
    } catch (error) {
        console.log("DB: error get all saved", error)
        return false;
    }

};

const getByIdSaved = async (id) => {


    try {
        return await savedModel.findById(id);
    } catch (error) {
        console.log("DB: error get by id saved", error)
        return false;
    }
};

const deleteSaved = async (id) => {


    try {
        await savedModel.findByIdAndDelete(id);
        return true
    } catch (error) {
        console.log("DB: error delete by id saved", error)
        return false;
    }

};

module.exports = {
    createSaved, getAllSaved, getByIdSaved, deleteSaved
};
