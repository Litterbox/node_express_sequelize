var Person = require('./person');

var Models = {};

Models.Person = Person

// testing output
Models.Person.findAll().success(function(person) {
      console.log("models",person.length);
})

module.export = Models;
