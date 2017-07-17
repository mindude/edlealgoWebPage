'use strict';

/**
 * @ngdoc function
 * @name edlealgoWpApp.controller:HeaderctrlCtrl
 * @description
 * # HeaderctrlCtrl
 * Controller of the edlealgoWpApp
 */
angular.module('edlealgoWpApp')
  .controller('HeaderctrlCtrl', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($location.path().indexOf('language') > -1){
      $scope.isVisible = 'none';
    }
    else{
      $scope.isVisible = 'block';
    }

  });
