'use strict';

describe('Controller: ResumeEnglishCtrl', function () {

  // load the controller's module
  beforeEach(module('edlealgoWpApp'));

  var ResumeEnglishCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResumeEnglishCtrl = $controller('ResumeEnglishCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResumeEnglishCtrl.awesomeThings.length).toBe(3);
  });
});
