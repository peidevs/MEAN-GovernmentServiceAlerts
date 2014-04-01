/**
* This is a utility class for MongoDB to ensure the database is running.
* Ensure connections available for mongdb and express server 
* We are just attaching here. No logon required...
*
* TODO This code still has a dependency on Mongo, someone please create another layer
* which hides the DB dependency. Factory?
* 
*/

var MongoClient = require('mongodb')
  , config = require('../config')();


exports.isDbRunning = function(callback, errorback) {
	var url = 'mongodb://' + config.mongo.host + ':' + config.mongo.port + '/user';
	MongoClient.connect(url, function(err, db) {
		if(err) {
		console.log('Sorry, there is no mongo db server running.');
		console.log(err);

		errorback();
		} else {
		console.log('Successfully connected to mongodb://' 
			+ config.mongo.host + ':' + config.mongo.port );

		callback();
		}
	});
}
