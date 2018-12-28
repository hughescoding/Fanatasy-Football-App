var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/users", function (req, res) {
    db.Users.create(req.body).then(function (dbUsers) {
      res.json(dbUsers);
      console.log(dbUsers);
    })
  })

  // GET route for getting all of the todos
  app.get("/api/standardPlayers", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.StandardPlayers.findAll({}).then(function (dbstandardPlayers) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbstandardPlayers);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};
