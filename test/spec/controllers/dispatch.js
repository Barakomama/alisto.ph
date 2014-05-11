'use strict';

describe('Controller: DispatchCtrl', function () {

  // load the controller's module
  beforeEach(module('alistophApp'));

  var DispatchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DispatchCtrl = $controller('DispatchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
