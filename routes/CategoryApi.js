const express = require('express')
const router = express.Router();
const categoryController = require('../controllers/CategoryController');


// lấy danh sách 
router.get('/', async (req, res) => {
    await categoryController.getCategory(res);
});

// add Ads
router.post('/add', categoryController.addCategory);

// delete
router.delete('/delete/:id', categoryController.deleteCategory);

//edit
router.post('/edit/:id', categoryController.updateCategory);

module.exports = router