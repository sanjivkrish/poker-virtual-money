var loginFile = require('../data-interface/login.js');

//
// To broadcast message to all client
//
function broadcast (io, evt, data) {
    io.clients(function(err, clients) {
        for (var clientId in clients) {
            io.to(clients[clientId]).emit(evt, data);
        }
    });
}

exports.userLogin = function(data, io) {
    var userInfo = loginFile.getUser(data.name);
    if (userInfo !== null) {
        if (userInfo.password === data.password) {
            loginFile.setConnectedUser(userInfo.name);
            var connectedUser = loginFile.getConnectedUsers();
            broadcast(io, 'updateusers', connectedUser);
            return {status:true, info:userInfo};
        } else {
            return {status:false, msg:'Password you have entered is invalid'};
        }
    } else {
        loginFile.setUser(data);
        loginFile.setConnectedUser(data.name);
        var connectedUser = loginFile.getConnectedUsers();
        broadcast(io, 'updateusers', connectedUser);
        return {status:true, info:data};
    }
};