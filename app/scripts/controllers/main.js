'use strict';

angular.module('alistophApp')
  .controller('MainCtrl', function ($scope, AuthService, UserService, IncidentService, AgencyService) {

    $scope.login = function (provider) {
      AuthService.login(provider);
    };
    $scope.selected = '-JMa-crYhTV34BWGPv-D';
    $scope.incident = {};
    $scope.agency = {};
    $scope.deployment = {};
    $scope.report = function(){
      IncidentService.create($scope.incident);
    };

    $scope.agencyCreate = function(){
      AgencyService.create($scope.agency);
    }

    $scope.deploy = function(){
      AgencyService.deploy($scope.deployment);
    }

  });
