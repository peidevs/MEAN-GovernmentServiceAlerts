'use strict';

angular.module('govServeApp')
  .controller('ProfileCtrl', ['$scope', '$location', 'userProfile',
    function ($scope, $location, userProfile) {
      $scope.userProfile = userProfile;

      $scope.view = function() {
          $location.path('/profile/' + userProfile._id);
        };

      $scope.edit = function() {
          $location.path('/profile/' + userProfile._id + '/edit');
        };

      $scope.save = function() {
          $scope.userProfile.$save(function(userProfile) {
              $location.path('/profile/' + userProfile._id);
            });
        };

      $scope.remove = function() {
          $scope.userProfile.$remove(function() {
              $location.path('/');
            });
        };
    }]);
