//
// List of all user
//
//var users = [{name:'Udaya', password:'1234'}];
var users = [];
var connectedUsers = [];

//
// Check if User exist
//
var returnUserPosition = function(name) {
    for (var i in users) {
        if (users[i].name === name) {
            return i;
        }
    }
    return -1;
};

//
// Return user information
//
exports.getUser = function(name){
    var index = returnUserPosition(name);
    if ( index !== -1) {
        return users[index];
    } else {
        return null;
    }
};

//
// Return All user information
//
exports.getAllUsers = function(name){
    var array = [];
    for (var user in users) {
        array.push(users[user].name);
    }
    return array;
};

//
// Set user infromation
//
exports.setUser = function(obj) {
    if (returnUserPosition(obj.name) === -1) {
        users.push(obj);
    } else {
        return 'User already Exist';
    }
};

exports.getConnectedUsers = function () {
    return connectedUsers;
};

exports.setConnectedUser = function (name) {
    if (connectedUsers.indexOf(name) === -1) {
        connectedUsers.push(name);
    }
};

exports.removeConnectedUser = function (name) {
    var index = connectedUsers.indexOf(name);

    if (index !== -1) {
        connectedUsers.splice(index, 1);
    }
};
