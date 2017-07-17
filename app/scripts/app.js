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
      .otherwise({
        redirectTo: '/'
      });

  });
