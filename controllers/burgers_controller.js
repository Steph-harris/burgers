//import burgervar express = require('express');
var express = require("express");
var router = express.Router();
var burgers = require('../models/burger.js');


//get route -> index
router.get('/index', function(req,res) {
  burgers.findAllMembers(function(burgers_data){
    res.render('index', {burgers_data});
  });
});

//post route -> back to index
router.post('/create', function(req, res) {
  burgers.addOneMemeber(req.body.member_name, function(result){
    console.log(result);
    res.redirect('/index');
  });
});

//put route -> back to index
router.put('/update', function(req,res){
  burgers.updateOneMember(req.body.member_id, function(result){
    console.log(result);
    res.redirect('/index');
  });
});

//delete route -> back to index
router.delete('/delete', function(req,res){
  burgers.removeOneMember(req.body.member_id, function(result){
    console.log(result);
    res.redirect('/index');
  });
});

module.exports = router;