var loginFile = require('../data-interface/login.js');

exports.userLogin = function(data) {
    var userInfo = loginFile.getUser(data.name)
    if (userInfo !== null) {
        if (userInfo.password === data.password) {
            return userInfo;
        } else {
            return 'Password you have entered is invalid'
        }
    } else {
        console.log(data);
        loginFile.setUser(data);
        return 'User added';
    }
};