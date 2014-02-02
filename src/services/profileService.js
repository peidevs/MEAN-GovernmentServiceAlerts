var config = require('../../config')();
var profileRepository = require("../repository/profileRepository");

/**
* Profile Service manages all things involving the user credentials.
* Login and Registration options mostly
*/

/* get a user friendly handle to the moduleExports */
var app = exports = module.exports = {};

/**
* Takes in a username and determines if the username is already in use.
* Returns True if already in use, false otherwise.
*/
app.isUsernameAlreadyRegistered = function(username) {
	var user = profileRepository.getProfileByName(username);

	console.log(user);
	var result = (user && user.length > 0);
	console.log(result);
	return result;
};


