
/*  Launch as:
   $ node app local
   or
   $ node app cloud9  
*/

var config = require('./config')()
  , app = require('express')
  , http = require('http');

http.createServer(app).listen(config.port, function(){
    console.log('Express server listening on port ' + config.port);
});
