var db = require("../models");

module.exports = function (app) {
  // Get all examples
  // app.get("/api/examples", function (req, res) {
  //   db.Example.findAll({}).then(function (dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // // Create a new example
  // app.post("/api/examples", function (req, res) {
  //   db.Example.create(req.body).then(function (dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  app.post("/api/users", function (req, res) {
    db.Users.create(req.body).then(function (dbUsers) {
      res.json(dbUsers);
      console.log(dbUsers);
    })
  })

  // GET route for getting all of the standardPlayers
  app.get("/api/standardPlayers", function (req, res) {

    console.log('get');
    // findAll returns all entries for a table when used with no options
    db.StandardPlayers.findAll({}).then(function (dbstandardPlayers) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbstandardPlayers);
    });
  });

  // PUT route for updating posts
  // app.put("/api/posts", function(req, res) {
  //   db.Post.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });
  // Put route for updating the UserId in the standardPlayers
  app.put("/api/standardPlayers", function(req, res, next) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update

    console.log('put');

    db.StandardPlayers.update(
      req.body,
      { where: { id: req.body.id } }
    ).then(function(dbStandardPlayers) {
      res.json(dbStandardPlayers);
    }).catch(next)
  });

  // Delete an example by id
  // app.delete("/api/examples/:id", function (req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
