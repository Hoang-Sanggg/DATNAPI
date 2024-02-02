const express = require('express')
const router = express.Router();
const savedController = require('../controllers/savedController')


router.get('/get-all-saved', savedController.getAllSaved);

router.post('/add', savedController.createSaved);

module.exports = router
