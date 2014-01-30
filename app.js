/*  Launch as:
   $ node app (local || cloud9 || remoteDB)
*/

var express = require('express')
  , config = require('./config')()
  , http = require('http')
  , MongoClient = require('mongodb').MongoClient;

var app = express();

/* Ensure connections available for mongdb and express server */
/* We are just attaching here. No logon required... */
MongoClient.connect('mongodb://' + config.mongo.host + ':' + config.mongo.port + '/services', function(err, db) {
  if(err) {
    console.log('Sorry, there is no mongo db server running.');
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




