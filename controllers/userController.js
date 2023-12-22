const userService = require('../services/userService');

const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(200).json({ result: true, message: 'GetAll Users Successful', users: users });
    } catch (error) {
        console.error('Error in getAllUsers:', error);
        return res.status(500).json({ result: false, message: 'Error in getAllUsers' });
    }
};

const addUser = async (req, res, next) => {
    try {
        const userData = req.body;
        const newUser = await userService.addUser(userData);
        return res.status(200).json({ result: true, message: 'Add User Successful', user: newUser });
    } catch (error) {
        console.error('Error in addUser:', error);
        return res.status(500).json({ result: false, message: 'Error in addUser' });
    }
};

const updateUser = async (req, res, next) => {
    try {
        const id = req.body.id;
        const updatedUserData = req.body;
        const updatedUser = await userService.updateUser(id, updatedUserData);
        return res.status(200).json({ result: true, message: 'Update User Successful', user: updatedUser });
    } catch (error) {
        console.error('Error in updateUser:', error);
        return res.status(500).json({ result: false, message: 'Error in updateUser' });
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const id = req.query.id;
        const deletedUser = await userService.deleteUser(id);
        return res.status(200).json({ result: true, message: 'Delete User Successful', user: deletedUser });
    } catch (error) {
        console.error('Error in deleteUser:', error);
        return res.status(500).json({ result: false, message: 'Error in deleteUser' });
    }
};

module.exports = {
    getAllUsers,addUser,updateUser,deleteUser
};
