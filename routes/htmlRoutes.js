var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
      res.render("index")
      });
    
  
  // Load line up page
  app.get('/lineup', function (req, res) {
    res.render("lineup");
  });

  // Load drafting page
  app.get('/drafting', function (req, res) {
    res.render("drafting");
  });

  // Load Locker Room page
  app.get('/locker', function (req, res) {
    res.render("locker");
  });


  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};