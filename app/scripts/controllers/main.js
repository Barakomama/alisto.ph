'use strict';

angular.module('alistophApp')
  .controller('MainCtrl', function ($scope, auth) {
    
    $scope.login = function (provider) {
      auth.login(provider, function(err, user) {
        $scope.err = err? err + '' : null;
      });
    };
    
  });
