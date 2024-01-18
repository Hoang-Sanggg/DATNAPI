const brandmodel = require('../models/BrandModels');

const getType = async () => {
    const type = await brandmodel.find();
    return type;
}

// getType Byid types
const getBrandgByCategoryId = async (idCategory) => {
    try {
        const type = await brandmodel.find({ idCategory });
        return type;
    } catch (error) {
        return false;
    }
};

//add
const addBrandService = async (brandData) => {
    try {
        const newBrandData = await brandmodel.create(brandData);
        console.log("?>>>>>>>>>>>>>>",brandData);
        return newBrandData;    
    } catch (error) {
        console.log(">>>>>>>>>>>",error);
        return false;
    }
};
// edit
const updateType = async (id, nameBrand,description,avaliable) => {
    try {
        const updateType = await brandmodel.findByIdAndUpdate(id, { nameBrand, description,avaliable }, { new: true });
        return updateType;
    } catch (error) {
        return false;
    }
};
//delete
const deleteType = async (id) => {
    try {
        const deleteType= await brandmodel.findByIdAndDelete(id);
        return deleteType;
    } catch (error) {
        return false;
    }
};



module.exports = {
    getType, addBrandService,updateType,deleteType,getBrandgByCategoryId
}

