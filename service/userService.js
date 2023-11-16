const db = require('../models/index')

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

const postUser = async (email, name, password, phone, reputation) => {

    try {
        await db.User.create({
            email: email,
            name: name,
            password: password,
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
    getAllUsers, deleteById, updateUser, postUser, getById
};