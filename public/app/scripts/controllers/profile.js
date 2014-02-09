'use strict';

angular.module('govServeApp')
  .controller('ProfileCtrl', ['$scope', 'userProfile', function ($scope, userProfile) {
    $scope.userProfile = userProfile;
  }]);
