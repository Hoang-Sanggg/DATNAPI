const express = require('express')
const router = express.Router();
const ChitietGiaoDich = require('../controllers/ChitietGiaoDich');

router.get('/', ChitietGiaoDich.getChitietGiaoDich);


module.exports = router

