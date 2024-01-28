const express = require('express')
const router = express.Router();
const { uploadImage } = require('../controllers/UploadImageController');
const  upload  = require('../middleware/upload');

// úp ảnh
router.post('/', upload.single('image'), uploadImage);


module.exports = router