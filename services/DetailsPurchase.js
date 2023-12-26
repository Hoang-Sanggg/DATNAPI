const DetailsPurchaseModel = require('../models/DetailsPurchase');

const getDetailsPurchase = async () => {
    try {
        const DetailsPurchase = await DetailsPurchaseModel.find().populate('Productid');
        return DetailsPurchase
    }
    catch (error) {
        throw new Error(error)
    }
}
const addDetailsPurchase = async (userid, Productid, role) => {
   try{
    const DetailsPurchase = await DetailsPurchaseModel.create({ userid, Productid, role });
    return DetailsPurchase
   }
   catch(error){
        throw new Error(error)
   }
}
const DeleteDetailsPurchase = async (id) => {
   try{
    const DetailsPurchase = await DetailsPurchaseModel.findByIdAndDelete(id);
    return DetailsPurchase
   }
   catch(error){
        throw new Error(error)
   }
}
const UpdateDetailsPurchase = async (id, userid, Productid, role) => {
    try{
        const DetailsPurchase = await DetailsPurchaseModel.findByIdAndUpdate(id, { userid, Productid, role });
        return DetailsPurchase
    }
    catch(error){
         throw new Error(error)
    }
}
module.exports = {
    getDetailsPurchase,
    addDetailsPurchase,
    DeleteDetailsPurchase,
    UpdateDetailsPurchase
}