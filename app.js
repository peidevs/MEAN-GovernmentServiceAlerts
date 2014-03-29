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

// Config
app.get('/profile/new', routes.profileNew);
app.get('/profile', routes.displayAllProfiles);
app.get('/profile/:id', routes.displayProfile);
app.get('/profile/:id/edit', routes.profileEdit);
app.post('/profile/:id/edit', routes.profileUpdate);

app.get('/service/garbage', routes.serviceGarbage);
app.get('/service/garbage/:id', routes.serviceGarbageByDistrict);
app.get('/service/events', routes.serviceEvents);
app.get('/service/streets', routes.serviceStreetClosures);



http.createServer(app).listen(config.port, function() {
   console.log('Express server listening on port ' + config.port
   );
});





