'use strict';

angular.module('alistophApp')
  .factory('SelectedIncidentService', function () {
    var selectedIncident = {};
    return {
      getSelectedIncident: function () {
        return selectedIncident
      },
      setSelectedIncident: function(incident){
        selectedIncident = incident;
      }
    };
  });
