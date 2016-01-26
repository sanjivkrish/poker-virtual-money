'use strict';

angular.module('pokerVirtualMoneyApp')
  .factory('session', function () {

    //
    // Holds the default user for development mode
    //
    var session = {
        user: {name:'Udaya', password:'1234'}
    };

//    var session = {
//        user: {}
//    };

    session.getCurrentUser = function() {
        return session.user;
    };

    session.setCurrentUser = function(obj) {
        session.user = obj;
    };

    // Public API here
    return session;
  });
