'use strict';

angular.module('pokerVirtualMoneyApp')
  .controller('LoginCtrl', function ($scope, $state, socket) {

    $scope.login = function() {
        // your code goes here
        var promise = socket.emit({type:'login', data:{name: $scope.user.name, password: $scope.user.pwd}}, promise);
        promise.then(function(obj) {
            if (obj.status) {
                $state.go('home');
            } else {
                // wrong password
            }
        },
        function() {
            console.log("socket communication failed");
        });
    };
  });
