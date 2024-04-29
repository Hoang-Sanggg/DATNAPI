const savedModel = require('../models/savedModel');

const saveOrNotSave = async (data) => {
    try {
        const dataSaved = await savedModel.find(data);
        if (dataSaved.length > 0) {
            await savedModel.findByIdAndDelete(dataSaved[0]._id)
            return { message: "delete saved succesful", saved: false }
        }
        if (dataSaved.length == 0) {
            const saved = new savedModel(data);
            saved.save();
            return { message: "creata saved succesful", saved: true }
        }
        // const saved = new savedModel(data);
        // saved.save();
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
    saveOrNotSave, getAllSaved, getByIdSaved, deleteSaved
};
