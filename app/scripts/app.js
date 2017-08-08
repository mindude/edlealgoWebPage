'use strict';

/**
 * @ngdoc overview
 * @name edlealgoWpApp
 * @description
 * # edlealgoWpApp
 *
 * Main module of the application.
 */

angular
  .module('edlealgoWpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/language', {
        templateUrl: 'views/language.html',
        controller: 'LanguageCtrl',
        controllerAs: 'language'
      })
      .when('/main_English', {
        templateUrl: 'views/main_english.html',
        controller: 'MainenglishCtrl',
        controllerAs: 'mainEnglish'
      })
      .when('/main_Espanol', {
        templateUrl: 'views/main_espanol.html',
        controller: 'MainEspanolCtrl',
        controllerAs: 'mainEspanol'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
