'use strict';

angular.module('alistophApp')
  .controller('MainCtrl', function ($scope, AuthService, UserService) {

    $scope.login = function (provider) {
      AuthService.login(provider);
    };
    console.log(UserService.isLoggedIn());
  });
