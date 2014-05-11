'use strict';

angular.module('alistophApp')
  .controller('DispatchCtrl', function ($scope, IncidentService) {
    $scope.date = new Date();
    
    $scope.selectedIncident = {};

    $scope.modify = function(field){

    }
  });
