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
    $rootScope.configHeadFoot = function() {
      //Header Properties
      $rootScope.headerDisplay = 'block';
      $rootScope.homeName = '';
      $rootScope.homeURL = '#!/';
      $rootScope.portfolioName = '';
      $rootScope.portfolioURL = '';
      $rootScope.resumeName = '';
      $rootScope.resumeURL = '';
      $rootScope.aboutName = '';
      $rootScope.aboutURL = '';
      $rootScope.contactName = '';
      $rootScope.contactURL = '';
      $rootScope.languageName = '';
      $rootScope.languageURL = '';

      //Footer&Container Properties
      $rootScope.colorFooter = '#9f0f13';
      $rootScope.container = 'container-fluid';

      if (window.location.href.indexOf('English') > -1) {
        $rootScope.homeName = 'Home';
        $rootScope.homeURL = '#!/main_English';
        $rootScope.portfolioName = 'Portfolio';
        $rootScope.portfolioURL = '#!/portfolio_English';
        $rootScope.resumeName = 'Resume';
        $rootScope.resumeURL = '#!/resume_English';
        $rootScope.aboutName = 'About';
        $rootScope.aboutURL = '#!/about_English';
        $rootScope.contactName = 'Contact';
        $rootScope.contactURL = '#!/contact_English';
        $rootScope.languageName = 'Change Language';
        $rootScope.languageURL = '#!/language';
      }
      else if (window.location.href.indexOf('Espanol') > -1) {
        $rootScope.homeName = 'Inicio';
        $rootScope.homeURL = '#!/main_Espanol';
        $rootScope.portfolioName = 'Portafolio';
        $rootScope.portfolioURL = '#!/portfolio_Espanol';
        $rootScope.resumeName = 'Curriculum Vitae';
        $rootScope.resumeURL = '#!/resume_Espanol';
        $rootScope.aboutName = 'Acerca de mi';
        $rootScope.aboutURL = '#!/about_Espanol';
        $rootScope.contactName = 'Contactame';
        $rootScope.contactURL = '#!/contact_Espanol';
        $rootScope.languageName = 'Cambiar Lenguaje';
        $rootScope.languageURL = '#!/language';
      }
      else {
        $rootScope.headerDisplay = 'none';
        $rootScope.colorFooter = '#845518';
        $rootScope.container = 'container';
      }
    };
  });
