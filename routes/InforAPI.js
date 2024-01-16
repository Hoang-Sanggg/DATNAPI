const express = require('express')
const router = express.Router();
const ControllerInfor = require('../controllers/Inforcontroller');

router.get('/', ControllerInfor.getInfor);



module.exports = router; 


