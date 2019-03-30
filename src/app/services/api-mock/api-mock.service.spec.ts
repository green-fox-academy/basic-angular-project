import { TestBed } from '@angular/core/testing';

import { ApiMockService } from './api-mock.service';

describe('ApiMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiMockService = TestBed.get(ApiMockService);
    expect(service).toBeTruthy();
  });
});
