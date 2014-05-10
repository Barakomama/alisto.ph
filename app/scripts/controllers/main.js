'use strict';

angular.module('alistophApp')
  .controller('MainCtrl', function ($scope, AuthService, UserService, IncidentService) {

    $scope.login = function (provider) {
      AuthService.login(provider);
    };
    $scope.selected = '-JMa-crYhTV34BWGPv-D';
    $scope.incident = {};
    $scope.report = function(){
      IncidentService.create($scope.incident);
    };

  });
