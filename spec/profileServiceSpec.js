var rewire = require('rewire');
var sut = rewire('../src/services/profileService'); /* Call rewire instead of require so we can manipulate the object*/ 

describe("is Username Already Registered", function() {
	var mockRepository;

	beforeEach(function() {
		sut.__set__("profileRepository", { /* will change the variable profileRepository so we can mock it out */
			getProfileByName: function(username) {
				console.log("mock repository called");
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
});
