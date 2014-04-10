'use strict';

angular.module('govServeApp')
  .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
      $scope.login = function() {
          //Do something
          $location.path('/login/');
      };
  }]);
