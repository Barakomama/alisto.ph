'use strict';

angular.module('alistophApp')
  .controller('MainCtrl', function ($scope, simpleLogin) {
    
    $scope.login = function (provider) {
      simpleLogin.login(provider, function(err) {
        $scope.err = err? err + '' : null;
      });
    }

  });
