var ContactProfile = require('../dao/contactprofile').ContactProfile;
var contactData = new ContactProfile();

var makeProfileFromPayload = function(body) {
    return {
        username: body.username,
        email: body.email,
        twitter: body.twitter,
        address: {
            district: body.address.district,
            province: body.address.province
        },
        service: {
            garbage: body.service.garbage,
            street_closures: body.service.street_closures,
            events: body.service.events
        }
    };
};

var profileNew = function(req, res) {
    var item = makeProfileFromPayload(req.body);

    contactData.save(item, function(error, profile) {
        if (error) {
            res.statusCode = 500;
            return res.send('Error saving new profile');
        } else {
            res.json(profile);
        }
    });
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
    var item = makeProfileFromPayload(req.body); 
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

