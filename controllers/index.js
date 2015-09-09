var express = require('express');
var controller = express.Router();

/* GET home page. */
controller.get('/', function(req, res, next) {
  res.render('index', { title: 'Characters' });
});

/* GET angular page */
controller.get('/angular', function(req, res, next) {
  res.render('angular', { title: 'Angular Characters' });
});

module.exports = controller;
