/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');
var loginCore = require('./lib/core/login.js');
var lobbyCore = require('./lib/core/lobbydetails.js');
var loginDI = require('./lib/data-interface/login.js');
var sendData;

module.exports = function(io) {

    io.on('connection', function(socket) {
        console.log('socket connected');

        socket.on('login', function(data) {
            sendData = loginCore.userLogin(data, io);
            socket.emit('login', sendData);
        });

        socket.on('lobbydetails', function(data) {
            sendData = lobbyCore.getLobbyInfo();
            socket.emit('lobbydetails', sendData);
        });
        
        socket.on('getUsers', function() {
            sendData = loginDI.getConnectedUsers();
            socket.emit('getUsers', sendData);
        });

        socket.on('disconnect', function() {
            console.log('socket Disconnected');
        });
    });
};