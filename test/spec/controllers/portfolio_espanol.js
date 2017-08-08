'use strict';

describe('Controller: PortfolioEspanolCtrl', function () {

  // load the controller's module
  beforeEach(module('edlealgoWpApp'));

  var PortfolioEspanolCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortfolioEspanolCtrl = $controller('PortfolioEspanolCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PortfolioEspanolCtrl.awesomeThings.length).toBe(3);
  });
});
