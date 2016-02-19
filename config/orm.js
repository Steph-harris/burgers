var connection = require("../config/connection.js");

var orm = {
  //display all the burgers in the database
  showBurgers: function(tableInput, cb) {
    var showB = 'SELECT * FROM ' + tableInput + ';';
    connection.query(showB, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // add a burger to database
  addBurger: function(tableInput, nameInput) {
    var addB = 'INSERT INTO ' + tableInput + ' (burger_name, devoured) VALUES (?, ?)';
    connection.query(addB, [nameInput, 0], function(err, result) {
      if (err) throw err;
    });
  },
  //change devoured status from true to false
  reEatOne: function(tableInput, idInput){
    var reEat = 'UPDATE ' + tableInput + ' SET devoured = 0 WHERE id=?';
    connection.query(reEat, [idInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  //change devoured status from false to true
  eatOne: function(tableInput, idInput){
    var eatIt = 'UPDATE ' + tableInput + ' SET devoured = 1 WHERE id=?';
    connection.query(eatIt, [idInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
}
    
module.exports = orm;