'use strict';

angular.module('pokerVirtualMoneyApp')
  .factory('socket', function ($q, $rootScope, $timeout) {

    var clientSocket = {};

    var socket = io('', {
        path: '/socket.io-client'
    });

    //
    // Request to server (waits for response)
    //
    clientSocket.sendRequest = function(evt, message) {
        var defer = $q.defer();
        socket.emit(evt, message);
        var timer = $timeout(function() {
            defer.reject('timeout');
        }, 1000);
        $rootScope.$on(evt, function(event, args) {
            $timeout.cancel(timer);
            defer.resolve(args);
        });
        return defer.promise;
    };

    //
    // Message to server
    //
    clientSocket.emit = function(evt, message) {
        socket.emit(evt, message);
    };

    //
    // Message from server
    //
    socket.on('connect', function(){
        console.log('Web socket connected');
    });
    socket.on('login', function(data){
        $rootScope.$broadcast('login', data);
    });
    socket.on('hi', function(data){
        $rootScope.$broadcast('hi', data);
    });
    socket.on('disconnect', function(){
        console.log('Web socket disconnected');
    });


    return clientSocket;
  });
