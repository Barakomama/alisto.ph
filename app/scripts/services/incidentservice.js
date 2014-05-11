'use strict';

angular.module('alistophApp')
  .factory('IncidentService', function ($firebase, firebaseRef, UserService) {
    
    var ref = firebaseRef();
    var fb = $firebase(ref);
    var incidents = fb.$child('incidents');
    var demo = [{type:"fire",status:"responded",address:"Batanganes City",description:"Lorem ipsum dolor sit amet.",responseUnits:[],casualties:[],coordinates:{lat:16.23123,"long":121.3123},created:"",updated:""},{type:"earthquake",status:"responded",address:"Batanganes City",description:"Lorem ipsum dolor sit amet.",responseUnits:[],casualties:[],coordinates:{lat:13.23123,"long":121.123},created:"",updated:""},{type:"epidemic",status:"responded",address:"Batanganes City",description:"Lorem ipsum dolor sit amet.",
responseUnits:[],casualties:[],coordinates:{lat:17.23123,"long":121.6132},created:"",updated:""},{type:"car",status:"responded",address:"Batanganes City",description:"Lorem ipsum dolor sit amet.",responseUnits:[],casualties:[],coordinates:{lat:14.23123,"long":121.132},created:"",updated:""},{type:"flood",status:"responded",address:"Batanganes City",description:"Lorem ipsum dolor sit amet.",responseUnits:[],casualties:[],coordinates:{lat:15.23123,"long":120.632},created:"",updated:""},{type:"landslide",
status:"responded",address:"Batanganes City",description:"Lorem ipsum dolor sit amet.",responseUnits:[],casualties:[],coordinates:{lat:17.23123,"long":120.632},created:"",updated:""},{type:"radioactive",status:"responded",address:"Batanganes City",description:"Lorem ipsum dolor sit amet.",responseUnits:[],casualties:[],coordinates:{lat:12.23123,"long":125.102},created:"",updated:""},{type:"spill",status:"responded",address:"Batanganes City",description:"Lorem ipsum dolor sit amet.",responseUnits:[],
casualties:[],coordinates:{lat:10.23123,"long":114.813123},created:"",updated:""},{type:"crime",status:"responded",address:"Batanganes City",description:"Lorem ipsum dolor sit amet.",responseUnits:[],casualties:[],coordinates:{lat:6.03123,"long":121.413123},created:"",updated:""},{type:"typhoon",status:"responded",address:"Batanganes City",description:"Lorem ipsum dolor sit amet.",responseUnits:[],casualties:[],coordinates:{lat:12.23123,"long":120.213123},created:"",updated:""},{type:"eruption",status:"responded",
address:"Batanganes City",description:"Lorem ipsum dolor sit amet.",responseUnits:[],casualties:[],coordinates:{lat:14.03123,"long":121.000123},created:"",updated:""}];
    return {
      all: incidents,
      getDemo: function () {
        return demo;
      },
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
