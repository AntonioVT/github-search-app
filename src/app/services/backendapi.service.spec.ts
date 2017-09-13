import { TestBed, inject } from '@angular/core/testing';

import { BackendapiService } from './backendapi.service';

describe('BackendapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendapiService]
    });
  });

  it('should be created', inject([BackendapiService], (service: BackendapiService) => {
    expect(service).toBeTruthy();
  }));
});
