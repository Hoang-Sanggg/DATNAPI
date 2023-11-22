const userService = require('../service/userService')

const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    console.log('check user:', users)
    return res.render('home', { listUsers: users, title: '' });

}

const createUser = async (req, res) => {
    const { email, name, password, phone, reputation } = req.body;
    if (email != '' && name != '' && reputation != '' && password != '' && phone != '') {
        const user = await userService.createUser(email, name, password, phone, reputation);
        console.log('check user:', user)
    }
    return res.redirect('/');
}

const addUser = async (req, res) => {
    return res.render('createUser', { title: '' });
}

const getUserById = async (req, res) => {
    console.log('>>>>>>>>>>>.: ', req.params)
    const { userId } = req.params;
    if (userId != null) {
        const users = await userService.getById(userId);
        console.log('user : ', users);
        return res.render('updateUser', { user: users, title: '' });

    }
}

const updateUser = async (req, res) => {
    const { userId, email, name, phone, reputation } = req.body;
    console.log(userId, email, name, phone, reputation);
    await userService.updateUser(userId, email, name, phone, reputation);
    return res.redirect('/');
}

const deleteById = async (req, res) => {
    const { userId } = req.params;
    if (userId != null) {
        const users = await userService.deleteById(userId);
    }
    return res.redirect('/');

}
module.exports = {
    getAllUsers, createUser, addUser, getUserById, updateUser, deleteById
}