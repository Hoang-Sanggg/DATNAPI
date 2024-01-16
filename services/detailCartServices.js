const detailCartModel = require('../models/detailCart');

const getDetailCart = async (res) => {
    try {
        const detailCart = await detailCartModel.find();
        res.json(detailCart)
    }
    catch (error) {
        return false
    }
}
const addDetailCart = async (req, res, next) => {
    try {
        var data = await detailCartModel.create(req.body);
        console.log('>>>>>>>>>>>>>>>>>> 22zzzzzzzzzzzzzzzzzzz addDetailCart', data);
        return res.status(200).json({ result: true, message: 'addDetailCart Succesful', detailCart: data })
    }
    catch (error) {
        return false
    }
}
const DeleteDetailCart = async (id) => {
    try {
        const detailCart = await detailCartModel.findByIdAndDelete(id);
        return detailCart
    }
    catch (error) {
        return false
    }
}
const UpdateDetailCart = async (id, Productid, gioHangid) => {
    try {
        const detailCart = await detailCartModel.findByIdAndUpdate(id, { Productid, gioHangid });
        return detailCart
    }
    catch (error) {
        return false
    }
}
module.exports = {
    getDetailCart,
    addDetailCart,
    DeleteDetailCart,
    UpdateDetailCart
}