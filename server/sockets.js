/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');
var sendData;

module.exports = function(io) {

    io.on('connection', function(socket) {
        console.log('socket connected');

        socket.on('login', function(data) {
            sendData = require('./lib/core/login.js').userLogin(data);
            socket.emit('login', sendData);
        });

        socket.on('lobbydetails', function(data) {
            sendData = require('./lib/core/lobbydetails.js').getLobbyInfo();
            socket.emit('lobbydetails', sendData);
        });

        socket.on('disconnect', function() {
            console.log('socket Disconnected');
        });
    });
};