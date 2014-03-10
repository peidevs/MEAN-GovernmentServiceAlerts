/*  Launch as:
   $ node app (local || cloud9 || remoteDB)
*/

var express = require('express')
  , config = require('./config')()
  , http = require('http')
  , MongoClient = require('mongodb').MongoClient
  , routes = require('./routes')
  , path = require('path');
  
// See contactprofiles.js for db connection information
var ContactProfile = require('./contactprofile').ContactProfile;

// Instantiate express and assign our app variable
var app = express();


/* Serve static files */
app.use(require('stylus').middleware(path.join(__dirname, 'public/dist')));
app.use(express.static(path.join(__dirname, 'public/dist')));

/* Routes */


app.get('/profile/new', routes.profileNew);
app.get('/profile', routes.displayAllProfiles);
app.get('/profile/:id', routes.displayProfile);
app.get('/profile/:id/edit', routes.profileEdit);
app.post('/profile/:id/edit', routes.profileUpdate);


/* Ensure connections available for mongdb and express server */
/* We are just attaching here. No logon required... */
//MongoClient.connect('mongodb://' + config.mongo.username + ':' + config.mongo.password + '@' +  config.mongo.host + ':' + config.mongo.port + config.mongo.db, function(err, db) {
MongoClient.connect('mongodb://' + config.mongo.host + ':' + config.mongo.port + '/user', function(err, db) {

  if(err) {
    console.log('Sorry, there is no mongo db server running.');
	console.log(err);
  } else {
    var attachDB = function(req, res, next) {
      req.db = db;
      next();
    };

    http.createServer(app).listen(config.port, function() {
        console.log(
          'Successfully connected to mongodb://' + config.mongo.host + ':' + config.mongo.port,
          '\nExpress server listening on port ' + config.port
        );
    });
  }
});




