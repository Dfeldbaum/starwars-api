var mongoose = require('mongoose');

// 1 declare a schema
// blueprint for objects
var CharacterSchema = new mongoose.Schema({
  name: String,
  planet: String,
  forceUser: {type: Boolean, "default": false}
});

// var char = {
//   name: 'luke skywalker',
//   planet: 'tatooine',
//   forceUser: true
// }

// 2 export our model
// mongoose.model('string name of model', schema);
module.exports = mongoose.model('Character', CharacterSchema);
// module.exports = function() {
//   return "hey friends";
// }
// var hey = require('../hey');
// hey()
// // "hey friends"
