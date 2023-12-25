const typeModel = require('../models/TypeModels');

const getType = async () => {
    const type = await typeModel.find();
    return type;
}
//add
const addType = async (typeData) => {
    try {
        const newType = new typeModel(typeData);
        const savedtype = await newType.save();
        return savedtype;
    } catch (error) {
        throw error;
    }
};
// edit
const updateType = async (id, nameType,description,row) => {
    try {
        const updateType = await typeModel.findByIdAndUpdate(id, { nameType, description, row }, { new: true });
        return updateType;
    } catch (error) {
        throw new Error('Error updating type');
    }
};
//delete
const deleteType = async (id) => {
    try {
        const deleteType= await typeModel.findByIdAndDelete(id);
        return deleteType;
    } catch (error) {
        throw new Error('Error deleting type');
    }
};



module.exports = {
    getType, addType,updateType,deleteType
}

