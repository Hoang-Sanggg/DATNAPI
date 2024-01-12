const express = require('express')
const router = express.Router();
const categorydetailController = require('../controllers/CategoryDetailController')

//test
router.get('/', categorydetailController.getCategorydetail);
//byid
router.get('/:idCategory', categorydetailController.getCategorydetailbyid);
// add Ads
router.post('/add', categorydetailController.addCategoryDetail);
// // delete
router.delete('/delete/:id', categorydetailController.deleteCategoryDetail);
//edit
router.post('/edit/:id', categorydetailController.updateCategoryDetail);

module.exports = router