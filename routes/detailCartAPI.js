const express = require('express')
const router = express.Router();
const detailCart = require('../services/detailCartServices');

router.get('/', detailCart.getDetailCart);
router.post('/addDetailCart', detailCart.addDetailCart);


module.exports = router