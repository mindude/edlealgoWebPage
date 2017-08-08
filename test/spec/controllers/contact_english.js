'use strict';

describe('Controller: ContactEnglishCtrl', function () {

  // load the controller's module
  beforeEach(module('edlealgoWpApp'));

  var ContactEnglishCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactEnglishCtrl = $controller('ContactEnglishCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactEnglishCtrl.awesomeThings.length).toBe(3);
  });
});
