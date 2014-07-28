var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var db = require('./models');
// var Person = db.Person;
var app = express();

app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.get("/", function(req, res) {
  db.Person.findAll().success(function(person) {
       console.log(person.length);
        res.render("people/index", {people: person})
  })
})


app.get("/people", function(req, res){
  Person.all(function (err, allPeople) {
    res.render("people/index", {people: allPeople})
  });

});

app.get("/people/new", function(req, res){
  res.render("people/new")
});

app.get("/people/:id", function(req,res){
  res.render("people/show", {person: {} });
});

app.get("/people/:id/edit", function(req,res){
  res.render("people/edit", {person: {} });
});



app.post("/people", function(req, res){
  res.redirect("/people")
});

app.delete("/people/:id", function(req, res){
  res.redirect("/people");
});

app.put("/people/:id", function(req,res){
  res.redirect("/people");
})

// app.listen(3000, function(){
//   console.log("THE SERVER IS LISTENING ON localhost:3000");
// });


db
  .sequelize
  .sync()
  .complete(function(err) {
    if (err) {
      throw err[0]
    } else {
      app.listen(3000, function(){
        console.log('Express server listening on port 3000')
      })
    }
  })