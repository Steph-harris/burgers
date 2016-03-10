var mysql = require("mysql");
console.log(process.env.JAWSDB_URL);
var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect();

module.exports = connection;

// function(err){
//   if (err) {
//     throw err;
//   }
//   console.log("connected to db ");
// }
