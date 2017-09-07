import { TestBed, inject } from '@angular/core/testing';

import { GitApiService } from './git-api.service';

describe('GitApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitApiService]
    });
  });

  it('should be created', inject([GitApiService], (service: GitApiService) => {
    expect(service).toBeTruthy();
  }));
});
