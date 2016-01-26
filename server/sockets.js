/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');
var loginCore = require('./lib/core/login.js');
var arena = require('./lib/core/arena.js');
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
            sendData = arena.getArenaInfo();
            socket.emit('lobbydetails', sendData);
        });
        
        socket.on('getUsers', function() {
            sendData = arena.getArenaInfo();
            socket.emit('getUsers', sendData);
        });
        
        socket.on('getinitarena', function(data) {
            arena.getInitialInfo(io, data);
        });
        
        socket.on('broadcastarena', function() {
            sendData = arena.getArenaInfo();
            socket.emit('broadcastarena', sendData);
        });
        
        socket.on('setarena', function(data) {
            arena.setArenaInfo(io, data);
        });

        socket.on('disconnect', function() {
            console.log('socket Disconnected');
        });
    });
};