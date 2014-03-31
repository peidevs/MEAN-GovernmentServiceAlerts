/**
* Don't be afraid to start a new file. 
* This file was wrongly name index.js. When it should have been named according to the 
* use of the file. Originally it was ContactRoutes. Now there is ServiceRoutes.
* There is no reason this can't be split into 2 files.
*/

var ContactProfile = require('../Profile/dao/contactprofile').ContactProfile
  , ServiceProfile = require('../Services/dao/serviceprofile').ServiceProfile;


var contactData = new ContactProfile();
var serviceData = new ServiceProfile();


exports.profileNew = function(req, res){
    res.json(profiles);
};


exports.displayProfile = function(req, res) {
    contactData.findById(req.params.id, function(error, profiles) {
        if (error) {
            res.statusCode = 404;
            return res.send('Error 404: No profile found');
        }
        res.json(profiles);   
    });
};



exports.profileEdit = function(req, res){
    contactData.findById(req.params.id, function(error, profiles) {
        res.json(profiles); // Need to break this out into actual fields for edit
        });
};


exports.profileUpdate = function(req, res){

};

exports.displayAllProfiles = function(req, res) {
    contactData.findAll(function(error, profiles) {
        res.json(profiles);
    });
};

// Query find({"service.garbage":1})
exports.serviceGarbage = function(req, res) {
    serviceData.findGarbage(function(error, profiles) {
        res.json(profiles);
    });
};

// Query find({"service.garbage":1})
exports.serviceGarbageByDistrict = function(req, res) {
    serviceData.findGarbageByDistrict(function(error, profiles) {
        res.json(profiles);
    });
};

// Query find({"address.province":"PEI"})
exports.serviceProvince = function(req, res) {
    serviceData.findProvince(function(error, profiles) {
        res.json(profiles);
    });
};

// Query find({"service.garbage":1})
exports.serviceStreetClosures = function(req, res) {
    serviceData.findStreetClosures(function(error, profiles) {
        res.json(profiles);
    });
};

// Query find({"service.events":1})
exports.serviceEvents = function(req, res) {
    serviceData.findEvents(function(error, profiles) {
        res.json(profiles);
    });
};
