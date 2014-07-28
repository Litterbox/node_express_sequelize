var db = require('./index.js');
var sequelize = db.sequelize;
var Sequelize = db.Sequelize

var People = sequelize.define("people", {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING
});

// testing output
People.findAll().success(function(person) {
      console.log(person.length);
})


module.exports = People;