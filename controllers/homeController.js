const Users = require('../service/userService')

const getAllUsers = async (req, res) => {
    const users = await Users.getAllUsers();
    return res.render('home', { listUsers: users });
}

const postUser = async (req, res) => {
    // const email = req.body.email;
    // const name = req.body.name;
    // const city = req.body.city;
    const { email, name, city } = req.body;
    if (email != '' && name != '' && city != '') {
        const user = await Users.postUser(email, name, city);
        console.log('check user:', user.affectedRows)
        // if (user.affectedRows == 1) {
        //     return res.render('createUser', { title: 'Tạo mới thành công' });
        // } else {
        //     return res.render('createUser', { title: 'Tạo mới thất bại' });
        // }
    }
    // return res.render('createUser', { title: 'Tạo mới thất bại' });

    return res.redirect('/');
}

const addUser = async (req, res) => {
    return res.render('createUser', { title: '' });
}

const getUserById = async (req, res) => {
    console.log('>>>>>>>>>>>.: ', req.params)
    const { userId } = req.params;
    if (userId != null) {
        const users = await Users.getById(userId);
        console.log('user : ', users);
        return res.render('updateUser', { user: users[0], title: '' });

    }
}

const updateUser = async (req, res) => {
    // const { userId } = req.params;
    const { userId, email, name, city } = req.body;
    console.log(userId, email, name, city);
    if (email != '' && name != '' && city != '' && userId != '') {
        const user = await Users.updateUser(userId, email, name, city);
        console.log('check user:', user.changedRows)
        if (user.changedRows == 1) {
            // return res.redirect('/edit/'+userId+'/1');
            // return res.render('updateUser', { user: {userId, email, name, city }, title: 'Cập nhật thành công' });
        }

    }
    return res.redirect('/');
}

const deleteById = async (req, res) => {
    const { userId } = req.params;
    if (userId != null) {
        const users = await Users.deleteById(userId);
    }
    return res.redirect('/');

}
module.exports = {
    getAllUsers, postUser, addUser, getUserById, updateUser, deleteById
}