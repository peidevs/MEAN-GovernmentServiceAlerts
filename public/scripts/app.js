'use strict';

angular.module('govServeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/profile/:userProfileId', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        resolve: {
          userProfile: function (UserProfileLoader) {
            return new UserProfileLoader();
          }
        }
      })
      .when('/profile/:userProfileId/edit', {
        templateUrl: 'views/profile_edit.html',
        controller: 'ProfileCtrl',
        resolve: {
          userProfile: function (UserProfileLoader) {
            return new UserProfileLoader();
          }
        }
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
