require('dotenv').config();

var mysql = require("mysql");

var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect();

module.exports = connection;

// function(err){
//   if (err) {
//     throw err;
//   }
//   console.log("connected to db ");
// }
