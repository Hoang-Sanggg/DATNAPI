const express = require('express')
const router = express.Router();
const upload = require('../middleware/upload');

router.post('/', upload.single('image'), (req, res) => {
    // Lấy đường dẫn của file đã upload
    const imagePath = req.file.path;
    res.json({ imagePath });
  });

  module.exports = router