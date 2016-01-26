'use strict';

angular.module('pokerVirtualMoneyApp')
  .controller('LoginCtrl', function ($scope, $state, socket, session) {

    $scope.login = function() {
        //
        // User info
        //
        var data = {
            name: $scope.user.name,
            password: $scope.user.pwd
        };

        socket.sendRequest('login', data).then(function(obj) {
            if (obj.status) {
                session.setCurrentUser(obj.info)
                $state.go('home');
            } else {
                // wrong password
            }
        }, function(err) {
            console.log(err);
        });
    };

  });
