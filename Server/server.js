// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require("express"); // call express
var app = express();
var bodyParser = require("body-parser");
var io = require("socket.io").listen(server);
// define our app using express
var routerProj = require("./routes/ajoutProj");

var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017", {
  useMongoClient: true

  /* other options */
}); // connect to our database

mongoose.connection.on("error", function(error) {
  console.log("error", error);
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT ,DELETE");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/proj", routerProj);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "../src/index.html");
});
// Chargement de socket.io
var io = require("socket.io").listen(server);

// Quand un client se connecte, on le note dans la console
io.sockets.on("connection", function(socket) {
  console.log("Un client est connecté !");
});
var port = process.env.PORT || 8081; // set our port

// START THE SERVER
// =============================================================================
var server = app.listen(port);
console.log("Magic happens on port " + port);
console.log(__dirname);
