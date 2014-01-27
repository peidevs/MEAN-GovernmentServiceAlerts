
/*  Launch as:
   $ node app local
   or
   $ node app cloud9  
*/

var express = require('express')
  , config = require('./config')()
  , http = require('http')
  , MongoClient = require('mongodb').MongoClient;

var app = express();

/* Ensure connections available for mongdb and express server */
MongoClient.connect('mongodb://' + config.mongo.host + ':' + config.mongo.port + '/MEAN-GovernmentServiceAlerts', function(err, db) {
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
