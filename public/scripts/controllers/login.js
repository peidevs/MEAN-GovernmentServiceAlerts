'use strict';

angular.module('govServeApp')
  .controller('LoginCtrl', ['$scope', '$location', '$http', 
      function ($scope, $location, $http) {
          // On load, we'll query for all the users and populate the drop-down
          // This is a bad idea, but until we decide how login should work, we'll
          // throw caution to the wind
          var promise = $http({ method: 'GET', url: '/profile/' }).
            success(function(data, status, headers, config) {
                return data;
            }).
            error(function(data, status, headers, config) {
                alert(data);
            });

            promise.then(function(data) {
                $scope.userList = data.data;
                $scope.selectedUser = data.data[0];
            });

            $scope.login = function() {
                $location.path('/profile/' + $scope.selectedUser._id);
            };
      }]);
