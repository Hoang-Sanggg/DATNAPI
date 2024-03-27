const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')
const cartController = require('../controllers/cartController')
const historyController = require('../controllers/historyController')
const VipController = require('../controllers/VipController')
const TransactionHistory = require('../controllers/TransactionController')
const vipTypesController = require('../controllers/VipTypeController')

// User routes
router.get('/users', userController.getAllUsers);
router.get('/get-user-byId/:id', userController.getUserById);
router.post('/login-user', userController.loginUser);
router.post('/register-user', userController.registerUser);
router.post('/forgotPassword-user', userController.forgotPassword);
router.post('/resetPassword-user', userController.resetPassword);
router.post('/add-user', userController.addUser);
router.post('/update-user', userController.updateUser);
router.delete('/delete-user', userController.deleteUser);
router.post('/lock-unlock/user', userController.lockUser);
router.post('/user/vip/:userId/:balance', userController.vipBalance);

// Cart routes
// router.get('/carts', cartController.getAllCarts);
// router.post('/add-cart', cartController.addCart);
// router.post('/update-cart', cartController.updateCart);
// router.delete('/delete-cart', cartController.deleteCart);

// History routes
// router.get('/historys', historyController.getAllHistory);
// router.get('/user/history', historyController.getHistoryByUserID);
// router.post('/add-history', historyController.addHistory);
// router.post('/update-history', historyController.updateHistory);
// router.delete('/delete-history', historyController.deleteHistory);

// Transaction routes
router.get('/transactions', TransactionHistory.getAllTransactionHistories);
router.post('/add-transactions', TransactionHistory.createTransactionHistory);
router.post('/update-transactions/:id', TransactionHistory.updateTransactionHistory);
router.delete('/delete-transactions', TransactionHistory.deleteTransactionHistory);
router.post('/transaction/buy_vip_posts', TransactionHistory.buyVipPosts)
router.get('/transaction/get_by_id/:id', TransactionHistory.getByIdTransaction)
router.get('/transaction/get_vip_posts/:userId', TransactionHistory.getVipPostsTransactions)
router.get('/transaction/get_recharge/:userId', TransactionHistory.getRechargeTransaction)

// VipController routes
router.get('/posts-vips', VipController.getAllVips);
router.post('/add-vips', VipController.createVip);
router.post('/update-vips/:id', VipController.updateVip);
router.delete('/delete-vips/:id', VipController.deleteVip);


//vipTypeController routers
router.get('/viptypes', vipTypesController.getAllVipTypes)
router.post('/viptypes/add', vipTypesController.createVipType)


module.exports = router