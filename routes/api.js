const express = require('express')
const router = express.Router();
const testController = require('../controllers/testController')


//test
router.get('/test', testController.getAllTest);
router.post('/add-test', testController.addTest);




module.exports = router