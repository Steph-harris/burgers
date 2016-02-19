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
  //moves burger from devoured to uneaten  
  updateOneBurger: function(inputId){
    orm.reEatOne('burgers', inputId);
  },
  //moves burger from uneaten to devoured
  removeOneBurger: function(inputId) {
    orm.eatOne('burgers', inputId);
  }
};
    
module.exports = burgers;