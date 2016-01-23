'use strict';

angular.module('pokerVirtualMoneyApp')
  .factory('socket', function () {

    var socket = {};

    socket.ws = new WebSocket('ws://localhost:9000');

    //
    // Message from server
    //
    socket.ws.onmessage = function(message) {
        var obj = JSON.parse(message.data);
        // Logic goes here
         console.log(obj);
    };

    //
    // Message to serve
    //
    socket.emit = function(message) {
        socket.ws.send(JSON.stringify(message));
    };

    return socket;
  });
