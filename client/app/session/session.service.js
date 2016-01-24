'use strict';

angular.module('pokerVirtualMoneyApp')
  .factory('session', function () {
    var session = {user: {name:'Udaya', password:'1234'}};

    session.getCurrentUser = function() {
        return session.user;
    };

    session.setCurrentUser = function(obj) {
        session.user = obj;
    };

    // Public API here
    return session;
  });
