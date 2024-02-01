const postModel = require('../models/PostnewsModels');

const getProduct = async () => {
    const product = await postModel.find();
    return product
}
//add
const addProduct = async (productData) => {
    try {
        const newProduct = new postModel(productData);
        const savedProduct = await newProduct.save();
        return savedProduct;
    } catch (error) {
        return false;
    }
};
// edit
const updateProduct = async (id, title, status, detail, location, price, created_AT, files, role, activable, properties) => {
    try {
        const updatedProduct = await postModel.findByIdAndUpdate(
            id,
            { title, status, detail, location, price, created_AT, files, role, activable, properties }, { new: true }
        );
        return updatedProduct;
    } catch (error) {
        return false;
    }
};

const deleteProduct = async (id) => {
    try {
        const deletedProduct = await postModel.findByIdAndDelete(id);
        return deletedProduct;
    } catch (error) {
        return false;
    }
};

// tiềm kiếm theo title
const searchProductByTitle = async (title) => {
    try {
        const products = await postModel.find({ title: { $regex: new RegExp(title, 'i') } });
        return products;
    } catch (error) {
        console.error(error);
        return false;
    }
};

const postNews = async (title, status, detail, location, price, created_AT, role, activable, properties, userid, brandid, filePaths) => {
    try {
        const newProduct = new postModel({
            title,
            status,
            detail,
            location,
            price,
            created_AT,
            files: filePaths, // Save the file paths here
            role,
            activable,
            properties,
            userid,
            brandid
        });
        const savedProduct = await newProduct.save();
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

module.exports = {
    getProduct, addProduct, updateProduct, deleteProduct, searchProductByTitle, postNews
}