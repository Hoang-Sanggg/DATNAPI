const express = require('express')
const router = express.Router();
const testController = require('../controllers/testController')
const userController = require('../controllers/userController')
const cartController = require('../controllers/cartController')
const historyController = require('../controllers/historyController')

//test
router.get('/test', testController.getAllTest);
router.post('/add-test', testController.addTest);

// User routes
router.get('/user', userController.getAllUsers);
router.post('/add-user', userController.addUser);

// Cart routes
router.get('/cart', cartController.getAllCarts);
router.post('/add-cart', cartController.addCart);
router.put('/update-cart', cartController.updateCart);
router.delete('/delete-cart', cartController.deleteCart);

// History routes
router.get('/history', historyController.getAllHistory);
router.post('/add-history', historyController.addHistory);
router.put('/update-history', historyController.updateHistory);
router.delete('/delete-history', historyController.deleteHistory);

module.exports = router