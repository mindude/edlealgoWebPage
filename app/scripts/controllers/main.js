'use strict';

/**
 * @ngdoc function
 * @name edlealgoWpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the edlealgoWpApp
 */
angular.module('edlealgoWpApp')
  .controller('MainCtrl', function ($location, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.headerDisplay = 'block';
  });
