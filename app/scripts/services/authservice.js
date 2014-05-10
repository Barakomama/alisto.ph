'use strict';

angular.module('alistophApp')
  .factory('AuthService', function ($firebaseSimpleLogin, firebaseRef) {

    var ref = firebaseRef();
    var auth = $firebaseSimpleLogin(ref);

    function getPicURL(id, large) {
      return 'https://graph.facebook.com/' + (id) +
             '/picture/?type=' + (large ? 'large' : 'square') +
             '&return_ssl_resources=1';
    }

    function firstTimeOrNot(user) {
      var userRef = firebaseRef('users/' + user.id);
      userRef.once('value', function(snapshot){
        var info = {};
        var val = snapshot.val();
        if (!val) {
          info = {
            id: user.id,
            name: user.name,
            gender: user.gender,
            avatar: getPicURL(user.id),
            createdAt: Firebase.ServerValue.TIMESTAMP
          };
          userRef.setWithPriority(info, user.id);
        }
      });
    }


    return {
      login: function(provider){
        return auth.$login(provider, {rememberMe: true, preferRedirect: true}).then(function(user){
          firstTimeOrNot(user);
        });
      },
      logout: function(){
        return auth.$logout();
      }
    };
  });
