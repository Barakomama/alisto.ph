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
        var incident = {};
        incident.coordinates = obj.field.coord;
        incident.type = obj.field.type;
        incident.createdAt = Firebase.ServerValue.TIMESTAMP;
        incident.reporter = user.id;
        incident.status = 'reported';
        incident.score = 1;

        return incidents.$add(incident).then(function(re){
          // add id field
          incidents.$child(re.name()).$child('id').$set(re.name());
          // push comment
          incidents.$child(re.name()).$child('comments').$add({content: obj.comment, author: user.id});
          // persist to reporter
          user.$child('reports').$child(re.name()).$child('id').$set({id: re.name()});
        });
      },
      findById: function(id){
        return incidents.$child(id);
      },
      respond: function() {
        
      },
      update: function(incident, field, value) {
        incident.$child(incident).$child(field).$set(value);
      }

    }

  });
