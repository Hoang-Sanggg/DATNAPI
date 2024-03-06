const Vip = require('../models/VipModel');
const moment = require('moment');

// thêm vip
const createVip = async (vipData) => {
    const vip = new Vip(vipData);
    await vip.save();
    return vip;
};

// lấy vip theo id
const getVipById = async (id) => {
    return await Vip.findById(id).populate('userId');
};

// lấy tất cả vip
const getAllVips = async () => {

    const vips = await Vip.find({ end: { $gte: moment() } }).populate(['vipTypeId', 'postsId']);
    vips.sort((a, b) => b.vipTypeId.price - a.vipTypeId.price);
    const dataPosts = vips.map(vip => vip.postsId);
    return dataPosts;
};

// cập nhật vip
const updateVip = async (id, vipData) => {
    return await Vip.findByIdAndUpdate(id, vipData, { new: true });
};

//xóa vip
const deleteVip = async (id) => {
    return await Vip.findByIdAndDelete(id);
};

module.exports = {
    createVip,
    getVipById,
    getAllVips,
    updateVip,
    deleteVip
};
