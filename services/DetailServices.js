const detailModel = require('../models/DetailModels');

const getDetail = async () => {
     try {
          const detail = await detailModel.find().populate('Productid').populate('gioHangid');
          return detail
     }
     catch (error) {
          return false
     }
}
const addDetail = async (Productid, gioHangid) => {
     try {
          const detail = await detailModel.create({ Productid, gioHangid });
          return detail
     }
     catch (error) {
          throw new Error(error)
     }
}
const DeleteDetail = async (id) => {
     try {
          const detail = await detailModel.findByIdAndDelete(id);
          return detail
     }
     catch (error) {
          throw new Error(error)
     }
}
const UpdateDetail = async (id, Productid, gioHangid) => {
     try {
          const detail = await detailModel.findByIdAndUpdate(id, { Productid, gioHangid });
          return detail
     }
     catch (error) {
          throw new Error(error)
     }
}
const getDetailById = async (id) => {
     try {
          const detail = await detailModel.findById(id).populate('Productid');
          return detail
     }
     catch (error) {
          throw new Error(error)
     }
}
module.exports = {
     getDetail,
     addDetail,
     DeleteDetail,
     UpdateDetail,
     getDetailById
}