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
controller.get('/:id', function(req, res, next) {
  charModel.findById(req.params.id, function(error, character) {
    if (error) return error;
    res.json(character);
  });
});

//create
controller.post('/', function(req, res, next) {
  charModel.create(req.body, function(error, character) {
    if (error) return error;
    res.json(character);
  });
});

//update by id
controller.put('/:id', function(req, res, next) {
  charModel.findByIdAndUpdate(req.params.id, req.body, function(error, character) {
    if (error) return error;
    res.json(character);
  })
});
controller.patch('/:id', function(req, res, next) {
  charModel.findByIdAndUpdate(req.params.id, req.body, function(error, character) {
    if (error) return error;
    res.json(character);
  })
});

//delete by id
controller.delete('/:id', function(req, res, next) {
  charModel.findByIdAndRemove(req.params.id, req.body, function(error, character) {
    if (error) return error;
    res.json({
      "Message": "User with the id of " + character.id + " has been removed"
    });
  });
});


module.exports = controller;
