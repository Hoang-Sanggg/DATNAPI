const detailModel = require('../models/DetailModels');

const getDetail = async () => {
    const detail = await detailModel.find();
    return detail
}
const addDetail = async (Productid, gioHangid) => {
    const detail = await detailModel.create({ Productid, gioHangid });
    return detail
}
const DeleteDetail = async (id) => {
    const detail = await detailModel.findByIdAndDelete(id);
    return detail
}
const UpdateDetail = async (id, Productid, gioHangid) => {
    const detail = await detailModel.findByIdAndUpdate(id, { Productid, gioHangid });
    return detail
}

module.exports = {
    getDetail,
    addDetail,
    DeleteDetail,
    UpdateDetail
}