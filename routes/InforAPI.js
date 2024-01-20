const express = require('express')
const router = express.Router();
const ControllerInfor = require('../controllers/Inforcontroller');

router.get('/', ControllerInfor.getInfor);

router.post('/add', ControllerInfor.addInfor);

router.delete('/delete/:id', ControllerInfor.DeleteInfor);

router.put('/update/:id', ControllerInfor.UpdateInfor);



module.exports = router;


