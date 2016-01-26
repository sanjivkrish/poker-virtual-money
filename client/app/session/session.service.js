'use strict';

angular.module('pokerVirtualMoneyApp')
  .factory('session', function ($q) {

    //
    // Holds the default user for development mode
    //
    var session = {
        user: {name:'Udaya', password:'1234'}
    };

//    var session = {
//        user: {}
//    };

    session.isLoginValid = function() {
        var defered = $q.defer();

        if (Object.keys(session.user).length === 0) {
            defered.resolve();
        } else {
            defered.reject();
        }
        return defered.promise;
    };

    session.getCurrentUser = function() {
        return session.user;
    };

    session.setCurrentUser = function(obj) {
        session.user = obj;
    };

    // Public API here
    return session;
  });
