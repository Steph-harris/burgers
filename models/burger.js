var orm = require("../config/orm.js");

//burger specific sql commands
var burgers = {
  findAllBurgers: function(cb) {
    orm.showBurgers('burgers', function(res){
      cb(res)
    });
  },
  addOneBurger: function(nameInput,cb) {
    orm.addBurger('burgers', nameInput, 1, cb);
  },
  updateOneBurger: function(inputId, cb){
    orm.updateOne('burgers', 1, inputId, cb);
  },
  removeOneBurger: function(inputId, cb) {
    orm.deleteOne('burgers', 1, inputId, cb);
  }
};
    
module.exports = burgers;