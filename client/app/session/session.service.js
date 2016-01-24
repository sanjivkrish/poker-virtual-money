'use strict';

angular.module('pokerVirtualMoneyApp')
  .factory('session', function () {
    var session = {};

    session.getCurrentUser = function() {
        return session.user;
    };

    session.setCurrentUser = function(obj) {
        session.user = obj;
    };

    // Public API here
    return session;
  });
