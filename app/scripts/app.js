'use strict';

angular
  .module('alistophApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'firebase',
    'angularfire.firebase',
    'simpleLoginTools',
    'ngMap'

  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      });
  });
