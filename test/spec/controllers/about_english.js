'use strict';

describe('Controller: AboutEnglishCtrl', function () {

  // load the controller's module
  beforeEach(module('edlealgoWpApp'));

  var AboutEnglishCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutEnglishCtrl = $controller('AboutEnglishCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutEnglishCtrl.awesomeThings.length).toBe(3);
  });
});
