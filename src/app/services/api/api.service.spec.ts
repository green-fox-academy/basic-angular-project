import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiService = TestBed.inject(ApiService);
    expect(service).toBeTruthy();
  });

  it('should return dummy content', (done: DoneFn) => {
    const service: ApiService = TestBed.inject(ApiService);
    service.getTitle().subscribe(value => {
      expect(value).toEqual({ title: '¡Hola Jorge!' });
      done();
    });
  });
});
