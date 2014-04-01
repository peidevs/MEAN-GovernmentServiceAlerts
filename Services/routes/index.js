var ServiceProfile = require('../dao/serviceprofile').ServiceProfile;
var serviceData = new ServiceProfile();

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
