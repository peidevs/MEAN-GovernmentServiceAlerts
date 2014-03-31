/*  Launch as:
   $ node app (local || cloud9 || remoteDB)
*
* Sets up all the routes that the restful service will expose
*/

var express = require('express')
  , routes = require('./routes')
  , config = require('./config')()
  , DbUtility = require('./util/DbUtility');

var setupProfileRoutes = function() {
	app.get('/profile/new', routes.profileNew);
	app.get('/profile', routes.displayAllProfiles);
	app.get('/profile/:id', routes.displayProfile);
	app.get('/profile/:id/edit', routes.profileEdit);
	app.post('/profile/:id/edit', routes.profileUpdate);
};

var setupServiceRoutes = function(){
	app.get('/service/garbage', routes.serviceGarbage);
	app.get('/service/garbage/:id', routes.serviceGarbageByDistrict);
	app.get('/service/events', routes.serviceEvents);
	app.get('/service/streets', routes.serviceStreetClosures);
};

var startServer = function() {
	DbUtility.isDbRunning( function() {
		app.listen( config.port, function() {
			console.log('Express server listening on port ' + config.port);
		});
	});
};

var app = express();

setupProfileRoutes();
setupServiceRoutes();

startServer();



