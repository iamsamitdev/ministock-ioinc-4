import { TestBed } from '@angular/core/testing';

import { WebapiServiceService } from './webapi-service.service';

describe('WebapiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebapiServiceService = TestBed.get(WebapiServiceService);
    expect(service).toBeTruthy();
  });
});
