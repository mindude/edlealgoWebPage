'use strict';

describe('Controller: ContactEspanolCtrl', function () {

  // load the controller's module
  beforeEach(module('edlealgoWpApp'));

  var ContactEspanolCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactEspanolCtrl = $controller('ContactEspanolCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactEspanolCtrl.awesomeThings.length).toBe(3);
  });
});
