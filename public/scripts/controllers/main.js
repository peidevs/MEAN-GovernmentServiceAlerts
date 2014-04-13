'use strict';

angular.module('govServeApp')
  .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
      $scope.login = function() {
          $location.path('/login/');
      };
  }]);
