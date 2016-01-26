'use strict';

angular.module('pokerVirtualMoneyApp')
  .controller('MainController', function ($scope, $state, session) {
        $scope.user = session.getCurrentUser();

        if (Object.keys($scope.user).length === 0) {
            $state.go('login');
        } else {
            // Rediect to arena controller
        }
  });
