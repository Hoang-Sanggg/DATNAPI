const typeModel = require('../models/TypeModels');

const getType = async () => {
    const type = await typeModel.find();
    return type;
}

// getType Byid Categorydetails
const getTypegByCategoryDetailId = async (idCategoryDetail) => {
    try {
        const type = await typeModel.find({ idCategoryDetail });
        return type;
    } catch (error) {
        return false;
    }
};

//add
const addType = async (typeData) => {
    try {
        const newType = new typeModel(typeData);
        const savedtype = await newType.save();
        return savedtype;
    } catch (error) {
        return false;
    }
};
// edit
const updateType = async (id, nameType,description) => {
    try {
        const updateType = await typeModel.findByIdAndUpdate(id, { nameType, description }, { new: true });
        return updateType;
    } catch (error) {
        return false;
    }
};
//delete
const deleteType = async (id) => {
    try {
        const deleteType= await typeModel.findByIdAndDelete(id);
        return deleteType;
    } catch (error) {
        return false;
    }
};



module.exports = {
    getType, addType,updateType,deleteType,getTypegByCategoryDetailId
}

