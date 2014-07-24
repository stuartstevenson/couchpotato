'use strict';

describe('Service: LocalTvConfig', function () {

  // load the service's module
  beforeEach(module('couchpotatoApp'));

  // instantiate service
  var LocalTvConfig;
  beforeEach(inject(function (_LocalTvConfig_) {
	  LocalTvConfig = _LocalTvConfig_;
  }));

  it('should do something', function () {
    expect(!!LocalTvConfig).toBe(true);
  });

});
