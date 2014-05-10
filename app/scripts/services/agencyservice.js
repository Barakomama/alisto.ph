'use strict';

angular.module('alistophApp')
  .factory('AgencyService', function ($firebase, firebaseRef, UserService) {
    var ref = firebaseRef();
    var fb = $firebase(ref);
    var agencies = fb.$child('agencies');

    return {
      all: agencies,
      create: function(obj){
        return agencies.$add(obj).then(function(re){
          // add id field
          agencies.$child(re.name()).$child('id').$set(re.name());
        })
      },
      deploy: function(resource, incident){
        var obj = {
          incident: incident,
          resource: resource
        };
        return agencies.$child('deployments').$add(obj);
      }
    }

  });
