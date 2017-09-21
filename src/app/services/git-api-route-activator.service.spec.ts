import { TestBed, inject } from '@angular/core/testing';

import { GitApiRouteActivatorService } from './git-api-route-activator.service';

describe('GitApiRouteActivatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitApiRouteActivatorService]
    });
  });

  it('should be created', inject([GitApiRouteActivatorService], (service: GitApiRouteActivatorService) => {
    expect(service).toBeTruthy();
  }));
});
