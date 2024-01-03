const productService = require('../services/ProductService')

const getProduct = async (req, res, next) => {
    try {
        const product = await productService.getProduct();
        if (product) {
            return res.status(200).json({ result: true, message: 'getProduct Succesful', data: product })
        }
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getProduct' })
    }
}

const addProduct = async (req, res) => {
    try {
        const productData = req.body;
        const savedProduct = await productService.addProduct(productData);
        res.status(200).json({ result: true, message: 'Product added successfully', data: savedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ result: false, message: 'Error adding product' });
    }
};

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { nameProduct, title, status, detail, location, price, created_AT, file, role } = req.body;
        const updatedProduct = await productService.updateProduct(id, nameProduct, title, status, detail, location, price, created_AT, file, role);
        if (updatedProduct) {
            return res.status(200).json({ result: true, message: 'Update Product Successful', data: updatedProduct });
        }
        return res.status(400).json({ result: false, message: 'null' })
    } catch (error) {
        console.error('Error updating product:', error.message);
        return res.status(500).json({ result: false, message: 'Error updating product' });
    }
};
const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedProduct = await productService.deleteProduct(id);

        if (deletedProduct) {
            return res.status(200).json({ result: true, message: 'Delete Product Successful' });
        }
        return res.status(400).json({ result: false, message: 'getMessage null' })
    } catch (error) {
        console.error('Error deleting product:', error.message);
        return res.status(500).json({ result: false, message: 'Error deleting product' });
    }
};



module.exports = {
    getProduct, addProduct, updateProduct, deleteProduct
}