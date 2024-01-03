const adModel = require('../models/AdModel');

const getAd = async () => {
    const ad = await adModel.find();
    return ad;
}

//add
const addAds = async (adsData) => {
    try {
        const newAds = new adModel(adsData);
        const savedads = await newAds.save();
        return savedads;
    } catch (error) {
        throw error;
    }
};

//delete
const deleteAds = async (id) => {
    try {
        const adToDelete = await adModel.findById(id);

        if (!adToDelete) {
            throw new Error('Không tìm thấy');
        }
        // kiểm tra khóa ngoại iproduct có thì không xóa >>
        if (adToDelete.idProduct) {
            throw new Error('Không thể xóa khi có idProduct');
        }
        const deleteAds= await adModel.findByIdAndDelete(id);
        return deleteAds;
    } catch (error) {
        throw new Error('Error deleting Ads');
    }
};

// edit
const updateAds = async (id, typeAd) => {
    try {
        const updateAds = await adModel.findByIdAndUpdate(id, { typeAd }, { new: true });
        return updateAds;
    } catch (error) {
        throw new Error('Error updating Ads');
    }
};

module.exports = {
    getAd,addAds,deleteAds,updateAds
}