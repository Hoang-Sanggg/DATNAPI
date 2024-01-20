const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')
const cartController = require('../controllers/cartController')
const historyController = require('../controllers/historyController')
const VipController = require('../controllers/VipController')
const TransactionHistory = require('../controllers/TransactionHistoryController')

// User routes
router.get('/users', userController.getAllUsers);
router.post('/login-user', userController.loginUser);
router.post('/register-user', userController.registerUser);
router.post('/forgotPassword-user', userController.forgotPassword);
router.post('/resetPassword-user', userController.resetPassword);
router.post('/add-user', userController.addUser);
router.post('/update-user', userController.updateUser);
router.delete('/delete-user', userController.deleteUser);

// Cart routes
router.get('/carts', cartController.getAllCarts);
router.post('/add-cart', cartController.addCart);   
router.post('/update-cart', cartController.updateCart);
router.delete('/delete-cart', cartController.deleteCart);

// History routes
router.get('/historys', historyController.getAllHistory);
router.get('/user/history', historyController.getHistoryByUserID);
router.post('/add-history', historyController.addHistory);
router.post('/update-history', historyController.updateHistory);
router.delete('/delete-history', historyController.deleteHistory);

// TransactionHistory routes
router.get('/transactions', TransactionHistory.getAllTransactions);
router.post('/add-transactions', TransactionHistory.createTransaction);
router.post('/update-transactions/:id', TransactionHistory.updateTransaction);
router.delete('/delete-transactions', TransactionHistory.deleteTransaction);

// VipController routes
router.get('/vips', VipController.getAllVips);
router.post('/add-vips', VipController.createVip);
router.post('/update-vips/:id', VipController.updateVip);
router.delete('/delete-vips/:id', VipController.deleteVip);


module.exports = router