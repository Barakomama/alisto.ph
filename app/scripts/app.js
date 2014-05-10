'use strict';

angular
  .module('alistophApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'firebase',
    'angularfire.firebase',
    'angularfire.login',
    'simpleLoginTools'

  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    // sample
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  });
