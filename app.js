/*  Launch as:
   $ node app (local || cloud9 || remoteDB)
*
* Sets up all the routes that the restful service will expose
*/

var express = require('express')
  , routes = require('./routes')
  , path = require('path')
  , config = require('./config')()
  , DbUtility = require('./util/DbUtility');

// Instantiate express and assign our app variable
var app = express();

/* Serve static files */
app.use(require('stylus').middleware(path.join(__dirname, 'public/dist')));
app.use(express.static(path.join(__dirname, 'public/dist')));

/* Profile Routes */
app.get('/profile/new', routes.profileNew);
app.get('/profile', routes.displayAllProfiles);
app.get('/profile/:id', routes.displayProfile);
app.get('/profile/:id/edit', routes.profileEdit);
app.post('/profile/:id/edit', routes.profileUpdate);


/* Startup the Server */
/* Uses the db utility here instead of the dependency on the mongo Db */
DbUtility.isDbRunning( function() {
	app.listen( config.port, function() {
		console.log('Express server listening on port ' + config.port);
	});
});





