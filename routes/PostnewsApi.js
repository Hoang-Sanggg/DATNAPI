const express = require('express')
const router = express.Router();
const postController = require('../controllers/PostnewsController');
const postModel = require('../models/PostnewsModels');
const upload = require('../middleware/uploadPostNews');

//test
router.get('/', postController.getProduct);
// router.post('/add-product', testController.addTest);
// add product
router.post('/add', postController.addProduct);
//edit
router.post('/edit/:id', postController.updateProduct);
// delete
router.delete('/delete/:id', postController.deleteProduct);
// Tìm kiếm sản phẩm theo title
router.get('/search/:title', postController.searchProductByTitle);
// save path với id mới(tạo mới bảng)
router.post('/upload', upload.array('image', 5), postController.postNews);
// lưu path với id postnews(thêm ảnh vào bảng đã có)
router.post('/upload/:id', upload.array('image', 5), async (req, res) => {
    try {
        const { id } = req.params;


        const filePaths = req.files.map(file => file.path);
        const existingProduct = await postModel.findById(id);
        const updatedFiles = existingProduct.files.concat(filePaths);
        const updatedProduct = await postModel.findByIdAndUpdate(
            id,
            { files: updatedFiles },
            { new: true }
        );

        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




module.exports = router