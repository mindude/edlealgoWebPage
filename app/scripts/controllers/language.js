'use strict';

/**
 * @ngdoc function
 * @name edlealgoWpApp.controller:LanguageCtrl
 * @description
 * # LanguageCtrl
 * Controller of the edlealgoWpApp
 */
angular.module('edlealgoWpApp')
  .controller('LanguageCtrl', function ($scope, $location, $route) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.button_mexico = function(){
      $location.path('/main');
    };

  });
