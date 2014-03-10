
'use strict';


var ContactProfile = require('../contactprofile').ContactProfile;
var contactData = new ContactProfile('localhost', 27017);

/* exports.index = function(req, res){ // exports is like expose
  res.render('index', { title: 'MEAN - Government Service Alerts' });
};
*/

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

