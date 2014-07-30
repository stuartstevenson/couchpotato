'use strict';

describe('Service: TvConfig', function () {

  // load the service's module
  beforeEach(module('couchPotatoApp'));

  // instantiate service
  var TvConfig;
  beforeEach(inject(function (_TvConfig_) {
    TvConfig = _TvConfig_;
  }));

  it('should do something', function () {
    expect(!!TvConfig).toBe(true);
  });

});
