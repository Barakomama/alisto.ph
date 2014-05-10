'use strict';

angular.module('alistophApp')
  .factory('IncidentService', function ($firebase, firebaseRef, UserService) {
    
    var ref = firebaseRef();
    var fb = $firebase(ref);
    var incidents = fb.$child('incidents');

    return {
      all: incidents,
      create: function(obj){
        var user = UserService.getCurrentUser();
        obj.createdAt = Firebase.ServerValue.TIMESTAMP;
        obj.reporter = user.id;
        obj.status = 'nohelp'

        return incidents.$add(obj).then(function(re){
          // add id field
          incidents.$child(re.name()).$child('id').$set(re.name());
          // persist to reporter
          user.$child('reports').$child(re.name()).$child('id').$set({id: re.name()});
        });
      },
      findById: function(id){
        return incidents.$child(id);
      },
      respond: function() {
        
      }

    }

  });
