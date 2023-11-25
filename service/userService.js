const db = require('../models/index')

const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const hashPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt)
    return hashPassword;
}

const getAllUsers = async () => {
    const users = await db.User.findAll();
    return users;
};

const getById = async (userId) => {
    try {
        const users = await db.User.findOne({ id: userId });
        return users.get({ plain: true });
    } catch (error) {
        console.log(">>>> check error", error);
    }
}

const createUser = async (email, name, password, phone, reputation) => {
    let hashPass = hashPassword(password);
    try {
        await db.User.create({
            email: email,
            name: name,
            password: hashPass,
            phone: phone,
            reputation: reputation

        })

    } catch (error) {
        console.log(">>>> check error", error);
    }
};

const updateUser = async (id, email, name, phone, reputation) => {

    try {
        await db.User.update({
            email: email,
            name: name,
            phone: phone,
            reputation: reputation
        }, { where: { id: id } });
        console.log(id, email, name, phone, reputation);
    } catch (error) {
        console.log(">>>> check error", error);
    }
}

const deleteById = async (userId) => {
    try {
        await db.User.destroy({ where: { id: userId } });
    } catch (error) {
        console.log(">>>>> check error :", error);
    }
}

module.exports = {
    getAllUsers, deleteById, updateUser, createUser, getById
};