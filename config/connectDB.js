const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize("sql12665012", "sql12665012", "ZXwxAmgrTv", {
    host: "sql12.freesqldatabase.com",
    dialect: "mysql"
});


const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connection