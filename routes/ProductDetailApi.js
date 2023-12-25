const express = require('express')
const router = express.Router();
const productdetailController = require('../controllers/ProductDeltailController')

//test
router.get('/', productdetailController.getProductdetail);
// add Ads
router.post('/add', productdetailController.addProductDetail);
// delete
router.delete('/delete/:id', productdetailController.deleteProductDetail);
//edit
router.post('/edit/:id', productdetailController.updateProductDetail);

module.exports = router