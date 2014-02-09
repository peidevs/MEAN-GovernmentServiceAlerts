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
  this.db.collection('profile', function(error, employee_collection) {
    if( error ) callback(error);
    else callback(null, employee_collection);
  });
};


/* DO NOT FORGET TO INCLUDE THIS exports!! Doh!!! */
exports.ContactProfile = ContactProfile;