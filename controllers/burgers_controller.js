//import burgers
var express = require("express");
var router = express.Router();
var burgers = require('../models/burger.js');

//get route -> index
router.get('/', function(req,res) {
  burgers.findAllBurgers(function(burgers_data){
    res.render('', {burgers_data});
  });
});

//post route -> back to /
router.post('/create', function(req, res) {
  burgers.addOneBurger(req.body.burger_name, function(result){
    console.log(result);
    res.redirect('/');
  });
});

//put route -> back to /
router.put('/update', function(req,res){
  burgers.updateOneBurger(req.body.burger_id, function(result){
    console.log(result);
    res.redirect('/');
  });
});

//delete route -> back to /
router.delete('/delete', function(req,res){
  burgers.removeOneBurger(req.body.burger_id, function(result){
    console.log(result);
    res.redirect('/');
  });
});

module.exports = router;