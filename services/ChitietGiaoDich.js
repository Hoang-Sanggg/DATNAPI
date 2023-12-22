const ChitietGiaoDichModel = require('../models/ChitietGiaoDich');
 
const getChitietGiaoDich = async () => {
    const ChitietGiaoDich = await ChitietGiaoDichModel.find();
    return ChitietGiaoDich
}
const addChitietGiaoDich = async (userid, Productid, role) => {
    const ChitietGiaoDich = await ChitietGiaoDichModel.create({ userid, Productid, role });
    return ChitietGiaoDich
}
const DeleteChitietGiaoDich = async (id) => {
    const ChitietGiaoDich = await ChitietGiaoDichModel.findByIdAndDelete(id);
    return ChitietGiaoDich
}
const UpdateChitietGiaoDich = async (id, userid, Productid, role) => {
    const ChitietGiaoDich = await ChitietGiaoDichModel.findByIdAndUpdate(id, { userid, Productid, role });
    return ChitietGiaoDich
}
module.exports = {
    getChitietGiaoDich,
    addChitietGiaoDich,
    DeleteChitietGiaoDich,
    UpdateChitietGiaoDich
}
