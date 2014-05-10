'use strict';

angular.module('alistophApp')
  .factory('user', function ($firebase, firebaseRef, auth, $rootScope) {
    var ref = firebaseRef('/users');
    var users = $firebase(ref);

    function findById(id) {
      var user = users.$child(id);
      return user;
    }

    function setCurrentUser(userId) {
      $rootScope.currentUser = findById(userId);
    }

    function getCurrentUser() {
      return $rootScope.currentUser;
    }

    // persist on refresh....
    $rootScope.$on('$firebaseSimpleLogin:login', function () {
      var query = $firebase(ref);
      // $rootScope.signedIn = $rootScope.currentUser !== null;
      // query.$on('loaded', function () {
      //   console.log(auth.getauth());
      //   setCurrentUser(auth.getauth().user.id);
      // });
    });
    
    return {
      findById: function(id) {
        var user = users.$child(id);
        return user;
      },
      getCurrent: function() {
        return $rootScope.currentUser;
      },
      setCurrent: function(UserId) {
        $rootScope.currentUser = findById(UserId);
      },
      isLoggedIn: function () {
        return $rootScope.currentUser !== undefined;
      },
      getAll: function() {
        return users;
      }
    };
  });
