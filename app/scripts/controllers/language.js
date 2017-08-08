'use strict';

/**
 * @ngdoc function
 * @name edlealgoWpApp.controller:LanguageCtrl
 * @description
 * # LanguageCtrl
 * Controller of the edlealgoWpApp
 */
angular.module('edlealgoWpApp')
  .controller('LanguageCtrl', function ($scope, $location, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.configHeadFoot();

    $scope.button_mexico = function(){
      $location.path('/main_Espanol');
    };

    $scope.button_usa = function(){
      $location.path('/main_English');
    };

  });
