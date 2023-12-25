const express = require('express')
const router = express.Router();
const productController = require('../controllers/ProductController')

//test
router.get('/', productController.getProduct);
// router.post('/add-product', testController.addTest);
// add product
router.post('/add', productController.addProduct);
//edit
router.post('/edit/:id', productController.updateProduct);
// delete
router.delete('/delete/:id', productController.deleteProduct);


module.exports = router