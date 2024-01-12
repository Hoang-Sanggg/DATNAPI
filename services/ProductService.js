const productModel = require('../models/productModels');

const getProduct = async () => {
    const product = await productModel.find();
    return product
}
//add
const addProduct = async (productData) => {
    try {
        const newProduct = new productModel(productData);
        const savedProduct = await newProduct.save();
        return savedProduct;
    } catch (error) {
        return false;
    }
};
// edit
const updateProduct = async (id, nameProduct, title, status, detail, location, price, created_AT, file, role) => {
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(
            id,
            { nameProduct, title, status, detail, location, price, created_AT, file, role },{ new: true }
        );
        return updatedProduct;
    } catch (error) {
        return false;
    }
};

  const deleteProduct = async (id) => {
    try {
        const deletedProduct = await productModel.findByIdAndDelete(id);
        return deletedProduct;
    } catch (error) {
        return false;
    }
};

  
module.exports = {
    getProduct, addProduct, updateProduct,deleteProduct
}