'use strict';

describe('Controller: MainenglishCtrl', function () {

  // load the controller's module
  beforeEach(module('edlealgoWpApp'));

  var MainenglishCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainenglishCtrl = $controller('MainenglishCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainenglishCtrl.awesomeThings.length).toBe(3);
  });
});
