/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');
var WebSocketServer  = require('websocket').server; 

module.exports = function(server) {
    var wsServer = new WebSocketServer({httpServer: server});

    wsServer.on('request', function(request) {

    var connection = request.accept();

    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            delegateMessage(JSON.parse(message.utf8Data), connection);
            // connection.sendUTF(message.utf8Data);
        } else if (message.type === 'binary') {
           // Not implemented
        } else {
           // Not implemented
        }
    });
    connection.on('close', function(reasonCode, description) {
        // Logic goes here
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});
    
};

//
// Redirects the message to the appropriate function
//
function delegateMessage (message, connection) {
    var sendData;

    switch (message.type) {
        case 'login':
            sendData = require('./lib/core/login.js').userLogin(message.data);
            break;
        case 'lobbydetails':
            sendData = require('./lib/core/lobbydetails.js').getLobbyInfo();
            break;
        default:
            sendData = 'Not defined';
    }
    if (sendData) {
        connection.sendUTF(JSON.stringify(sendData));
    }

}