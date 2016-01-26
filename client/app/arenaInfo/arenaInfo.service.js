'use strict';

angular.module('pokerVirtualMoneyApp')
  .factory('arenaInfo', function (socket, $rootScope, session) {

    var arenaInfo = {};
    socket.emit('getinitarena', session.user.name);

    $rootScope.$on('broadcastarena', function(evt, obj) {
        console.log(obj);
    });

    // Public API here
    return arenaInfo;
  });
