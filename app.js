/*  Launch as:
   $ node app (local || cloud9 || remoteDB)
*
* Sets up all the routes that the restful service will expose
*/

var express = require('express')
  , profileRoutes = require('./Profile/routes')
  , servicesRoutes = require('./Services/routes')
  , config = require('./config')()
  , DbUtility = require('./util/DbUtility');


//This function and the next are a good candidate to move out of here.
var setupProfileRoutes = function() {
	app.get('/profile/new', profileRoutes.profileNew);
	app.get('/profile', profileRoutes.displayAllProfiles);
	app.get('/profile/:id', profileRoutes.displayProfile);
	app.get('/profile/:id/edit', profileRoutes.profileEdit);
	app.post('/profile/:id/edit', profileRoutes.profileUpdate);
};

var setupServiceRoutes = function(){
	app.get('/service/garbage', servicesRoutes.serviceGarbage);
	app.get('/service/garbage/:id', servicesRoutes.serviceGarbageByDistrict);
	app.get('/service/events', servicesRoutes.serviceEvents);
	app.get('/service/streets', servicesRoutes.serviceStreetClosures);
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



