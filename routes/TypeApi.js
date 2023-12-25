const express = require('express')
const router = express.Router();
const typeController = require('../controllers/TypeControllers');


// lấy danh sách 
router.get('/', async (req, res) => {
    await typeController.getType(res);
});

// add product
router.post('/add', typeController.addType);

//edit
router.post('/edit/:id', typeController.updateType);

// delete
router.delete('/delete/:id', typeController.deleteType);

module.exports = router