const express = require('express')
const router = express.Router();
const productController = require('../controllers/ProductController')

//test
router.get('/', productController.getProduct);
// router.post('/add-product', testController.addTest);


module.exports = router