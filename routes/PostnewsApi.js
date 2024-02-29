const express = require('express')
const router = express.Router();
const postController = require('../controllers/PostnewsController');
const postModel = require('../models/PostnewsModels');
const upload = require('../middleware/uploadPostNews');
const uploadCloudiary = require('../middleware/uploadPostNews');

//get
router.get('/', postController.getProduct);
// get by idUser
router.get('/user/:userid', postController.getPostByUserId);
// get by idCategory
router.get('/:idCategory', postController.getPostByCategoryid);
// router.post('/add-product', testController.addTest);
// add product
router.post('/add', postController.addProduct);
//edit
router.post('/edit/:id', postController.updateProduct);
//activable
router.post('/activable/:idPosts', postController.isActivable);
// delete
router.delete('/delete/:id', postController.deleteProduct);
// Tìm kiếm sản phẩm theo title
router.get('/search/:title', postController.searchProductByTitle);
// save path với id mới(tạo mới bảng)
router.post('/upload', uploadCloudiary.array('file', 5), postController.postNews);
// lưu path với id postnews(thêm ảnh vào bảng đã có)
router.post('/upload/:id', upload.array('image', 5), postController.uploadImagesbyID);




module.exports = router