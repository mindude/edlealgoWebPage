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
    $rootScope.headerDisplay = 'none';
    $rootScope.headerLanguage = 'none';

    $scope.button_mexico = function(){
      $rootScope.headerDisplay = 'block';
      $rootScope.homeName = 'Inicio';
      $rootScope.homeURL = '#!/main_Espanol';
      $location.path('/main_Espanol');
    };

    $scope.button_usa = function(){
      $rootScope.headerDisplay = 'block';
      $rootScope.homeName = 'Home';
      $rootScope.homeURL = '#!/main_English';
      $location.path('/main_English');
    };

  });
