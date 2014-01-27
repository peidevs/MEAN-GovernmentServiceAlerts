
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

http.createServer(app).listen(config.port, function(){
    console.log('Express server listening on port ' + config.port);
});
