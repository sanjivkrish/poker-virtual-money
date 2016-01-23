var loginFile = require('../data-interface/login.js');

exports.userLogin = function(data) {
    var userInfo = loginFile.getUser(data.name)
    if (userInfo !== null) {
        if (userInfo.password === data.password) {
            return {status:true, info:userInfo};
        } else {
            return {status:false, msg:'Password you have entered is invalid'};
        }
    } else {
        loginFile.setUser(data);
        return {status:true, info:data};
    }
};