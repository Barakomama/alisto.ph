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
    $stateProvider
      .state('dispatch',{
        url: '/dispatch',
        templateUrl: 'views/dispatch.html',
        controller: 'DispatchCtrl'
      });

    $stateProvider
      .state('profile',{
        url: '/profile',
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      });
    $stateProvider
      .state('agency',{
        url: '/agency',
        templateUrl: 'views/agency.html',
        controller: 'AgencyCtrl'
      });
  });
