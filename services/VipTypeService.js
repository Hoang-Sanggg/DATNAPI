const VipType = require('../models/VipTypeModel'); 

const getVipTypes = async () => {
    return await VipType.find({});
};

const getVipTypeById = async (id) => {
    return await VipType.findById(id);
};

const createVipType = async (vipTypeData) => {
    const vipType = new VipType(vipTypeData);
    return await vipType.save();
};

const updateVipType = async (id, vipTypeData) => {
    return await VipType.findByIdAndUpdate(id, vipTypeData, { new: true });
};

const deleteVipType = async (id) => {
    return await VipType.findByIdAndDelete(id);
};

module.exports = {
    getVipTypes,
    getVipTypeById,
    createVipType,
    updateVipType,
    deleteVipType
};
