'use strict';

/**
 * @ngdoc function
 * @name edlealgoWpApp.controller:HeaderctrlCtrl
 * @description
 * # HeaderctrlCtrl
 * Controller of the edlealgoWpApp
 */
angular.module('edlealgoWpApp')
  .controller('HeaderctrlCtrl', function ($rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if(window.location.href.indexOf('English') >-1){
      $rootScope.homeName = 'Home';
      $rootScope.homeURL = '#!/main_English';

    }
    else if(window.location.href.indexOf('Espanol') >-1){
      $rootScope.homeName = 'Inicio';
      $rootScope.homeURL = '#!/main_Espanol';
    }
    else{
      $rootScope.homeName = '';
      $rootScope.homeURL = '#!/language';
    }

  });
