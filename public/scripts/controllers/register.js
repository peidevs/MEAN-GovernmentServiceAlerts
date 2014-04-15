'use strict';

angular.module('govServeApp')
  .controller('RegisterCtrl', ['$scope', '$location', 'UserProfile',
          function ($scope, $location, UserProfile) {
            $scope.userProfile = new UserProfile();

            $scope.save = function() {
                $scope.userProfile.$save(function(profile) {
                    $location.path('/profile/' + profile._id);
                });
          }
  }]);
