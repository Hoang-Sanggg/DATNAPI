const UserModel = require('../models/userModel');

//lấy user
const getAllUsers = async () => {
    try {
        const users = await UserModel.find();
        return users;
    } catch (error) {
        console.error('Error in getAllUsers:', error);
        throw error;
    }
};

//thêm user
const addUser = async (userData) => {
    try {
        const newUser = await UserModel.create(userData);
        return newUser;
    } catch (error) {
        console.error('Error in addUser:', error);
        throw error;
    }
};

// sửa user
const updateUser = async (userId, updatedUserData) => {
    try {
        const updatedUser = await UserModel.findOneAndUpdate(
            { userId: userId },
            { $set: updatedUserData },
            { new: true }
        );
        return updatedUser;
    } catch (error) {
        console.error('Error in updateUser:', error);
        throw error;
    }
};

// xóa user
const deleteUser = async (userId) => {
    try {
        const deletedUser = await UserModel.findOneAndRemove({ userId: userId });

        return deletedUser;
    } catch (error) {
        console.error('Error in deleteUser:', error);
        throw error;
    }
};



module.exports = {
    getAllUsers,addUser,updateUser,deleteUser
};
