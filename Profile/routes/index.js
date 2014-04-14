var ContactProfile = require('../dao/contactprofile').ContactProfile;
var contactData = new ContactProfile();

var profileNew = function(req, res){
    res.json(profiles);
};

var displayProfile = function(req, res) {
    contactData.findById(req.params.id, function(error, profiles) {
        if (error) {
            res.statusCode = 404;
            return res.send('Error 404: No profile found');
        }
        res.json(profiles);
    });
};

var profileUpdate = function(req, res) {
    var item = {
        username: req.body.username,
        email: req.body.email,
        twitter: req.body.twitter,
        address: {
            district: req.body.address.district,
            province: req.body.address.province
        },
        service: {
            garbage: req.body.service.garbage,
            street_closures: req.body.service.street_closures,
            events: req.body.service.events
        }
    };
    contactData.update(req.params.id, item, function(error, profile) {
        if (error) {
            res.statusCode = 500;
            return res.send('Error saving profile');
        }

        res.json(profile);
    });
};

var displayAllProfiles = function(req, res) {
    contactData.findAll(function(error, profiles) {
        res.json(profiles);
    });
};

exports.setUp = function(app, baseUrl) {
    var singleItemUrl = baseUrl + '/:id';

    app.get(baseUrl, displayAllProfiles);
    app.post(baseUrl, profileNew);

    app.get(singleItemUrl, displayProfile);
    app.post(singleItemUrl, profileUpdate);
};

