const postServices = require('../services/PostnewsServices')

const getProduct = async (req, res, next) => {
    try {
        const product = await postServices.getProduct();
        if (product) {
            return res.status(200).json({ result: true, message: 'getProduct Succesful', data: product })
        }
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getProduct' })
    }
}
// get Posstnews by Userid
const getPostByUserId = async (req, res, next) => {
    try {
        const { userid } = req.params;
        const postByUserId = await postServices.getPostByidUser(userid);
        // if (postByUserId != userid) {
        //     return res.status(201).json({ result: false, message: 'fail Userid'});
        // }
        if (postByUserId) {
            return res.status(200).json({ result: true, message: 'getPostByUserId Successful', data: postByUserId });
        }
        return res.status(400).json({ result: false, message: 'getPostByUserId null' });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getPostByUserId' });
    }
};
// get Posstnews by Userid
const getPostByCategoryid = async (req, res, next) => {
    try {
        const { idCategory } = req.params;
        const postByCateId = await postServices.getPostByidCategory(idCategory);
        // if (postByUserId != userid) {
        //     return res.status(201).json({ result: false, message: 'fail Userid'});
        // }
        if (postByCateId) {
            return res.status(200).json({ result: true, message: 'getPostByCateId Successful', data: postByCateId });
        }
        return res.status(400).json({ result: false, message: 'getPostByCateId null' });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getPostByCateId' });
    }
};
const addProduct = async (req, res) => {
    try {
        const productData = req.body;
        console.log('check data',productData);
        const savedProduct = await postServices.addProduct(productData);
        res.status(200).json({ result: true, message: 'Product added successfully', data: savedProduct });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ result: false, message: 'Error adding product' });
    }
};

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, status, detail, location, price, created_AT, files, role, activable, properties } = req.body;
        const updatedProduct = await postServices.updateProduct(id, title, status, detail, location, price, created_AT, files, role, activable, properties);
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
        const deletedProduct = await postServices.deleteProduct(id);

        if (deletedProduct) {
            return res.status(200).json({ result: true, message: 'Delete Product Successful' });
        }
        return res.status(400).json({ result: false, message: 'getMessage null' })
    } catch (error) {
        console.error('Error deleting product:', error.message);
        return res.status(500).json({ result: false, message: 'Error deleting product' });
    }
};
// tiềm kiếm theo title
const searchProductByTitle = async (req, res, next) => {
    try {
        const title = req.params.title;
        const products = await postServices.searchProductByTitle(title);

        if (products.length > 0) {
            return res.status(200).json({ result: true, message: 'Search successful', data: products });
        } else {
            return res.status(400).json({ result: false, message: 'No products found with the given title' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ result: false, message: 'Internal Server Error' });
    }
};

const postNews = async (req, res) => {
    try {
        // Assuming 'files' is the name attribute in your form for the file input
        const filePaths = req.files.map(file => file.path);
        if (filePaths.length == 0) {
            return res.status(203).json({ result: true, message: 'image is not undefind' });
        }
        if (filePaths.length > 0) {
            return res.status(200).json({ result: true, message: 'upload image successful', files: filePaths });
        }
        return res.status(202).json({ result: false, message: 'upload images fail' });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const uploadImagesbyID =  async (req, res) => {
      try {
        const { id } = req.params;
        const filePaths = req.files.map(file => file.path);
  
        const updatedProduct = await postServices.uploadImagesbyID(id, filePaths);
  
        if (updatedProduct < 0) {
            return res.status(203).json({ result: true, message: 'image is not undefind' });
        }
        if (updatedProduct) {
            return res.status(200).json({ result: true, message: 'upload image successful', files: updatedProduct });
        }
        return res.status(202).json({ result: false, message: 'upload images fail' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }


module.exports = {
    getProduct, addProduct, updateProduct, deleteProduct, searchProductByTitle, postNews,uploadImagesbyID,getPostByUserId,getPostByCategoryid
}