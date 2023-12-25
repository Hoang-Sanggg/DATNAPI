const productModel = require('../models/productModels');

const getProduct = async () => {
    const product = await productModel.find();
    return product
}

module.exports = {
    getProduct
}