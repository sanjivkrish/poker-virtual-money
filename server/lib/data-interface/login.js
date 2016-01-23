//
// List of all user
//
var users = [];

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
// Set user infromation
//
exports.setUser = function(obj) {
    if (returnUserPosition(obj.name) === -1) {
        users.push(obj);
    } else {
        return 'User already Exist';
    }
        
};

