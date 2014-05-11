'use strict';

describe('Service: SelectedIncidentService', function () {

  // load the service's module
  beforeEach(module('alistophApp'));

  // instantiate service
  var SelectedIncidentService;
  beforeEach(inject(function (_SelectedIncidentService_) {
    SelectedIncidentService = _SelectedIncidentService_;
  }));

  it('should do something', function () {
    expect(!!SelectedIncidentService).toBe(true);
  });

});
