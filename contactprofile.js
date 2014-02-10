var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;



ContactProfile = function(host, port) {
  this.db= new Db('user', new Server(host, port, {safe: false}, {auto_reconnect: true}, {}));
  this.db.open(function(){});
};


ContactProfile.prototype.getCollection= function(callback) {
  this.db.collection('profile', function(error, profile_collection) {
    if( error ) callback(error);
    else callback(null, profile_collection);
  });
};


ContactProfile.prototype.findById = function(contactId, callback) {
    this.getCollection(function(error, profile_collection) {
      if( error ) callback(error)
      else {
        profile_collection.findOne({_id: profile_collection.db.bson_serializer.ObjectID.createFromHexString(contactId)}, function(error, result) {
          if( error ) callback(error)
          else callback(null, result)
        });
      }
    });
};



//find all profiles
ContactProfile.prototype.findAll = function(callback) {
    this.getCollection(function(error, profile_collection) {
      if( error ) callback(error)
      else {
        profile_collection.find().toArray(function(error, results) {
          if( error ) callback(error)
          else callback(null, results)
        });
      }
    });
};



/* DO NOT FORGET TO INCLUDE THIS exports!! Doh!!! */
exports.ContactProfile = ContactProfile;