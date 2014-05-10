'use strict';

angular.module('alistophApp')
  .factory('auth', function ($rootScope, $firebase,$firebaseSimpleLogin, firebaseRef, $timeout) {
    var ref = firebaseRef();
    var auth = $firebaseSimpleLogin(ref);

    function getPicURL(id, large) {
      return 'https://graph.facebook.com/' + (id) +
             '/picture/?type=' + (large ? 'large' : 'square') +
             '&return_ssl_resources=1';
    }

    var Auth = {
      login: function(provider){
        return auth.$login(provider, {rememberMe: true, preferRedirect: true}).then(function(user) {
          var userRef = firebaseRef('users/' + user.id);
          userRef.once('value', function(snapshot){
            var info = {};
            var val = snapshot.val();
            if (!val) {
              console.log('first time');
              // If this is a first time login, upload user details.
              info = {
                id: user.id,
                name: user.name,
                gender: user.gender,
                avatar: getPicURL(user.id),
                createdAt: Firebase.ServerValue.TIMESTAMP
              };
              userRef.setWithPriority(info, user.id);
            } else {
              info = val;
            }
            $rootScope.currentUser = val;
          });
        });
      },
      isLoggedIn: function() {
        return auth.user;
      },
      logout: function(){
        return auth.$logout;
      }
    }
    return Auth;
  });
