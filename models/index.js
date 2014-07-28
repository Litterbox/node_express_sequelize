var Sequelize = require('sequelize')

var sequelize = new Sequelize("social_app",null,null,
  {dialect: "postgres", port: 5432});

var People = sequelize.define("people", {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING
});

module.exports = {
sequelize: sequelize,
Sequelize: Sequelize,
Person: People
}
