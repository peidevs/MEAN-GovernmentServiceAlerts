var config = require('/config')();
var express = require('express');
var profileService = require('./services/profileService');

var app = express();

app.post('/register', function(request, response) {
	if( profileService.isUsernameAlreadyInUse(request.body.userName)){
		response.json("failure");
		return;
	}

	var result = profileService.registerUserAccount(request.body.userName, request.body.password);
	response.json(result);	
}

app.post('/login', function(request, response) {
});

app.get('/user/:id', function(request, response) {
});

app.put('/user/modify/:id', function(request, response){
});




app.listen(config.port);
