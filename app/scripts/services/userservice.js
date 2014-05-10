'use strict';

angular.module('alistophApp')
  .factory('UserService', function ($rootScope, firebaseRef, AuthService, $firebase) {

    var ref = firebaseRef('/users');
    var users = $firebase(ref);

    function setCurrentUser (id) {
      $rootScope.currentUser = User.findById(id);
    }

    $rootScope.$on('$firebaseSimpleLogin:login', function (e, authUser) {
      var query = $firebase(ref.startAt(authUser.id).endAt(authUser.id));
     
      query.$on('loaded', function () {
        setCurrentUser(query.$getIndex()[0]);
      });
    });

    $rootScope.$on('$firebaseSimpleLogin:logout', function() {
      delete $rootScope.currentUser;
    });

    var User = {
      findById: function(id){
        if (id) {
          return users.$child(id);
        }
      },
      setCurrentUser: function(user){
        $rootScope.currentUser = user;
      },
      getCurrentUser: function(){
        return $rootScope.currentUser;
      },
      isLoggedIn: function(){
        return $rootScope.currentUser !== undefined;
      }
    };

    return User;
  });
