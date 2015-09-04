var express = require('express');
var controller = express.Router();

var charModel = require('../models/Character');
var bodyParser = require('body-parser');


// RESTful API!

//get all
controller.get('/', function(req, res, next) {

  charModel.find(function(error, characters) {
    if (error) return error;
    res.json(characters);
  });

});

//get by id

//create

//update by id

//delete by id


module.exports = controller;
