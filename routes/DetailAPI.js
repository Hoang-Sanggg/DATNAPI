const express = require('express')
const router = express.Router();
const Detail = require('../controllers/DetailControllers')


router.get('/', Detail.getDetail);
router.post('/adddetail', Detail.addDetail);
router.post('/fild', Detail.getDetailById);

module.exports = router