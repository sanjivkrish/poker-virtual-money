'use strict';

angular.module('pokerVirtualMoneyApp')
  .factory('socket', function ($q) {

    var socket = {};

    var deferred;

    socket.ws = new WebSocket('ws://localhost:9000');

    //
    // Message from server
    //
    socket.ws.onmessage = function(message) {
        var obj = JSON.parse(message.data);
        //
        // All broadcast message from server has a type 'broadcast'
        //
        if (obj.type !== 'broadcast') {
            deferred.resolve(obj);
        } else {
            // Logic goes here
        }
    };

    //
    // Message to serve
    //
    socket.emit = function(message) {
        deferred = $q.defer();
        socket.ws.send(JSON.stringify(message));
        return deferred.promise;
    };

    return socket;
  });
