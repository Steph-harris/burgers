// require('dotenv').config();

// var Sequelize = require('sequelize');
// var connection = new Sequelize(process.env.JAWSDB_URL);

var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  database: "burgers_db"
});

connection.connect(function(err){
  if (err) {
    throw err;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
