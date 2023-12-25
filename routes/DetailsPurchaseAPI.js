const express = require('express')
const router = express.Router();
const DetailsPurchase = require('../controllers/DetailsPurchase');

router.get('/', DetailsPurchase.getDetailsPurchase);

module.exports = router