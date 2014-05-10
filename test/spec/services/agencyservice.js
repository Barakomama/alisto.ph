'use strict';

describe('Service: AgencyService', function () {

  // load the service's module
  beforeEach(module('alistophApp'));

  // instantiate service
  var AgencyService;
  beforeEach(inject(function (_AgencyService_) {
    AgencyService = _AgencyService_;
  }));

  it('should do something', function () {
    expect(!!AgencyService).toBe(true);
  });

});
