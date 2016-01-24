'use strict';

angular.module('pokerVirtualMoneyApp')
  .controller('MainController', function ($scope, $state, session, socket) {
        var user = session.getCurrentUser();
        if (user === undefined) {
            $state.go('login');
        } else {
            var promise = socket.emit({type:'lobbydetails', data:{name: session.user.name}});
            promise.then(function(obj) {
                if (obj) {
                    $scope.users = obj.users;
                } else {
                    // wrong password
                }
            },
            function() {
                console.log("socket communication failed");
            });
        }
  });
