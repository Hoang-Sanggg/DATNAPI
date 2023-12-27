const producdetailtService = require('../services/ProductDetailService')

const getProductdetail = async (req, res, next) => {
    try {
        const productdetail = await producdetailtService.getProductDetail();
        if (productdetail) {
            return res.status(200).json({ result: true, message: 'getproductdetail Succesful', data: productdetail })
        }
        return res.status(400).json({ result: false, message: 'getproductdetail null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getproductdetail' })
    }
}

//add
const addProductDetail = async (req, res) => {
    try {
        const producdetailData = req.body;
        const savedProductDetail = await producdetailtService.addProducdetail(producdetailData);
        res.status(200).json({ result: true, message: 'Save ProductDetail successfully', data: savedProductDetail });
    } catch (error) {
        console.error(error);
        res.status(500).json({ result: false, message: 'Error savedProductDetail ProductDetail' });
    }
};

//delete
const deleteProductDetail = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteProductDetail = await producdetailtService.deleteProductDetail(id);
        if (deleteProductDetail) {
            return res.status(200).json({ result: true, message: 'Delete ProductDetail Successful' });
        }
    } catch (error) {
        console.error('Error deleting Type:', error.message);
        return res.status(500).json({ result: false, message: 'Error deleting ProductDetail' });
    }
};

//edit
const updateProductDetail = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { row } = req.body;
        const updateProductDetails = await producdetailtService.updateProductDetail(id,row);
        if (updateProductDetails) {
            return res.status(200).json({ result: true, message: 'Update Ads ProductDetail', data: updateProductDetails });
        }
    } catch (error) {
        console.error('Error updating ProductDetail:', error.message);
        return res.status(500).json({ result: false, message: 'Error updating ProductDetail' });
    }
};


module.exports = {
    getProductdetail,addProductDetail,deleteProductDetail,updateProductDetail
}