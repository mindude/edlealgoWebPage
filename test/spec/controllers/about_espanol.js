'use strict';

describe('Controller: AboutEspanolCtrl', function () {

  // load the controller's module
  beforeEach(module('edlealgoWpApp'));

  var AboutEspanolCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutEspanolCtrl = $controller('AboutEspanolCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutEspanolCtrl.awesomeThings.length).toBe(3);
  });
});
