var express = require('express');
var controller = express.Router();

/* GET home page. */
controller.get('/', function(req, res, next) {
  res.render('index', { user: req.user, title: 'Characters' });
});

/* GET angular page */
controller.get('/angular', function(req, res, next) {
  console.log(req.user);
  if (!req.user) {
    res.render('403');
  }
  res.render('angular', { user: req.user, title: 'Angular Characters' });
});

module.exports = controller;
