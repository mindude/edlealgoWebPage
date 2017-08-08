'use strict';

describe('Controller: MainEspanolCtrl', function () {

  // load the controller's module
  beforeEach(module('edlealgoWpApp'));

  var MainEspanolCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainEspanolCtrl = $controller('MainEspanolCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainEspanolCtrl.awesomeThings.length).toBe(3);
  });
});
