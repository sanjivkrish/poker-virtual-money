var loginFile = require('../data-interface/login.js');
var arena = require('./arena.js');
var broadcast = require('../../utilities.js').broadcast;

exports.userLogin = function(data, io) {
    var userInfo = loginFile.getUser(data.name);
    if (userInfo !== null) {
        if (userInfo.password === data.password) {
            loginFile.setConnectedUser(userInfo.name);
            var lobbyInfo = arena.getArenaInfo();
            broadcast(io, 'updateusers', lobbyInfo);
            return {status:true, info:userInfo};
        } else {
            return {status:false, msg:'Password you have entered is invalid'};
        }
    } else {
        loginFile.setUser(data);
        loginFile.setConnectedUser(data.name);
        var lobbyInfo = arena.getArenaInfo();
        broadcast(io, 'updateusers',lobbyInfo);
        return {status:true, info:data};
    }
};