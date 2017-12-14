// ROUTES FOR OUR API
// =============================================================================
var express = require("express"); // call express
var NouvProj = require("../app/models/nouvProj");
var mongoose = require("mongoose");

var router = express.Router(); // get an instance of the express Router

router.use(function(req, res, next) {
  // do logging
  console.log("Something is happening.");
  next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router
  .route("/projets")

  // create a nouvProj (accessed at POST http://localhost:8080/api/nouvProjs)
  .post(function(req, res) {
    var nouvProj = new NouvProj();
    // create a new instance of the nouvProj model

    nouvProj.nomProj = req.body.nomProj;
    nouvProj.leadProj = req.body.leadProj;
    nouvProj.descProj = req.body.descProj;
    nouvProj.BesProj = req.body.BesProj;
    nouvProj.pers = [{ name: req.body.name, poste: req.body.poste }];
    nouvProj.backlog = [
      {
        fonctionnalite: [req.body.fonctionnalite],
        userStory: req.body.userStory
      }
    ];
    console.log(nouvProj);
    /*
    nouvProj.nomProj = "req.body.nomProj";
    nouvProj.leadProj = "req.body.leadProj";
    nouvProj.descProj = "req.body.descProj";
    nouvProj.BesProj = 123;
    nouvProj.pers = [{"name":"req.body.name","poste":"req.body.poste"},{"name":"req.body.name2","poste":"req.body.poste2"}];
    nouvProj.backlog = [{"fonctionnalite":"req.body.fonctionnalit","userStory":"req.body.userStory"}];
    // set the nouvProjs name (comes from the request)
*/
    // save the nouvProj and check for errors
    nouvProj.save(function(err) {
      if (err) {
        res.send(err);
        console.log("err");
      }
      res.json({
        message: "nouvProj created!"
      });
    });
  })

  .get(function(req, res) {
    NouvProj.find(function(err, nouvProjs) {
      if (err) res.send(err);

      res.json(nouvProjs);
      console.log(nouvProjs);
    });
  });
router
  .route("/nouvProjs/:nouvProj_id")

  // get the nouvProj with that id (accessed at GET http://localhost:8080/api/nouvProjs/:nouvProj_id)
  .get(function(req, res) {
    NouvProj.findById(req.params.nouvProj_id, function(err, nouvProj) {
      if (err) res.send(err);
      res.json(nouvProj);
    });
  })
  .put(function(req, res) {
    NouvProj.findById(req.params.nouvProj_id, function(err, nouvProj) {
      if (err) res.send(err);
      nouvProj.nomProj = req.body.nomProj;
      nouvProj.leadProj = req.body.leadProj;
      nouvProj.descProj = req.body.descProj;
      nouvProj.BesProj = req.body.BesProj;
      nouvProj.pers = [{ name: req.body.name, poste: req.body.poste }];
      nouvProj.backlog = [
        {
          fonctionnalite: req.body.fonctionnalite,
          userStory: req.body.userStory
        }
      ];

      nouvProj.save(function(err) {
        if (err) res.send(err);

        res.json({
          message: "nouvProj updated!"
        });
      });
    });
  })

  .delete(function(req, res) {
    NouvProj.remove(
      {
        _id: req.params.nouvProj_id
      },
      function(err, nouvProj) {
        if (err) res.send(err);

        res.json({
          message: "Successfully deleted"
        });
      }
    );
  });

router.get("/", function(req, res) {
  res.json({
    message: "hooray! welcome to our api!"
  });
});

// more routes for our API will happen here

module.exports = router;
