'use strict';

describe('Controller: ResumeEspanolCtrl', function () {

  // load the controller's module
  beforeEach(module('edlealgoWpApp'));

  var ResumeEspanolCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResumeEspanolCtrl = $controller('ResumeEspanolCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResumeEspanolCtrl.awesomeThings.length).toBe(3);
  });
});
