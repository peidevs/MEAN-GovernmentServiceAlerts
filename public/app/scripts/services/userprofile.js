'use strict';

var govServeApp = angular.module('govServeApp');

govServeApp.factory('UserProfile', ['$resource', function ($resource) {
    return $resource('/userprofile/:_id', {_id: '@_id'});
    };
  }]);

govServeApp.factory('UserProfileLoader', ['UserProfile', '$route', '$q',
  function (UserProfile, $route, $q) {
    return function () {
      var delay = $q.defer();
      UserProfile.get({
        _id: $route.current.params.userProfileId
      }, function (userProfile) {
        delay.resolve(userProfile);
      }, function () {
        delay.reject('Unable to fetch user profile ' + $route.current.params.userProfileId);
      });
      return delay.promise;
    };
  }]);