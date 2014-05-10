'use strict';

describe('Service: IncidentService', function () {

  // load the service's module
  beforeEach(module('alistophApp'));

  // instantiate service
  var IncidentService;
  beforeEach(inject(function (_IncidentService_) {
    IncidentService = _IncidentService_;
  }));

  it('should do something', function () {
    expect(!!IncidentService).toBe(true);
  });

});
