/*
    Hold API's related to lobby details
*/
var config = require('../config.json');
var loginInfo = require('../data-interface/login.js');

exports.getLobbyInfo = function() {
    config.users = loginInfo.getAllUsers();
    return config;
};