const express = require('express');
const router = express.Router();

const { getAllUsers, createUser, addUser, getUserById, updateUser, deleteById } = require('../controllers/homeController');

router.get('/', getAllUsers);
router.get('/add-user', addUser)
router.get('/edit/:userId', getUserById)
router.get('/delete/:userId', deleteById)

router.post('/create-user', createUser);
router.post('/update-user', updateUser);
module.exports = router;