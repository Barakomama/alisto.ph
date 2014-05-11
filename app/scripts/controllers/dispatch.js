'use strict';

angular.module('alistophApp')
  .controller('DispatchCtrl', function ($scope, IncidentService, SelectedIncidentService) {
    $scope.date = new Date();
    $scope.incidentTypes = {
      values: [{type: 'flood', name: 'Flood'},
      {value: 'spill', name: 'Oil Spill'},
      {value: 'car', name: 'Vehicular Accident'},
      {value: 'crime', name: 'Crime'},
      {value: 'epidemic', name: 'Epidemic'},
      {value: 'earthquake', name: 'Earthquake'},
      {value: 'landslide', name: 'Landslide'},
      {value: 'eruption', name: 'Volcanic Activity'},
      {value: 'radioactive', name: 'Radioactive Hazard'},
      {value: 'fire', name: 'Fire'}],
    };
    $scope.map = {
      styles: [{featureType: "water", elementType: "geometry", stylers: [{"visibility": "on"}, {"color": "#aee2e0"}]}, {featureType: "landscape", elementType: "geometry.fill", stylers: [{color: "#abce83"}]}, {featureType: "poi", elementType: "geometry.fill", stylers: [{color: "#769E72"}]}, {featureType: "poi", elementType: "labels.text.fill", stylers: [{color: "#7B8758"}, ]}, {featureType: "poi", elementType: "labels.text.stroke", stylers: [{color: "#EBF4A4"}, ]}, {featureType: "poi.park", elementType: "geometry", stylers: [{visibility: "simplified"}, {color: "#8dab68"}]}, {featureType: "road", elementType: "geometry.fill", stylers: [{visibility: "simplified"}, ]}, {featureType: "road", elementType: "labels.text.fill", stylers: [{color: "#5B5B3F"}]}, {featureType: "road", elementType: "labels.text.stroke", stylers: [{color: "#ABCE83"}]}, {featureType: "road", elementType: "labels.icon", stylers: [{visibility: "off"}]}, {featureType: "road.local", elementType: "geometry", stylers: [{color: "#A4C67D"}, ]}, {featureType: "road.arterial", elementType: "geometry", stylers: [{color: "#9BBF72"}]}, {featureType: "road.highway", elementType: "geometry", stylers: [{color: "#EBF4A4"}]}, {featureType: "transit", stylers: [{visibility: "off"}]}, {featureType: "administrative", elementType: "geometry.stroke", stylers: [{visibility: "on"}, {color: "#87ae79"}]}, {featureType: "administrative", elementType: "geometry.fill", stylers: [{color: "#7f2200"}, {visibility: "off"}]}, {featureType: "administrative", elementType: "labels.text.stroke", stylers: [{color: "#ffffff"}, {visibility: "on"}, {weight: 4.1}]}, {featureType: "administrative", elementType: "labels.text.fill", stylers: [{color: "#495421"}, ]}, {featureType: "administrative.neighborhood", elementType: "labels", stylers: [{visibility: "off"}]}]
    }

    $scope

    $scope.responseUnits = {};

    $scope.map.markers = {}
    $scope.incidents = IncidentService.all;
    $scope.selectedIncident = {};
    $scope.getSelectedValue = function(model){
      return model.value;
    }

    $scope.getSelectedIncident = function() {
      return $scope.selectedIncident;
    }

    $scope.setSelectedIncident = function(event,incident){
      $scope.selectedIncident = incident;
      console.log($scope.selectedIncident);
    }
    $scope.modify = function(field,value){
      console.log($scope.selectedIncident.id, field, value);
    }

    $scope.respond = function() {
      console.log($scope.responseUnits);
    }

  });
