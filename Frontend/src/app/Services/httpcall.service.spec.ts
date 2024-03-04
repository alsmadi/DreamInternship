import { TestBed } from '@angular/core/testing';

import { HttpcallService } from './httpcall.service';

describe('HttpcallService', () => {
  let service: HttpcallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpcallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
