var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

var config = require('./config')()

ServiceProfile = function(options) {

    //store this for later use
    var _parent = this;

    //connect to the db
    this.db = new Db(
        config.mongo.db, 
        new Server(
            config.mongo.host, 
            config.mongo.port, 
          {auto_reconnect: true}, 
          {}
        )
    );

    //open the db connection and then authenticate
    this.db.open(function(err) {
        _parent.db.authenticate(
          config.mongo.username, 
          config.mongo.password, 
          function(err) {
                if (err) {
                   console.log(err);
                }
            }
        );
    });

};


ServiceProfile.prototype.getCollection= function(callback) {
  this.db.collection('profile', function(error, profile_collection) {
    if( error ) callback(error);
    else callback(null, profile_collection);
  });
};


// find a service by type 
// Query find({"service.garbage":1}) 
ServiceProfile.prototype.findGarbage = function(callback) {
    this.getCollection(function(error, profile_collection) {
      if( error ) callback(error)
      else {
         profile_collection.find({"service.garbage":1}).toArray(function(error, results) { 
          if( error ) callback(error)
          else callback(null, results)
        });
      }
    });
};

// find a service by type -- ALERT! hardcoded to district 3. My bad!! AAR
// Query find({"service.garbage":1, "address.district": ???})
ServiceProfile.prototype.findGarbageByDistrict = function(callback) {
    this.getCollection(function(error, profile_collection) {
      if( error ) callback(error)
      else {
         profile_collection.find({"service.garbage":1, "address.district":3}).toArray(function(error, results) { 
          if( error ) callback(error)
          else callback(null, results)
        });
      }
    });
};

// Query find({"service.events":1})
ServiceProfile.prototype.findEvents = function(callback) {
    this.getCollection(function(error, profile_collection) {
      if( error ) callback(error)
      else {
         profile_collection.find({"service.events":1}).toArray(function(error, results) { 
          if( error ) callback(error)
          else callback(null, results)
        });
      }
    });
};

// Query find({"service.street_closures":1})
ServiceProfile.prototype.findStreetClosures = function(callback) {
    this.getCollection(function(error, profile_collection) {
      if( error ) callback(error)
      else {
         profile_collection.find({"service.street_closures":1}).toArray(function(error, results) { 
          if( error ) callback(error)
          else callback(null, results)
        });
      }
    });
};


/* DO NOT FORGET TO INCLUDE THIS exports!! Doh!!! */
exports.ServiceProfile = ServiceProfile;