const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'diegoferesin',
  database: 'chat',
  insecureAuth: true
});

// const connection = mysql.createConnection({
//   host: 'db4free.net',
//   port: '3306',
//   user: 'administrador',
//   password: 'admin2019',
//   database: 'chateban',
//   insecureAuth: true
// });

module.exports = connection;
