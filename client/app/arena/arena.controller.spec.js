'use strict';

describe('Controller: ArenaCtrl', function () {

  // load the controller's module
  beforeEach(module('pokerVirtualMoneyApp'));

  var ArenaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArenaCtrl = $controller('ArenaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
