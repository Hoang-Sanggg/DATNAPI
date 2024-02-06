const express = require('express')
const router = express.Router();
const savedController = require('../controllers/savedController')


router.get('/get-all-saved', savedController.getAllSaved);

router.post('/save-or-notSave', savedController.saveOrNotSave);

module.exports = router
