'use strict';

/**
 * @ngdoc function
 * @name edlealgoWpApp.controller:MainEspanolCtrl
 * @description
 * # MainEspanolCtrl
 * Controller of the edlealgoWpApp
 */
angular.module('edlealgoWpApp')
  .controller('MainEspanolCtrl', function ($scope, $location, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.configHeadFoot();
  });
