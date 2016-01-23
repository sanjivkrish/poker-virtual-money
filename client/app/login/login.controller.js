'use strict';

angular.module('pokerVirtualMoneyApp')
  .controller('LoginCtrl', function ($scope, socket) {

    $scope.login = function() {
        // your code goes here
         socket.emit({type:'login', data:{name: $scope.user.name, password: $scope.user.pwd}});
    };
  });
