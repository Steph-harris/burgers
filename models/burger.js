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
  updateOneBurger: function(inputId){
    orm.eatOne('burgers', inputId);
  },
  //moves burger from eaten to devoured
  removeOneBurger: function(inputId) {
    orm.eatOne('burgers', inputId);
  }
};
    
module.exports = burgers;