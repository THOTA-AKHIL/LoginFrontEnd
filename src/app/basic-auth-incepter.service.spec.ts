import { TestBed } from '@angular/core/testing';

import { BasicAuthIncepterService } from './basic-auth-incepter.service';

describe('BasicAuthIncepterService', () => {
  let service: BasicAuthIncepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthIncepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
