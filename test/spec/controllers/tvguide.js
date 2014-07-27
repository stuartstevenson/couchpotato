'use strict';

describe('Controller: TvGuideCtrl', function () {

  // load the controller's module
  beforeEach(module('couchPotatoApp'));

  var TvGuideCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TvGuideCtrl = $controller('TvGuideCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope).toBe(true);
  });
});
