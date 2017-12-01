// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();
var bodyParser = require('body-parser');
        // define our app using express
var routerProj = require('./routes/ajoutProj');

var mongoose   = require('mongoose');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017', {

  useMongoClient: true,

  /* other options */
}); // connect to our database

mongoose.connection.on('error',function(error){
console.log('error', error);
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/proj', routerProj);


var port = process.env.PORT || 8080;        // set our port


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);