require('dotenv').config();
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

connection.getConnection((err, conn) => {
  if (err) {
    console.error('Lỗi khi kết nối đến cơ sở dữ liệu:', err);
  } else {
    console.log('Kết nối thành công đến cơ sở dữ liệu!');
    conn.release();
  }
});
module.exports = connection;