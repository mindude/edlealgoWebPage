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
      //.when('/', {
      //  templateUrl: 'views/main.html',
      //  controller: 'MainCtrl',
      //  controllerAs: 'main'
      //})

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
      .when('/portfolio_Espanol', {
        templateUrl: 'views/portfolio_espanol.html',
        controller: 'PortfolioEspanolCtrl',
        controllerAs: 'portfolioEspanol'
      })
      .when('/portfolio_English', {
        templateUrl: 'views/portfolio_english.html',
        controller: 'PortfolioEnglishCtrl',
        controllerAs: 'portfolioEnglish'
      })
      .when('/resume_Espanol', {
        templateUrl: 'views/resume_espanol.html',
        controller: 'ResumeEspanolCtrl',
        controllerAs: 'resumeEspanol'
      })
      .when('/resume_English', {
        templateUrl: 'views/resume_english.html',
        controller: 'ResumeEnglishCtrl',
        controllerAs: 'resumeEnglish'
      })
      .when('/about_Espanol', {
        templateUrl: 'views/about_espanol.html',
        controller: 'AboutEspanolCtrl',
        controllerAs: 'aboutEspanol'
      })
      .when('/about_English', {
        templateUrl: 'views/about_english.html',
        controller: 'AboutEnglishCtrl',
        controllerAs: 'aboutEnglish'
      })
      .when('/contact_English', {
        templateUrl: 'views/contact_english.html',
        controller: 'ContactEnglishCtrl',
        controllerAs: 'contactEnglish'
      })
      .when('/contact_Espanol', {
        templateUrl: 'views/contact_espanol.html',
        controller: 'ContactEspanolCtrl',
        controllerAs: 'contactEspanol'
      })
      .otherwise({
        redirectTo: '/language'
      });
  });
