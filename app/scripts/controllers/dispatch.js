'use strict';

angular.module('alistophApp')
  .controller('DispatchCtrl', function ($scope) {
    $scope.date = new Date();
    
    $scope.selectedIncident = {};

    $scope.modify = function(field){

    }
  });
