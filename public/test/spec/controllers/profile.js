'use strict';

describe('Controller: ProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('govServeApp'));

  var ProfileCtrl,
    scope, mockUserProfile;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    scope = $rootScope.$new();
    mockUserProfile = {username: 'userName', email: 'email@test.com'};
    ProfileCtrl = $controller('ProfileCtrl', {
      $scope: scope,
      $location: $location,
      userProfile: mockUserProfile
    });
  }));

  it('should attach a view function to the scope', function () {
    expect(scope.view).not.toBeNull();
  });

  it('should attach a edit function to the scope', function () {
    expect(scope.edit).not.toBeNull();
  });

  it('should attach a save function to the scope', function () {
    expect(scope.save).not.toBeNull();
  });

  it('should attach a remove function to the scope', function () {
    expect(scope.remove).not.toBeNull();
  });
});
