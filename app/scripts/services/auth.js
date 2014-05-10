'use strict';

angular.module('alistophApp')
  .factory('auth', function ($rootScope, $firebase,$firebaseSimpleLogin, firebaseRef, $timeout) {
    var ref = firebaseRef();
    var auth = $firebaseSimpleLogin(ref);

    function assertAuth() {
      if (auth === null) {
        throw new Error('Initialize first this service');
      };
    }

    function getPicURL(id, large) {
      return 'https://graph.facebook.com/' + (id) +
             '/picture/?type=' + (large ? 'large' : 'square') +
             '&return_ssl_resources=1';
    }

    var Auth = {
      init: function () {
        return auth;
      },
      login: function(provider,callback){
        assertAuth();

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
            $rootScope.currentUser = info.id;
          });
          
          if( callback ) {
            //todo-bug https://github.com/firebase/angularFire/issues/199
            $timeout(function() {
              callback(null, user);
            });
          }
        }, callback);
      },
      isLoggedIn: function() {
        return auth.user !== null;
      }
    }

    Auth.init();
    return Auth;
  });
