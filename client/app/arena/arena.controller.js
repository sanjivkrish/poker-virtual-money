'use strict';

angular.module('pokerVirtualMoneyApp')
  .controller('ArenaCtrl', function ($scope, socket, $rootScope) {
    socket.sendRequest('getUsers').then(function(obj) {
        $scope.players = obj;
    }, function(err) {
        console.log(err);
    });
    
    $rootScope.$on('updateusers', function(evt, obj) {
        $scope.players = obj;
        $scope.$digest();
    });
  });
