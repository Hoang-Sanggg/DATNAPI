const DetailsPurchaseModel = require('../models/DetailsPurchase');

const getDetailsPurchase = async () => {
    try {
        const DetailsPurchase = await DetailsPurchaseModel.find().populate('Productid').populate('userid');
        return DetailsPurchase
    }
    catch (error) {
        return false
    }
}
const addDetailsPurchase = async (userid, Productid, role) => {
    try {
        const DetailsPurchase = await DetailsPurchaseModel.create({ userid, Productid, role });
        return DetailsPurchase
    }
    catch (error) {
      return false
    }
}
const DeleteDetailsPurchase = async (id) => {
    try {
        const DetailsPurchase = await DetailsPurchaseModel.findByIdAndDelete(id);
        return DetailsPurchase
    }
    catch (error) {
        return false
    }
}
const UpdateDetailsPurchase = async (id, userid, Productid, role) => {
    try {
        const DetailsPurchase = await DetailsPurchaseModel.findByIdAndUpdate(id, { userid, Productid, role });
        return DetailsPurchase
    }
    catch (error) {
        return false
    }
}
module.exports = {
    getDetailsPurchase,
    addDetailsPurchase,
    DeleteDetailsPurchase,
    UpdateDetailsPurchase
}