var connection = require("../config/connection.js");

var orm = {
    //display all the burgers in the database
    showBurgers: function(tableInput, cb) {
        var showB = 'SELECT * FROM ' + tableInput + ';';
        connection.query(showB, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // add a burger to database
    addBurger: function(tableInput, nameInput) {
        var addB = 'INSERT INTO ' + tableInput + ' (burger_name, devoured) VALUES (?, ?)';
        connection.query(addB, [nameInput, 0], function(err, result) {
          if (err) throw err;
        });
    }
    //change devoured status from false to true
};
    
module.exports = orm;