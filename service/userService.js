const connection = require('../config/database')
const User = {};

User.getAllUsers = async () => {
    const [results, fields] = await connection.execute('SELECT * FROM Users');
    return results;
};
  
User.getById = async(id)=>{
    const [results, fields] = await connection.execute('SELECT * FROM Users WHERE id = ?',[id]);
    return results;
}

User.postUser = async (email, name, city)=>{
    const [results,fields] = await connection.execute('INSERT INTO Users (email, name, city) VALUES (?,?,?)',[email, name, city]);
    return results;
};

User.updateUser = async (id,email, name, city) =>{
    const [results,fields] = await connection.execute('UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?',[email, name, city,id]);
    return results;
}

User.deleteById = async (id) =>{
    const [results,fields] = await connection.execute('DELETE FROM Users  WHERE id = ?',[id]);
    return results;
}

module.exports = User;