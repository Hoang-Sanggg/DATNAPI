const producdetailtModel = require('../models/ProductDetailModels');

const getProductDetail = async () => {
    const productdetail = await producdetailtModel.find();
    return productdetail
}

//add
const addProducdetail = async (producdetailData) => {
    try {
        const newproducdetailData = new producdetailtModel(producdetailData);
        const savedProductDetail = await newproducdetailData.save();
        return savedProductDetail;
    } catch (error) {
        return false;
    }
};

//delete
const deleteProductDetail = async (id) => {
    try {
        const adToDelete = await producdetailtModel.findById(id);

        if (!adToDelete) {
            throw new Error('Không tìm thấy');
        }
        // kiểm tra khóa ngoại iproduct có thì không xóa >>
        if (adToDelete.idProduct && adToDelete.idTypee) {
            throw new Error('Không thể xóa khi có idProduct và idType');
        }
        const deleteProductDetail = await producdetailtModel.findByIdAndDelete(id);
        return deleteProductDetail;
    } catch (error) {
        return false;
    }
};

// edit
const updateProductDetail = async (id, row) => {
    try {
        const updateProductDetails = await producdetailtModel.findByIdAndUpdate(id, { row }, { new: true });
        return updateProductDetails;
    } catch (error) {
        return false;
    }
};


module.exports = {
    getProductDetail,addProducdetail,deleteProductDetail,updateProductDetail
}