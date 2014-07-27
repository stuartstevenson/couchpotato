'use strict';

describe('Controller: AddedittvconfigCtrl', function () {

  // load the controller's module
  beforeEach(module('couchPotatoApp'));

  var AddedittvconfigCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddedittvconfigCtrl = $controller('AddedittvconfigCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
