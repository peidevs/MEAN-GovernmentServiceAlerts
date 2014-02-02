var rewire = require('rewire');
var sut = require('../src/services/profileService');

describe("is Username Already Registered", function() {
	var mockRepository;

	beforeEach(function() {
		mockRepository = rewire('../src/repository/profileRepository');
		mockRepository.__set__("profileRepository", {
			getProfileByName: function(username) {
				var users = [{ username : "fred" }, { username : "anne" }];
				
				var result = users.filter(function (user){ 
								return user.username == username 
							});
				return result;			
			}
		});
	});

	it("to not throw exception", function() {	
		var theCall = function() {
			sut.isUsernameAlreadyRegistered('Test')
		}
		expect(theCall).not.toThrow();
	});

	
	it("Returns True when Username found", function() {
		var result = sut.isUsernameAlreadyRegistered("fred");
		expect(result).toBe(true);
	});

	it("Returns false when Username not found", function() {
		var result = sut.isUsernameAlreadyRegistered("david");
		expect(result).toBe(false);
	});

	it("Returns True when Username found case Insensitive", function() {
		var result = sut.isUsernameAlreadyRegistered("Fred");
		expect(result).toBe(true);
	});

});
