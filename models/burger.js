var orm = require("../config/orm.js");

//burger specific sql commands
var burgers = {
  findAllBurgers: function(cb) {
    orm.showBurgers('burgers', function(res){
      cb(res)
    });
  },
  addOneBurger: function(nameInput, devoured) {
    orm.addBurger('burgers', nameInput, 0);
  },
  updateOneBurger: function(inputId, cb){
    orm.updateOne('burgers', 0, inputId, cb);
  },
  removeOneBurger: function(inputId, cb) {
    orm.deleteOne('burgers', 1, inputId, cb);
  }
};
    
module.exports = burgers;