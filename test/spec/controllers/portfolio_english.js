'use strict';

describe('Controller: PortfolioEnglishCtrl', function () {

  // load the controller's module
  beforeEach(module('edlealgoWpApp'));

  var PortfolioEnglishCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortfolioEnglishCtrl = $controller('PortfolioEnglishCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PortfolioEnglishCtrl.awesomeThings.length).toBe(3);
  });
});
